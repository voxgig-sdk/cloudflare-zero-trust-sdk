

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


describe('TunnelRouteResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelRouteResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_route_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"Optional remark describing the route.","t":"`$STRING`","key$":"comment","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"network":{"a":true,"h":"Network","n":"network","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The private IPv4 or IPv6 range connected by the route, in CIDR notation.","t":"`$STRING`","key$":"network","index$":3},"result":{"a":true,"h":"Result","n":"result","op":{"load":{"req":false,"type":"`$OBJECT`"},"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"ro":true,"sh":"The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.","t":"`$STRING`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":5},"tunnel_id":{"a":true,"fo":"uuid","h":"Tunnel Id","n":"tunnel_id","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"ro":true,"sh":"UUID of the tunnel.","t":"`$STRING`","key$":"tunnel_id","index$":6},"virtual_network_id":{"a":true,"fo":"uuid","h":"Virtual Network Id","n":"virtual_network_id","r":false,"sh":"UUID of the virtual network.","t":"`$STRING`","key$":"virtual_network_id","index$":7}},"name":"tunnel_route_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"172.16.0.0%2F16","k":"param","n":"ip_network_encoded","or":"ip_network_encoded","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","q":{"exist":["account_id","ip_network_encoded"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"lit":"network"},{"var":"ip_network_encoded"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/teamnet/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/teamnet/routes","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/teamnet/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"route_id","or":"route_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/teamnet/routes/{route_id}","q":{"exist":["account_id","route_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"var":"route_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"172.16.0.0%2F16","k":"param","n":"ip_network_encoded","or":"ip_network_encoded","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"cfd_tunnel","k":"query","n":"tun_type","or":"tun_type","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"tunnel_id","or":"tunnel_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"query","n":"virtual_network_id","or":"virtual_network_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","q":{"exist":["account_id","ip_network_encoded","tun_type","tunnel_id","virtual_network_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"lit":"network"},{"var":"ip_network_encoded"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/teamnet/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"route_id","or":"route_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/teamnet/routes/{route_id}","q":{"exist":["account_id","route_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"var":"route_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"172.16.0.0%2F16","k":"param","n":"ip_network_encoded","or":"ip_network_encoded","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}","q":{"exist":["account_id","ip_network_encoded"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"lit":"network"},{"var":"ip_network_encoded"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /accounts/{account_id}/teamnet/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"route_id","or":"route_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/teamnet/routes/{route_id}","q":{"exist":["account_id","route_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"teamnet"},{"lit":"routes"},{"var":"route_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tunnel_route_response_single","name__orig":"tunnel_route_response_single","Name":"TunnelRouteResponseSingle","name_":"tunnel_route_response_single","name-":"tunnel-route-response-single","NAME":"TUNNEL_ROUTE_RESPONSE_SINGLE","index$":56}, {"active":true,"entity":"tunnel_route_response_single","key$":"BasicTunnelRouteResponseSingleFlow","kind":"basic","name":"BasicTunnelRouteResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tunnel_route_response_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"tunnel_route_response_single_ref01","srcdatavar":"tunnel_route_response_single_ref01_data","suffix":"_up0","textfield":"comment"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tunnel_route_response_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"tunnel_route_response_single_ref01","srcdatavar":"tunnel_route_response_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"tunnel_route_response_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tunnel_route_response_single_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"tunnel_route_response_single_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"tunnel_route_response_single01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'TunnelRouteResponseSingle', {"POST /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"comment":{"description":"Optional remark describing the route.","type":"string","example":"Example comment for this route.","default":"","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_route_comment","key$":"comment"},"tunnel_id":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id","key$":"tunnel_id"},"virtual_network_id":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_virtual_network_id","key$":"virtual_network_id"}},"required":["tunnel_id"],"index$":1}}}},"parameters":[{"name":"ip_network_encoded","in":"path","required":true,"schema":{"description":"IP/CIDR range in URL-encoded format","type":"string","example":"172.16.0.0%2F16","x-ref":"#/components/schemas/tunnel_ip_network_encoded"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":1}]},"POST /accounts/{account_id}/teamnet/routes":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"comment":{"description":"Optional remark describing the route.","type":"string","example":"Example comment for this route.","default":"","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_route_comment","key$":"comment"},"network":{"description":"The private IPv4 or IPv6 range connected by the route, in CIDR notation.","type":"string","example":"172.16.0.0/16","x-auditable":true,"x-ref":"#/components/schemas/tunnel_ip_network","key$":"network"},"tunnel_id":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id","key$":"tunnel_id"},"virtual_network_id":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/tunnel_virtual_network_id_computed_optional","key$":"virtual_network_id"}},"required":["network","tunnel_id"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0}]},"GET /accounts/{account_id}/teamnet/routes/{route_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"route_id","in":"path","required":true,"schema":{"description":"UUID of the route.","type":"string","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-ref":"#/components/schemas/tunnel_route_id"},"index$":1}]},"DELETE /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":{"protocol":"http","parameters":[{"name":"ip_network_encoded","in":"path","required":true,"schema":{"description":"IP/CIDR range in URL-encoded format","type":"string","example":"172.16.0.0%2F16","x-ref":"#/components/schemas/tunnel_ip_network_encoded"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":1},{"name":"virtual_network_id","in":"query","schema":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_virtual_network_id"},"index$":2},{"name":"tun_type","in":"query","schema":{"description":"The type of tunnel.","type":"string","example":"cfd_tunnel","enum":["cfd_tunnel","warp_connector","warp","magic","ip_sec","gre","cni"],"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_type"},"index$":3},{"name":"tunnel_id","in":"query","schema":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id"},"index$":4}]},"DELETE /accounts/{account_id}/teamnet/routes/{route_id}":{"protocol":"http","parameters":[{"name":"route_id","in":"path","required":true,"schema":{"description":"UUID of the route.","type":"string","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-ref":"#/components/schemas/tunnel_route_id"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":1}]},"PATCH /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":{"protocol":"http","parameters":[{"name":"ip_network_encoded","in":"path","required":true,"schema":{"description":"IP/CIDR range in URL-encoded format","type":"string","example":"172.16.0.0%2F16","x-ref":"#/components/schemas/tunnel_ip_network_encoded"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":1}]},"PATCH /accounts/{account_id}/teamnet/routes/{route_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"comment":{"description":"Optional remark describing the route.","type":"string","example":"Example comment for this route.","default":"","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_route_comment","key$":"comment"},"network":{"description":"The private IPv4 or IPv6 range connected by the route, in CIDR notation.","type":"string","example":"172.16.0.0/16","x-auditable":true,"x-ref":"#/components/schemas/tunnel_ip_network","key$":"network"},"tunnel_id":{"description":"UUID of the tunnel.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_tunnel_id","key$":"tunnel_id"},"virtual_network_id":{"description":"UUID of the virtual network.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/tunnel_virtual_network_id_computed_optional","key$":"virtual_network_id"}},"index$":1}}}},"parameters":[{"name":"route_id","in":"path","required":true,"schema":{"description":"UUID of the route.","type":"string","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","maxLength":36,"readOnly":true,"x-ref":"#/components/schemas/tunnel_route_id"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tunnel_route_response_single_ref01_ent = client.TunnelRouteResponseSingle()
    let tunnel_route_response_single_ref01_data = setup.data.new.tunnel_route_response_single['tunnel_route_response_single_ref01']
    tunnel_route_response_single_ref01_data['account_id'] = setup.idmap['account01']

    tunnel_route_response_single_ref01_data = (await tunnel_route_response_single_ref01_ent.create(tunnel_route_response_single_ref01_data)).data()
    assert(null != tunnel_route_response_single_ref01_data)


    // UPDATE
    const tunnel_route_response_single_ref01_data_up0: any = {}
    tunnel_route_response_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const tunnel_route_response_single_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-tunnel_route_response_single_ref01_' + setup.now }
    ;(tunnel_route_response_single_ref01_data_up0 as any)[tunnel_route_response_single_ref01_markdef_up0.name] = tunnel_route_response_single_ref01_markdef_up0.value

    const tunnel_route_response_single_ref01_resdata_up0 = (await tunnel_route_response_single_ref01_ent.update(tunnel_route_response_single_ref01_data_up0)).data()
    assert(null != tunnel_route_response_single_ref01_resdata_up0)

    assert((tunnel_route_response_single_ref01_resdata_up0 as any)[tunnel_route_response_single_ref01_markdef_up0.name] === tunnel_route_response_single_ref01_markdef_up0.value)




  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_route_response_single/TunnelRouteResponseSingleTestData.json')

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
    ['tunnel_route_response_single01','tunnel_route_response_single02','tunnel_route_response_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ROUTE_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ROUTE_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ROUTE_RESPONSE_SINGLE_ENTID']
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
  
