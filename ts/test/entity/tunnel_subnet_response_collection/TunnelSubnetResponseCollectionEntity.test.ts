

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


describe('TunnelSubnetResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelSubnetResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_subnet_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"tunnel_subnet_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/zerotrust/subnets","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"v4","k":"query","n":"address_family","or":"address_family","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"example%20comment","k":"query","n":"comment","or":"comment","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2019-10-12T07%3A20%3A50.52Z","k":"query","n":"existed_at","or":"existed_at","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"is_default_network","or":"is_default_network","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"is_deleted","or":"is_deleted","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":"IPv4%20Cloudflare%20Source%20IPs","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"network","or":"network","r":false,"t":"`$ANY`","index$":6},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":8},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"cloudflare_source,warp","k":"query","n":"subnet_type","or":"subnet_type","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zerotrust/subnets","q":{"exist":["account_id","address_family","comment","existed_at","is_default_network","is_deleted","name","network","page","per_page","sort_order","subnet_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zerotrust"},{"lit":"subnets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tunnel_subnet_response_collection","name__orig":"tunnel_subnet_response_collection","Name":"TunnelSubnetResponseCollection","name_":"tunnel_subnet_response_collection","name-":"tunnel-subnet-response-collection","NAME":"TUNNEL_SUBNET_RESPONSE_COLLECTION","index$":57}, {"active":true,"entity":"tunnel_subnet_response_collection","key$":"BasicTunnelSubnetResponseCollectionFlow","kind":"basic","name":"BasicTunnelSubnetResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_subnet_response_collection_ref01"}}],"index$":0}]}, 'TunnelSubnetResponseCollection', {"GET /accounts/{account_id}/zerotrust/subnets":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"name","in":"query","description":"If set, only list subnets with the given name","schema":{"description":"If set, only list subnets with the given name","type":"string","example":"IPv4%20Cloudflare%20Source%20IPs","x-ref":"#/components/schemas/tunnel_subnet_query_name"},"index$":1},{"name":"comment","in":"query","schema":{"description":"If set, only list subnets with the given comment.","type":"string","example":"example%20comment","x-ref":"#/components/schemas/tunnel_subnet_query_comment"},"index$":2},{"name":"network","in":"query","schema":{"description":"If set, only list the subnet whose network exactly matches the given CIDR.","allOf":[{"description":"IP/CIDR range in URL-encoded format","type":"string","example":"172.16.0.0%2F16","x-ref":"#/components/schemas/tunnel_ip_network_encoded"}]},"index$":3},{"name":"existed_at","in":"query","schema":{"description":"If provided, include only resources that were created (and not deleted) before this time. URL encoded.","type":"string","format":"url-encoded-date-time","example":"2019-10-12T07%3A20%3A50.52Z","x-ref":"#/components/schemas/tunnel_existed_at"},"index$":4},{"name":"address_family","in":"query","description":"If set, only include subnets in the given address family - `v4` or `v6`","schema":{"description":"IP address family, either `v4` (IPv4) or `v6` (IPv6)","type":"string","example":"v4","enum":["v4","v6"],"x-ref":"#/components/schemas/tunnel_address_family"},"index$":5},{"name":"is_default_network","in":"query","schema":{"description":"If `true`, only include default subnets. If `false`, exclude default subnets subnets. If not set, all subnets will be included.","type":"boolean"},"index$":6},{"name":"is_deleted","in":"query","schema":{"description":"If `true`, only include deleted subnets. If `false`, exclude deleted subnets. If not set, all subnets will be included.","type":"boolean"},"index$":7},{"name":"sort_order","in":"query","schema":{"description":"Sort order of the results. `asc` means oldest to newest, `desc` means newest to oldest. If not set, they will not be in any particular order.","type":"string","enum":["asc","desc"]},"index$":8},{"name":"subnet_types","in":"query","schema":{"description":"If set, the types of subnets to include, separated by comma.","type":"string","example":"cloudflare_source,warp","enum":["cloudflare_source","initial_resolved_ip","warp"]},"index$":9},{"name":"per_page","in":"query","schema":{"description":"Number of results to display.","type":"number","maximum":1000,"minimum":1,"x-ref":"#/components/schemas/tunnel_per_page"},"index$":10},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1,"x-ref":"#/components/schemas/tunnel_page_number"},"index$":11}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tunnel_subnet_response_collection_ref01_data = Object.values(setup.data.existing.tunnel_subnet_response_collection)[0] as any

    // LIST
    const tunnel_subnet_response_collection_ref01_ent = client.TunnelSubnetResponseCollection()
    const tunnel_subnet_response_collection_ref01_match: any = {}
    tunnel_subnet_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const tunnel_subnet_response_collection_ref01_list = (await tunnel_subnet_response_collection_ref01_ent.list(tunnel_subnet_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_subnet_response_collection/TunnelSubnetResponseCollectionTestData.json')

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
    ['tunnel_subnet_response_collection01','tunnel_subnet_response_collection02','tunnel_subnet_response_collection03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_COLLECTION_ENTID']
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
  
