

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


describe('OneIntegrationCreateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.OneIntegrationCreate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'one_integration_create.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application":{"a":true,"h":"Application","n":"application","r":true,"sh":"Vendor/application slug (e.g., GOOGLE_WORKSPACE).","t":"`$STRING`","key$":"application","index$":0},"auth_method":{"a":true,"h":"Auth Method","n":"auth_method","r":false,"sh":"Authentication method slug (uses default if omitted).","t":"`$STRING`","key$":"auth_method","index$":1},"credentials":{"a":true,"h":"Credentials","n":"credentials","r":true,"sh":"Credentials for the integration.","t":"`$OBJECT`","key$":"credentials","index$":2},"dlp_profiles":{"a":true,"h":"Dlp Profiles","n":"dlp_profiles","r":false,"sh":"List of DLP profile IDs to associate.","t":"`$ARRAY`","key$":"dlp_profiles","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the integration.","t":"`$STRING`","key$":"name","index$":4},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"sh":"List of permission scopes (uses policy defaults if empty).","t":"`$ARRAY`","key$":"permissions","index$":5},"use_cases":{"a":true,"h":"Use Cases","n":"use_cases","r":false,"sh":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","t":"`$ARRAY`","key$":"use_cases","index$":6}},"name":"one_integration_create","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/one/integrations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/one/integrations","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"one"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"one_integration_create","name__orig":"one_integration_create","Name":"OneIntegrationCreate","name_":"one_integration_create","name-":"one-integration-create","NAME":"ONE_INTEGRATION_CREATE","index$":28}, {"active":true,"entity":"one_integration_create","key$":"BasicOneIntegrationCreateFlow","kind":"basic","name":"BasicOneIntegrationCreateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"one_integration_create_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'OneIntegrationCreate', {"POST /accounts/{account_id}/one/integrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"SampleRequest":{"summary":"Example integration create request","value":{"application":"GOOGLE_WORKSPACE","auth_method":"service_account","credentials":{"admin_email":"admin@corp.com"},"dlp_profiles":["e91a2360-da51-4fdf-9711-bcdecd462614"],"name":"My Google Workspace","permissions":["https://www.googleapis.com/auth/drive.readonly"],"use_cases":["casb","ces"]}}},"schema":{"description":"Serializer for v2 integration create requests.","type":"object","properties":{"application":{"description":"Vendor/application slug (e.g., GOOGLE_WORKSPACE).\n\n* `ANTHROPIC` - ANTHROPIC\n* `AWS` - AWS\n* `BITBUCKET` - BITBUCKET\n* `BOX` - BOX\n* `CONFLUENCE` - CONFLUENCE\n* `DROPBOX` - DROPBOX\n* `GITHUB` - GITHUB\n* `GOOGLE_CLOUD_PLATFORM` - GOOGLE_CLOUD_PLATFORM\n* `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE\n* `JIRA` - JIRA\n* `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL\n* `OPENAI` - OPENAI\n* `SALESFORCE` - SALESFORCE\n* `SERVICENOW` - SERVICENOW\n* `SLACK` - SLACK","type":"string","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK"],"key$":"application"},"auth_method":{"description":"Authentication method slug (uses default if omitted).","type":"string","minLength":1,"nullable":true,"key$":"auth_method"},"credentials":{"description":"Credentials for the integration.","type":"object","additionalProperties":true,"key$":"credentials"},"dlp_profiles":{"description":"List of DLP profile IDs to associate.","type":"array","items":{"format":"uuid","type":"string"},"maxItems":20,"key$":"dlp_profiles"},"name":{"description":"Name of the integration.","type":"string","maxLength":256,"minLength":1,"key$":"name"},"permissions":{"description":"List of permission scopes (uses policy defaults if empty).","type":"array","items":{"minLength":1,"type":"string"},"key$":"permissions"},"use_cases":{"description":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","type":"array","items":{"description":"* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation","enum":["casb","ces","auto_remediation"],"type":"string"},"key$":"use_cases"}},"required":["application","credentials","name"],"x-ref":"#/components/schemas/one_IntegrationV2CreateRequest","index$":1}},"text/plain;charset=UTF-8":{"schema":{"description":"Serializer for v2 integration create requests.","type":"object","properties":{"application":{"description":"Vendor/application slug (e.g., GOOGLE_WORKSPACE).\n\n* `ANTHROPIC` - ANTHROPIC\n* `AWS` - AWS\n* `BITBUCKET` - BITBUCKET\n* `BOX` - BOX\n* `CONFLUENCE` - CONFLUENCE\n* `DROPBOX` - DROPBOX\n* `GITHUB` - GITHUB\n* `GOOGLE_CLOUD_PLATFORM` - GOOGLE_CLOUD_PLATFORM\n* `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE\n* `JIRA` - JIRA\n* `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL\n* `OPENAI` - OPENAI\n* `SALESFORCE` - SALESFORCE\n* `SERVICENOW` - SERVICENOW\n* `SLACK` - SLACK","type":"string","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK"],"key$":"application"},"auth_method":{"description":"Authentication method slug (uses default if omitted).","type":"string","minLength":1,"nullable":true,"key$":"auth_method"},"credentials":{"description":"Credentials for the integration.","type":"object","additionalProperties":true,"key$":"credentials"},"dlp_profiles":{"description":"List of DLP profile IDs to associate.","type":"array","items":{"format":"uuid","type":"string"},"maxItems":20,"key$":"dlp_profiles"},"name":{"description":"Name of the integration.","type":"string","maxLength":256,"minLength":1,"key$":"name"},"permissions":{"description":"List of permission scopes (uses policy defaults if empty).","type":"array","items":{"minLength":1,"type":"string"},"key$":"permissions"},"use_cases":{"description":"List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).","type":"array","items":{"description":"* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation","enum":["casb","ces","auto_remediation"],"type":"string"},"key$":"use_cases"}},"required":["application","credentials","name"],"x-ref":"#/components/schemas/one_IntegrationV2CreateRequest"}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account identifier.","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const one_integration_create_ref01_ent = client.OneIntegrationCreate()
    let one_integration_create_ref01_data = setup.data.new.one_integration_create['one_integration_create_ref01']
    one_integration_create_ref01_data['account_id'] = setup.idmap['account01']

    one_integration_create_ref01_data = (await one_integration_create_ref01_ent.create(one_integration_create_ref01_data)).data()
    assert(null != one_integration_create_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/one_integration_create/OneIntegrationCreateTestData.json')

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
    ['one_integration_create01','one_integration_create02','one_integration_create03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_CREATE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_CREATE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_CREATE_ENTID']
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
  
