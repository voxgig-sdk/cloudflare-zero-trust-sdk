

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


describe('TunnelTeamnetResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelTeamnetResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_teamnet_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"tunnel_teamnet_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/teamnet/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"Example comment for this route.","k":"query","n":"comment","or":"comment","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2019-10-12T07%3A20%3A50.52Z","k":"query","n":"existed_at","or":"existed_at","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"is_deleted","or":"is_deleted","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"network_subset","or":"network_subset","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"network_superset","or":"network_superset","r":false,"t":"`$ANY`","index$":4},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"route_id","or":"route_id","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"cfd_tunnel,warp_connector","k":"query","n":"tun_type","or":"tun_type","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"tunnel_id","or":"tunnel_id","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"virtual_network_id","or":"virtual_network_id","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/accounts/{account_id}/teamnet/routes","q":{"exist":["account_id","comment","existed_at","is_deleted","network_subset","network_superset","page","per_page","route_id","tun_type","tunnel_id","virtual_network_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tunnel_teamnet_response_collection","name__orig":"tunnel_teamnet_response_collection","Name":"TunnelTeamnetResponseCollection","name_":"tunnel_teamnet_response_collection","name-":"tunnel-teamnet-response-collection","NAME":"TUNNEL_TEAMNET_RESPONSE_COLLECTION","index$":60}, {"active":true,"entity":"tunnel_teamnet_response_collection","key$":"BasicTunnelTeamnetResponseCollectionFlow","kind":"basic","name":"BasicTunnelTeamnetResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_teamnet_response_collection_ref01"}}],"index$":0}]}, 'TunnelTeamnetResponseCollection', {"GET /accounts/{account_id}/teamnet/routes":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"comment","in":"query","schema":{"description":"Optional remark describing the route.","type":"string","example":"Example comment for this route.","default":"","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_route_comment"},"index$":1},{"name":"is_deleted","in":"query","schema":{"description":"If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.","type":"boolean"},"index$":2},{"name":"network_subset","in":"query","schema":{"description":"If set, only list routes that are contained within this IP range.","allOf":[{"description":"The private IPv4 or IPv6 range connected by the route, in CIDR notation.","type":"string","example":"172.16.0.0/16","x-auditable":true,"x-ref":"#/components/schemas/tunnel_ip_network"}]},"index$":3},{"name":"network_superset","in":"query","schema":{"description":"If set, only list routes that contain this IP range.","allOf":[{"description":"The private IPv4 or IPv6 range connected by the route, in CIDR notation.","type":"string","example":"172.16.0.0/16","x-auditable":true,"x-ref":"#/components/schemas/tunnel_ip_network"}]},"index$":4},{"name":"existed_at","in":"query","schema":{"description":"If provided, include only resources that were created (and not deleted) before this time. URL encoded.","type":"string","format":"url-encoded-date-time","example":"2019-10-12T07%3A20%3A50.52Z","x-ref":"#/components/schemas/tunnel_existed_at"},"index$":5},{"name":"tunnel_id","in":"query","schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":6},{"name":"route_id","in":"query","schema":{"description":"UUID of the route.","type":"string","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-ref":"#/components/schemas/tunnel_route_id"},"index$":7},{"name":"tun_types","in":"query","schema":{"description":"The types of tunnels to filter by, separated by commas.","type":"array","items":{"description":"The type of tunnel.","type":"string","example":"cfd_tunnel","enum":["cfd_tunnel","warp_connector","warp","magic","ip_sec","gre","cni"],"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_type"},"example":"cfd_tunnel,warp_connector","x-ref":"#/components/schemas/tunnel_tunnel_types"},"index$":8},{"name":"virtual_network_id","in":"query","schema":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_virtual_network_id"},"index$":9},{"name":"per_page","in":"query","schema":{"description":"Number of results to display.","type":"number","maximum":1000,"minimum":1,"x-ref":"#/components/schemas/tunnel_per_page"},"index$":10},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1,"x-ref":"#/components/schemas/tunnel_page_number"},"index$":11}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tunnel_teamnet_response_collection_ref01_data = Object.values(setup.data.existing.tunnel_teamnet_response_collection)[0] as any

    // LIST
    const tunnel_teamnet_response_collection_ref01_ent = client.TunnelTeamnetResponseCollection()
    const tunnel_teamnet_response_collection_ref01_match: any = {}
    tunnel_teamnet_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const tunnel_teamnet_response_collection_ref01_list = (await tunnel_teamnet_response_collection_ref01_ent.list(tunnel_teamnet_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_teamnet_response_collection/TunnelTeamnetResponseCollectionTestData.json')

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
    ['tunnel_teamnet_response_collection01','tunnel_teamnet_response_collection02','tunnel_teamnet_response_collection03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_COLLECTION_ENTID']
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
  
