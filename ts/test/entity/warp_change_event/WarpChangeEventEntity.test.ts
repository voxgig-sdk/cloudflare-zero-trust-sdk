

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


describe('WarpChangeEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.WarpChangeEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'warp_change_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"result","index$":0}},"name":"warp_change_event","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/dex/warp-change-events","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01a7362d577a6c3019a474fd6f485823","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"Myorg","k":"query","n":"account_name","or":"account_name","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"MASQUE","k":"query","n":"config_name","or":"config_name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2023-09-20T17:00:00Z","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":true,"t":"`$NUMBER`","index$":3},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":true,"t":"`$NUMBER`","index$":4},{"a":true,"ex":"ASC","k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"2023-09-20T17:00:00Z","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"toggle","or":"toggle","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/accounts/{account_id}/dex/warp-change-events","q":{"exist":["account_id","account_name","config_name","from","page","per_page","sort_order","to","toggle","type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"dex"},{"lit":"warp-change-events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"warp_change_event","name__orig":"warp_change_event","Name":"WarpChangeEvent","name_":"warp_change_event","name-":"warp-change-event","NAME":"WARP_CHANGE_EVENT","index$":73}, {"active":true,"entity":"warp_change_event","key$":"BasicWarpChangeEventFlow","kind":"basic","name":"BasicWarpChangeEventFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"warp_change_event_ref01"}}],"index$":0}]}, 'WarpChangeEvent', {"GET /accounts/{account_id}/dex/warp-change-events":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Unique Cloudflare account ID.","required":true,"schema":{"description":"Unique identifier linked to an account.","type":"string","example":"01a7362d577a6c3019a474fd6f485823","maxLength":32,"readOnly":true,"x-ref":"#/components/schemas/digital-experience-monitoring_account_identifier"},"index$":0},{"name":"page","in":"query","description":"Page number of paginated results.","required":true,"schema":{"type":"number","example":1,"default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page.","required":true,"schema":{"type":"number","example":10,"maximum":50,"minimum":1},"index$":2},{"name":"from","in":"query","description":"Start time for the query in ISO (RFC3339 - ISO 8601) format.","required":true,"schema":{"type":"string","example":"2023-09-20T17:00:00Z"},"index$":3},{"name":"to","in":"query","description":"End time for the query in ISO (RFC3339 - ISO 8601) format.","required":true,"schema":{"type":"string","example":"2023-09-20T17:00:00Z"},"index$":4},{"name":"type","in":"query","description":"Filter events by type 'config' or 'toggle'.","schema":{"type":"string","enum":["config","toggle"]},"index$":5},{"name":"toggle","in":"query","description":"Filter events by type toggle value. Applicable to type='toggle' events only.","schema":{"type":"string","enum":["on","off"]},"index$":6},{"name":"config_name","in":"query","description":"Filter events by WARP configuration name changed from or to. Applicable to type='config' events only.","schema":{"type":"string","example":"MASQUE"},"index$":7},{"name":"account_name","in":"query","description":"Filter events by account name.","schema":{"type":"string","example":"Myorg"},"index$":8},{"name":"sort_order","in":"query","description":"Sort response by event timestamp.","schema":{"type":"string","default":"ASC","enum":["ASC","DESC"]},"index$":9}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let warp_change_event_ref01_data = Object.values(setup.data.existing.warp_change_event)[0] as any

    // LIST
    const warp_change_event_ref01_ent = client.WarpChangeEvent()
    const warp_change_event_ref01_match: any = {}
    warp_change_event_ref01_match['account_id'] = setup.idmap['account01']

    const warp_change_event_ref01_list = (await warp_change_event_ref01_ent.list(warp_change_event_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/warp_change_event/WarpChangeEventTestData.json')

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
    ['warp_change_event01','warp_change_event02','warp_change_event03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_WARP_CHANGE_EVENT_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_WARP_CHANGE_EVENT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_WARP_CHANGE_EVENT_ENTID']
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
  
