

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


describe('DigitalExperienceMonitoringDexSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.DigitalExperienceMonitoringDexSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'digital_experience_monitoring_dex_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"ro":true,"sh":"Date the test was created, in RFC 3339 format.","t":"`$STRING`","key$":"created","index$":0},"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"The configuration object which contains the details for the WARP client to conduct the test.","t":"`$OBJECT`","key$":"data","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Additional details about the test.","t":"`$STRING`","key$":"description","index$":2},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Determines whether or not the test is active.","t":"`$BOOLEAN`","key$":"enabled","index$":3},"interval":{"a":true,"h":"Interval","n":"interval","r":true,"sh":"How often the test will run.","t":"`$STRING`","key$":"interval","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the DEX test.","t":"`$STRING`","key$":"name","index$":5},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":6},"target_policies":{"a":true,"h":"Target Policies","n":"target_policies","r":false,"t":"`$ANY`","key$":"target_policies","index$":7},"targeted":{"a":true,"h":"Targeted","n":"targeted","r":false,"t":"`$BOOLEAN`","key$":"targeted","index$":8},"test_id":{"a":true,"h":"Test Id","n":"test_id","r":false,"ro":true,"sh":"The unique identifier for the test.","t":"`$STRING`","key$":"test_id","index$":9},"updated":{"a":true,"fo":"date-time","h":"Updated","n":"updated","r":false,"ro":true,"sh":"Date the test was last updated, in RFC 3339 format.","t":"`$STRING`","key$":"updated","index$":10}},"name":"digital_experience_monitoring_dex_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/dex/devices/dex_tests","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/dex/devices/dex_tests","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"devices"},{"lit":"dex_tests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"372e67954025e0ba6aaa6d586b9e0b59","k":"param","n":"dex_test_id","or":"dex_test_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}","q":{"exist":["account_id","dex_test_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"devices"},{"lit":"dex_tests"},{"var":"dex_test_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"dex_test_id","or":"dex_test_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}","q":{"exist":["account_id","dex_test_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"devices"},{"lit":"dex_tests"},{"var":"dex_test_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"digital_experience_monitoring_dex_single","name__orig":"digital_experience_monitoring_dex_single","Name":"DigitalExperienceMonitoringDexSingle","name_":"digital_experience_monitoring_dex_single","name-":"digital-experience-monitoring-dex-single","NAME":"DIGITAL_EXPERIENCE_MONITORING_DEX_SINGLE","index$":9}, {"active":true,"entity":"digital_experience_monitoring_dex_single","key$":"BasicDigitalExperienceMonitoringDexSingleFlow","kind":"basic","name":"BasicDigitalExperienceMonitoringDexSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"digital_experience_monitoring_dex_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"digital_experience_monitoring_dex_single_ref01","srcdatavar":"digital_experience_monitoring_dex_single_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-digital_experience_monitoring_dex_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"digital_experience_monitoring_dex_single_ref01","srcdatavar":"digital_experience_monitoring_dex_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"digital_experience_monitoring_dex_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-digital_experience_monitoring_dex_single_ref01"}}],"index$":2}]}, 'DigitalExperienceMonitoringDexSingle', {"POST /accounts/{account_id}/dex/devices/dex_tests":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"created":{"description":"Date the test was created, in RFC 3339 format.","example":"2023-10-11T00:00:00Z","format":"date-time","readOnly":true,"type":"string","x-stainless-terraform-configurability":"computed","key$":"created"},"data":{"description":"The configuration object which contains the details for the WARP client to conduct the test.","example":{"host":"https://dash.cloudflare.com","kind":"http","method":"GET"},"properties":{"host":{"description":"The desired endpoint to test.","example":"https://dash.cloudflare.com","type":"string","x-auditable":true},"kind":{"description":"The type of test.","enum":["http","traceroute"],"example":"http","type":"string","x-auditable":true},"method":{"description":"The HTTP request method type.","enum":["GET"],"example":"GET","type":"string","x-auditable":true}},"required":["kind","host"],"type":"object","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-data","key$":"data"},"description":{"description":"Additional details about the test.","example":"Checks the dash endpoint every 30 minutes","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-description","key$":"description"},"enabled":{"description":"Determines whether or not the test is active.","example":true,"type":"boolean","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-enabled","key$":"enabled"},"interval":{"description":"How often the test will run.","example":"30m","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-interval","key$":"interval"},"name":{"description":"The name of the DEX test. Must be unique.","example":"HTTP dash health check","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-name","key$":"name"},"target_policies":{"allOf":[{"description":"DEX rules targeted by this test","items":{"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/digital-experience-monitoring_dex_target_policy"},"type":"array","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-target-policies"}],"x-stainless-terraform-configurability":"computed_optional","key$":"target_policies"},"targeted":{"type":"boolean","x-stainless-terraform-configurability":"computed","key$":"targeted"},"test_id":{"description":"The unique identifier for the test.","example":"372e67954025e0ba6aaa6d586b9e0b59","maxLength":32,"readOnly":true,"type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_schemas-test-id","key$":"test_id"},"updated":{"description":"Date the test was last updated, in RFC 3339 format.","example":"2023-10-11T00:00:00Z","format":"date-time","readOnly":true,"type":"string","x-stainless-terraform-configurability":"computed","key$":"updated"}},"required":["name","interval","enabled","data"],"x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-http","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"dex_test_id","in":"path","description":"Unique identifier for a DEX test.","required":true,"schema":{"description":"The unique identifier for the test.","type":"string","example":"372e67954025e0ba6aaa6d586b9e0b59","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_schemas-test-id"},"index$":1}]},"PUT /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"created":{"description":"Date the test was created, in RFC 3339 format.","example":"2023-10-11T00:00:00Z","format":"date-time","readOnly":true,"type":"string","x-stainless-terraform-configurability":"computed","key$":"created"},"data":{"description":"The configuration object which contains the details for the WARP client to conduct the test.","example":{"host":"https://dash.cloudflare.com","kind":"http","method":"GET"},"properties":{"host":{"description":"The desired endpoint to test.","example":"https://dash.cloudflare.com","type":"string","x-auditable":true},"kind":{"description":"The type of test.","enum":["http","traceroute"],"example":"http","type":"string","x-auditable":true},"method":{"description":"The HTTP request method type.","enum":["GET"],"example":"GET","type":"string","x-auditable":true}},"required":["kind","host"],"type":"object","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-data","key$":"data"},"description":{"description":"Additional details about the test.","example":"Checks the dash endpoint every 30 minutes","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-description","key$":"description"},"enabled":{"description":"Determines whether or not the test is active.","example":true,"type":"boolean","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-enabled","key$":"enabled"},"interval":{"description":"How often the test will run.","example":"30m","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-interval","key$":"interval"},"name":{"description":"The name of the DEX test. Must be unique.","example":"HTTP dash health check","type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-name","key$":"name"},"target_policies":{"allOf":[{"description":"DEX rules targeted by this test","items":{"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/digital-experience-monitoring_dex_target_policy"},"type":"array","x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-target-policies"}],"x-stainless-terraform-configurability":"computed_optional","key$":"target_policies"},"targeted":{"type":"boolean","x-stainless-terraform-configurability":"computed","key$":"targeted"},"test_id":{"description":"The unique identifier for the test.","example":"372e67954025e0ba6aaa6d586b9e0b59","maxLength":32,"readOnly":true,"type":"string","x-ref":"#/components/schemas/digital-experience-monitoring_schemas-test-id","key$":"test_id"},"updated":{"description":"Date the test was last updated, in RFC 3339 format.","example":"2023-10-11T00:00:00Z","format":"date-time","readOnly":true,"type":"string","x-stainless-terraform-configurability":"computed","key$":"updated"}},"required":["name","interval","enabled","data"],"x-ref":"#/components/schemas/digital-experience-monitoring_device-dex-test-schemas-http","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"dex_test_id","in":"path","description":"Unique identifier for a DEX test.","required":true,"schema":{"description":"API Resource UUID tag.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/digital-experience-monitoring_uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const digital_experience_monitoring_dex_single_ref01_ent = client.DigitalExperienceMonitoringDexSingle()
    let digital_experience_monitoring_dex_single_ref01_data = setup.data.new.digital_experience_monitoring_dex_single['digital_experience_monitoring_dex_single_ref01']
    digital_experience_monitoring_dex_single_ref01_data['account_id'] = setup.idmap['account01']

    digital_experience_monitoring_dex_single_ref01_data = (await digital_experience_monitoring_dex_single_ref01_ent.create(digital_experience_monitoring_dex_single_ref01_data)).data()
    assert(null != digital_experience_monitoring_dex_single_ref01_data)


    // UPDATE
    const digital_experience_monitoring_dex_single_ref01_data_up0: any = {}
    digital_experience_monitoring_dex_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const digital_experience_monitoring_dex_single_ref01_markdef_up0 = { name: 'description', value: 'Mark01-digital_experience_monitoring_dex_single_ref01_' + setup.now }
    ;(digital_experience_monitoring_dex_single_ref01_data_up0 as any)[digital_experience_monitoring_dex_single_ref01_markdef_up0.name] = digital_experience_monitoring_dex_single_ref01_markdef_up0.value

    const digital_experience_monitoring_dex_single_ref01_resdata_up0 = (await digital_experience_monitoring_dex_single_ref01_ent.update(digital_experience_monitoring_dex_single_ref01_data_up0)).data()
    assert(null != digital_experience_monitoring_dex_single_ref01_resdata_up0)

    assert((digital_experience_monitoring_dex_single_ref01_resdata_up0 as any)[digital_experience_monitoring_dex_single_ref01_markdef_up0.name] === digital_experience_monitoring_dex_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/digital_experience_monitoring_dex_single/DigitalExperienceMonitoringDexSingleTestData.json')

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
    ['digital_experience_monitoring_dex_single01','digital_experience_monitoring_dex_single02','digital_experience_monitoring_dex_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEX_SINGLE_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEX_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DIGITAL_EXPERIENCE_MONITORING_DEX_SINGLE_ENTID']
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
  
