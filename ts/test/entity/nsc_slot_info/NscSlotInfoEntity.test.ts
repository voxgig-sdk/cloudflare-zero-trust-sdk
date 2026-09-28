

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


describe('NscSlotInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.NscSlotInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'nsc_slot_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":false,"sh":"Customer account tag","t":"`$STRING`","key$":"account","index$":0},"address":{"a":true,"h":"Address","n":"address","r":true,"t":"`$ARRAY`","key$":"address","index$":1},"ccr_device_name":{"a":true,"h":"Ccr Device Name","n":"ccr_device_name","r":false,"t":"`$STRING`","key$":"ccr_device_name","index$":2},"facility":{"a":true,"h":"Facility","n":"facility","r":true,"t":"`$OBJECT`","key$":"facility","index$":3},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Slot ID","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":5},"occupied":{"a":true,"h":"Occupied","n":"occupied","r":true,"sh":"Whether the slot is occupied or not","t":"`$BOOLEAN`","key$":"occupied","index$":6},"site":{"a":true,"h":"Site","n":"site","r":true,"t":"`$STRING`","key$":"site","index$":7},"speed":{"a":true,"h":"Speed","n":"speed","r":true,"t":"`$STRING`","key$":"speed","index$":8}},"id":{"field":"id","name":"id"},"name":"nsc_slot_info","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cni/slots","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"address_contain","or":"address_contain","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"occupied","or":"occupied","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"site","or":"site","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"speed","or":"speed","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cni/slots","q":{"exist":["account_id","address_contain","cursor","limit","occupied","site","speed"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cni"},{"lit":"slots"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cni/slots/{slot}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slot","or":"slot","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cni/slots/{slot}","q":{"exist":["account_id","slot"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cni"},{"lit":"slots"},{"var":"slot"}],"t":{"req":"`reqdata`","res":"`body.facility`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"nsc_slot_info","name__orig":"nsc_slot_info","Name":"NscSlotInfo","name_":"nsc_slot_info","name-":"nsc-slot-info","NAME":"NSC_SLOT_INFO","index$":25}, {"active":true,"entity":"nsc_slot_info","key$":"BasicNscSlotInfoFlow","kind":"basic","name":"BasicNscSlotInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"nsc_slot_info_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"nsc_slot_info_ref01","srcdatavar":"nsc_slot_info_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"nsc_slot_info01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-nsc_slot_info_ref01"}}],"index$":1}]}, 'NscSlotInfo', {"GET /accounts/{account_id}/cni/slots":{"protocol":"http","parameters":[{"name":"address_contains","in":"query","description":"If specified, only show slots with the given text in their address field","schema":{"type":"string","nullable":true},"index$":0},{"name":"site","in":"query","description":"If specified, only show slots located at the given site","schema":{"type":"string","nullable":true},"index$":1},{"name":"speed","in":"query","description":"If specified, only show slots that support the given speed","schema":{"type":"string","nullable":true},"index$":2},{"name":"occupied","in":"query","description":"If specified, only show slots with a specific occupied/unoccupied state","schema":{"type":"boolean","nullable":true},"index$":3},{"name":"cursor","in":"query","schema":{"type":"integer","format":"int32","nullable":true},"index$":4},{"name":"limit","in":"query","schema":{"type":"integer","minimum":0,"nullable":true},"index$":5},{"name":"account_id","in":"path","required":true,"schema":{"description":"Customer account tag","type":"string","x-ref":"#/components/schemas/nsc_AccountTag"},"index$":6}]},"GET /accounts/{account_id}/cni/slots/{slot}":{"protocol":"http","parameters":[{"name":"slot","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Customer account tag","type":"string","x-ref":"#/components/schemas/nsc_AccountTag"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let nsc_slot_info_ref01_data = Object.values(setup.data.existing.nsc_slot_info)[0] as any

    // LIST
    const nsc_slot_info_ref01_ent = client.NscSlotInfo()
    const nsc_slot_info_ref01_match: any = {}
    nsc_slot_info_ref01_match['account_id'] = setup.idmap['account01']

    const nsc_slot_info_ref01_list = (await nsc_slot_info_ref01_ent.list(nsc_slot_info_ref01_match)).map((e: any) => e.data())


    // LOAD
    const nsc_slot_info_ref01_match_dt0: any = {}
    nsc_slot_info_ref01_match_dt0.id = nsc_slot_info_ref01_data.id
    const nsc_slot_info_ref01_data_dt0 = (await nsc_slot_info_ref01_ent.load(nsc_slot_info_ref01_match_dt0)).data()
    assert(nsc_slot_info_ref01_data_dt0.id === nsc_slot_info_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/nsc_slot_info/NscSlotInfoTestData.json')

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
    ['nsc_slot_info01','nsc_slot_info02','nsc_slot_info03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_NSC_SLOT_INFO_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_SLOT_INFO_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_SLOT_INFO_ENTID']
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
  
