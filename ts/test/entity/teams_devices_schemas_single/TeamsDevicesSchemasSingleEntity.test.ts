

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


describe('TeamsDevicesSchemasSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.TeamsDevicesSchemasSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_devices_schemas_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"config":{"a":true,"h":"Config","n":"config","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"The configuration object containing third-party integration information.","t":"`$OBJECT`","union":{"branches":8,"count":1,"depth":0},"key$":"config","index$":0},"interval":{"a":true,"h":"Interval","n":"interval","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The interval between each posture check with the third-party API.","t":"`$STRING`","key$":"interval","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the device posture integration.","t":"`$STRING`","key$":"name","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":3},"type":{"a":true,"h":"Type","n":"type","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type of device posture integration.","t":"`$STRING`","key$":"type","index$":4}},"name":"teams_devices_schemas_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/devices/posture/integration","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/devices/posture/integration","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"},{"lit":"integration"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/posture/integration/{integration_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"integration_id","or":"integration_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/posture/integration/{integration_id}","q":{"exist":["account_id","integration_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"},{"lit":"integration"},{"var":"integration_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/devices/posture/integration/{integration_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"integration_id","or":"integration_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/devices/posture/integration/{integration_id}","q":{"exist":["account_id","integration_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"posture"},{"lit":"integration"},{"var":"integration_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.integration"]]},"key$":"teams_devices_schemas_single","name__orig":"teams_devices_schemas_single","Name":"TeamsDevicesSchemasSingle","name_":"teams_devices_schemas_single","name-":"teams-devices-schemas-single","NAME":"TEAMS_DEVICES_SCHEMAS_SINGLE","index$":58}, {"active":true,"entity":"teams_devices_schemas_single","key$":"BasicTeamsDevicesSchemasSingleFlow","kind":"basic","name":"BasicTeamsDevicesSchemasSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_devices_schemas_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"teams_devices_schemas_single_ref01","srcdatavar":"teams_devices_schemas_single_ref01_data","suffix":"_up0","textfield":"interval"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_schemas_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"teams_devices_schemas_single_ref01","srcdatavar":"teams_devices_schemas_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"teams_devices_schemas_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_devices_schemas_single_ref01"}}],"index$":2}]}, 'TeamsDevicesSchemasSingle', {"POST /accounts/{account_id}/devices/posture/integration":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"description":"The configuration object containing third-party integration information.","type":"object","example":{"api_url":"https://as123.awmdm.com/API","auth_url":"https://na.uemauth.workspaceone.com/connect/token","client_id":"example client id","client_secret":"example client secret"},"oneOf":[{"type":"object","properties":{"api_url":{},"auth_url":{},"client_id":{},"client_secret":{}},"required":["api_url","auth_url","client_id","client_secret"],"title":"Workspace One Config","x-ref":"#/components/schemas/teams-devices_workspace_one_config_request"},{"type":"object","properties":{"api_url":{},"client_id":{},"client_secret":{},"customer_id":{}},"required":["api_url","customer_id","client_id","client_secret"],"title":"Crowdstrike Config","x-ref":"#/components/schemas/teams-devices_crowdstrike_config_request"},{"type":"object","properties":{"api_url":{},"client_key":{},"client_secret":{},"customer_id":{}},"required":["api_url","client_key","customer_id","client_secret"],"title":"Uptycs Config","x-ref":"#/components/schemas/teams-devices_uptycs_config_request"},{"type":"object","properties":{"client_id":{},"client_secret":{},"customer_id":{}},"required":["customer_id","client_id","client_secret"],"title":"Intune Config","x-ref":"#/components/schemas/teams-devices_intune_config_request"},{"type":"object","properties":{"client_id":{},"client_secret":{}},"required":["client_id","client_secret"],"title":"Kolide Config","x-ref":"#/components/schemas/teams-devices_kolide_config_request"},{"type":"object","properties":{"access_client_id":{},"access_client_secret":{},"api_url":{},"client_secret":{}},"required":["api_url","client_secret"],"title":"Tanium Config","x-ref":"#/components/schemas/teams-devices_tanium_config_request"},{"type":"object","properties":{"api_url":{},"client_secret":{}},"required":["api_url","client_secret"],"title":"SentinelOne S2S Config","x-ref":"#/components/schemas/teams-devices_sentinelone_s2s_config_request"},{"type":"object","properties":{"access_client_id":{},"access_client_secret":{},"api_url":{}},"required":["api_url","access_client_id","access_client_secret"],"title":"Custom Device Posture Integration Config","x-ref":"#/components/schemas/teams-devices_custom_s2s_config_request"}],"x-ref":"#/components/schemas/teams-devices_config_request","key$":"config"},"interval":{"description":"The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).","type":"string","example":"10m","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_interval","key$":"interval"},"name":{"description":"The name of the device posture integration.","type":"string","example":"My Workspace One Integration","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_components-schemas-name","key$":"name"},"type":{"description":"The type of device posture integration.","type":"string","example":"workspace_one","enum":["workspace_one","crowdstrike_s2s","uptycs","intune","kolide","tanium_s2s","sentinelone_s2s","custom_s2s"],"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schemas-type","key$":"type"}},"required":["name","type","interval","config"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":0}]},"GET /accounts/{account_id}/devices/posture/integration/{integration_id}":{"protocol":"http","parameters":[{"name":"integration_id","in":"path","required":true,"schema":{"description":"API UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]},"PATCH /accounts/{account_id}/devices/posture/integration/{integration_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"description":"The configuration object containing third-party integration information.","type":"object","example":{"api_url":"https://as123.awmdm.com/API","auth_url":"https://na.uemauth.workspaceone.com/connect/token","client_id":"example client id","client_secret":"example client secret"},"oneOf":[{"type":"object","properties":{"api_url":{},"auth_url":{},"client_id":{},"client_secret":{}},"required":["api_url","auth_url","client_id","client_secret"],"title":"Workspace One Config","x-ref":"#/components/schemas/teams-devices_workspace_one_config_request"},{"type":"object","properties":{"api_url":{},"client_id":{},"client_secret":{},"customer_id":{}},"required":["api_url","customer_id","client_id","client_secret"],"title":"Crowdstrike Config","x-ref":"#/components/schemas/teams-devices_crowdstrike_config_request"},{"type":"object","properties":{"api_url":{},"client_key":{},"client_secret":{},"customer_id":{}},"required":["api_url","client_key","customer_id","client_secret"],"title":"Uptycs Config","x-ref":"#/components/schemas/teams-devices_uptycs_config_request"},{"type":"object","properties":{"client_id":{},"client_secret":{},"customer_id":{}},"required":["customer_id","client_id","client_secret"],"title":"Intune Config","x-ref":"#/components/schemas/teams-devices_intune_config_request"},{"type":"object","properties":{"client_id":{},"client_secret":{}},"required":["client_id","client_secret"],"title":"Kolide Config","x-ref":"#/components/schemas/teams-devices_kolide_config_request"},{"type":"object","properties":{"access_client_id":{},"access_client_secret":{},"api_url":{},"client_secret":{}},"required":["api_url","client_secret"],"title":"Tanium Config","x-ref":"#/components/schemas/teams-devices_tanium_config_request"},{"type":"object","properties":{"api_url":{},"client_secret":{}},"required":["api_url","client_secret"],"title":"SentinelOne S2S Config","x-ref":"#/components/schemas/teams-devices_sentinelone_s2s_config_request"},{"type":"object","properties":{"access_client_id":{},"access_client_secret":{},"api_url":{}},"required":["api_url","access_client_id","access_client_secret"],"title":"Custom Device Posture Integration Config","x-ref":"#/components/schemas/teams-devices_custom_s2s_config_request"}],"x-ref":"#/components/schemas/teams-devices_config_request","key$":"config"},"interval":{"description":"The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).","type":"string","example":"10m","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_interval","key$":"interval"},"name":{"description":"The name of the device posture integration.","type":"string","example":"My Workspace One Integration","x-auditable":true,"x-ref":"#/components/schemas/teams-devices_components-schemas-name","key$":"name"},"type":{"description":"The type of device posture integration.","type":"string","example":"workspace_one","enum":["workspace_one","crowdstrike_s2s","uptycs","intune","kolide","tanium_s2s","sentinelone_s2s","custom_s2s"],"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_schemas-type","key$":"type"}},"index$":1}}}},"parameters":[{"name":"integration_id","in":"path","required":true,"schema":{"description":"API UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"699d98642c564d2e855e9661899b7252","x-ref":"#/components/schemas/teams-devices_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_devices_schemas_single_ref01_ent = client.TeamsDevicesSchemasSingle()
    let teams_devices_schemas_single_ref01_data = setup.data.new.teams_devices_schemas_single['teams_devices_schemas_single_ref01']
    teams_devices_schemas_single_ref01_data['account_id'] = setup.idmap['account01']

    teams_devices_schemas_single_ref01_data = (await teams_devices_schemas_single_ref01_ent.create(teams_devices_schemas_single_ref01_data)).data()
    assert(null != teams_devices_schemas_single_ref01_data)


    // UPDATE
    const teams_devices_schemas_single_ref01_data_up0: any = {}
    teams_devices_schemas_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const teams_devices_schemas_single_ref01_markdef_up0 = { name: 'interval', value: 'Mark01-teams_devices_schemas_single_ref01_' + setup.now }
    ;(teams_devices_schemas_single_ref01_data_up0 as any)[teams_devices_schemas_single_ref01_markdef_up0.name] = teams_devices_schemas_single_ref01_markdef_up0.value

    const teams_devices_schemas_single_ref01_resdata_up0 = (await teams_devices_schemas_single_ref01_ent.update(teams_devices_schemas_single_ref01_data_up0)).data()
    assert(null != teams_devices_schemas_single_ref01_resdata_up0)

    assert((teams_devices_schemas_single_ref01_resdata_up0 as any)[teams_devices_schemas_single_ref01_markdef_up0.name] === teams_devices_schemas_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_devices_schemas_single/TeamsDevicesSchemasSingleTestData.json')

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
    ['teams_devices_schemas_single01','teams_devices_schemas_single02','teams_devices_schemas_single03','integration01','integration02','integration03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SCHEMAS_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SCHEMAS_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_SCHEMAS_SINGLE_ENTID']
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
  
