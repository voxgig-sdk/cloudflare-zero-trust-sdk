

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


describe('TeamsDevicesZeroTrustAccountDeviceSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesZeroTrustAccountDeviceSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_zero_trust_account_device_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"disable_for_time":{"a":true,"h":"Disable For Time","n":"disable_for_time","r":false,"sh":"Sets the time limit, in seconds, that a user can use an override code to bypass WARP.","t":"`$NUMBER`","key$":"disable_for_time","index$":0},"external_emergency_signal_enabled":{"a":true,"h":"External Emergency Signal Enabled","n":"external_emergency_signal_enabled","r":false,"sh":"Controls whether the external emergency disconnect feature is enabled.","t":"`$BOOLEAN`","key$":"external_emergency_signal_enabled","index$":1},"external_emergency_signal_fingerprint":{"a":true,"h":"External Emergency Signal Fingerprint","n":"external_emergency_signal_fingerprint","r":false,"sh":"The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url.","t":"`$STRING`","key$":"external_emergency_signal_fingerprint","index$":2},"external_emergency_signal_interval":{"a":true,"h":"External Emergency Signal Interval","n":"external_emergency_signal_interval","r":false,"sh":"The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., \"5m\", \"2m30s\", \"1h\").","t":"`$STRING`","key$":"external_emergency_signal_interval","index$":3},"external_emergency_signal_url":{"a":true,"h":"External Emergency Signal Url","n":"external_emergency_signal_url","r":false,"sh":"The HTTPS URL from which to fetch the emergency disconnect signal.","t":"`$STRING`","key$":"external_emergency_signal_url","index$":4},"gateway_proxy_enabled":{"a":true,"h":"Gateway Proxy Enabled","n":"gateway_proxy_enabled","r":false,"sh":"Enable gateway proxy filtering on TCP.","t":"`$BOOLEAN`","key$":"gateway_proxy_enabled","index$":5},"gateway_udp_proxy_enabled":{"a":true,"h":"Gateway Udp Proxy Enabled","n":"gateway_udp_proxy_enabled","r":false,"sh":"Enable gateway proxy filtering on UDP.","t":"`$BOOLEAN`","key$":"gateway_udp_proxy_enabled","index$":6},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":7},"root_certificate_installation_enabled":{"a":true,"h":"Root Certificate Installation Enabled","n":"root_certificate_installation_enabled","r":false,"sh":"Enable installation of cloudflare managed root certificate.","t":"`$BOOLEAN`","key$":"root_certificate_installation_enabled","index$":8},"use_zt_virtual_ip":{"a":true,"h":"Use Zt Virtual Ip","n":"use_zt_virtual_ip","r":false,"sh":"Enable using CGNAT virtual IPv4.","t":"`$BOOLEAN`","key$":"use_zt_virtual_ip","index$":9}},"name":"teams_devices_zero_trust_account_device_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/devices/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/devices/settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/devices/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/devices/settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/devices/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/devices/settings","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"teams_devices_zero_trust_account_device_setting","name__orig":"teams_devices_zero_trust_account_device_setting","Name":"TeamsDevicesZeroTrustAccountDeviceSetting","name_":"teams_devices_zero_trust_account_device_setting","name-":"teams-devices-zero-trust-account-device-setting","NAME":"TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING","index$":62}, {"active":true,"entity":"teams_devices_zero_trust_account_device_setting","key$":"BasicTeamsDevicesZeroTrustAccountDeviceSettingFlow","kind":"basic","name":"BasicTeamsDevicesZeroTrustAccountDeviceSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_devices_zero_trust_account_device_setting_ref01","srcdatavar":"teams_devices_zero_trust_account_device_setting_ref01_data","suffix":"_up0","textfield":"external_emergency_signal_fingerprint"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_zero_trust_account_device_setting_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"teams_devices_zero_trust_account_device_setting_ref01","srcdatavar":"teams_devices_zero_trust_account_device_setting_ref01_data","suffix":"_dt0"},"m":{"id":"teams_devices_zero_trust_account_device_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_zero_trust_account_device_setting_ref01"}}],"index$":1}]}, 'TeamsDevicesZeroTrustAccountDeviceSetting', {"GET /accounts/{account_id}/devices/settings":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"PATCH /accounts/{account_id}/devices/settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"disable_for_time":{"description":"Sets the time limit, in seconds, that a user can use an override code to bypass WARP.","type":"number","x-auditable":true,"key$":"disable_for_time"},"external_emergency_signal_enabled":{"description":"Controls whether the external emergency disconnect feature is enabled.","example":true,"type":"boolean","x-auditable":true,"key$":"external_emergency_signal_enabled"},"external_emergency_signal_fingerprint":{"description":"The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.","example":"abcd1234567890abcd1234567890abcd1234567890abcd1234567890abcd1234","type":"string","x-auditable":true,"key$":"external_emergency_signal_fingerprint"},"external_emergency_signal_interval":{"description":"The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., \"5m\", \"2m30s\", \"1h\"). Minimum 30 seconds.","example":"5m","type":"string","x-auditable":true,"key$":"external_emergency_signal_interval"},"external_emergency_signal_url":{"description":"The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.","example":"https://192.0.2.1/signal","type":"string","x-auditable":true,"key$":"external_emergency_signal_url"},"gateway_proxy_enabled":{"description":"Enable gateway proxy filtering on TCP.","example":true,"type":"boolean","x-auditable":true,"key$":"gateway_proxy_enabled"},"gateway_udp_proxy_enabled":{"description":"Enable gateway proxy filtering on UDP.","example":true,"type":"boolean","x-auditable":true,"key$":"gateway_udp_proxy_enabled"},"root_certificate_installation_enabled":{"description":"Enable installation of cloudflare managed root certificate.","example":true,"type":"boolean","x-auditable":true,"key$":"root_certificate_installation_enabled"},"use_zt_virtual_ip":{"description":"Enable using CGNAT virtual IPv4.","example":true,"type":"boolean","x-auditable":true,"key$":"use_zt_virtual_ip"}},"x-ref":"#/components/schemas/teams-devices_zero-trust-account-device-settings","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"DELETE /accounts/{account_id}/devices/settings":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"PUT /accounts/{account_id}/devices/settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"disable_for_time":{"description":"Sets the time limit, in seconds, that a user can use an override code to bypass WARP.","type":"number","x-auditable":true,"key$":"disable_for_time"},"external_emergency_signal_enabled":{"description":"Controls whether the external emergency disconnect feature is enabled.","example":true,"type":"boolean","x-auditable":true,"key$":"external_emergency_signal_enabled"},"external_emergency_signal_fingerprint":{"description":"The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.","example":"abcd1234567890abcd1234567890abcd1234567890abcd1234567890abcd1234","type":"string","x-auditable":true,"key$":"external_emergency_signal_fingerprint"},"external_emergency_signal_interval":{"description":"The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., \"5m\", \"2m30s\", \"1h\"). Minimum 30 seconds.","example":"5m","type":"string","x-auditable":true,"key$":"external_emergency_signal_interval"},"external_emergency_signal_url":{"description":"The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.","example":"https://192.0.2.1/signal","type":"string","x-auditable":true,"key$":"external_emergency_signal_url"},"gateway_proxy_enabled":{"description":"Enable gateway proxy filtering on TCP.","example":true,"type":"boolean","x-auditable":true,"key$":"gateway_proxy_enabled"},"gateway_udp_proxy_enabled":{"description":"Enable gateway proxy filtering on UDP.","example":true,"type":"boolean","x-auditable":true,"key$":"gateway_udp_proxy_enabled"},"root_certificate_installation_enabled":{"description":"Enable installation of cloudflare managed root certificate.","example":true,"type":"boolean","x-auditable":true,"key$":"root_certificate_installation_enabled"},"use_zt_virtual_ip":{"description":"Enable using CGNAT virtual IPv4.","example":true,"type":"boolean","x-auditable":true,"key$":"use_zt_virtual_ip"}},"x-ref":"#/components/schemas/teams-devices_zero-trust-account-device-settings","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let teams_devices_zero_trust_account_device_setting_ref01_data = Object.values(setup.data.existing.teams_devices_zero_trust_account_device_setting)[0] as any

    // UPDATE
    const teams_devices_zero_trust_account_device_setting_ref01_ent = client.TeamsDevicesZeroTrustAccountDeviceSetting()
    const teams_devices_zero_trust_account_device_setting_ref01_data_up0: any = {}

    const teams_devices_zero_trust_account_device_setting_ref01_markdef_up0 = { name: 'external_emergency_signal_fingerprint', value: 'Mark01-teams_devices_zero_trust_account_device_setting_ref01_' + setup.now }
    ;(teams_devices_zero_trust_account_device_setting_ref01_data_up0 as any)[teams_devices_zero_trust_account_device_setting_ref01_markdef_up0.name] = teams_devices_zero_trust_account_device_setting_ref01_markdef_up0.value

    const teams_devices_zero_trust_account_device_setting_ref01_resdata_up0 = (await teams_devices_zero_trust_account_device_setting_ref01_ent.update(teams_devices_zero_trust_account_device_setting_ref01_data_up0)).data()
    assert(null != teams_devices_zero_trust_account_device_setting_ref01_resdata_up0)

    assert((teams_devices_zero_trust_account_device_setting_ref01_resdata_up0 as any)[teams_devices_zero_trust_account_device_setting_ref01_markdef_up0.name] === teams_devices_zero_trust_account_device_setting_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_zero_trust_account_device_setting/TeamsDevicesZeroTrustAccountDeviceSettingTestData.json')

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
    ['teams_devices_zero_trust_account_device_setting01','teams_devices_zero_trust_account_device_setting02','teams_devices_zero_trust_account_device_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID']
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
  
