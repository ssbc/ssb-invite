# ssb-invite

a simple command to create invites without sshing into a pub.

first, ssh into your pub, and set your self as the pub's `master`.
(this is like the ssb version adding your pubkey to `.ssh/authorized_hosts`)

```
# copy your local pubkey.

sbot whoami

# ssh into your pub...

ssh yourpub.com

# edit config

nano ~/.ssb/config

# add the pub key from your local machine.

  "master": "{your pubkey}"

# restart your pub (however you do it...)
```

now, you can use ssb-invite locally.

It's easiest to set your pub in your local config.

```
# note, you can also use the start of a `--modern` type invite.

"remotePub": "net:{yourpub.com}:8008~shs:{your_pub's_pubkey}"

npm install -g ssb-invite

# new style
ssb-invite --modern
<newstyle invite code>

# old style
ssb-invite 1
<oldstyle invite code>
```

## room for improvement

if we fixed these things, we could have a pub interface in patchbay.

1. no standard way to run pub
2. must restart pub after updating config (see 1)
3. not evident who owns which pub. setting master should be start of standard pub startup method.
4. shouldn't have to manually create multiserver addresses, either

## License

MIT

