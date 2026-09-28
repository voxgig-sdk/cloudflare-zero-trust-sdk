

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


describe('AlexandriaGetApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.AlexandriaGetApplication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'alexandria_get_application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category_id":{"a":true,"fo":"int64","h":"Category Id","n":"category_id","r":true,"sh":"Returns the category ID.","t":"`$INTEGER`","key$":"category_id","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"hostnames":{"a":true,"h":"Hostnames","n":"hostnames","r":false,"sh":"Hostnames matched by the application.","t":"`$ARRAY`","key$":"hostnames","index$":2},"human_id":{"a":true,"h":"Human Id","n":"human_id","r":true,"sh":"Returns the human readable ID.","t":"`$STRING`","key$":"human_id","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"ip_subnets":{"a":true,"h":"Ip Subnets","n":"ip_subnets","r":false,"sh":"IP subnets for this application.","t":"`$ARRAY`","key$":"ip_subnets","index$":5},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Returns the application name.","t":"`$STRING`","key$":"name","index$":7},"port_protocols":{"a":true,"h":"Port Protocols","n":"port_protocols","r":false,"sh":"Port and protocol pairs matched by the application.","t":"`$ARRAY`","key$":"port_protocols","index$":8},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Returns the list of applications.","t":"`$OBJECT`","key$":"result","index$":9},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":10},"support_domains":{"a":true,"h":"Support Domains","n":"support_domains","r":false,"sh":"Support domains matched by the application.","t":"`$ARRAY`","key$":"support_domains","index$":11}},"id":{"field":"id","name":"id"},"name":"alexandria_get_application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/resource-library/applications","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/resource-library/applications","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"applications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/resource-library/applications","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"id,name","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"filter=name:HR&filter=source:cloudflare&filter=id:498","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":"name:asc","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"MyNewApp","k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/accounts/{account_id}/resource-library/applications","q":{"exist":["account_id","field","filter","limit","offset","order_by","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"applications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/resource-library/applications/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":498,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/resource-library/applications/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"applications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/resource-library/applications/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":498,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/resource-library/applications/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"resource-library"},{"lit":"applications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"alexandria_get_application","name__orig":"alexandria_get_application","Name":"AlexandriaGetApplication","name_":"alexandria_get_application","name-":"alexandria-get-application","NAME":"ALEXANDRIA_GET_APPLICATION","index$":1}, {"active":true,"entity":"alexandria_get_application","key$":"BasicAlexandriaGetApplicationFlow","kind":"basic","name":"BasicAlexandriaGetApplicationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alexandria_get_application_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alexandria_get_application_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"alexandria_get_application_ref01","srcdatavar":"alexandria_get_application_ref01_data","suffix":"_up0","textfield":"human_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alexandria_get_application_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"alexandria_get_application_ref01","srcdatavar":"alexandria_get_application_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"alexandria_get_application01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alexandria_get_application_ref01"}}],"index$":3}]}, 'AlexandriaGetApplication', {"POST /accounts/{account_id}/resource-library/applications":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Defines a custom application. At least one hostname or IP subnet is required.\nSupport domains and port/protocol pairs do not satisfy this requirement.\n","type":"object","properties":{"category_id":{"description":"Returns the category ID.","type":"integer","format":"int64","example":12,"maximum":4294967295,"minimum":1,"x-ref":"#/components/schemas/alexandria_category_id","key$":"category_id"},"hostnames":{"description":"Hostnames matched by the application.","type":"array","items":{"type":"string"},"example":["example.com","foo.com"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_hostnames","key$":"hostnames"},"human_id":{"description":"Returns the human readable ID.","type":"string","example":"HR","x-ref":"#/components/schemas/alexandria_application_human_id","key$":"human_id"},"ip_subnets":{"description":"IP subnets for this application. Custom application create and update requests accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through /128.","type":"array","items":{"type":"string"},"example":["192.168.1.0/24","2001:db8::/48"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_ip_subnets","key$":"ip_subnets"},"name":{"description":"Returns the application name.","type":"string","example":"HR","x-ref":"#/components/schemas/alexandria_application_name","key$":"name"},"port_protocols":{"description":"Port and protocol pairs matched by the application.","type":"array","items":{"type":"string"},"example":["tcp/80","tcp/443"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_port_protocols","key$":"port_protocols"},"support_domains":{"description":"Support domains matched by the application.","type":"array","items":{"type":"string"},"example":["example.com","foo.com"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_support_domains","key$":"support_domains"}},"anyOf":[{"properties":{"hostnames":{"allOf":[{},{}]}},"required":["hostnames"],"type":"object"},{"properties":{"ip_subnets":{"allOf":[{},{}]}},"required":["ip_subnets"],"type":"object"}],"required":["name","human_id","category_id"],"x-ref":"#/components/schemas/alexandria_create_application_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0}]},"GET /accounts/{account_id}/resource-library/applications":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0},{"name":"filter","in":"query","description":"Filter applications using key:value format. Supported filter keys:\n- name: Filter by application name (e.g., name:HR)\n- id: Filter by application ID (e.g., id:498)\n- human_id: Filter by human-readable ID (e.g., human_id:HR)\n- hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)\n- source: Filter by application source name (e.g., source:cloudflare)\n- ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)\n- category_id: Filter by category ID (e.g., category_id:12).\n- category_name: Filter by category name (e.g., category_name:HR).\n- supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.\n- review_status: Filter by the account's Gateway review status. Values: approved, unapproved, in_review, unreviewed.\n.\n","schema":{"type":"string"},"example":"filter=name:HR&filter=source:cloudflare&filter=id:498","index$":1},{"name":"limit","in":"query","description":"Limit of number of results to return (max 250).","schema":{"type":"integer","default":25},"index$":2},{"name":"offset","in":"query","description":"Offset of results to return.","schema":{"type":"integer","default":0},"index$":3},{"name":"order_by","in":"query","description":"Order results using field:direction format. Supported fields are name, id, human_id,\ncategory_id, application_type, application_confidence_score, and gen_ai_score.\nSupported directions are asc and desc. Ignored when search is provided; results are\nranked by relevance instead.\n","schema":{"type":"string"},"example":"name:asc","index$":4},{"name":"search","in":"query","description":"Fuzzy search across application name and hostnames. Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.","schema":{"type":"string","maxLength":200,"minLength":2},"example":"MyNewApp","index$":5},{"name":"fields","in":"query","description":"Return only the listed properties on each application, as a comma-separated list.\nUse this to keep responses small when you only need part of each application — for\nexample populating a picker with `fields=id,name` instead of downloading every\nhostname and IP subnet.\n\nOmit this parameter to receive the full application object.\n\n`id` is always returned.\n\nSelectable properties: `id`, `name`, `human_id`, `version`, `hostnames`,\n`support_domains`, `ip_subnets`, `port_protocols`, `supported`, `gen_ai_score`,\n`application_confidence_score`, `created_at`, `updated_at`, `review_status`.\n\nUnknown or empty property names return `400`.\n","schema":{"type":"string"},"example":"id,name","index$":6}]},"GET /accounts/{account_id}/resource-library/applications/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0},{"name":"id","in":"path","description":"Application ID.","required":true,"schema":{"description":"Returns the application ID.","type":"integer","format":"int64","example":498,"maximum":4294967295,"minimum":0,"x-ref":"#/components/schemas/alexandria_application_id"},"index$":1}]},"PATCH /accounts/{account_id}/resource-library/applications/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Update the network matchers for the application. The service preserves omitted\nmatcher lists; send an empty array to clear a list. The resulting application must\ncontain at least one hostname or IP subnet. Support domains and port/protocol pairs\ndo not satisfy this requirement.\n","type":"object","properties":{"hostnames":{"description":"Hostnames matched by the application.","type":"array","items":{"type":"string"},"example":["example.com","foo.com"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_hostnames","key$":"hostnames"},"ip_subnets":{"description":"IP subnets for this application. Custom application create and update requests accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through /128.","type":"array","items":{"type":"string"},"example":["192.168.1.0/24","2001:db8::/48"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_ip_subnets","key$":"ip_subnets"},"port_protocols":{"description":"Port and protocol pairs matched by the application.","type":"array","items":{"type":"string"},"example":["tcp/80","tcp/443"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_port_protocols","key$":"port_protocols"},"support_domains":{"description":"Support domains matched by the application.","type":"array","items":{"type":"string"},"example":["example.com","foo.com"],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/alexandria_application_support_domains","key$":"support_domains"}},"x-ref":"#/components/schemas/alexandria_update_application_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"example":"023e105f4ecef8ad9ca31a8372d0c353","index$":0},{"name":"id","in":"path","description":"Application ID.","required":true,"schema":{"description":"Returns the application ID.","type":"integer","format":"int64","example":498,"maximum":4294967295,"minimum":0,"x-ref":"#/components/schemas/alexandria_application_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alexandria_get_application_ref01_ent = client.AlexandriaGetApplication()
    let alexandria_get_application_ref01_data = setup.data.new.alexandria_get_application['alexandria_get_application_ref01']
    alexandria_get_application_ref01_data['account_id'] = setup.idmap['account01']

    alexandria_get_application_ref01_data = (await alexandria_get_application_ref01_ent.create(alexandria_get_application_ref01_data)).data()
    assert(null != alexandria_get_application_ref01_data.id)


    // LIST
    const alexandria_get_application_ref01_match: any = {}
    alexandria_get_application_ref01_match['account_id'] = setup.idmap['account01']

    const alexandria_get_application_ref01_list = (await alexandria_get_application_ref01_ent.list(alexandria_get_application_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(alexandria_get_application_ref01_list, { id: alexandria_get_application_ref01_data.id })))


    // UPDATE
    const alexandria_get_application_ref01_data_up0: any = {}
    alexandria_get_application_ref01_data_up0.id = alexandria_get_application_ref01_data.id
    alexandria_get_application_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const alexandria_get_application_ref01_markdef_up0 = { name: 'human_id', value: 'Mark01-alexandria_get_application_ref01_' + setup.now }
    ;(alexandria_get_application_ref01_data_up0 as any)[alexandria_get_application_ref01_markdef_up0.name] = alexandria_get_application_ref01_markdef_up0.value

    const alexandria_get_application_ref01_resdata_up0 = (await alexandria_get_application_ref01_ent.update(alexandria_get_application_ref01_data_up0)).data()
    assert(alexandria_get_application_ref01_resdata_up0.id === alexandria_get_application_ref01_data_up0.id)

    assert((alexandria_get_application_ref01_resdata_up0 as any)[alexandria_get_application_ref01_markdef_up0.name] === alexandria_get_application_ref01_markdef_up0.value)


    // LOAD
    const alexandria_get_application_ref01_match_dt0: any = {}
    alexandria_get_application_ref01_match_dt0.id = alexandria_get_application_ref01_data.id
    const alexandria_get_application_ref01_data_dt0 = (await alexandria_get_application_ref01_ent.load(alexandria_get_application_ref01_match_dt0)).data()
    assert(alexandria_get_application_ref01_data_dt0.id === alexandria_get_application_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/alexandria_get_application/AlexandriaGetApplicationTestData.json')

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
    ['alexandria_get_application01','alexandria_get_application02','alexandria_get_application03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID']
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
  
