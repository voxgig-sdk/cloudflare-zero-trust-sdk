

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


describe('DigitalExperienceMonitoringFleetStatusOverTimeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DigitalExperienceMonitoringFleetStatusOverTime()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'digital_experience_monitoring_fleet_status_over_time.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0}},"name":"digital_experience_monitoring_fleet_status_over_time","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/fleet-status/over-time","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"SJC","k":"query","n":"colo","or":"colo","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","k":"query","n":"device_id","or":"device_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2023-10-11 00:00:00+00","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"2023-10-11 00:00:00+00","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/fleet-status/over-time","q":{"exist":["account_id","colo","device_id","from","to"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"fleet-status"},{"lit":"over-time"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"digital_experience_monitoring_fleet_status_over_time","name__orig":"digital_experience_monitoring_fleet_status_over_time","Name":"DigitalExperienceMonitoringFleetStatusOverTime","name_":"digital_experience_monitoring_fleet_status_over_time","name-":"digital-experience-monitoring-fleet-status-over-time","NAME":"DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_OVER_TIME","index$":15}, {"active":true,"entity":"digital_experience_monitoring_fleet_status_over_time","key$":"BasicDigitalExperienceMonitoringFleetStatusOverTimeFlow","kind":"basic","name":"BasicDigitalExperienceMonitoringFleetStatusOverTimeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"digital_experience_monitoring_fleet_status_over_time_ref01","srcdatavar":"digital_experience_monitoring_fleet_status_over_time_ref01_data","suffix":"_dt0"},"m":{"id":"digital_experience_monitoring_fleet_status_over_time01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-digital_experience_monitoring_fleet_status_over_time_ref01"}}],"index$":0}]}, 'DigitalExperienceMonitoringFleetStatusOverTime', {"GET /accounts/{account_id}/dex/fleet-status/over-time":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"to","in":"query","description":"End of the time range to query. Timestamp can be provided in ISO 8601 datetime format or milliseconds since epoch.","required":true,"schema":{"type":"string","example":"2023-10-11 00:00:00+00","x-ref":"#/components/schemas/digital-experience-monitoring_timestamp"},"index$":1},{"name":"from","in":"query","description":"Start of the time range to query. Timestamp can be provided in ISO 8601 datetime format or milliseconds since epoch.","required":true,"schema":{"type":"string","example":"2023-10-11 00:00:00+00","x-ref":"#/components/schemas/digital-experience-monitoring_timestamp"},"index$":2},{"name":"colo","in":"query","description":"Cloudflare colo airport code.","schema":{"description":"Cloudflare colo airport code.","type":"string","example":"SJC","x-ref":"#/components/schemas/digital-experience-monitoring_colo"},"index$":3},{"name":"device_id","in":"query","description":"Device-specific ID, given as UUID.","schema":{"description":"Unique identifier for the physical device (UUID).","type":"string","example":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","x-ref":"#/components/schemas/digital-experience-monitoring_device_id"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let digital_experience_monitoring_fleet_status_over_time_ref01_data = Object.values(setup.data.existing.digital_experience_monitoring_fleet_status_over_time)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const digital_experience_monitoring_fleet_status_over_time_ref01_ent = client.DigitalExperienceMonitoringFleetStatusOverTime()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/digital_experience_monitoring_fleet_status_over_time/DigitalExperienceMonitoringFleetStatusOverTimeTestData.json')

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
    ['digital_experience_monitoring_fleet_status_over_time01','digital_experience_monitoring_fleet_status_over_time02','digital_experience_monitoring_fleet_status_over_time03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_OVER_TIME_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_OVER_TIME_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_FLEET_STATUS_OVER_TIME_ENTID']
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
  
