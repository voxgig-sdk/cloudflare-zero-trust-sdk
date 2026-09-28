

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


describe('OnePaginatedSetupFlowListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.OnePaginatedSetupFlowList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'one_paginated_setup_flow_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth_config":{"a":true,"h":"Auth Config","n":"auth_config","r":false,"sh":"OAuth configuration (present for OAuth-based flows).","t":"`$ANY`","key$":"auth_config","index$":0},"default":{"a":true,"h":"Default","n":"default","r":true,"sh":"Whether this is the default auth method.","t":"`$BOOLEAN`","key$":"default","index$":1},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Flow description.","t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Setup flow identifier.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human-readable flow name.","t":"`$STRING`","key$":"name","index$":4},"steps":{"a":true,"h":"Steps","n":"steps","r":true,"sh":"Ordered list of setup steps.","t":"`$ARRAY`","key$":"steps","index$":5},"supported_environments":{"a":true,"h":"Supported Environments","n":"supported_environments","r":true,"sh":"Environments this auth method supports (standard, fedramp).","t":"`$ARRAY`","key$":"supported_environments","index$":6}},"id":{"field":"id","name":"id"},"name":"one_paginated_setup_flow_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/one/applications/{application_id}/setup-flows","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"auth_method","or":"auth_method","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"environment","or":"environment","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/one/applications/{application_id}/setup-flows","q":{"exist":["account_id","application_id","auth_method","environment","page","page_size"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"one"},{"lit":"applications"},{"var":"application_id"},{"lit":"setup-flows"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"one_paginated_setup_flow_list","name__orig":"one_paginated_setup_flow_list","Name":"OnePaginatedSetupFlowList","name_":"one_paginated_setup_flow_list","name-":"one-paginated-setup-flow-list","NAME":"ONE_PAGINATED_SETUP_FLOW_LIST","index$":36}, {"active":true,"entity":"one_paginated_setup_flow_list","key$":"BasicOnePaginatedSetupFlowListFlow","kind":"basic","name":"BasicOnePaginatedSetupFlowListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"one_paginated_setup_flow_list_ref01"}}],"index$":0}]}, 'OnePaginatedSetupFlowList', {"GET /accounts/{account_id}/one/applications/{application_id}/setup-flows":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account identifier.","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0},{"name":"application_id","in":"path","description":"Application/vendor identifier.","required":true,"schema":{"type":"string","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK"]},"index$":1},{"name":"auth_method","in":"query","description":"Filter by auth method id. Get available ids from GET /v2/applications.","schema":{"type":"string"},"index$":2},{"name":"environment","in":"query","description":"Filter by environment.","schema":{"type":"string","enum":["fedramp","standard"]},"index$":3},{"name":"page","in":"query","description":"A page number within the paginated result set.","schema":{"type":"integer"},"index$":4},{"name":"page_size","in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let one_paginated_setup_flow_list_ref01_data = Object.values(setup.data.existing.one_paginated_setup_flow_list)[0] as any

    // LIST
    const one_paginated_setup_flow_list_ref01_ent = client.OnePaginatedSetupFlowList()
    const one_paginated_setup_flow_list_ref01_match: any = {}
    one_paginated_setup_flow_list_ref01_match['account_id'] = setup.idmap['account01']
    one_paginated_setup_flow_list_ref01_match['application_id'] = setup.idmap['application01']

    const one_paginated_setup_flow_list_ref01_list = (await one_paginated_setup_flow_list_ref01_ent.list(one_paginated_setup_flow_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/one_paginated_setup_flow_list/OnePaginatedSetupFlowListTestData.json')

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
    ['one_paginated_setup_flow_list01','one_paginated_setup_flow_list02','one_paginated_setup_flow_list03','account01','application01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_SETUP_FLOW_LIST_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_SETUP_FLOW_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_SETUP_FLOW_LIST_ENTID']
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
  
