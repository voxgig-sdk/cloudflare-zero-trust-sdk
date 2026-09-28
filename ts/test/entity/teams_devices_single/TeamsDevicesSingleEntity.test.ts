

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


describe('TeamsDevicesSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the device posture rule.","t":"`$STRING`","key$":"description","index$":0},"expiration":{"a":true,"h":"Expiration","n":"expiration","r":false,"sh":"Sets the expiration time for a posture check result.","t":"`$STRING`","key$":"expiration","index$":1},"input":{"a":true,"h":"Input","n":"input","r":false,"sh":"The value to be checked against.","t":"`$OBJECT`","union":{"branches":20,"count":1,"depth":0},"key$":"input","index$":2},"match":{"a":true,"h":"Match","n":"match","r":false,"sh":"The conditions that the client must match to run the rule.","t":"`$ARRAY`","key$":"match","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the device posture rule.","t":"`$STRING`","key$":"name","index$":4},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","union":{"branches":20,"count":1,"depth":2},"key$":"result","index$":5},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":false,"sh":"Polling frequency for the WARP client posture check.","t":"`$STRING`","key$":"schedule","index$":6},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of device posture rule.","t":"`$STRING`","key$":"type","index$":7}},"name":"teams_devices_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/devices/posture","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/devices/posture","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/posture/{rule_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"rule_id","or":"rule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/posture/{rule_id}","q":{"exist":["account_id","rule_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"},{"var":"rule_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/devices/posture/{rule_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"rule_id","or":"rule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/devices/posture/{rule_id}","q":{"exist":["account_id","rule_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"},{"var":"rule_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"teams_devices_single","name__orig":"teams_devices_single","Name":"TeamsDevicesSingle","name_":"teams_devices_single","name-":"teams-devices-single","NAME":"TEAMS_DEVICES_SINGLE","index$":44}, {"active":true,"entity":"teams_devices_single","key$":"BasicTeamsDevicesSingleFlow","kind":"basic","name":"BasicTeamsDevicesSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_devices_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"teams_devices_single_ref01","srcdatavar":"teams_devices_single_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"teams_devices_single_ref01","srcdatavar":"teams_devices_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"teams_devices_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_single_ref01"}}],"index$":2}]}, 'TeamsDevicesSingle', {"POST /accounts/{account_id}/devices/posture":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"The description of the device posture rule.","type":"string","example":"The rule for admin serial numbers","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_description","key$":"description"},"expiration":{"description":"Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.","type":"string","example":"1h","x-ref":"#/components/schemas/teams-devices_expiration","key$":"expiration"},"input":{"description":"The value to be checked against.","type":"object","example":{"operating_system":"linux","path":"/bin/cat","thumbprint":"0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e"},"oneOf":[{"properties":{"exists":{},"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"File Check","type":"object","x-ref":"#/components/schemas/teams-devices_file_input_request"},{"properties":{"id":{},"operating_system":{}},"required":["operating_system","id"],"title":"Unique Client ID","type":"object","x-ref":"#/components/schemas/teams-devices_unique_client_id_input_request"},{"properties":{"domain":{},"operating_system":{}},"required":["operating_system"],"title":"Domain Joined","type":"object","x-ref":"#/components/schemas/teams-devices_domain_joined_input_request"},{"properties":{"operating_system":{},"operator":{},"os_distro_name":{},"os_distro_revision":{},"os_version_extra":{},"version":{}},"required":["operating_system","version","operator"],"title":"OS Version","type":"object","x-ref":"#/components/schemas/teams-devices_os_version_input_request"},{"properties":{"enabled":{},"operating_system":{}},"required":["operating_system","enabled"],"title":"Firewall","type":"object","x-ref":"#/components/schemas/teams-devices_firewall_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Sentinelone","type":"object","x-ref":"#/components/schemas/teams-devices_sentinelone_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Carbonblack","type":"object","x-ref":"#/components/schemas/teams-devices_carbonblack_input_request"},{"properties":{"id":{}},"required":["id"],"title":"Serial Number","type":"object","x-ref":"#/components/schemas/teams-devices_access_serial_number_list_input_request"},{"properties":{"checkDisks":{},"requireAll":{}},"title":"Disk Encryption","type":"object","x-ref":"#/components/schemas/teams-devices_disk_encryption_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Application","type":"object","x-ref":"#/components/schemas/teams-devices_application_input_request"},{"properties":{"certificate_id":{},"cn":{}},"required":["certificate_id","cn"],"title":"Client Certificate","type":"object","x-ref":"#/components/schemas/teams-devices_client_certificate_input_request"},{"properties":{"certificate_id":{},"check_private_key":{},"cn":{},"extended_key_usage":{},"locations":{},"operating_system":{},"subject_alternative_names":{}},"required":["certificate_id","check_private_key","operating_system"],"title":"Client Certificate V2","type":"object","x-ref":"#/components/schemas/teams-devices_client_certificate_v2_input_request"},{"properties":{"update_window_days":{}},"title":"Antivirus","type":"object","x-ref":"#/components/schemas/teams-devices_antivirus_input_request"},{"properties":{"compliance_status":{},"connection_id":{}},"required":["connection_id","compliance_status"],"title":"Workspace One S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_workspace_one_input_request"},{"properties":{"connection_id":{},"last_seen":{},"operator":{},"os":{},"overall":{},"sensor_config":{},"state":{},"version":{},"versionOperator":{}},"required":["connection_id"],"title":"Crowdstrike S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_crowdstrike_input_request"},{"properties":{"compliance_status":{},"connection_id":{}},"required":["connection_id","compliance_status"],"title":"Intune S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_intune_input_request"},{"properties":{"auth_state":{},"connection_id":{},"countOperator":{},"issue_count":{}},"required":["connection_id"],"title":"Kolide S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_kolide_input_request"},{"properties":{"connection_id":{},"eid_last_seen":{},"operator":{},"risk_level":{},"scoreOperator":{},"total_score":{}},"required":["connection_id"],"title":"Tanium S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_tanium_input_request"},{"properties":{"active_threats":{},"connection_id":{},"infected":{},"is_active":{},"network_status":{},"operational_state":{},"operator":{}},"required":["connection_id"],"title":"SentinelOne S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_sentinelone_s2s_input_request"},{"properties":{"connection_id":{},"operator":{},"score":{}},"required":["connection_id","score","operator"],"title":"Custom Device Posture Integration Input","type":"object","x-ref":"#/components/schemas/teams-devices_custom_s2s_input_request"}],"x-ref":"#/components/schemas/teams-devices_input","key$":"input"},"match":{"description":"The conditions that the client must match to run the rule.","type":"array","items":{"type":"object","properties":{"platform":{"enum":[],"example":"windows","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_platform"}},"x-ref":"#/components/schemas/teams-devices_match_item"},"x-ref":"#/components/schemas/teams-devices_match","key$":"match"},"name":{"description":"The name of the device posture rule.","type":"string","example":"Admin Serial Numbers","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_name","key$":"name"},"schedule":{"description":"Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.","type":"string","example":"1h","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schedule","key$":"schedule"},"type":{"description":"The type of device posture rule.","type":"string","example":"file","enum":["file","application","tanium","gateway","warp","disk_encryption","serial_number","sentinelone","carbonblack","firewall","os_version","domain_joined","client_certificate","client_certificate_v2","antivirus","unique_client_id","kolide","tanium_s2s","crowdstrike_s2s","intune","workspace_one","sentinelone_s2s","custom_s2s"],"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_type","key$":"type"}},"required":["name","type"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"GET /accounts/{account_id}/devices/posture/{rule_id}":{"protocol":"http","parameters":[{"name":"rule_id","in":"path","required":true,"schema":{"description":"API UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]},"PUT /accounts/{account_id}/devices/posture/{rule_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"The description of the device posture rule.","type":"string","example":"The rule for admin serial numbers","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_description","key$":"description"},"expiration":{"description":"Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.","type":"string","example":"1h","x-ref":"#/components/schemas/teams-devices_expiration","key$":"expiration"},"input":{"description":"The value to be checked against.","type":"object","example":{"operating_system":"linux","path":"/bin/cat","thumbprint":"0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e"},"oneOf":[{"properties":{"exists":{},"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"File Check","type":"object","x-ref":"#/components/schemas/teams-devices_file_input_request"},{"properties":{"id":{},"operating_system":{}},"required":["operating_system","id"],"title":"Unique Client ID","type":"object","x-ref":"#/components/schemas/teams-devices_unique_client_id_input_request"},{"properties":{"domain":{},"operating_system":{}},"required":["operating_system"],"title":"Domain Joined","type":"object","x-ref":"#/components/schemas/teams-devices_domain_joined_input_request"},{"properties":{"operating_system":{},"operator":{},"os_distro_name":{},"os_distro_revision":{},"os_version_extra":{},"version":{}},"required":["operating_system","version","operator"],"title":"OS Version","type":"object","x-ref":"#/components/schemas/teams-devices_os_version_input_request"},{"properties":{"enabled":{},"operating_system":{}},"required":["operating_system","enabled"],"title":"Firewall","type":"object","x-ref":"#/components/schemas/teams-devices_firewall_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Sentinelone","type":"object","x-ref":"#/components/schemas/teams-devices_sentinelone_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Carbonblack","type":"object","x-ref":"#/components/schemas/teams-devices_carbonblack_input_request"},{"properties":{"id":{}},"required":["id"],"title":"Serial Number","type":"object","x-ref":"#/components/schemas/teams-devices_access_serial_number_list_input_request"},{"properties":{"checkDisks":{},"requireAll":{}},"title":"Disk Encryption","type":"object","x-ref":"#/components/schemas/teams-devices_disk_encryption_input_request"},{"properties":{"operating_system":{},"path":{},"sha256":{},"thumbprint":{}},"required":["path","operating_system"],"title":"Application","type":"object","x-ref":"#/components/schemas/teams-devices_application_input_request"},{"properties":{"certificate_id":{},"cn":{}},"required":["certificate_id","cn"],"title":"Client Certificate","type":"object","x-ref":"#/components/schemas/teams-devices_client_certificate_input_request"},{"properties":{"certificate_id":{},"check_private_key":{},"cn":{},"extended_key_usage":{},"locations":{},"operating_system":{},"subject_alternative_names":{}},"required":["certificate_id","check_private_key","operating_system"],"title":"Client Certificate V2","type":"object","x-ref":"#/components/schemas/teams-devices_client_certificate_v2_input_request"},{"properties":{"update_window_days":{}},"title":"Antivirus","type":"object","x-ref":"#/components/schemas/teams-devices_antivirus_input_request"},{"properties":{"compliance_status":{},"connection_id":{}},"required":["connection_id","compliance_status"],"title":"Workspace One S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_workspace_one_input_request"},{"properties":{"connection_id":{},"last_seen":{},"operator":{},"os":{},"overall":{},"sensor_config":{},"state":{},"version":{},"versionOperator":{}},"required":["connection_id"],"title":"Crowdstrike S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_crowdstrike_input_request"},{"properties":{"compliance_status":{},"connection_id":{}},"required":["connection_id","compliance_status"],"title":"Intune S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_intune_input_request"},{"properties":{"auth_state":{},"connection_id":{},"countOperator":{},"issue_count":{}},"required":["connection_id"],"title":"Kolide S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_kolide_input_request"},{"properties":{"connection_id":{},"eid_last_seen":{},"operator":{},"risk_level":{},"scoreOperator":{},"total_score":{}},"required":["connection_id"],"title":"Tanium S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_tanium_input_request"},{"properties":{"active_threats":{},"connection_id":{},"infected":{},"is_active":{},"network_status":{},"operational_state":{},"operator":{}},"required":["connection_id"],"title":"SentinelOne S2S Input","type":"object","x-ref":"#/components/schemas/teams-devices_sentinelone_s2s_input_request"},{"properties":{"connection_id":{},"operator":{},"score":{}},"required":["connection_id","score","operator"],"title":"Custom Device Posture Integration Input","type":"object","x-ref":"#/components/schemas/teams-devices_custom_s2s_input_request"}],"x-ref":"#/components/schemas/teams-devices_input","key$":"input"},"match":{"description":"The conditions that the client must match to run the rule.","type":"array","items":{"type":"object","properties":{"platform":{"enum":[],"example":"windows","type":"string","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_platform"}},"x-ref":"#/components/schemas/teams-devices_match_item"},"x-ref":"#/components/schemas/teams-devices_match","key$":"match"},"name":{"description":"The name of the device posture rule.","type":"string","example":"Admin Serial Numbers","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_name","key$":"name"},"schedule":{"description":"Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.","type":"string","example":"1h","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schedule","key$":"schedule"},"type":{"description":"The type of device posture rule.","type":"string","example":"file","enum":["file","application","tanium","gateway","warp","disk_encryption","serial_number","sentinelone","carbonblack","firewall","os_version","domain_joined","client_certificate","client_certificate_v2","antivirus","unique_client_id","kolide","tanium_s2s","crowdstrike_s2s","intune","workspace_one","sentinelone_s2s","custom_s2s"],"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_type","key$":"type"}},"required":["name","type"],"index$":1}}}},"parameters":[{"name":"rule_id","in":"path","required":true,"schema":{"description":"API UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_devices_single_ref01_ent = client.TeamsDevicesSingle()
    let teams_devices_single_ref01_data = setup.data.new.teams_devices_single['teams_devices_single_ref01']
    teams_devices_single_ref01_data['account_id'] = setup.idmap['account01']

    teams_devices_single_ref01_data = (await teams_devices_single_ref01_ent.create(teams_devices_single_ref01_data)).data()
    assert(null != teams_devices_single_ref01_data)


    // UPDATE
    const teams_devices_single_ref01_data_up0: any = {}
    teams_devices_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const teams_devices_single_ref01_markdef_up0 = { name: 'description', value: 'Mark01-teams_devices_single_ref01_' + setup.now }
    ;(teams_devices_single_ref01_data_up0 as any)[teams_devices_single_ref01_markdef_up0.name] = teams_devices_single_ref01_markdef_up0.value

    const teams_devices_single_ref01_resdata_up0 = (await teams_devices_single_ref01_ent.update(teams_devices_single_ref01_data_up0)).data()
    assert(null != teams_devices_single_ref01_resdata_up0)

    assert((teams_devices_single_ref01_resdata_up0 as any)[teams_devices_single_ref01_markdef_up0.name] === teams_devices_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_single/TeamsDevicesSingleTestData.json')

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
    ['teams_devices_single01','teams_devices_single02','teams_devices_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SINGLE_ENTID']
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
  
