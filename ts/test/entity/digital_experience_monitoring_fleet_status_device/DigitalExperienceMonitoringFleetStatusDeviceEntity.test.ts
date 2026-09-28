

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


describe('DigitalExperienceMonitoringFleetStatusDeviceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DigitalExperienceMonitoringFleetStatusDevice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'digital_experience_monitoring_fleet_status_device.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"digital_experience_monitoring_fleet_status_device","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/fleet-status/devices","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"SJC","k":"query","n":"colo","or":"colo","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","k":"query","n":"device_id","or":"device_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2023-10-11 00:00:00+00","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"proxy","k":"query","n":"mode","or":"mode","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":true,"t":"`$NUMBER`","index$":4},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":true,"t":"`$NUMBER`","index$":5},{"a":true,"ex":"windows","k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":"timestamp","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"last_seen","k":"query","n":"source","or":"source","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"connected","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"2023-10-11 00:00:00+00","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":10},{"a":true,"ex":"1.0.0","k":"query","n":"version","or":"version","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/fleet-status/devices","q":{"exist":["account_id","colo","device_id","from","mode","page","per_page","platform","sort_by","source","status","to","version"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"fleet-status"},{"lit":"devices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"digital_experience_monitoring_fleet_status_device","name__orig":"digital_experience_monitoring_fleet_status_device","Name":"DigitalExperienceMonitoringFleetStatusDevice","name_":"digital_experience_monitoring_fleet_status_device","name-":"digital-experience-monitoring-fleet-status-device","NAME":"DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_DEVICE","index$":10}, {"active":true,"entity":"digital_experience_monitoring_fleet_status_device","key$":"BasicDigitalExperienceMonitoringFleetStatusDeviceFlow","kind":"basic","name":"BasicDigitalExperienceMonitoringFleetStatusDeviceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"digital_experience_monitoring_fleet_status_device_ref01"}}],"index$":0}]}, 'DigitalExperienceMonitoringFleetStatusDevice', {"GET /accounts/{account_id}/dex/fleet-status/devices":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"to","in":"query","description":"End of the time range to query. Timestamp can be provided in ISO 8601 datetime format or milliseconds since epoch.","required":true,"schema":{"type":"string","example":"2023-10-11 00:00:00+00","x-ref":"#/components/schemas/digital-experience-monitoring_timestamp"},"index$":1},{"name":"from","in":"query","description":"Start of the time range to query. Timestamp can be provided in ISO 8601 datetime format or milliseconds since epoch.","required":true,"schema":{"type":"string","example":"2023-10-11 00:00:00+00","x-ref":"#/components/schemas/digital-experience-monitoring_timestamp"},"index$":2},{"name":"page","in":"query","description":"Page number of paginated results.","required":true,"schema":{"description":"Page number of paginated results.","type":"number","example":1,"default":1,"minimum":1,"x-ref":"#/components/schemas/digital-experience-monitoring_page"},"index$":3},{"name":"per_page","in":"query","description":"Number of results per page.","required":true,"schema":{"description":"Number of results per page.","type":"number","example":10,"maximum":50,"minimum":1,"x-ref":"#/components/schemas/digital-experience-monitoring_per_page"},"index$":4},{"name":"sort_by","in":"query","description":"Dimension to sort results by.","schema":{"description":"Dimension to sort results by.","type":"string","default":"timestamp","enum":["colo","device_id","mode","platform","status","timestamp","version"],"x-ref":"#/components/schemas/digital-experience-monitoring_sort_by"},"index$":5},{"name":"colo","in":"query","description":"Cloudflare colo airport code.","schema":{"description":"Cloudflare colo airport code.","type":"string","example":"SJC","x-ref":"#/components/schemas/digital-experience-monitoring_colo"},"index$":6},{"name":"device_id","in":"query","description":"Device-specific ID, given as UUID.","schema":{"description":"Unique identifier for the physical device (UUID).","type":"string","example":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","x-ref":"#/components/schemas/digital-experience-monitoring_device_id"},"index$":7},{"name":"mode","in":"query","description":"The mode under which the WARP client is run.","schema":{"description":"The mode under which the WARP client is run.","type":"string","example":"proxy","x-ref":"#/components/schemas/digital-experience-monitoring_mode"},"x-fern-parameter-name":"device-mode","index$":8},{"name":"status","in":"query","description":"Network status.","schema":{"description":"Network status.","type":"string","example":"connected","x-ref":"#/components/schemas/digital-experience-monitoring_status"},"index$":9},{"name":"platform","in":"query","description":"Operating system.","schema":{"description":"Operating system.","type":"string","example":"windows","x-ref":"#/components/schemas/digital-experience-monitoring_platform"},"index$":10},{"name":"version","in":"query","description":"WARP client version.","schema":{"description":"WARP client version.","type":"string","example":"1.0.0","x-ref":"#/components/schemas/digital-experience-monitoring_version"},"x-fern-parameter-name":"warp-version","index$":11},{"name":"source","in":"query","description":"Source:\n  * `hourly` - device details aggregated hourly, up to 7 days prior\n  * `last_seen` - device details, up to 60 minutes prior. Time windows exceeding 60 minutes will be rejected from June 1st, 2026. Please use 'hourly' or 'raw' instead for longer time ranges.\n  * `raw` - device details, up to 7 days prior\n","schema":{"description":"Specifies fleet status details source.","type":"string","example":"last_seen","default":"last_seen","enum":["last_seen","hourly","raw"],"x-ref":"#/components/schemas/digital-experience-monitoring_source"},"index$":12}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let digital_experience_monitoring_fleet_status_device_ref01_data = Object.values(setup.data.existing.digital_experience_monitoring_fleet_status_device)[0] as any

    // LIST
    const digital_experience_monitoring_fleet_status_device_ref01_ent = client.DigitalExperienceMonitoringFleetStatusDevice()
    const digital_experience_monitoring_fleet_status_device_ref01_match: any = {}
    digital_experience_monitoring_fleet_status_device_ref01_match['account_id'] = setup.idmap['account01']

    const digital_experience_monitoring_fleet_status_device_ref01_list = (await digital_experience_monitoring_fleet_status_device_ref01_ent.list(digital_experience_monitoring_fleet_status_device_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/digital_experience_monitoring_fleet_status_device/DigitalExperienceMonitoringFleetStatusDeviceTestData.json')

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
    ['digital_experience_monitoring_fleet_status_device01','digital_experience_monitoring_fleet_status_device02','digital_experience_monitoring_fleet_status_device03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_DEVICE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_DEVICE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_DEVICE_ENTID']
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
  
