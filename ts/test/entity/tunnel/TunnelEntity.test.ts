

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


describe('TunnelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.Tunnel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"result","index$":0}},"name":"tunnel","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/tunnels","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"vpc1-","k":"query","n":"exclude_prefix","or":"exclude_prefix","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2019-10-12T07%3A20%3A50.52Z","k":"query","n":"existed_at","or":"existed_at","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"vpc1-","k":"query","n":"include_prefix","or":"include_prefix","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":true,"k":"query","n":"is_deleted","or":"is_deleted","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"ex":"blog","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"ex":"healthy","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"cfd_tunnel,warp_connector","k":"query","n":"tun_type","or":"tun_type","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"uuid","or":"uuid","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"2009-11-10T23:00:00Z","k":"query","n":"was_active_at","or":"was_active_at","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"2009-11-10T23:00:00Z","k":"query","n":"was_inactive_at","or":"was_inactive_at","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/accounts/{account_id}/tunnels","q":{"exist":["account_id","exclude_prefix","existed_at","include_prefix","is_deleted","name","page","per_page","status","tun_type","uuid","was_active_at","was_inactive_at"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"tunnels"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tunnel","name__orig":"tunnel","Name":"Tunnel","name_":"tunnel","name-":"tunnel","NAME":"TUNNEL","index$":48}, {"active":true,"entity":"tunnel","key$":"BasicTunnelFlow","kind":"basic","name":"BasicTunnelFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_ref01"}}],"index$":0}]}, 'Tunnel', {"GET /accounts/{account_id}/tunnels":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"name","in":"query","schema":{"description":"A user-friendly name for the tunnel.","type":"string","example":"blog"},"index$":1},{"name":"is_deleted","in":"query","schema":{"description":"If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.","type":"boolean","example":true},"index$":2},{"name":"existed_at","in":"query","schema":{"description":"If provided, include only resources that were created (and not deleted) before this time. URL encoded.","type":"string","format":"url-encoded-date-time","example":"2019-10-12T07%3A20%3A50.52Z","x-ref":"#/components/schemas/tunnel_existed_at"},"index$":3},{"name":"uuid","in":"query","schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":4},{"name":"was_active_at","in":"query","schema":{"type":"string","format":"date-time","example":"2009-11-10T23:00:00Z"},"index$":5},{"name":"was_inactive_at","in":"query","schema":{"type":"string","format":"date-time","example":"2009-11-10T23:00:00Z"},"index$":6},{"name":"include_prefix","in":"query","schema":{"type":"string","example":"vpc1-"},"index$":7},{"name":"exclude_prefix","in":"query","schema":{"type":"string","example":"vpc1-"},"index$":8},{"name":"tun_types","in":"query","schema":{"description":"The types of tunnels to filter by, separated by commas.","type":"array","items":{"description":"The type of tunnel.","type":"string","example":"cfd_tunnel","enum":["cfd_tunnel","warp_connector","warp","magic","ip_sec","gre","cni"],"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_type"},"example":"cfd_tunnel,warp_connector","x-ref":"#/components/schemas/tunnel_tunnel_types"},"index$":9},{"name":"status","in":"query","schema":{"description":"The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).","type":"string","example":"healthy","enum":["inactive","degraded","healthy","down"],"x-ref":"#/components/schemas/tunnel_status"},"index$":10},{"name":"per_page","in":"query","schema":{"description":"Number of results to display.","type":"number","maximum":1000,"minimum":1,"x-ref":"#/components/schemas/tunnel_per_page"},"index$":11},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1,"x-ref":"#/components/schemas/tunnel_page_number"},"index$":12}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tunnel_ref01_data = Object.values(setup.data.existing.tunnel)[0] as any

    // LIST
    const tunnel_ref01_ent = client.Tunnel()
    const tunnel_ref01_match: any = {}
    tunnel_ref01_match['account_id'] = setup.idmap['account01']

    const tunnel_ref01_list = (await tunnel_ref01_ent.list(tunnel_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel/TunnelTestData.json')

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
    ['tunnel01','tunnel02','tunnel03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ENTID']
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
  
