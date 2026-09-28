

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


describe('OneIntegrationUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.OneIntegrationUpdate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'one_integration_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"credentials":{"a":true,"h":"Credentials","n":"credentials","r":false,"sh":"Partial credential fields to merge with existing.","t":"`$OBJECT`","key$":"credentials","index$":0},"dlp_profiles":{"a":true,"h":"Dlp Profiles","n":"dlp_profiles","r":false,"sh":"List of DLP profile IDs to associate with the integration.","t":"`$ARRAY`","key$":"dlp_profiles","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"List of errors.","t":"`$ARRAY`","key$":"errors","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"messages":{"a":true,"h":"Messages","n":"messages","r":false,"sh":"List of messages.","t":"`$ARRAY`","key$":"messages","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the integration.","t":"`$STRING`","key$":"name","index$":5},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"sh":"List of permission scopes granted to the integration.","t":"`$ARRAY`","key$":"permissions","index$":6},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"The requested item.","t":"`$ANY`","key$":"result","index$":7},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the request succeeded.","t":"`$BOOLEAN`","key$":"success","index$":8},"use_cases":{"a":true,"h":"Use Cases","n":"use_cases","r":false,"sh":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","t":"`$ARRAY`","key$":"use_cases","index$":9}},"id":{"field":"id","name":"id"},"name":"one_integration_update","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/one/integrations/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/one/integrations/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"one"},{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"one_integration_update","name__orig":"one_integration_update","Name":"OneIntegrationUpdate","name_":"one_integration_update","name-":"one-integration-update","NAME":"ONE_INTEGRATION_UPDATE","index$":32}, {"active":true,"entity":"one_integration_update","key$":"BasicOneIntegrationUpdateFlow","kind":"basic","name":"BasicOneIntegrationUpdateFlow","param":{},"step":[{"a":true,"d":{"account_id":"account01"},"i":{"ref":"one_integration_update_ref01","srcdatavar":"one_integration_update_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-one_integration_update_ref01"}}],"v":[],"index$":0}]}, 'OneIntegrationUpdate', {"PATCH /accounts/{account_id}/one/integrations/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"examples":{"UpdateCredentials":{"summary":"Example credentials update request","value":{"credentials":{"access_token":"new_access_token","refresh_token":"new_refresh_token"}}},"UpdateFields":{"summary":"Example update integration request","value":{"credentials":{"admin_email":"admin@corp.com"},"dlp_profiles":["e91a2360-da51-4fdf-9711-bcdecd462614"],"name":"My Updated Integration","permissions":["https://www.googleapis.com/auth/drive.readonly"],"use_cases":["casb","ces"]}}},"schema":{"description":"Serializer for v2 integration PATCH requests.","type":"object","properties":{"credentials":{"description":"Partial credential fields to merge with existing.","type":"object","additionalProperties":true,"key$":"credentials"},"dlp_profiles":{"description":"List of DLP profile IDs to associate with the integration.","type":"array","items":{"format":"uuid","type":"string"},"maxItems":20,"key$":"dlp_profiles"},"name":{"description":"Name of the integration.","type":"string","maxLength":256,"minLength":1,"key$":"name"},"permissions":{"description":"List of permission scopes granted to the integration.","type":"array","items":{"minLength":1,"type":"string"},"key$":"permissions"},"use_cases":{"description":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","type":"array","items":{"description":"* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation","enum":["casb","ces","auto_remediation"],"type":"string"},"key$":"use_cases"}},"x-ref":"#/components/schemas/one_PatchedUpdateIntegrationV2Request","index$":1}},"text/plain;charset=UTF-8":{"schema":{"description":"Serializer for v2 integration PATCH requests.","type":"object","properties":{"credentials":{"description":"Partial credential fields to merge with existing.","type":"object","additionalProperties":true,"key$":"credentials"},"dlp_profiles":{"description":"List of DLP profile IDs to associate with the integration.","type":"array","items":{"format":"uuid","type":"string"},"maxItems":20,"key$":"dlp_profiles"},"name":{"description":"Name of the integration.","type":"string","maxLength":256,"minLength":1,"key$":"name"},"permissions":{"description":"List of permission scopes granted to the integration.","type":"array","items":{"minLength":1,"type":"string"},"key$":"permissions"},"use_cases":{"description":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","type":"array","items":{"description":"* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation","enum":["casb","ces","auto_remediation"],"type":"string"},"key$":"use_cases"}},"x-ref":"#/components/schemas/one_PatchedUpdateIntegrationV2Request"}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account identifier.","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0},{"name":"id","in":"path","description":"Integration ID.","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let one_integration_update_ref01_data = Object.values(setup.data.existing.one_integration_update)[0] as any

    // UPDATE
    const one_integration_update_ref01_ent = client.OneIntegrationUpdate()
    const one_integration_update_ref01_data_up0: any = {}
    one_integration_update_ref01_data_up0.id = one_integration_update_ref01_data.id
    one_integration_update_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const one_integration_update_ref01_markdef_up0 = { name: 'name', value: 'Mark01-one_integration_update_ref01_' + setup.now }
    ;(one_integration_update_ref01_data_up0 as any)[one_integration_update_ref01_markdef_up0.name] = one_integration_update_ref01_markdef_up0.value

    const one_integration_update_ref01_resdata_up0 = (await one_integration_update_ref01_ent.update(one_integration_update_ref01_data_up0)).data()
    assert(one_integration_update_ref01_resdata_up0.id === one_integration_update_ref01_data_up0.id)

    assert((one_integration_update_ref01_resdata_up0 as any)[one_integration_update_ref01_markdef_up0.name] === one_integration_update_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/one_integration_update/OneIntegrationUpdateTestData.json')

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
    ['one_integration_update01','one_integration_update02','one_integration_update03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID']
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
  
