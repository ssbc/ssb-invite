#! /usr/bin/env node
var minimist     = require('minimist')
var argv = process.argv.slice(2)
var i = argv.indexOf('--')
var conf = argv.slice(i+1)
argv = ~i ? argv.slice(0, i) : argv

var config = require('ssb-config/inject')(process.env.ssb_appname, minimist(conf))
var opts = minimist(argv)

if(!config.remotePub) {
  console.error('please set "pub" to a multiserver address in your config')
  process.exit(1)
}

require('ssb-client')({
  remote: config.remotePub
}, function (err, sbot) {
  if(err) throw err
  sbot.invite.create(opts._[0] || opts, function (err, invite) {
    if(err) throw err
    console.log(invite)
    sbot.close()
  })
})

