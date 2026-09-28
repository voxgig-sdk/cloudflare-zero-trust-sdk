

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


describe('OnePaginatedAuthMethodDetailListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.OnePaginatedAuthMethodDetailList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'one_paginated_auth_method_detail_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"display_name":{"a":true,"h":"Display Name","n":"display_name","r":true,"sh":"Human-readable auth method name.","t":"`$STRING`","key$":"display_name","index$":0},"human_interaction_required":{"a":true,"h":"Human Interaction Required","n":"human_interaction_required","r":true,"sh":"Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction).","t":"`$BOOLEAN`","key$":"human_interaction_required","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Auth method identifier.","t":"`$STRING`","key$":"id","index$":2},"instructions":{"a":true,"h":"Instructions","n":"instructions","r":true,"sh":"Step-by-step instructions for obtaining credentials.","t":"`$ANY`","key$":"instructions","index$":3},"payload_example":{"a":true,"h":"Payload Example","n":"payload_example","r":true,"sh":"Example credentials payload with placeholder values.","t":"`$OBJECT`","key$":"payload_example","index$":4},"payload_schema":{"a":true,"h":"Payload Schema","n":"payload_schema","r":true,"sh":"JSON Schema for the credentials object in POST /v2/integrations request.","t":"`$OBJECT`","key$":"payload_schema","index$":5},"redirect_url":{"a":true,"h":"Redirect Url","n":"redirect_url","r":true,"sh":"OAuth redirect URL for vendors requiring human interaction.","t":"`$STRING`","key$":"redirect_url","index$":6}},"id":{"field":"id","name":"id"},"name":"one_paginated_auth_method_detail_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/one/applications/{application_id}/auth-methods","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/one/applications/{application_id}/auth-methods","q":{"exist":["account_id","application_id","page","page_size"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"one"},{"lit":"applications"},{"var":"application_id"},{"lit":"auth-methods"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"one_paginated_auth_method_detail_list","name__orig":"one_paginated_auth_method_detail_list","Name":"OnePaginatedAuthMethodDetailList","name_":"one_paginated_auth_method_detail_list","name-":"one-paginated-auth-method-detail-list","NAME":"ONE_PAGINATED_AUTH_METHOD_DETAIL_LIST","index$":34}, {"active":true,"entity":"one_paginated_auth_method_detail_list","key$":"BasicOnePaginatedAuthMethodDetailListFlow","kind":"basic","name":"BasicOnePaginatedAuthMethodDetailListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"one_paginated_auth_method_detail_list_ref01"}}],"index$":0}]}, 'OnePaginatedAuthMethodDetailList', {"GET /accounts/{account_id}/one/applications/{application_id}/auth-methods":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account identifier.","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0},{"name":"application_id","in":"path","description":"Application/vendor identifier.","required":true,"schema":{"type":"string","enum":["ANTHROPIC","AWS","BITBUCKET","BOX","CONFLUENCE","DROPBOX","GITHUB","GOOGLE_CLOUD_PLATFORM","GOOGLE_WORKSPACE","JIRA","MICROSOFT_INTERNAL","OPENAI","SALESFORCE","SERVICENOW","SLACK"]},"index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","schema":{"type":"integer"},"index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let one_paginated_auth_method_detail_list_ref01_data = Object.values(setup.data.existing.one_paginated_auth_method_detail_list)[0] as any

    // LIST
    const one_paginated_auth_method_detail_list_ref01_ent = client.OnePaginatedAuthMethodDetailList()
    const one_paginated_auth_method_detail_list_ref01_match: any = {}
    one_paginated_auth_method_detail_list_ref01_match['account_id'] = setup.idmap['account01']
    one_paginated_auth_method_detail_list_ref01_match['application_id'] = setup.idmap['application01']

    const one_paginated_auth_method_detail_list_ref01_list = (await one_paginated_auth_method_detail_list_ref01_ent.list(one_paginated_auth_method_detail_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/one_paginated_auth_method_detail_list/OnePaginatedAuthMethodDetailListTestData.json')

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
    ['one_paginated_auth_method_detail_list01','one_paginated_auth_method_detail_list02','one_paginated_auth_method_detail_list03','account01','application01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_AUTH_METHOD_DETAIL_LIST_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_AUTH_METHOD_DETAIL_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_AUTH_METHOD_DETAIL_LIST_ENTID']
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
  
