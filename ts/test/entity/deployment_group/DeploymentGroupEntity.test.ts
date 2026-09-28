

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


describe('DeploymentGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DeploymentGroup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deployment_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"A user-friendly name for the deployment group.","t":"`$STRING`","key$":"name","index$":3},"policy_ids":{"a":true,"h":"Policy Ids","n":"policy_ids","r":false,"sh":"Contains an optional list of policy IDs assigned to a group.","t":"`$ARRAY`","key$":"policy_ids","index$":4},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":5},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"t":"`$OBJECT`","key$":"result_info","index$":6},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":7},"version_config":{"a":true,"h":"Version Config","n":"version_config","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Contains at least one version configuration.","t":"`$ARRAY`","key$":"version_config","index$":8}},"id":{"field":"id","name":"id"},"name":"deployment_group","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/devices/deployment-groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/devices/deployment-groups","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"deployment-groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/deployment-groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/deployment-groups","q":{"exist":["account_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"deployment-groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/devices/deployment-groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/devices/deployment-groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"deployment-groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/devices/deployment-groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/devices/deployment-groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"deployment-groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/devices/deployment-groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/devices/deployment-groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"devices"},{"lit":"deployment-groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"deployment_group","name__orig":"deployment_group","Name":"DeploymentGroup","name_":"deployment_group","name-":"deployment-group","NAME":"DEPLOYMENT_GROUP","index$":5}, {"active":true,"entity":"deployment_group","key$":"BasicDeploymentGroupFlow","kind":"basic","name":"BasicDeploymentGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"deployment_group_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"deployment_group_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"deployment_group_ref01","srcdatavar":"deployment_group_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-deployment_group_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"deployment_group_ref01","srcdatavar":"deployment_group_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"deployment_group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-deployment_group_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"deployment_group_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"deployment_group01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"deployment_group_ref01"}}],"index$":5}]}, 'DeploymentGroup', {"POST /accounts/{account_id}/devices/deployment-groups":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"A user-friendly name for the deployment group.","type":"string","example":"Engineering Ring 0","maxLength":255,"minLength":1,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_deployment_group_name","key$":"name"},"policy_ids":{"description":"Contains an optional list of policy IDs assigned to a group.","type":"array","items":{"type":"string"},"key$":"policy_ids"},"version_config":{"description":"Contains at least one version configuration.","type":"array","items":{"type":"object","properties":{"target_environment":{"description":"The target environment for the client version (e.g., windows, macos).","example":"windows","nullable":true,"type":"string","x-auditable":true},"version":{"description":"The specific client version to deploy.","example":"2026.6.234.0","type":"string","x-auditable":true}},"required":["version","target_environment"],"x-ref":"#/components/schemas/teams-devices_version_config"},"minItems":1,"key$":"version_config"}},"required":["name","version_config"],"x-ref":"#/components/schemas/teams-devices_deployment_group_create_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/devices/deployment-groups":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","description":"The page number to return.","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"The maximum number of deployment groups to return per page.","schema":{"type":"integer","default":50,"maximum":100,"minimum":1},"index$":2}]},"GET /accounts/{account_id}/devices/deployment-groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string"},"index$":1}]},"DELETE /accounts/{account_id}/devices/deployment-groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string"},"index$":1}]},"PATCH /accounts/{account_id}/devices/deployment-groups/{group_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"A user-friendly name for the deployment group.","type":"string","example":"Engineering Ring 0","maxLength":255,"minLength":1,"x-auditable":true,"x-ref":"#/components/schemas/teams-devices_deployment_group_name","key$":"name"},"policy_ids":{"description":"Replaces the entire list of policy IDs.","type":"array","items":{"type":"string"},"key$":"policy_ids"},"version_config":{"description":"Replaces the entire version_config array.","type":"array","items":{"type":"object","properties":{"target_environment":{"description":"The target environment for the client version (e.g., windows, macos).","example":"windows","nullable":true,"type":"string","x-auditable":true},"version":{"description":"The specific client version to deploy.","example":"2026.6.234.0","type":"string","x-auditable":true}},"required":["version","target_environment"],"x-ref":"#/components/schemas/teams-devices_version_config"},"key$":"version_config"}},"x-ref":"#/components/schemas/teams-devices_deployment_group_update_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const deployment_group_ref01_ent = client.DeploymentGroup()
    let deployment_group_ref01_data = setup.data.new.deployment_group['deployment_group_ref01']
    deployment_group_ref01_data['account_id'] = setup.idmap['account01']

    deployment_group_ref01_data = (await deployment_group_ref01_ent.create(deployment_group_ref01_data)).data()
    assert(null != deployment_group_ref01_data.id)


    // LIST
    const deployment_group_ref01_match: any = {}
    deployment_group_ref01_match['account_id'] = setup.idmap['account01']

    const deployment_group_ref01_list = (await deployment_group_ref01_ent.list(deployment_group_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(deployment_group_ref01_list, { id: deployment_group_ref01_data.id })))


    // UPDATE
    const deployment_group_ref01_data_up0: any = {}
    deployment_group_ref01_data_up0.id = deployment_group_ref01_data.id
    deployment_group_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const deployment_group_ref01_markdef_up0 = { name: 'name', value: 'Mark01-deployment_group_ref01_' + setup.now }
    ;(deployment_group_ref01_data_up0 as any)[deployment_group_ref01_markdef_up0.name] = deployment_group_ref01_markdef_up0.value

    const deployment_group_ref01_resdata_up0 = (await deployment_group_ref01_ent.update(deployment_group_ref01_data_up0)).data()
    assert(deployment_group_ref01_resdata_up0.id === deployment_group_ref01_data_up0.id)

    assert((deployment_group_ref01_resdata_up0 as any)[deployment_group_ref01_markdef_up0.name] === deployment_group_ref01_markdef_up0.value)


    // LOAD
    const deployment_group_ref01_match_dt0: any = {}
    deployment_group_ref01_match_dt0.id = deployment_group_ref01_data.id
    const deployment_group_ref01_data_dt0 = (await deployment_group_ref01_ent.load(deployment_group_ref01_match_dt0)).data()
    assert(deployment_group_ref01_data_dt0.id === deployment_group_ref01_data.id)


    // REMOVE
    const deployment_group_ref01_match_rm0: any = { id: deployment_group_ref01_data.id }
    await deployment_group_ref01_ent.remove(deployment_group_ref01_match_rm0)
  

    // LIST
    const deployment_group_ref01_match_rt0: any = {}
    deployment_group_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const deployment_group_ref01_list_rt0 = (await deployment_group_ref01_ent.list(deployment_group_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(deployment_group_ref01_list_rt0, { id: deployment_group_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/deployment_group/DeploymentGroupTestData.json')

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
    ['deployment_group01','deployment_group02','deployment_group03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DEPLOYMENT_GROUP_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DEPLOYMENT_GROUP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DEPLOYMENT_GROUP_ENTID']
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
  
