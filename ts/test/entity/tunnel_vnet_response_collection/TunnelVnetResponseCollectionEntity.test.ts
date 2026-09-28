

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


describe('TunnelVnetResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelVnetResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_vnet_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"tunnel_vnet_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/teamnet/virtual_networks","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"is_default","or":"is_default","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"is_default_network","or":"is_default_network","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"is_deleted","or":"is_deleted","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"ex":"us-east-1-vpc","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/teamnet/virtual_networks","q":{"exist":["account_id","id","is_default","is_default_network","is_deleted","name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"virtual_networks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tunnel_vnet_response_collection","name__orig":"tunnel_vnet_response_collection","Name":"TunnelVnetResponseCollection","name_":"tunnel_vnet_response_collection","name-":"tunnel-vnet-response-collection","NAME":"TUNNEL_VNET_RESPONSE_COLLECTION","index$":82}, {"active":true,"entity":"tunnel_vnet_response_collection","key$":"BasicTunnelVnetResponseCollectionFlow","kind":"basic","name":"BasicTunnelVnetResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_vnet_response_collection_ref01"}}],"index$":0}]}, 'TunnelVnetResponseCollection', {"GET /accounts/{account_id}/teamnet/virtual_networks":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"id","in":"query","schema":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_virtual_network_id"},"index$":1},{"name":"name","in":"query","schema":{"description":"A user-friendly name for the virtual network.","type":"string","example":"us-east-1-vpc","maxLength":256,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_virtual_network_name"},"index$":2},{"name":"is_default","in":"query","schema":{"description":"If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.","type":"boolean"},"deprecated":true,"x-stainless-deprecation-message":"Use the is_default_network property instead.","x-stainless-ignore":true,"index$":3},{"name":"is_default_network","in":"query","schema":{"description":"If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.","type":"boolean"},"index$":4},{"name":"is_deleted","in":"query","schema":{"description":"If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.","type":"boolean"},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tunnel_vnet_response_collection_ref01_data = Object.values(setup.data.existing.tunnel_vnet_response_collection)[0] as any

    // LIST
    const tunnel_vnet_response_collection_ref01_ent = client.TunnelVnetResponseCollection()
    const tunnel_vnet_response_collection_ref01_match: any = {}
    tunnel_vnet_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const tunnel_vnet_response_collection_ref01_list = (await tunnel_vnet_response_collection_ref01_ent.list(tunnel_vnet_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_vnet_response_collection/TunnelVnetResponseCollectionTestData.json')

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
    ['tunnel_vnet_response_collection01','tunnel_vnet_response_collection02','tunnel_vnet_response_collection03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_VNET_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_VNET_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_VNET_RESPONSE_COLLECTION_ENTID']
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
  
