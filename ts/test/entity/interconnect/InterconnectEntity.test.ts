

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


describe('InterconnectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.Interconnect()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'interconnect.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"interconnect","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cni/interconnects/{icon}/loa","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"icon","or":"icon","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cni/interconnects/{icon}/loa","q":{"$action":"loa","exist":["account_id","icon","name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cni"},{"lit":"interconnects"},{"var":"icon"},{"lit":"loa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cni/interconnects/{icon}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"icon","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cni/interconnects/{icon}","q":{"exist":["account_id","id"]},"r":{"param":{"icon":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cni"},{"lit":"interconnects"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"interconnect","name__orig":"interconnect","Name":"Interconnect","name_":"interconnect","name-":"interconnect","NAME":"INTERCONNECT","index$":17}, {"active":true,"entity":"interconnect","key$":"BasicInterconnectFlow","kind":"basic","name":"BasicInterconnectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"interconnect_ref01","srcdatavar":"interconnect_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"interconnect01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-interconnect_ref01"}}],"index$":0}]}, 'Interconnect', {"GET /accounts/{account_id}/cni/interconnects/{icon}/loa":{"protocol":"http","parameters":[{"name":"icon","in":"path","description":"Interconnect name to retrieve information about","required":true,"schema":{"type":"string"},"index$":0},{"name":"name","in":"query","description":"Custom name to use in the LOA instead of the account name (200 Character limit)","schema":{"type":"string","nullable":true},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"description":"Customer account tag","type":"string","x-ref":"#/components/schemas/nsc_AccountTag"},"index$":2}]},"DELETE /accounts/{account_id}/cni/interconnects/{icon}":{"protocol":"http","parameters":[{"name":"icon","in":"path","description":"Interconnect name to retrieve information about","required":true,"schema":{"type":"string"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Customer account tag","type":"string","x-ref":"#/components/schemas/nsc_AccountTag"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let interconnect_ref01_data = Object.values(setup.data.existing.interconnect)[0] as any

    // LOAD
    const interconnect_ref01_ent = client.Interconnect()
    const interconnect_ref01_match_dt0: any = {}
    interconnect_ref01_match_dt0.id = interconnect_ref01_data.id
    const interconnect_ref01_data_dt0 = (await interconnect_ref01_ent.load(interconnect_ref01_match_dt0)).data()
    assert(interconnect_ref01_data_dt0.id === interconnect_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/interconnect/InterconnectTestData.json')

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
    ['interconnect01','interconnect02','interconnect03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID']
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
  
