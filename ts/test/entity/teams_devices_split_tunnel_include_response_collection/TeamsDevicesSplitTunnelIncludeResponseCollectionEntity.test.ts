

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


describe('TeamsDevicesSplitTunnelIncludeResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesSplitTunnelIncludeResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_split_tunnel_include_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"result","index$":0}},"name":"teams_devices_split_tunnel_include_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/policy/{policy_id}/include","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/policy/{policy_id}/include","q":{"exist":["account_id","policy_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"policy"},{"var":"policy_id"},{"lit":"include"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/policy/include","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/policy/include","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"policy"},{"lit":"include"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/devices/policy/{policy_id}/include","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/devices/policy/{policy_id}/include","q":{"exist":["account_id","policy_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"policy"},{"var":"policy_id"},{"lit":"include"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /accounts/{account_id}/devices/policy/include","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/devices/policy/include","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"policy"},{"lit":"include"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"teams_devices_split_tunnel_include_response_collection","name__orig":"teams_devices_split_tunnel_include_response_collection","Name":"TeamsDevicesSplitTunnelIncludeResponseCollection","name_":"teams_devices_split_tunnel_include_response_collection","name-":"teams-devices-split-tunnel-include-response-collection","NAME":"TEAMS_DEVICES_SPLIT_TUNNEL_INCLUDE_RESPONSE_COLLECTION","index$":45}, {"active":true,"entity":"teams_devices_split_tunnel_include_response_collection","key$":"BasicTeamsDevicesSplitTunnelIncludeResponseCollectionFlow","kind":"basic","name":"BasicTeamsDevicesSplitTunnelIncludeResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"teams_devices_split_tunnel_include_response_collection_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"teams_devices_split_tunnel_include_response_collection_ref01","srcdatavar":"teams_devices_split_tunnel_include_response_collection_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_split_tunnel_include_response_collection_ref01"}}],"v":[],"index$":1}]}, 'TeamsDevicesSplitTunnelIncludeResponseCollection', {"GET /accounts/{account_id}/devices/policy/{policy_id}/include":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schemas-uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]},"GET /accounts/{account_id}/devices/policy/include":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"PUT /accounts/{account_id}/devices/policy/{policy_id}/include":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","oneOf":[{"properties":{"address":{"description":"The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.","example":"192.0.2.0/24","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_address","x-stainless-terraform-configurability":"computed_optional"},"description":{"description":"A description of the Split Tunnel item, displayed in the client UI.","example":"Include testing domains in the tunnel","maxLength":100,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_description","x-stainless-terraform-configurability":"computed_optional"}},"required":["address"],"type":"object","x-ref":"#/components/schemas/teams-devices_include_split_tunnel_with_address"},{"properties":{"description":{"description":"A description of the Split Tunnel item, displayed in the client UI.","example":"Include testing domains in the tunnel","maxLength":100,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_description","x-stainless-terraform-configurability":"computed_optional"},"host":{"description":"The domain name to include in the tunnel. If `host` is present, `address` must not be present.","example":"*.example.com","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_host","x-stainless-terraform-configurability":"computed_optional"}},"required":["host"],"type":"object","x-ref":"#/components/schemas/teams-devices_include_split_tunnel_with_host"}],"x-ref":"#/components/schemas/teams-devices_split_tunnel_include"},"index$":1}}}},"parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schemas-uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]},"PUT /accounts/{account_id}/devices/policy/include":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","oneOf":[{"properties":{"address":{"description":"The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.","example":"192.0.2.0/24","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_address","x-stainless-terraform-configurability":"computed_optional"},"description":{"description":"A description of the Split Tunnel item, displayed in the client UI.","example":"Include testing domains in the tunnel","maxLength":100,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_description","x-stainless-terraform-configurability":"computed_optional"}},"required":["address"],"type":"object","x-ref":"#/components/schemas/teams-devices_include_split_tunnel_with_address"},{"properties":{"description":{"description":"A description of the Split Tunnel item, displayed in the client UI.","example":"Include testing domains in the tunnel","maxLength":100,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_description","x-stainless-terraform-configurability":"computed_optional"},"host":{"description":"The domain name to include in the tunnel. If `host` is present, `address` must not be present.","example":"*.example.com","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_include_split_tunnel_host","x-stainless-terraform-configurability":"computed_optional"}},"required":["host"],"type":"object","x-ref":"#/components/schemas/teams-devices_include_split_tunnel_with_host"}],"x-ref":"#/components/schemas/teams-devices_split_tunnel_include"},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let teams_devices_split_tunnel_include_response_collection_ref01_data = Object.values(setup.data.existing.teams_devices_split_tunnel_include_response_collection)[0] as any

    // LIST
    const teams_devices_split_tunnel_include_response_collection_ref01_ent = client.TeamsDevicesSplitTunnelIncludeResponseCollection()
    const teams_devices_split_tunnel_include_response_collection_ref01_match: any = {}
    teams_devices_split_tunnel_include_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const teams_devices_split_tunnel_include_response_collection_ref01_list = (await teams_devices_split_tunnel_include_response_collection_ref01_ent.list(teams_devices_split_tunnel_include_response_collection_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const teams_devices_split_tunnel_include_response_collection_ref01_data_up0: any = {}

    const teams_devices_split_tunnel_include_response_collection_ref01_resdata_up0 = (await teams_devices_split_tunnel_include_response_collection_ref01_ent.update(teams_devices_split_tunnel_include_response_collection_ref01_data_up0)).data()
    assert(null != teams_devices_split_tunnel_include_response_collection_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_split_tunnel_include_response_collection/TeamsDevicesSplitTunnelIncludeResponseCollectionTestData.json')

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
    ['teams_devices_split_tunnel_include_response_collection01','teams_devices_split_tunnel_include_response_collection02','teams_devices_split_tunnel_include_response_collection03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SPLIT_TUNNEL_INCLUDE_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SPLIT_TUNNEL_INCLUDE_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SPLIT_TUNNEL_INCLUDE_RESPONSE_COLLECTION_ENTID']
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
  
