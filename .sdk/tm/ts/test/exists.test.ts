
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareZeroTrustSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    equal(testsdk instanceof CloudflareZeroTrustSDK, true,
      'CloudflareZeroTrustSDK.test() must return a client synchronously')
  })

})
