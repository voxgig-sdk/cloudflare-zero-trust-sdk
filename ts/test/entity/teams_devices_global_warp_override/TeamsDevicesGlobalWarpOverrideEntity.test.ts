

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


describe('TeamsDevicesGlobalWarpOverrideEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesGlobalWarpOverride()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_global_warp_override.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"disconnect":{"a":true,"h":"Disconnect","n":"disconnect","r":true,"sh":"Disconnects all devices on the account using Global WARP override.","t":"`$BOOLEAN`","key$":"disconnect","index$":0},"justification":{"a":true,"h":"Justification","n":"justification","r":false,"sh":"Reasoning for setting the Global WARP override state.","t":"`$STRING`","key$":"justification","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2}},"name":"teams_devices_global_warp_override","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/devices/resilience/disconnect","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/devices/resilience/disconnect","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"resilience"},{"lit":"disconnect"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/resilience/disconnect","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/resilience/disconnect","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"resilience"},{"lit":"disconnect"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"teams_devices_global_warp_override","name__orig":"teams_devices_global_warp_override","Name":"TeamsDevicesGlobalWarpOverride","name_":"teams_devices_global_warp_override","name-":"teams-devices-global-warp-override","NAME":"TEAMS_DEVICES_GLOBAL_WARP_OVERRIDE","index$":52}, {"active":true,"entity":"teams_devices_global_warp_override","key$":"BasicTeamsDevicesGlobalWarpOverrideFlow","kind":"basic","name":"BasicTeamsDevicesGlobalWarpOverrideFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_devices_global_warp_override_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"teams_devices_global_warp_override_ref01","srcdatavar":"teams_devices_global_warp_override_ref01_data","suffix":"_dt0"},"m":{"id":"teams_devices_global_warp_override01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_global_warp_override_ref01"}}],"index$":1}]}, 'TeamsDevicesGlobalWarpOverride', {"POST /accounts/{account_id}/devices/resilience/disconnect":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"disconnect":{"description":"Disconnects all devices on the account using Global WARP override.","type":"boolean","example":false,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_disconnect","key$":"disconnect"},"justification":{"description":"Reasoning for setting the Global WARP override state. This will be surfaced in the audit log.","type":"string","example":"Turning off WARP for testing purposes.","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_justification","key$":"justification"}},"required":["disconnect"],"title":"Global WARP override request","x-ref":"#/components/schemas/teams-devices_global_warp_override_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"GET /accounts/{account_id}/devices/resilience/disconnect":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_devices_global_warp_override_ref01_ent = client.TeamsDevicesGlobalWarpOverride()
    let teams_devices_global_warp_override_ref01_data = setup.data.new.teams_devices_global_warp_override['teams_devices_global_warp_override_ref01']
    teams_devices_global_warp_override_ref01_data['account_id'] = setup.idmap['account01']

    teams_devices_global_warp_override_ref01_data = (await teams_devices_global_warp_override_ref01_ent.create(teams_devices_global_warp_override_ref01_data)).data()
    assert(null != teams_devices_global_warp_override_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_global_warp_override/TeamsDevicesGlobalWarpOverrideTestData.json')

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
    ['teams_devices_global_warp_override01','teams_devices_global_warp_override02','teams_devices_global_warp_override03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_GLOBAL_WARP_OVERRIDE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_GLOBAL_WARP_OVERRIDE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_GLOBAL_WARP_OVERRIDE_ENTID']
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
  
