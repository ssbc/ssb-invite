# ssb-invite

Invite-token system, mainly used for pubs. Creates invite codes as one of ways of onboarding.

Generally this ends being used for pubs:

- Users choose a pub from a [list of pubs](https://github.com/ssbc/ssb-server/wiki/Pub-Servers).
- The chosen pub gives out an invite code to the user via the pub's website.
- The user installs a Scuttlebutt client and copy and paste the invite code into the client's "accept invite" prompt.
- The pub validates the invite code and follows back the new user, making them visible to other Scuttlebutt users.

Soon, hopefully supercededed by [ssb-peer-invites](https://github.com/ssbc/ssb-peer-invites) but supported for backwards compatibity.

## api

### create: async

Create a new invite code.

```shell
create {n} [{note}, {external}]
```

```javascript
create(n[, note, external], cb)
```

This produces an invite-code which encodes the ssb-server instance's public address, and a keypair seed.
The keypair seed is used to generate a keypair, which is then used to authenticate a connection with the ssb-server instance.
The ssb-server instance will then grant access to the `use` call.

- `n` (number): How many times the invite can be used before it expires.
- `note` (string): A note to associate with the invite code. The ssb-server instance will
    include this note in the follow message that it creates when `use` is
    called.
- `external` (string): An external hostname to use


### accept: async

Use an invite code.

 - invitecode (string)

```bash
accept {invitecode}
```

```js
accept(invitecode, cb)
```

This connects to the server address encoded in the invite-code, then calls `use()` on the server.
It will cause the server to follow the local user.


### use: async

Use an invite code created by this ssb-server instance (advanced function).

```bash
use --feed {feedid}
```

```javascript
use({ feed: }, cb)
```

This commands the receiving server to follow the given feed.

An invite-code encodes the ssb-server instance's address, and a keypair seed.
The keypair seed must be used to generate a keypair, then authenticate a connection with the ssb-server instance, in order to use this function.

 - `feed` (feedid): The feed the server should follow.

## License

MIT
