

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


describe('TunnelZeroTrustConnectivitySettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TunnelZeroTrustConnectivitySetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tunnel_zero_trust_connectivity_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"icmp_proxy_enabled":{"a":true,"h":"Icmp Proxy Enabled","n":"icmp_proxy_enabled","r":false,"sh":"A flag to enable the ICMP proxy for the account network.","t":"`$BOOLEAN`","key$":"icmp_proxy_enabled","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"offramp_warp_enabled":{"a":true,"h":"Offramp Warp Enabled","n":"offramp_warp_enabled","r":false,"sh":"A flag to enable WARP to WARP traffic.","t":"`$BOOLEAN`","key$":"offramp_warp_enabled","index$":3},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"ro":true,"sh":"The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.","t":"`$STRING`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"tunnel_zero_trust_connectivity_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/zerotrust/connectivity_settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zerotrust/connectivity_settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zerotrust"},{"lit":"connectivity_settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/zerotrust/connectivity_settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/zerotrust/connectivity_settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zerotrust"},{"lit":"connectivity_settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tunnel_zero_trust_connectivity_setting","name__orig":"tunnel_zero_trust_connectivity_setting","Name":"TunnelZeroTrustConnectivitySetting","name_":"tunnel_zero_trust_connectivity_setting","name-":"tunnel-zero-trust-connectivity-setting","NAME":"TUNNEL_ZERO_TRUST_CONNECTIVITY_SETTING","index$":71}, {"active":true,"entity":"tunnel_zero_trust_connectivity_setting","key$":"BasicTunnelZeroTrustConnectivitySettingFlow","kind":"basic","name":"BasicTunnelZeroTrustConnectivitySettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tunnel_zero_trust_connectivity_setting_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"tunnel_zero_trust_connectivity_setting_ref01","srcdatavar":"tunnel_zero_trust_connectivity_setting_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tunnel_zero_trust_connectivity_setting_ref01"}}],"v":[],"index$":1}]}, 'TunnelZeroTrustConnectivitySetting', {"GET /accounts/{account_id}/zerotrust/connectivity_settings":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0}]},"PATCH /accounts/{account_id}/zerotrust/connectivity_settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"icmp_proxy_enabled":{"description":"A flag to enable the ICMP proxy for the account network.","type":"boolean","example":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_icmp_proxy_enabled","key$":"icmp_proxy_enabled"},"offramp_warp_enabled":{"description":"A flag to enable WARP to WARP traffic.","type":"boolean","example":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_offramp_warp_enabled","key$":"offramp_warp_enabled"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tunnel_zero_trust_connectivity_setting_ref01_data = Object.values(setup.data.existing.tunnel_zero_trust_connectivity_setting)[0] as any

    // LIST
    const tunnel_zero_trust_connectivity_setting_ref01_ent = client.TunnelZeroTrustConnectivitySetting()
    const tunnel_zero_trust_connectivity_setting_ref01_match: any = {}
    tunnel_zero_trust_connectivity_setting_ref01_match['account_id'] = setup.idmap['account01']

    const tunnel_zero_trust_connectivity_setting_ref01_list = (await tunnel_zero_trust_connectivity_setting_ref01_ent.list(tunnel_zero_trust_connectivity_setting_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const tunnel_zero_trust_connectivity_setting_ref01_data_up0: any = {}

    const tunnel_zero_trust_connectivity_setting_ref01_resdata_up0 = (await tunnel_zero_trust_connectivity_setting_ref01_ent.update(tunnel_zero_trust_connectivity_setting_ref01_data_up0)).data()
    assert(null != tunnel_zero_trust_connectivity_setting_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tunnel_zero_trust_connectivity_setting/TunnelZeroTrustConnectivitySettingTestData.json')

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
    ['tunnel_zero_trust_connectivity_setting01','tunnel_zero_trust_connectivity_setting02','tunnel_zero_trust_connectivity_setting03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ZERO_TRUST_CONNECTIVITY_SETTING_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ZERO_TRUST_CONNECTIVITY_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_ZERO_TRUST_CONNECTIVITY_SETTING_ENTID']
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
  
