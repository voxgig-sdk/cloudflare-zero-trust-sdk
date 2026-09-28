

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


describe('ZeroTrustGatewaySingleResponseWithListItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewaySingleResponseWithListItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_single_response_with_list_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Provide the list description.","t":"`$STRING`","key$":"description","index$":0},"items":{"a":true,"h":"Items","n":"items","r":false,"sh":"Add items to the list.","t":"`$ARRAY`","key$":"items","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Specify the list name.","t":"`$STRING`","key$":"name","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Specify the list type.","t":"`$STRING`","key$":"type","index$":3}},"name":"zero_trust_gateway_single_response_with_list_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/gateway/lists","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/gateway/lists","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"lists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_single_response_with_list_item","name__orig":"zero_trust_gateway_single_response_with_list_item","Name":"ZeroTrustGatewaySingleResponseWithListItem","name_":"zero_trust_gateway_single_response_with_list_item","name-":"zero-trust-gateway-single-response-with-list-item","NAME":"ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM","index$":101}, {"active":true,"entity":"zero_trust_gateway_single_response_with_list_item","key$":"BasicZeroTrustGatewaySingleResponseWithListItemFlow","kind":"basic","name":"BasicZeroTrustGatewaySingleResponseWithListItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_with_list_item_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ZeroTrustGatewaySingleResponseWithListItem', {"POST /accounts/{account_id}/gateway/lists":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"Provide the list description.","type":"string","example":"The serial numbers for administrators","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/zero-trust-gateway_description","key$":"description"},"items":{"description":"Add items to the list.","type":"array","items":{"properties":{"description":{"description":"Provide the list item description (optional).","type":"string","example":"Austin office IP","minimum":0,"x-ref":"#/components/schemas/zero-trust-gateway_description_item"},"value":{"description":"Specify the item value.","type":"string","example":"8GE8721REF","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_value"}},"type":"object"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_items-input","key$":"items"},"name":{"description":"Specify the list name.","type":"string","example":"Admin Serial Numbers","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name","key$":"name"},"type":{"description":"Specify the list type.","type":"string","example":"SERIAL","enum":["SERIAL","URL","DOMAIN","EMAIL","IP","CATEGORY","LOCATION","DEVICE","AAGUID"],"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_type-2","key$":"type"}},"required":["name","type"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zero_trust_gateway_single_response_with_list_item_ref01_ent = client.ZeroTrustGatewaySingleResponseWithListItem()
    let zero_trust_gateway_single_response_with_list_item_ref01_data = setup.data.new.zero_trust_gateway_single_response_with_list_item['zero_trust_gateway_single_response_with_list_item_ref01']
    zero_trust_gateway_single_response_with_list_item_ref01_data['account_id'] = setup.idmap['account01']

    zero_trust_gateway_single_response_with_list_item_ref01_data = (await zero_trust_gateway_single_response_with_list_item_ref01_ent.create(zero_trust_gateway_single_response_with_list_item_ref01_data)).data()
    assert(null != zero_trust_gateway_single_response_with_list_item_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_single_response_with_list_item/ZeroTrustGatewaySingleResponseWithListItemTestData.json')

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
    ['zero_trust_gateway_single_response_with_list_item01','zero_trust_gateway_single_response_with_list_item02','zero_trust_gateway_single_response_with_list_item03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID']
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
  
