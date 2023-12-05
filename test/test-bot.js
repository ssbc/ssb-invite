const ssbKeys = require('ssb-keys')
const crypto = require('crypto')

const caps = {
  shs: crypto.randomBytes(32).toString('base64')
}

module.exports = function (opts = {}) {
  if (!opts.caps) opts.caps = caps
  if (!opts.keys) opts.keys = ssbKeys.generate()
  if (!opts.timeout) opts.timeout = 100

  const stack = require('scuttle-testbot')
    .use(require('..'))
    .use(require('ssb-friends'))
    .use(require('ssb-ebt'))
    .use(require('ssb-replication-scheduler'))
    .use(require('ssb-ws'))

  return stack({
    db1: true,
    ...opts
  })
}
