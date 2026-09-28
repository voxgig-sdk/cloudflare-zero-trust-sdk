

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareZeroTrustSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ZeroTrustGatewayGatewayAccountLoggingSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewayGatewayAccountLoggingSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_gateway_account_logging_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"redact_pii":{"a":true,"h":"Redact Pii","n":"redact_pii","r":false,"sh":"Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).","t":"`$BOOLEAN`","key$":"redact_pii","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":1},"settings_by_rule_type":{"a":true,"h":"Settings By Rule Type","n":"settings_by_rule_type","r":false,"sh":"Configure logging settings for each rule type.","t":"`$OBJECT`","key$":"settings_by_rule_type","index$":2}},"name":"zero_trust_gateway_gateway_account_logging_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/logging","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/logging","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"logging"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/logging","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/logging","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"logging"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_gateway_account_logging_setting","name__orig":"zero_trust_gateway_gateway_account_logging_setting","Name":"ZeroTrustGatewayGatewayAccountLoggingSetting","name_":"zero_trust_gateway_gateway_account_logging_setting","name-":"zero-trust-gateway-gateway-account-logging-setting","NAME":"ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING","index$":81}, {"active":true,"entity":"zero_trust_gateway_gateway_account_logging_setting","key$":"BasicZeroTrustGatewayGatewayAccountLoggingSettingFlow","kind":"basic","name":"BasicZeroTrustGatewayGatewayAccountLoggingSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_gateway_account_logging_setting_ref01","srcdatavar":"zero_trust_gateway_gateway_account_logging_setting_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_gateway_account_logging_setting_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_gateway_account_logging_setting_ref01","srcdatavar":"zero_trust_gateway_gateway_account_logging_setting_ref01_data","suffix":"_dt0"},"m":{"id":"zero_trust_gateway_gateway_account_logging_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_gateway_account_logging_setting_ref01"}}],"index$":1}]}, 'ZeroTrustGatewayGatewayAccountLoggingSetting', {"GET /accounts/{account_id}/gateway/logging":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/zero-trust-gateway_identifier"},"index$":0}]},"PUT /accounts/{account_id}/gateway/logging":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"redact_pii":{"default":false,"description":"Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).","example":true,"type":"boolean","x-auditable":true,"key$":"redact_pii"},"settings_by_rule_type":{"description":"Configure logging settings for each rule type.","properties":{"dns":{"allOf":[{}],"description":"Configure logging settings for DNS firewall."},"http":{"allOf":[{}],"description":"Configure logging settings for HTTP/HTTPS firewall."},"l4":{"allOf":[{}],"description":"Configure logging settings for Network firewall."}},"type":"object","key$":"settings_by_rule_type"}},"x-ref":"#/components/schemas/zero-trust-gateway_gateway-account-logging-settings","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/zero-trust-gateway_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zero_trust_gateway_gateway_account_logging_setting_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_gateway_account_logging_setting)[0] as any

    // UPDATE
    const zero_trust_gateway_gateway_account_logging_setting_ref01_ent = client.ZeroTrustGatewayGatewayAccountLoggingSetting()
    const zero_trust_gateway_gateway_account_logging_setting_ref01_data_up0: any = {}

    const zero_trust_gateway_gateway_account_logging_setting_ref01_resdata_up0 = (await zero_trust_gateway_gateway_account_logging_setting_ref01_ent.update(zero_trust_gateway_gateway_account_logging_setting_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_gateway_account_logging_setting_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_gateway_account_logging_setting/ZeroTrustGatewayGatewayAccountLoggingSettingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareZeroTrustSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['zero_trust_gateway_gateway_account_logging_setting01','zero_trust_gateway_gateway_account_logging_setting02','zero_trust_gateway_gateway_account_logging_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareZeroTrustSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_ZERO_TRUST_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
