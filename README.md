# Unofficial Aliyun AMQP User Utils in NodeJS

[![CircleCI](https://circleci.com/gh/emj365/aliyun-amqp-user-utils-node/tree/master.svg?style=svg)](https://circleci.com/gh/emj365/aliyun-amqp-user-utils-node/tree/master)

## Summary

### The official Java SDK Doc

https://help.aliyun.com/document_detail/106230.html

### This project target to re-implement Java codes

https://onlinegdb.com/BkJVGFjd4

## Usage

```javascript
const amqplib = require('amqplib')
const userUtils = require('aliyun-amqp-user-utils-node')

const config = require('./config')

const getURL = () => {
  const userName = userUtils.getUserName(
    config.ALIYUN_AMQP_ACCESS_KEY_ID,
    config.ALIYUN_AMQP_RESOURCE_OWNER_ID
  )
  const password = userUtils.getPassword(config.ALIYUN_AMQP_ACCESS_KEY_SECRET)

  return {
    protocol: 'amqp',
    hostname: config.ALIYUN_AMQP_ADDRESS,
    port: 5672,
    username: userName,
    password: password,
    locale: 'en_US',
    frameMax: 0,
    heartbeat: 0,
    vhost: config.ALIYUN_AMQP_VHOST
  }
}

const open = amqplib.connect(getURL())
open.then(conn => {
  // ...
})
```
