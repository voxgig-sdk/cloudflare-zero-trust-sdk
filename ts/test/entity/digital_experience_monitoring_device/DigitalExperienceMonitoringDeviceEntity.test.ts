

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


describe('DigitalExperienceMonitoringDeviceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DigitalExperienceMonitoringDevice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'digital_experience_monitoring_device.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alwaysOn":{"a":true,"h":"Always On","n":"alwaysOn","r":false,"t":"`$BOOLEAN`","key$":"alwaysOn","index$":0},"batteryCharging":{"a":true,"h":"Battery Charging","n":"batteryCharging","r":false,"t":"`$BOOLEAN`","key$":"batteryCharging","index$":1},"batteryCycles":{"a":true,"fo":"int64","h":"Battery Cycles","n":"batteryCycles","r":false,"t":"`$INTEGER`","key$":"batteryCycles","index$":2},"batteryPct":{"a":true,"fo":"float","h":"Battery Pct","n":"batteryPct","r":false,"t":"`$NUMBER`","key$":"batteryPct","index$":3},"colo":{"a":true,"h":"Colo","n":"colo","r":true,"sh":"Cloudflare colo airport code.","t":"`$STRING`","key$":"colo","index$":4},"connectionType":{"a":true,"h":"Connection Type","n":"connectionType","r":false,"t":"`$STRING`","key$":"connectionType","index$":5},"cpuPct":{"a":true,"fo":"float","h":"Cpu Pct","n":"cpuPct","r":false,"t":"`$NUMBER`","key$":"cpuPct","index$":6},"cpuPctByApp":{"a":true,"h":"Cpu Pct By App","n":"cpuPctByApp","r":false,"t":"`$ARRAY`","key$":"cpuPctByApp","index$":7},"deviceId":{"a":true,"h":"Device Id","n":"deviceId","r":true,"sh":"Device identifier (UUID v4)","t":"`$STRING`","key$":"deviceId","index$":8},"deviceIpv4":{"a":true,"h":"Device Ipv4","n":"deviceIpv4","r":false,"t":"`$OBJECT`","key$":"deviceIpv4","index$":9},"deviceIpv6":{"a":true,"h":"Device Ipv6","n":"deviceIpv6","r":false,"t":"`$OBJECT`","key$":"deviceIpv6","index$":10},"deviceName":{"a":true,"h":"Device Name","n":"deviceName","r":false,"sh":"Device identifier (human readable).","t":"`$STRING`","key$":"deviceName","index$":11},"deviceRegistration":{"a":true,"de":true,"h":"Device Registration","n":"deviceRegistration","r":false,"sh":"Deprecated: use registrationId.","t":"`$STRING`","key$":"deviceRegistration","index$":12},"diskReadBps":{"a":true,"fo":"int64","h":"Disk Read Bps","n":"diskReadBps","r":false,"t":"`$INTEGER`","key$":"diskReadBps","index$":13},"diskUsagePct":{"a":true,"fo":"float","h":"Disk Usage Pct","n":"diskUsagePct","r":false,"t":"`$NUMBER`","key$":"diskUsagePct","index$":14},"diskWriteBps":{"a":true,"fo":"int64","h":"Disk Write Bps","n":"diskWriteBps","r":false,"t":"`$INTEGER`","key$":"diskWriteBps","index$":15},"dohSubdomain":{"a":true,"h":"Doh Subdomain","n":"dohSubdomain","r":false,"t":"`$STRING`","key$":"dohSubdomain","index$":16},"estimatedLossPct":{"a":true,"fo":"float","h":"Estimated Loss Pct","n":"estimatedLossPct","r":false,"t":"`$NUMBER`","key$":"estimatedLossPct","index$":17},"firewallEnabled":{"a":true,"h":"Firewall Enabled","n":"firewallEnabled","r":false,"t":"`$BOOLEAN`","key$":"firewallEnabled","index$":18},"gatewayIpv4":{"a":true,"h":"Gateway Ipv4","n":"gatewayIpv4","r":false,"t":"`$OBJECT`","key$":"gatewayIpv4","index$":19},"gatewayIpv6":{"a":true,"h":"Gateway Ipv6","n":"gatewayIpv6","r":false,"t":"`$OBJECT`","key$":"gatewayIpv6","index$":20},"handshakeLatencyMs":{"a":true,"fo":"int64","h":"Handshake Latency Ms","n":"handshakeLatencyMs","r":false,"t":"`$NUMBER`","key$":"handshakeLatencyMs","index$":21},"ispIpv4":{"a":true,"h":"Isp Ipv4","n":"ispIpv4","r":false,"t":"`$OBJECT`","key$":"ispIpv4","index$":22},"ispIpv6":{"a":true,"h":"Isp Ipv6","n":"ispIpv6","r":false,"t":"`$OBJECT`","key$":"ispIpv6","index$":23},"metal":{"a":true,"h":"Metal","n":"metal","r":false,"t":"`$STRING`","key$":"metal","index$":24},"mode":{"a":true,"h":"Mode","n":"mode","r":true,"sh":"The mode under which the WARP client is run.","t":"`$STRING`","key$":"mode","index$":25},"networkRcvdBps":{"a":true,"fo":"int64","h":"Network Rcvd Bps","n":"networkRcvdBps","r":false,"t":"`$INTEGER`","key$":"networkRcvdBps","index$":26},"networkSentBps":{"a":true,"fo":"int64","h":"Network Sent Bps","n":"networkSentBps","r":false,"t":"`$INTEGER`","key$":"networkSentBps","index$":27},"networkSsid":{"a":true,"h":"Network Ssid","n":"networkSsid","r":false,"t":"`$STRING`","key$":"networkSsid","index$":28},"personEmail":{"a":true,"h":"Person Email","n":"personEmail","r":false,"sh":"User contact email address","t":"`$STRING`","key$":"personEmail","index$":29},"platform":{"a":true,"h":"Platform","n":"platform","r":true,"sh":"Operating system.","t":"`$STRING`","key$":"platform","index$":30},"ramAvailableKb":{"a":true,"fo":"int64","h":"Ram Available Kb","n":"ramAvailableKb","r":false,"t":"`$INTEGER`","key$":"ramAvailableKb","index$":31},"ramUsedPct":{"a":true,"fo":"float","h":"Ram Used Pct","n":"ramUsedPct","r":false,"t":"`$NUMBER`","key$":"ramUsedPct","index$":32},"ramUsedPctByApp":{"a":true,"h":"Ram Used Pct By App","n":"ramUsedPctByApp","r":false,"t":"`$ARRAY`","key$":"ramUsedPctByApp","index$":33},"registrationId":{"a":true,"h":"Registration Id","n":"registrationId","r":false,"sh":"Device registration identifier (UUID v4).","t":"`$STRING`","key$":"registrationId","index$":34},"rtt":{"a":true,"h":"Rtt","n":"rtt","r":false,"sh":"Round-trip time statistics for the WARP tunnel.","t":"`$OBJECT`","key$":"rtt","index$":35},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Network status.","t":"`$STRING`","key$":"status","index$":36},"switchLocked":{"a":true,"h":"Switch Locked","n":"switchLocked","r":false,"t":"`$BOOLEAN`","key$":"switchLocked","index$":37},"timestamp":{"a":true,"h":"Timestamp","n":"timestamp","r":true,"t":"`$STRING`","key$":"timestamp","index$":38},"tunnelStats":{"a":true,"h":"Tunnel Stats","n":"tunnelStats","r":false,"sh":"WARP tunnel packet and byte counters.","t":"`$OBJECT`","key$":"tunnelStats","index$":39},"tunnelType":{"a":true,"h":"Tunnel Type","n":"tunnelType","r":false,"t":"`$STRING`","key$":"tunnelType","index$":40},"version":{"a":true,"h":"Version","n":"version","r":true,"sh":"WARP client version.","t":"`$STRING`","key$":"version","index$":41},"wifiStrengthDbm":{"a":true,"fo":"int64","h":"Wifi Strength Dbm","n":"wifiStrengthDbm","r":false,"t":"`$INTEGER`","key$":"wifiStrengthDbm","index$":42}},"name":"digital_experience_monitoring_device","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","k":"param","n":"device_id","or":"device_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"SJC","k":"query","n":"colo","or":"colo","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"since_minute","or":"since_minute","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"2023-10-11T00:00:00Z","k":"query","n":"time_now","or":"time_now","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live","q":{"exist":["account_id","colo","device_id","since_minute","time_now"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"devices"},{"var":"device_id"},{"lit":"fleet-status"},{"lit":"live"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"digital_experience_monitoring_device","name__orig":"digital_experience_monitoring_device","Name":"DigitalExperienceMonitoringDevice","name_":"digital_experience_monitoring_device","name-":"digital-experience-monitoring-device","NAME":"DIGITAL_EXPERIENCE_MONITORING_DEVICE","index$":6}, {"active":true,"entity":"digital_experience_monitoring_device","key$":"BasicDigitalExperienceMonitoringDeviceFlow","kind":"basic","name":"BasicDigitalExperienceMonitoringDeviceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","device_id":"device01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"digital_experience_monitoring_device_ref01"}}],"index$":0}]}, 'DigitalExperienceMonitoringDevice', {"GET /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"device_id","in":"path","description":"Device-specific ID, given as UUID.","required":true,"schema":{"description":"Unique identifier for the physical device (UUID).","type":"string","example":"cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7","x-ref":"#/components/schemas/digital-experience-monitoring_device_id"},"index$":1},{"name":"since_minutes","in":"query","description":"Number of minutes before current time.","required":true,"schema":{"description":"Number of minutes before current time.","type":"number","example":10,"default":10,"maximum":60,"minimum":1,"x-ref":"#/components/schemas/digital-experience-monitoring_since_minutes"},"index$":2},{"name":"time_now","in":"query","description":"Current time in ISO format.","schema":{"description":"Current time. Timestamp can be provided in ISO 8601 datetime format or milliseconds since epoch.","type":"string","example":"2023-10-11T00:00:00Z","x-ref":"#/components/schemas/digital-experience-monitoring_time_now"},"deprecated":true,"x-stainless-deprecation-message":"This parameter is deprecated and will be removed in the future.","index$":3},{"name":"colo","in":"query","description":"List of data centers to filter results.","schema":{"description":"Cloudflare colo airport code.","type":"string","example":"SJC","x-ref":"#/components/schemas/digital-experience-monitoring_colo"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let digital_experience_monitoring_device_ref01_data = Object.values(setup.data.existing.digital_experience_monitoring_device)[0] as any

    // LIST
    const digital_experience_monitoring_device_ref01_ent = client.DigitalExperienceMonitoringDevice()
    const digital_experience_monitoring_device_ref01_match: any = {}
    digital_experience_monitoring_device_ref01_match['account_id'] = setup.idmap['account01']
    digital_experience_monitoring_device_ref01_match['device_id'] = setup.idmap['device01']

    const digital_experience_monitoring_device_ref01_list = (await digital_experience_monitoring_device_ref01_ent.list(digital_experience_monitoring_device_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/digital_experience_monitoring_device/DigitalExperienceMonitoringDeviceTestData.json')

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
    ['digital_experience_monitoring_device01','digital_experience_monitoring_device02','digital_experience_monitoring_device03','account01','device01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEVICE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEVICE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEVICE_ENTID']
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
  
