

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


describe('ZeroTrustGatewayListSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewayListSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_list_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"append":{"a":true,"h":"Append","n":"append","r":false,"sh":"Add items to the list.","t":"`$ARRAY`","key$":"append","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Provide the list description.","t":"`$STRING`","key$":"description","index$":1},"items":{"a":true,"h":"Items","n":"items","r":false,"sh":"Add items to the list.","t":"`$ARRAY`","key$":"items","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Specify the list name.","t":"`$STRING`","key$":"name","index$":3},"remove":{"a":true,"h":"Remove","n":"remove","r":false,"sh":"Lists of item values you want to remove.","t":"`$ARRAY`","key$":"remove","index$":4},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":5}},"name":"zero_trust_gateway_list_single","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/lists/{list_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"list_id","or":"list_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/lists/{list_id}","q":{"exist":["account_id","list_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"lists"},{"var":"list_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/gateway/lists/{list_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"list_id","or":"list_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/gateway/lists/{list_id}","q":{"exist":["account_id","list_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"lists"},{"var":"list_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/lists/{list_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"list_id","or":"list_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/lists/{list_id}","q":{"exist":["account_id","list_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"lists"},{"var":"list_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.list"]]},"key$":"zero_trust_gateway_list_single","name__orig":"zero_trust_gateway_list_single","Name":"ZeroTrustGatewayListSingle","name_":"zero_trust_gateway_list_single","name-":"zero-trust-gateway-list-single","NAME":"ZERO_TRUST_GATEWAY_LIST_SINGLE","index$":98}, {"active":true,"entity":"zero_trust_gateway_list_single","key$":"BasicZeroTrustGatewayListSingleFlow","kind":"basic","name":"BasicZeroTrustGatewayListSingleFlow","param":{},"step":[{"a":true,"d":{"account_id":"account01"},"i":{"ref":"zero_trust_gateway_list_single_ref01","srcdatavar":"zero_trust_gateway_list_single_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_list_single_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_list_single_ref01","srcdatavar":"zero_trust_gateway_list_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"zero_trust_gateway_list_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_list_single_ref01"}}],"index$":1}]}, 'ZeroTrustGatewayListSingle', {"GET /accounts/{account_id}/gateway/lists/{list_id}":{"protocol":"http","parameters":[{"name":"list_id","in":"path","required":true,"schema":{"description":"Identify the API resource with a UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-2"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]},"PATCH /accounts/{account_id}/gateway/lists/{list_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"append":{"description":"Add items to the list.","type":"array","items":{"properties":{"description":{"description":"Provide the list item description (optional).","type":"string","example":"Austin office IP","minimum":0,"x-ref":"#/components/schemas/zero-trust-gateway_description_item"},"value":{"description":"Specify the item value.","type":"string","example":"8GE8721REF","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_value"}},"type":"object"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_items-input","key$":"append"},"remove":{"description":"Lists of item values you want to remove.","type":"array","items":{"description":"Specify the item value.","type":"string","example":"8GE8721REF","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_value"},"key$":"remove"}},"index$":1}}}},"parameters":[{"name":"list_id","in":"path","required":true,"schema":{"description":"Identify the API resource with a UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-2"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]},"PUT /accounts/{account_id}/gateway/lists/{list_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"Provide the list description.","type":"string","example":"The serial numbers for administrators","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/zero-trust-gateway_description","key$":"description"},"items":{"description":"Add items to the list.","type":"array","items":{"properties":{"description":{"description":"Provide the list item description (optional).","type":"string","example":"Austin office IP","minimum":0,"x-ref":"#/components/schemas/zero-trust-gateway_description_item"},"value":{"description":"Specify the item value.","type":"string","example":"8GE8721REF","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_value"}},"type":"object"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_items-input","key$":"items"},"name":{"description":"Specify the list name.","type":"string","example":"Admin Serial Numbers","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name","key$":"name"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"list_id","in":"path","required":true,"schema":{"description":"Identify the API resource with a UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-2"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zero_trust_gateway_list_single_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_list_single)[0] as any

    // UPDATE
    const zero_trust_gateway_list_single_ref01_ent = client.ZeroTrustGatewayListSingle()
    const zero_trust_gateway_list_single_ref01_data_up0: any = {}
    zero_trust_gateway_list_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const zero_trust_gateway_list_single_ref01_markdef_up0 = { name: 'description', value: 'Mark01-zero_trust_gateway_list_single_ref01_' + setup.now }
    ;(zero_trust_gateway_list_single_ref01_data_up0 as any)[zero_trust_gateway_list_single_ref01_markdef_up0.name] = zero_trust_gateway_list_single_ref01_markdef_up0.value

    const zero_trust_gateway_list_single_ref01_resdata_up0 = (await zero_trust_gateway_list_single_ref01_ent.update(zero_trust_gateway_list_single_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_list_single_ref01_resdata_up0)

    assert((zero_trust_gateway_list_single_ref01_resdata_up0 as any)[zero_trust_gateway_list_single_ref01_markdef_up0.name] === zero_trust_gateway_list_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_list_single/ZeroTrustGatewayListSingleTestData.json')

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
    ['zero_trust_gateway_list_single01','zero_trust_gateway_list_single02','zero_trust_gateway_list_single03','list01','list02','list03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_LIST_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_LIST_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_LIST_SINGLE_ENTID']
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
  
