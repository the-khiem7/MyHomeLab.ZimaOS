# SSH Access

This guide describes a two-profile SSH setup for accessing a ZimaOS server from
a workstation. Keep private-network and public-network access separate so local
administration does not depend on an external tunnel provider.

Environment-specific values belong in the ignored local companion file
`ssh-access.secret.md`. Do not place real usernames, addresses, hostnames,
fingerprints, credential paths, passwords, private keys, or tunnel tokens in
this public document.

## Connection model

| Profile | Use when | Destination | Transport |
| --- | --- | --- | --- |
| `zimaos` | Connected to the homelab LAN | `<private-ip>:22` | Direct SSH |
| `zimaos-public` | Outside the homelab LAN | `<public-hostname>` | SSH through Cloudflare Tunnel |

The public path carries SSH through Cloudflare Tunnel. It does not require TCP
port 22 to be opened on the router. The ZimaOS SSH server remains responsible
for SSH credential authentication.

## Prerequisites

- OpenSSH Client is installed on the workstation.
- `cloudflared` is installed on the workstation.
- A private key is available locally.
- The corresponding public key is installed for the SSH user on ZimaOS.
- A healthy Cloudflare Tunnel can reach the ZimaOS SSH service.

Never commit a private key, password, Cloudflare token, or other raw credential.

## Cloudflare Tunnel route

Create a published application route with a dedicated hostname:

```text
<public-hostname> -> ssh://<origin-host>:22
```

Use `localhost` as `<origin-host>` when `cloudflared` runs directly on the
ZimaOS server. Otherwise, use an address that the Tunnel connector can reach on
the private network.

If no Cloudflare Access application is configured, keep Access JWT validation
disabled on the published route. In that mode, the SSH server is the only
credential enforcement layer.

## Workstation SSH profiles

Store both profiles in the workstation OpenSSH configuration file. On Windows,
this is normally `%USERPROFILE%\.ssh\config`.

### Private network profile

```sshconfig
Host zimaos
    HostName <private-ip>
    User <ssh-user>
    Port 22
    ServerAliveInterval 30
    ServerAliveCountMax 3
```

Connect while on the homelab network:

```powershell
ssh zimaos
```

### Public network profile

```sshconfig
Host zimaos-public
    HostName <public-hostname>
    HostKeyAlias <trusted-private-host-identity>
    User <ssh-user>
    Port 22
    IdentityFile <identity-file>
    IdentitiesOnly yes
    ProxyCommand "<cloudflared-executable>" access ssh --hostname %h
    ServerAliveInterval 30
    ServerAliveCountMax 3
```

Connect from a network with Internet access:

```powershell
ssh zimaos-public
```

`HostKeyAlias` allows the public profile to verify the connection against the
same trusted ZimaOS host identity used by the private profile. Configure it only
after the private host key has been verified independently.

`IdentitiesOnly yes` restricts the public profile to the declared identity file.
It does not disable password authentication on either the client or server.

## Verification

Inspect the effective configuration without connecting:

```powershell
ssh -G zimaos
ssh -G zimaos-public
```

Confirm that public-key authentication succeeds without allowing a password
prompt:

```powershell
ssh -o BatchMode=yes zimaos-public exit
```

Expected result: exit status `0` with no output.

For detailed diagnostics:

```powershell
ssh -vvv zimaos-public
```

Verbose output can contain hostnames, usernames, network addresses, and key
fingerprints. Sanitize it before sharing or committing it.

## Troubleshooting

- `Permission denied`: the connection reached ZimaOS, but the SSH credential
  was rejected.
- Cloudflare proxy or WebSocket error: check DNS, Tunnel health, the published
  application route, and the local `cloudflared` executable.
- Host-key mismatch: stop and verify whether ZimaOS was reinstalled or its SSH
  host keys were intentionally regenerated.
- Direct profile timeout: confirm that the workstation is connected to the
  private network and can reach the SSH service.

## Security decisions

Decide separately whether to enable Cloudflare Access and whether to disable SSH
password authentication. Record the current environment-specific decisions in
`ssh-access.secret.md`, not in this public guide.
