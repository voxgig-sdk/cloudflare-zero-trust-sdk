

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


describe('DexRuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DexRule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dex_rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"match":{"a":true,"h":"Match","n":"match","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The wirefilter expression to match.","t":"`$STRING`","key$":"match","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the Rule.","t":"`$STRING`","key$":"name","index$":3},"result":{"a":true,"h":"Result","n":"result","op":{"load":{"req":true,"type":"`$OBJECT`"}},"r":false,"t":"`$OBJECT`","key$":"result","index$":4}},"id":{"field":"id","name":"id"},"name":"dex_rule","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/dex/rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dex/rules","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"rules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":true,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"name","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"ASC","k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/rules","q":{"exist":["account_id","name","page","per_page","sort_by","sort_order"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"rules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/rules/{rule_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"id","or":"rule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/rules/{rule_id}","q":{"exist":["account_id","id"]},"r":{"param":{"rule_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/dex/rules/{rule_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"id","or":"rule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/dex/rules/{rule_id}","q":{"exist":["account_id","id"]},"r":{"param":{"rule_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/dex/rules/{rule_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"id","or":"rule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/dex/rules/{rule_id}","q":{"exist":["account_id","id"]},"r":{"param":{"rule_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dex_rule","name__orig":"dex_rule","Name":"DexRule","name_":"dex_rule","name-":"dex-rule","NAME":"DEX_RULE","index$":4}, {"active":true,"entity":"dex_rule","key$":"BasicDexRuleFlow","kind":"basic","name":"BasicDexRuleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dex_rule_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"dex_rule_ref01","srcdatavar":"dex_rule_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dex_rule_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"dex_rule_ref01","srcdatavar":"dex_rule_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dex_rule01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dex_rule_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"dex_rule_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"dex_rule01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'DexRule', {"POST /accounts/{account_id}/dex/rules":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","x-auditable":true,"key$":"description"},"match":{"description":"The wirefilter expression to match.","type":"string","key$":"match"},"name":{"description":"The name of the Rule.","type":"string","x-auditable":true,"key$":"name"}},"required":["name","match"],"x-ref":"#/components/schemas/digital-experience-monitoring_create_rule_body","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/dex/rules":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"page","in":"query","description":"Page number of paginated results.","required":true,"schema":{"type":"number","example":1,"default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page.","required":true,"schema":{"type":"number","example":10,"maximum":50,"minimum":1},"index$":2},{"name":"sort_order","in":"query","description":"Sort direction for sort_by property.","schema":{"type":"string","default":"ASC","enum":["ASC","DESC"]},"index$":3},{"name":"sort_by","in":"query","description":"Which property to sort results by.","schema":{"type":"string","default":"name","enum":["name","created_at","updated_at"]},"index$":4},{"name":"name","in":"query","description":"Filter results by rule name.","schema":{"type":"string"},"index$":5}]},"GET /accounts/{account_id}/dex/rules/{rule_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"rule_id","in":"path","description":"Unique identifier of the rule.","required":true,"schema":{"description":"API Resource UUID tag.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/digital-experience-monitoring_uuid"},"index$":1}]},"DELETE /accounts/{account_id}/dex/rules/{rule_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"rule_id","in":"path","description":"Unique identifier of the rule.","required":true,"schema":{"description":"API Resource UUID tag.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/digital-experience-monitoring_uuid"},"index$":1}]},"PATCH /accounts/{account_id}/dex/rules/{rule_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","x-auditable":true,"key$":"description"},"match":{"description":"The wirefilter expression to match.","type":"string","key$":"match"},"name":{"description":"The name of the Rule.","type":"string","x-auditable":true,"key$":"name"}},"x-ref":"#/components/schemas/digital-experience-monitoring_patch_rule_body","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"rule_id","in":"path","description":"Unique identifier of the rule.","required":true,"schema":{"description":"API Resource UUID tag.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/digital-experience-monitoring_uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dex_rule_ref01_ent = client.DexRule()
    let dex_rule_ref01_data = setup.data.new.dex_rule['dex_rule_ref01']
    dex_rule_ref01_data['account_id'] = setup.idmap['account01']

    dex_rule_ref01_data = (await dex_rule_ref01_ent.create(dex_rule_ref01_data)).data()
    assert(null != dex_rule_ref01_data.id)


    // UPDATE
    const dex_rule_ref01_data_up0: any = {}
    dex_rule_ref01_data_up0.id = dex_rule_ref01_data.id
    dex_rule_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const dex_rule_ref01_markdef_up0 = { name: 'description', value: 'Mark01-dex_rule_ref01_' + setup.now }
    ;(dex_rule_ref01_data_up0 as any)[dex_rule_ref01_markdef_up0.name] = dex_rule_ref01_markdef_up0.value

    const dex_rule_ref01_resdata_up0 = (await dex_rule_ref01_ent.update(dex_rule_ref01_data_up0)).data()
    assert(dex_rule_ref01_resdata_up0.id === dex_rule_ref01_data_up0.id)

    assert((dex_rule_ref01_resdata_up0 as any)[dex_rule_ref01_markdef_up0.name] === dex_rule_ref01_markdef_up0.value)


    // LOAD
    const dex_rule_ref01_match_dt0: any = {}
    dex_rule_ref01_match_dt0.id = dex_rule_ref01_data.id
    const dex_rule_ref01_data_dt0 = (await dex_rule_ref01_ent.load(dex_rule_ref01_match_dt0)).data()
    assert(dex_rule_ref01_data_dt0.id === dex_rule_ref01_data.id)


    // REMOVE
    const dex_rule_ref01_match_rm0: any = { id: dex_rule_ref01_data.id }
    await dex_rule_ref01_ent.remove(dex_rule_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dex_rule/DexRuleTestData.json')

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
    ['dex_rule01','dex_rule02','dex_rule03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID']
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
  
