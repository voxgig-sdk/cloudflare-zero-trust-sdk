

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


describe('AlexandriaGetCategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.AlexandriaGetCategory()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'alexandria_get_category.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Returns the list of categories.","t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"alexandria_get_category","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/resource-library/categories","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/resource-library/categories","q":{"exist":["account_id","limit","offset"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"categories"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/resource-library/categories/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":12,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/resource-library/categories/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"alexandria_get_category","name__orig":"alexandria_get_category","Name":"AlexandriaGetCategory","name_":"alexandria_get_category","name-":"alexandria-get-category","NAME":"ALEXANDRIA_GET_CATEGORY","index$":2}, {"active":true,"entity":"alexandria_get_category","key$":"BasicAlexandriaGetCategoryFlow","kind":"basic","name":"BasicAlexandriaGetCategoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alexandria_get_category_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"alexandria_get_category_ref01","srcdatavar":"alexandria_get_category_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"alexandria_get_category01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alexandria_get_category_ref01"}}],"index$":1}]}, 'AlexandriaGetCategory', {"GET /accounts/{account_id}/resource-library/categories":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0},{"name":"limit","in":"query","description":"Limit of number of results to return.","schema":{"type":"integer","default":25},"index$":1},{"name":"offset","in":"query","description":"Offset of results to return.","schema":{"type":"integer","default":0},"index$":2}]},"GET /accounts/{account_id}/resource-library/categories/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0},{"name":"id","in":"path","description":"Application category ID.","required":true,"schema":{"description":"Returns the category ID.","type":"integer","format":"int64","example":12,"maximum":4294967295,"minimum":1,"x-ref":"#/components/schemas/alexandria_category_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let alexandria_get_category_ref01_data = Object.values(setup.data.existing.alexandria_get_category)[0] as any

    // LIST
    const alexandria_get_category_ref01_ent = client.AlexandriaGetCategory()
    const alexandria_get_category_ref01_match: any = {}
    alexandria_get_category_ref01_match['account_id'] = setup.idmap['account01']

    const alexandria_get_category_ref01_list = (await alexandria_get_category_ref01_ent.list(alexandria_get_category_ref01_match)).map((e: any) => e.data())


    // LOAD
    const alexandria_get_category_ref01_match_dt0: any = {}
    alexandria_get_category_ref01_match_dt0.id = alexandria_get_category_ref01_data.id
    const alexandria_get_category_ref01_data_dt0 = (await alexandria_get_category_ref01_ent.load(alexandria_get_category_ref01_match_dt0)).data()
    assert(alexandria_get_category_ref01_data_dt0.id === alexandria_get_category_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/alexandria_get_category/AlexandriaGetCategoryTestData.json')

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
    ['alexandria_get_category01','alexandria_get_category02','alexandria_get_category03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_CATEGORY_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_CATEGORY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_CATEGORY_ENTID']
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
  
