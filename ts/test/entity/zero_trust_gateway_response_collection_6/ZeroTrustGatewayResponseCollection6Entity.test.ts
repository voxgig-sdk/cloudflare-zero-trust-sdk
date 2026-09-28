

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


describe('ZeroTrustGatewayResponseCollection6Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewayResponseCollection6()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_response_collection_6.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"zero_trust_gateway_response_collection_6","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/rules","q":{"exist":["account_id","direction","filter","order_by","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"rules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/rules/tenant","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/rules/tenant","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"rules"},{"lit":"tenant"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/gateway/rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/gateway/rules","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"rules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_response_collection_6","name__orig":"zero_trust_gateway_response_collection_6","Name":"ZeroTrustGatewayResponseCollection6","name_":"zero_trust_gateway_response_collection_6","name-":"zero-trust-gateway-response-collection-6","NAME":"ZERO_TRUST_GATEWAY_RESPONSE_COLLECTION_6","index$":90}, {"active":true,"entity":"zero_trust_gateway_response_collection_6","key$":"BasicZeroTrustGatewayResponseCollection6Flow","kind":"basic","name":"BasicZeroTrustGatewayResponseCollection6Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zero_trust_gateway_response_collection_6_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_response_collection_6_ref01","srcdatavar":"zero_trust_gateway_response_collection_6_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_response_collection_6_ref01"}}],"v":[],"index$":1}]}, 'ZeroTrustGatewayResponseCollection6', {"GET /accounts/{account_id}/gateway/rules":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0},{"name":"filter","in":"query","description":"Filter the returned rules by one or more `field:value` pairs. Repeat the\nparameter to combine filters with logical AND.\n\nSupported fields are `name`, `id`, `action`, `enabled`, `source_account`,\n`is_shared`, `filters`, and `expression` (max 1024 bytes). The `source_account`\nvalue is matched as a normalized UUID substring. The `filters` value must\nbe one of the rule filter names and matches a member of the rule's `filters`\narray. The `expression` filter performs a case-insensitive literal\nsubstring match across traffic, identity, and device posture expressions.","schema":{"type":"array","items":{"anyOf":[{"pattern":"^name:.*$","type":"string"},{"pattern":"^id:.*$","type":"string"},{"pattern":"^action:(on|off|allow|block|scan|noscan|safesearch|ytrestricted|isolate|noisolate|override|l4_override|audit_ssh|egress|resolve|quarantine|redirect|custom)$","type":"string"},{"pattern":"^enabled:(true|false)$","type":"string"},{"pattern":"^source_account:.*$","type":"string"},{"pattern":"^is_shared:(true|false)$","type":"string"},{"pattern":"^filters:(http|dns|dns_resolver|l4|egress)$","type":"string"},{"pattern":"^expression:.*$","type":"string"}],"type":"string"}},"explode":true,"style":"form","index$":1},{"name":"search","in":"query","description":"Case-insensitive substring search across rule name and description.","schema":{"type":"string"},"index$":2},{"name":"order_by","in":"query","description":"Field to sort the returned rules by. Supported values are `name`,\n`created_at`, `updated_at`, and `precedence`.","schema":{"type":"string","enum":["name","created_at","updated_at","precedence"]},"index$":3},{"name":"direction","in":"query","description":"Sort direction. When `order_by` is omitted, this controls the direction\nof the existing precedence ordering. Shared rules remain first in either\ndirection. Accepted values are `asc` and `desc`.","schema":{"type":"string","enum":["asc","desc"]},"index$":4}]},"GET /accounts/{account_id}/gateway/rules/tenant":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]},"PATCH /accounts/{account_id}/gateway/rules":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","items":{"properties":{"description":{"description":"Specify the rule description.","type":"string","example":"Block bad websites based on their host name.","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_description-2"},"enabled":{"description":"Specify whether the rule is enabled.","type":"boolean","example":true,"default":false,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_enabled"},"id":{"description":"Identify the API resource with a UUID.","type":"string","format":"uuid","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-4"},"name":{"description":"Specify the rule name.","type":"string","example":"block bad websites","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name-3"},"precedence":{"description":"Set the order of your rules. Lower values indicate higher precedence. At each processing phase, evaluate applicable rules in ascending order of this value. Refer to [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform) to manage precedence via Terraform.","type":"integer","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/zero-trust-gateway_precedence"}},"required":["id"],"type":"object"},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zero_trust_gateway_response_collection_6_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_response_collection_6)[0] as any

    // LIST
    const zero_trust_gateway_response_collection_6_ref01_ent = client.ZeroTrustGatewayResponseCollection6()
    const zero_trust_gateway_response_collection_6_ref01_match: any = {}
    zero_trust_gateway_response_collection_6_ref01_match['account_id'] = setup.idmap['account01']

    const zero_trust_gateway_response_collection_6_ref01_list = (await zero_trust_gateway_response_collection_6_ref01_ent.list(zero_trust_gateway_response_collection_6_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const zero_trust_gateway_response_collection_6_ref01_data_up0: any = {}

    const zero_trust_gateway_response_collection_6_ref01_resdata_up0 = (await zero_trust_gateway_response_collection_6_ref01_ent.update(zero_trust_gateway_response_collection_6_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_response_collection_6_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_response_collection_6/ZeroTrustGatewayResponseCollection6TestData.json')

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
    ['zero_trust_gateway_response_collection_601','zero_trust_gateway_response_collection_602','zero_trust_gateway_response_collection_603','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_RESPONSE_COLLECTION_6_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_RESPONSE_COLLECTION_6_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_RESPONSE_COLLECTION_6_ENTID']
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
  
