

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


describe('OnePaginatedApplicationListListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.OnePaginatedApplicationListList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'one_paginated_application_list_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth_methods":{"a":true,"h":"Auth Methods","n":"auth_methods","r":true,"sh":"Available auth methods.","t":"`$ARRAY`","key$":"auth_methods","index$":0},"category":{"a":true,"h":"Category","n":"category","r":true,"sh":"Vendor category (e.g.","t":"`$STRING`","key$":"category","index$":1},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Brief description of the integration.","t":"`$STRING`","key$":"description","index$":2},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":true,"sh":"Human-readable vendor name.","t":"`$STRING`","key$":"display_name","index$":3},"dlp_enabled":{"a":true,"h":"Dlp Enabled","n":"dlp_enabled","r":true,"sh":"Whether DLP scanning is supported.","t":"`$BOOLEAN`","key$":"dlp_enabled","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Vendor identifier (e.g.","t":"`$STRING`","key$":"id","index$":5},"logo":{"a":true,"h":"Logo","n":"logo","r":true,"sh":"Logo path.","t":"`$STRING`","key$":"logo","index$":6},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":true,"sh":"All permissions with severity.","t":"`$ARRAY`","key$":"permissions","index$":7},"supported_environments":{"a":true,"h":"Supported Environments","n":"supported_environments","r":true,"sh":"Environments this vendor supports (standard, fedramp).","t":"`$ARRAY`","key$":"supported_environments","index$":8},"use_cases":{"a":true,"h":"Use Cases","n":"use_cases","r":true,"sh":"Supported use cases.","t":"`$ARRAY`","key$":"use_cases","index$":9}},"id":{"field":"id","name":"id"},"name":"one_paginated_application_list_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/one/applications","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"environment","or":"environment","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/one/applications","q":{"exist":["account_id","environment","page","page_size"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"one"},{"lit":"applications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"one_paginated_application_list_list","name__orig":"one_paginated_application_list_list","Name":"OnePaginatedApplicationListList","name_":"one_paginated_application_list_list","name-":"one-paginated-application-list-list","NAME":"ONE_PAGINATED_APPLICATION_LIST_LIST","index$":33}, {"active":true,"entity":"one_paginated_application_list_list","key$":"BasicOnePaginatedApplicationListListFlow","kind":"basic","name":"BasicOnePaginatedApplicationListListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"one_paginated_application_list_list_ref01"}}],"index$":0}]}, 'OnePaginatedApplicationListList', {"GET /accounts/{account_id}/one/applications":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account identifier.","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0},{"name":"environment","in":"query","description":"Filter by supported environment (standard, fedramp).","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","schema":{"type":"integer"},"index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let one_paginated_application_list_list_ref01_data = Object.values(setup.data.existing.one_paginated_application_list_list)[0] as any

    // LIST
    const one_paginated_application_list_list_ref01_ent = client.OnePaginatedApplicationListList()
    const one_paginated_application_list_list_ref01_match: any = {}
    one_paginated_application_list_list_ref01_match['account_id'] = setup.idmap['account01']

    const one_paginated_application_list_list_ref01_list = (await one_paginated_application_list_list_ref01_ent.list(one_paginated_application_list_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/one_paginated_application_list_list/OnePaginatedApplicationListListTestData.json')

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
    ['one_paginated_application_list_list01','one_paginated_application_list_list02','one_paginated_application_list_list03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_APPLICATION_LIST_LIST_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_APPLICATION_LIST_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_APPLICATION_LIST_LIST_ENTID']
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
  
