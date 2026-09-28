

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


describe('WarpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.Warp()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'warp.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"An optional description of the subnet.","t":"`$STRING`","key$":"comment","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"is_default_network":{"a":true,"h":"Is Default Network","n":"is_default_network","r":false,"sh":"If `true`, this is the default subnet for the account.","t":"`$BOOLEAN`","key$":"is_default_network","index$":3},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"A user-friendly name for the subnet.","t":"`$STRING`","key$":"name","index$":5},"network":{"a":true,"h":"Network","n":"network","r":false,"sh":"The private IPv4 or IPv6 range defining the subnet, in CIDR notation.","t":"`$STRING`","key$":"network","index$":6},"result":{"a":true,"h":"Result","n":"result","op":{"load":{"req":false,"type":"`$OBJECT`"}},"r":true,"ro":true,"sh":"The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.","t":"`$STRING`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":7},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":8}},"id":{"field":"id","name":"id"},"name":"warp","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"id","or":"subnet_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}","q":{"exist":["account_id","id"]},"r":{"param":{"subnet_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zerotrust"},{"lit":"subnets"},{"lit":"warp"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","k":"param","n":"id","or":"subnet_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}","q":{"exist":["account_id","id"]},"r":{"param":{"subnet_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zerotrust"},{"lit":"subnets"},{"lit":"warp"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"warp","name__orig":"warp","Name":"Warp","name_":"warp","name-":"warp","NAME":"WARP","index$":72}, {"active":true,"entity":"warp","key$":"BasicWarpFlow","kind":"basic","name":"BasicWarpFlow","param":{},"step":[{"a":true,"d":{"account_id":"account01"},"i":{"ref":"warp_ref01","srcdatavar":"warp_ref01_data","suffix":"_up0","textfield":"comment"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-warp_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"warp_ref01","srcdatavar":"warp_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"warp01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-warp_ref01"}}],"index$":1}]}, 'Warp', {"GET /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"subnet_id","in":"path","required":true,"schema":{"description":"The UUID of the subnet.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_subnet_id"},"index$":1}]},"PATCH /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"comment":{"description":"An optional description of the subnet.","type":"string","example":"example comment","default":"","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/tunnel_subnet_comment","key$":"comment"},"is_default_network":{"description":"If `true`, this is the default subnet for the account. There can only be one default subnet per account.","type":"boolean","default":false,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/tunnel_subnet_is_default_network","key$":"is_default_network"},"name":{"description":"A user-friendly name for the subnet.","type":"string","example":"IPv4 Cloudflare Source IPs","x-auditable":true,"x-ref":"#/components/schemas/tunnel_subnet_name","key$":"name"},"network":{"description":"The private IPv4 or IPv6 range defining the subnet, in CIDR notation.","type":"string","example":"100.64.0.0/12","x-auditable":true,"x-ref":"#/components/schemas/tunnel_subnet_ip_network","key$":"network"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Cloudflare account ID","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tunnel_account_id"},"index$":0},{"name":"subnet_id","in":"path","required":true,"schema":{"description":"The UUID of the subnet.","type":"string","format":"uuid","example":"f70ff985-a4ef-4643-bbbc-4a0ed4fc8415","x-auditable":true,"x-ref":"#/components/schemas/tunnel_subnet_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let warp_ref01_data = Object.values(setup.data.existing.warp)[0] as any

    // UPDATE
    const warp_ref01_ent = client.Warp()
    const warp_ref01_data_up0: any = {}
    warp_ref01_data_up0.id = warp_ref01_data.id
    warp_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const warp_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-warp_ref01_' + setup.now }
    ;(warp_ref01_data_up0 as any)[warp_ref01_markdef_up0.name] = warp_ref01_markdef_up0.value

    const warp_ref01_resdata_up0 = (await warp_ref01_ent.update(warp_ref01_data_up0)).data()
    assert(warp_ref01_resdata_up0.id === warp_ref01_data_up0.id)

    assert((warp_ref01_resdata_up0 as any)[warp_ref01_markdef_up0.name] === warp_ref01_markdef_up0.value)


    // LOAD
    const warp_ref01_match_dt0: any = {}
    warp_ref01_match_dt0.id = warp_ref01_data.id
    const warp_ref01_data_dt0 = (await warp_ref01_ent.load(warp_ref01_match_dt0)).data()
    assert(warp_ref01_data_dt0.id === warp_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/warp/WarpTestData.json')

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
    ['warp01','warp02','warp03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID']
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
  
