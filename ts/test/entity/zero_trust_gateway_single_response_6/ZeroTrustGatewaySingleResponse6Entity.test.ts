

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


describe('ZeroTrustGatewaySingleResponse6Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewaySingleResponse6()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_single_response_6.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"public_key":{"a":true,"h":"Public Key","n":"public_key","r":true,"sh":"Provide the Base64-encoded HPKE public key that encrypts SSH session logs.","t":"`$STRING`","key$":"public_key","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":1}},"name":"zero_trust_gateway_single_response_6","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"audit_ssh_settings"},{"lit":"rotate_seed"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/audit_ssh_settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/audit_ssh_settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"audit_ssh_settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/audit_ssh_settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/audit_ssh_settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"audit_ssh_settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_single_response_6","name__orig":"zero_trust_gateway_single_response_6","Name":"ZeroTrustGatewaySingleResponse6","name_":"zero_trust_gateway_single_response_6","name-":"zero-trust-gateway-single-response-6","NAME":"ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6","index$":114}, {"active":true,"entity":"zero_trust_gateway_single_response_6","key$":"BasicZeroTrustGatewaySingleResponse6Flow","kind":"basic","name":"BasicZeroTrustGatewaySingleResponse6Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_6_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_6_ref01","srcdatavar":"zero_trust_gateway_single_response_6_ref01_data","suffix":"_up0","textfield":"public_key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_6_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_6_ref01","srcdatavar":"zero_trust_gateway_single_response_6_ref01_data","suffix":"_dt0"},"m":{"id":"zero_trust_gateway_single_response_601"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_6_ref01"}}],"index$":2}]}, 'ZeroTrustGatewaySingleResponse6', {"POST /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]},"GET /accounts/{account_id}/gateway/audit_ssh_settings":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]},"PUT /accounts/{account_id}/gateway/audit_ssh_settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"public_key":{"description":"Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/ssh-infrastructure-access/#enable-ssh-command-logging.","type":"string","example":"1pyl6I1tL7xfJuFYVzXlUW8uXXlpxegHXBzGCBKaSFA=","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_public_key","key$":"public_key"}},"required":["public_key"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zero_trust_gateway_single_response_6_ref01_ent = client.ZeroTrustGatewaySingleResponse6()
    let zero_trust_gateway_single_response_6_ref01_data = setup.data.new.zero_trust_gateway_single_response_6['zero_trust_gateway_single_response_6_ref01']
    zero_trust_gateway_single_response_6_ref01_data['account_id'] = setup.idmap['account01']

    zero_trust_gateway_single_response_6_ref01_data = (await zero_trust_gateway_single_response_6_ref01_ent.create(zero_trust_gateway_single_response_6_ref01_data)).data()
    assert(null != zero_trust_gateway_single_response_6_ref01_data)


    // UPDATE
    const zero_trust_gateway_single_response_6_ref01_data_up0: any = {}

    const zero_trust_gateway_single_response_6_ref01_markdef_up0 = { name: 'public_key', value: 'Mark01-zero_trust_gateway_single_response_6_ref01_' + setup.now }
    ;(zero_trust_gateway_single_response_6_ref01_data_up0 as any)[zero_trust_gateway_single_response_6_ref01_markdef_up0.name] = zero_trust_gateway_single_response_6_ref01_markdef_up0.value

    const zero_trust_gateway_single_response_6_ref01_resdata_up0 = (await zero_trust_gateway_single_response_6_ref01_ent.update(zero_trust_gateway_single_response_6_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_single_response_6_ref01_resdata_up0)

    assert((zero_trust_gateway_single_response_6_ref01_resdata_up0 as any)[zero_trust_gateway_single_response_6_ref01_markdef_up0.name] === zero_trust_gateway_single_response_6_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_single_response_6/ZeroTrustGatewaySingleResponse6TestData.json')

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
    ['zero_trust_gateway_single_response_601','zero_trust_gateway_single_response_602','zero_trust_gateway_single_response_603','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID']
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
  
