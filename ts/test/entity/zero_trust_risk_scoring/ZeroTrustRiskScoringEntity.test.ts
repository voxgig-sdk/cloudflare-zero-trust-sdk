

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


describe('ZeroTrustRiskScoringEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustRiskScoring()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_risk_scoring.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"behaviors":{"a":true,"h":"Behaviors","n":"behaviors","r":true,"t":"`$OBJECT`","key$":"behaviors","index$":0},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":1}},"name":"zero_trust_risk_scoring","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/zt_risk_scoring/{user_id}/reset","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"zt_risk_scoring_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/zt_risk_scoring/{user_id}/reset","q":{"$action":"reset","exist":["account_id","zt_risk_scoring_id"]},"r":{"param":{"user_id":"zt_risk_scoring_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zt_risk_scoring"},{"var":"zt_risk_scoring_id"},{"lit":"reset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/zt_risk_scoring/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zt_risk_scoring/{user_id}","q":{"exist":["account_id","user_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zt_risk_scoring"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/zt_risk_scoring/behaviors","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zt_risk_scoring/behaviors","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zt_risk_scoring"},{"lit":"behaviors"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/zt_risk_scoring/summary","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/zt_risk_scoring/summary","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zt_risk_scoring"},{"lit":"summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/zt_risk_scoring/behaviors","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/zt_risk_scoring/behaviors","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"zt_risk_scoring"},{"lit":"behaviors"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zero_trust_risk_scoring","name__orig":"zero_trust_risk_scoring","Name":"ZeroTrustRiskScoring","name_":"zero_trust_risk_scoring","name-":"zero-trust-risk-scoring","NAME":"ZERO_TRUST_RISK_SCORING","index$":102}, {"active":true,"entity":"zero_trust_risk_scoring","key$":"BasicZeroTrustRiskScoringFlow","kind":"basic","name":"BasicZeroTrustRiskScoringFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_risk_scoring_ref01"},"m":{"account_id":"account01","zt_risk_scoring_id":"zt_risk_scoring01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_risk_scoring_ref01","srcdatavar":"zero_trust_risk_scoring_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_risk_scoring_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"zero_trust_risk_scoring_ref01","srcdatavar":"zero_trust_risk_scoring_ref01_data","suffix":"_dt0"},"m":{"id":"zero_trust_risk_scoring01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_risk_scoring_ref01"}}],"index$":2}]}, 'ZeroTrustRiskScoring', {"POST /accounts/{account_id}/zt_risk_scoring/{user_id}/reset":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/zt_risk_scoring/{user_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/zt_risk_scoring/behaviors":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/zt_risk_scoring/summary":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"PUT /accounts/{account_id}/zt_risk_scoring/behaviors":{"protocol":"http","requestBody":{"description":"Behaviors.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"behaviors":{"type":"object","additionalProperties":{"type":"object","properties":{"enabled":{"type":"boolean"},"risk_level":{"type":"string","enum":[],"x-ref":"#/components/schemas/dlp_RiskLevel"}},"required":["risk_level","enabled"],"x-ref":"#/components/schemas/dlp_UpdateBehavior"},"key$":"behaviors"}},"required":["behaviors"],"x-ref":"#/components/schemas/dlp_UpdateBehaviors","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zero_trust_risk_scoring_ref01_ent = client.ZeroTrustRiskScoring()
    let zero_trust_risk_scoring_ref01_data = setup.data.new.zero_trust_risk_scoring['zero_trust_risk_scoring_ref01']
    zero_trust_risk_scoring_ref01_data['account_id'] = setup.idmap['account01']
    zero_trust_risk_scoring_ref01_data['zt_risk_scoring_id'] = setup.idmap['zt_risk_scoring01']

    zero_trust_risk_scoring_ref01_data = (await zero_trust_risk_scoring_ref01_ent.create(zero_trust_risk_scoring_ref01_data)).data()
    assert(null != zero_trust_risk_scoring_ref01_data)


    // UPDATE
    const zero_trust_risk_scoring_ref01_data_up0: any = {}

    const zero_trust_risk_scoring_ref01_resdata_up0 = (await zero_trust_risk_scoring_ref01_ent.update(zero_trust_risk_scoring_ref01_data_up0)).data()
    assert(null != zero_trust_risk_scoring_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_risk_scoring/ZeroTrustRiskScoringTestData.json')

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
    ['zero_trust_risk_scoring01','zero_trust_risk_scoring02','zero_trust_risk_scoring03','account01','zt_risk_scoring01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID']
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
  
