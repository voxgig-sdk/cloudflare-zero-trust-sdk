

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


describe('TunnelTunnelResponseTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelTunnelResponseToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_tunnel_response_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"resources":{"a":true,"h":"Resources","n":"resources","r":true,"t":"`$ARRAY`","key$":"resources","index$":2},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"ro":true,"sh":"The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.","t":"`$STRING`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"tunnel_tunnel_response_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"cfd_tunnel_id","or":"tunnel_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management","q":{"exist":["account_id","cfd_tunnel_id"]},"r":{"param":{"tunnel_id":"cfd_tunnel_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cfd_tunnel"},{"var":"cfd_tunnel_id"},{"lit":"management"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"cfd_tunnel_id","or":"tunnel_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cfd_tunnel/{tunnel_id}/token","q":{"exist":["account_id","cfd_tunnel_id"]},"r":{"param":{"tunnel_id":"cfd_tunnel_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cfd_tunnel"},{"var":"cfd_tunnel_id"},{"lit":"token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/warp_connector/{tunnel_id}/token","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"warp_connector_id","or":"tunnel_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/warp_connector/{tunnel_id}/token","q":{"exist":["account_id","warp_connector_id"]},"r":{"param":{"tunnel_id":"warp_connector_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"warp_connector"},{"var":"warp_connector_id"},{"lit":"token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tunnel_tunnel_response_token","name__orig":"tunnel_tunnel_response_token","Name":"TunnelTunnelResponseToken","name_":"tunnel_tunnel_response_token","name-":"tunnel-tunnel-response-token","NAME":"TUNNEL_TUNNEL_RESPONSE_TOKEN","index$":64}, {"active":true,"entity":"tunnel_tunnel_response_token","key$":"BasicTunnelTunnelResponseTokenFlow","kind":"basic","name":"BasicTunnelTunnelResponseTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tunnel_tunnel_response_token_ref01"},"m":{"account_id":"account01","cfd_tunnel_id":"cfd_tunnel01","warp_connector_id":"warp_connector01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","warp_connector_id":"warp_connector01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_tunnel_response_token_ref01"}}],"index$":1}]}, 'TunnelTunnelResponseToken', {"POST /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"resources":{"type":"array","items":{"description":"Management resources the token will have access to.","type":"string","example":"logs","enum":["logs"],"x-ref":"#/components/schemas/tunnel_management-resources"},"key$":"resources"}},"required":["resources"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"tunnel_id","in":"path","required":true,"schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":1}]},"GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"tunnel_id","in":"path","required":true,"schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":1}]},"GET /accounts/{account_id}/warp_connector/{tunnel_id}/token":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"tunnel_id","in":"path","required":true,"schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tunnel_tunnel_response_token_ref01_ent = client.TunnelTunnelResponseToken()
    let tunnel_tunnel_response_token_ref01_data = setup.data.new.tunnel_tunnel_response_token['tunnel_tunnel_response_token_ref01']
    tunnel_tunnel_response_token_ref01_data['account_id'] = setup.idmap['account01']
    tunnel_tunnel_response_token_ref01_data['cfd_tunnel_id'] = setup.idmap['cfd_tunnel01']
    tunnel_tunnel_response_token_ref01_data['warp_connector_id'] = setup.idmap['warp_connector01']

    tunnel_tunnel_response_token_ref01_data = (await tunnel_tunnel_response_token_ref01_ent.create(tunnel_tunnel_response_token_ref01_data)).data()
    assert(null != tunnel_tunnel_response_token_ref01_data)


    // LIST
    const tunnel_tunnel_response_token_ref01_match: any = {}
    tunnel_tunnel_response_token_ref01_match['account_id'] = setup.idmap['account01']
    tunnel_tunnel_response_token_ref01_match['warp_connector_id'] = setup.idmap['warp_connector01']

    const tunnel_tunnel_response_token_ref01_list = (await tunnel_tunnel_response_token_ref01_ent.list(tunnel_tunnel_response_token_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_tunnel_response_token/TunnelTunnelResponseTokenTestData.json')

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
    ['tunnel_tunnel_response_token01','tunnel_tunnel_response_token02','tunnel_tunnel_response_token03','account01','cfd_tunnel01','warp_connector01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_RESPONSE_TOKEN_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_RESPONSE_TOKEN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_RESPONSE_TOKEN_ENTID']
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
  
