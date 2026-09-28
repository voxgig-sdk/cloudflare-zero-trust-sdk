

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


describe('TeamsDevicesDevicesPolicyCertificatesSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesDevicesPolicyCertificatesSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_devices_policy_certificates_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"The current status of the device policy certificate provisioning feature for WARP clients.","t":"`$BOOLEAN`","key$":"enabled","index$":0},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":1}},"name":"teams_devices_devices_policy_certificates_single","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/devices/policy/certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/devices/policy/certificates","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"devices"},{"lit":"policy"},{"lit":"certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/devices/policy/certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/devices/policy/certificates","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"devices"},{"lit":"policy"},{"lit":"certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"teams_devices_devices_policy_certificates_single","name__orig":"teams_devices_devices_policy_certificates_single","Name":"TeamsDevicesDevicesPolicyCertificatesSingle","name_":"teams_devices_devices_policy_certificates_single","name-":"teams-devices-devices-policy-certificates-single","NAME":"TEAMS_DEVICES_DEVICES_POLICY_CERTIFICATES_SINGLE","index$":50}, {"active":true,"entity":"teams_devices_devices_policy_certificates_single","key$":"BasicTeamsDevicesDevicesPolicyCertificatesSingleFlow","kind":"basic","name":"BasicTeamsDevicesDevicesPolicyCertificatesSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_devices_devices_policy_certificates_single_ref01","srcdatavar":"teams_devices_devices_policy_certificates_single_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_devices_policy_certificates_single_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"teams_devices_devices_policy_certificates_single_ref01","srcdatavar":"teams_devices_devices_policy_certificates_single_ref01_data","suffix":"_dt0"},"m":{"id":"teams_devices_devices_policy_certificates_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_devices_policy_certificates_single_ref01"}}],"index$":1}]}, 'TeamsDevicesDevicesPolicyCertificatesSingle', {"GET /zones/{zone_id}/devices/policy/certificates":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/devices/policy/certificates":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"description":"The current status of the device policy certificate provisioning feature for WARP clients.","example":true,"type":"boolean","key$":"enabled"}},"required":["enabled"],"x-ref":"#/components/schemas/teams-devices_devices_policy_certificates","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let teams_devices_devices_policy_certificates_single_ref01_data = Object.values(setup.data.existing.teams_devices_devices_policy_certificates_single)[0] as any

    // UPDATE
    const teams_devices_devices_policy_certificates_single_ref01_ent = client.TeamsDevicesDevicesPolicyCertificatesSingle()
    const teams_devices_devices_policy_certificates_single_ref01_data_up0: any = {}

    const teams_devices_devices_policy_certificates_single_ref01_resdata_up0 = (await teams_devices_devices_policy_certificates_single_ref01_ent.update(teams_devices_devices_policy_certificates_single_ref01_data_up0)).data()
    assert(null != teams_devices_devices_policy_certificates_single_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_devices_policy_certificates_single/TeamsDevicesDevicesPolicyCertificatesSingleTestData.json')

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
    ['teams_devices_devices_policy_certificates_single01','teams_devices_devices_policy_certificates_single02','teams_devices_devices_policy_certificates_single03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICES_POLICY_CERTIFICATES_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICES_POLICY_CERTIFICATES_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICES_POLICY_CERTIFICATES_SINGLE_ENTID']
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
  
