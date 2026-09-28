

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


describe('ZeroTrustGatewaySingleResponse7Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewaySingleResponse7()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_single_response_7.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"contents":{"a":true,"h":"Contents","n":"contents","r":true,"sh":"Actual contents of the PAC file","t":"`$STRING`","key$":"contents","index$":0},"description":{"a":true,"h":"Description","n":"description","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Detailed description of the PAC file.","t":"`$STRING`","key$":"description","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the PAC file.","t":"`$STRING`","key$":"name","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":3},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"sh":"URL-friendly version of the PAC file name.","t":"`$STRING`","key$":"slug","index$":4}},"name":"zero_trust_gateway_single_response_7","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/gateway/pacfiles","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/gateway/pacfiles","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"pacfiles"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/pacfiles/{pacfile_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed35569b41ce4d1facfe683550f54086","k":"param","n":"pacfile_id","or":"pacfile_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/pacfiles/{pacfile_id}","q":{"exist":["account_id","pacfile_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"pacfiles"},{"var":"pacfile_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/pacfiles/{pacfile_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed35569b41ce4d1facfe683550f54086","k":"param","n":"pacfile_id","or":"pacfile_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/pacfiles/{pacfile_id}","q":{"exist":["account_id","pacfile_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"pacfiles"},{"var":"pacfile_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.pacfile"]]},"key$":"zero_trust_gateway_single_response_7","name__orig":"zero_trust_gateway_single_response_7","Name":"ZeroTrustGatewaySingleResponse7","name_":"zero_trust_gateway_single_response_7","name-":"zero-trust-gateway-single-response-7","NAME":"ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_7","index$":100}, {"active":true,"entity":"zero_trust_gateway_single_response_7","key$":"BasicZeroTrustGatewaySingleResponse7Flow","kind":"basic","name":"BasicZeroTrustGatewaySingleResponse7Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_7_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"zero_trust_gateway_single_response_7_ref01","srcdatavar":"zero_trust_gateway_single_response_7_ref01_data","suffix":"_up0","textfield":"contents"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_7_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_7_ref01","srcdatavar":"zero_trust_gateway_single_response_7_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"zero_trust_gateway_single_response_701"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_7_ref01"}}],"index$":2}]}, 'ZeroTrustGatewaySingleResponse7', {"POST /accounts/{account_id}/gateway/pacfiles":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"contents":{"description":"Actual contents of the PAC file","type":"string","example":"function FindProxyForURL(url, host) { return \"DIRECT\"; }","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_contents","key$":"contents"},"description":{"description":"Detailed description of the PAC file.","type":"string","example":"PAC file for Devops team","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_description-4","key$":"description"},"name":{"description":"Name of the PAC file.","type":"string","example":"Devops team","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name-7","key$":"name"},"slug":{"description":"URL-friendly version of the PAC file name. If not provided, it will be auto-generated","type":"string","example":"pac_devops","x-auditable":true,"key$":"slug"}},"required":["name","contents"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]},"GET /accounts/{account_id}/gateway/pacfiles/{pacfile_id}":{"protocol":"http","parameters":[{"name":"pacfile_id","in":"path","required":true,"schema":{"type":"string","example":"ed35569b41ce4d1facfe683550f54086","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-3"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]},"PUT /accounts/{account_id}/gateway/pacfiles/{pacfile_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"contents":{"description":"Actual contents of the PAC file","type":"string","example":"function FindProxyForURL(url, host) { return \"DIRECT\"; }","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_contents","key$":"contents"},"description":{"description":"Detailed description of the PAC file.","type":"string","example":"PAC file for Devops team","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_description-4","key$":"description"},"name":{"description":"Name of the PAC file.","type":"string","example":"Devops team","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name-7","key$":"name"}},"required":["name","description","contents"],"index$":1}}}},"parameters":[{"name":"pacfile_id","in":"path","required":true,"schema":{"type":"string","example":"ed35569b41ce4d1facfe683550f54086","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-3"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zero_trust_gateway_single_response_7_ref01_ent = client.ZeroTrustGatewaySingleResponse7()
    let zero_trust_gateway_single_response_7_ref01_data = setup.data.new.zero_trust_gateway_single_response_7['zero_trust_gateway_single_response_7_ref01']
    zero_trust_gateway_single_response_7_ref01_data['account_id'] = setup.idmap['account01']

    zero_trust_gateway_single_response_7_ref01_data = (await zero_trust_gateway_single_response_7_ref01_ent.create(zero_trust_gateway_single_response_7_ref01_data)).data()
    assert(null != zero_trust_gateway_single_response_7_ref01_data)


    // UPDATE
    const zero_trust_gateway_single_response_7_ref01_data_up0: any = {}
    zero_trust_gateway_single_response_7_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const zero_trust_gateway_single_response_7_ref01_markdef_up0 = { name: 'contents', value: 'Mark01-zero_trust_gateway_single_response_7_ref01_' + setup.now }
    ;(zero_trust_gateway_single_response_7_ref01_data_up0 as any)[zero_trust_gateway_single_response_7_ref01_markdef_up0.name] = zero_trust_gateway_single_response_7_ref01_markdef_up0.value

    const zero_trust_gateway_single_response_7_ref01_resdata_up0 = (await zero_trust_gateway_single_response_7_ref01_ent.update(zero_trust_gateway_single_response_7_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_single_response_7_ref01_resdata_up0)

    assert((zero_trust_gateway_single_response_7_ref01_resdata_up0 as any)[zero_trust_gateway_single_response_7_ref01_markdef_up0.name] === zero_trust_gateway_single_response_7_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_single_response_7/ZeroTrustGatewaySingleResponse7TestData.json')

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
    ['zero_trust_gateway_single_response_701','zero_trust_gateway_single_response_702','zero_trust_gateway_single_response_703','pacfile01','pacfile02','pacfile03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_7_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_7_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_7_ENTID']
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
  
