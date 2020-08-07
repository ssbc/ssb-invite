var ssbKeys = require('ssb-keys')
var crypto = require('crypto')

var caps = { shs: crypto.randomBytes(32).toString('base64') }

module.exports = function (opts = {}) {
  if (!opts.caps) opts.caps = caps
  if (!opts.keys) opts.keys = ssbKeys.generate()
  if (!opts.timeout) opts.timeout = 100

  const stack = require('scuttle-testbot')
    .use(require('..'))
    .use(require('ssb-replicate'))
    .use(require('ssb-friends'))
    .use(require('ssb-ws'))

  return stack(opts)
}
