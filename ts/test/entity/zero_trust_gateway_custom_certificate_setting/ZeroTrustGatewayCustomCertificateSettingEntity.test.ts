

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


describe('ZeroTrustGatewayCustomCertificateSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewayCustomCertificateSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_custom_certificate_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"binding_status":{"a":true,"h":"Binding Status","n":"binding_status","r":false,"ro":true,"sh":"Indicate the internal certificate status.","t":"`$STRING`","key$":"binding_status","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Specify whether to enable a custom certificate authority for signing Gateway traffic.","t":"`$BOOLEAN`","key$":"enabled","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Specify the UUID of the certificate (ID from MTLS certificate store).","t":"`$STRING`","key$":"id","index$":2},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"ro":true,"t":"`$STRING`","key$":"updated_at","index$":3}},"id":{"field":"id","name":"id"},"name":"zero_trust_gateway_custom_certificate_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/configuration/custom_certificate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/configuration/custom_certificate","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"configuration"},{"lit":"custom_certificate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_custom_certificate_setting","name__orig":"zero_trust_gateway_custom_certificate_setting","Name":"ZeroTrustGatewayCustomCertificateSetting","name_":"zero_trust_gateway_custom_certificate_setting","name-":"zero-trust-gateway-custom-certificate-setting","NAME":"ZERO_TRUST_GATEWAY_CUSTOM_CERTIFICATE_SETTING","index$":92}, {"active":true,"entity":"zero_trust_gateway_custom_certificate_setting","key$":"BasicZeroTrustGatewayCustomCertificateSettingFlow","kind":"basic","name":"BasicZeroTrustGatewayCustomCertificateSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_custom_certificate_setting_ref01","srcdatavar":"zero_trust_gateway_custom_certificate_setting_ref01_data","suffix":"_dt0"},"m":{"id":"zero_trust_gateway_custom_certificate_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_custom_certificate_setting_ref01"}}],"index$":0}]}, 'ZeroTrustGatewayCustomCertificateSetting', {"GET /accounts/{account_id}/gateway/configuration/custom_certificate":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/zero-trust-gateway_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zero_trust_gateway_custom_certificate_setting_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_custom_certificate_setting)[0] as any

    // LOAD
    const zero_trust_gateway_custom_certificate_setting_ref01_ent = client.ZeroTrustGatewayCustomCertificateSetting()
    const zero_trust_gateway_custom_certificate_setting_ref01_match_dt0: any = {}
    zero_trust_gateway_custom_certificate_setting_ref01_match_dt0.id = zero_trust_gateway_custom_certificate_setting_ref01_data.id
    const zero_trust_gateway_custom_certificate_setting_ref01_data_dt0 = (await zero_trust_gateway_custom_certificate_setting_ref01_ent.load(zero_trust_gateway_custom_certificate_setting_ref01_match_dt0)).data()
    assert(zero_trust_gateway_custom_certificate_setting_ref01_data_dt0.id === zero_trust_gateway_custom_certificate_setting_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_custom_certificate_setting/ZeroTrustGatewayCustomCertificateSettingTestData.json')

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
    ['zero_trust_gateway_custom_certificate_setting01','zero_trust_gateway_custom_certificate_setting02','zero_trust_gateway_custom_certificate_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_CUSTOM_CERTIFICATE_SETTING_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_CUSTOM_CERTIFICATE_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_CUSTOM_CERTIFICATE_SETTING_ENTID']
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
  
