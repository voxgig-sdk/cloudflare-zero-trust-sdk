

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


describe('ZeroTrustGatewayApplicationsReviewStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewayApplicationsReviewStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_applications_review_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"approved_apps":{"a":true,"h":"Approved Apps","n":"approved_apps","r":true,"sh":"Contains the ids of the approved applications.","t":"`$ARRAY`","key$":"approved_apps","index$":0},"in_review_apps":{"a":true,"h":"In Review Apps","n":"in_review_apps","r":true,"sh":"Contains the ids of the applications in review.","t":"`$ARRAY`","key$":"in_review_apps","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2},"unapproved_apps":{"a":true,"h":"Unapproved Apps","n":"unapproved_apps","r":true,"sh":"Contains the ids of the unapproved applications.","t":"`$ARRAY`","key$":"unapproved_apps","index$":3}},"name":"zero_trust_gateway_applications_review_status","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/apps/review_status","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/apps/review_status","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"apps"},{"lit":"review_status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/apps/review_status","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/apps/review_status","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"apps"},{"lit":"review_status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zero_trust_gateway_applications_review_status","name__orig":"zero_trust_gateway_applications_review_status","Name":"ZeroTrustGatewayApplicationsReviewStatus","name_":"zero_trust_gateway_applications_review_status","name-":"zero-trust-gateway-applications-review-status","NAME":"ZERO_TRUST_GATEWAY_APPLICATIONS_REVIEW_STATUS","index$":90}, {"active":true,"entity":"zero_trust_gateway_applications_review_status","key$":"BasicZeroTrustGatewayApplicationsReviewStatusFlow","kind":"basic","name":"BasicZeroTrustGatewayApplicationsReviewStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_applications_review_status_ref01","srcdatavar":"zero_trust_gateway_applications_review_status_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_applications_review_status_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_applications_review_status_ref01","srcdatavar":"zero_trust_gateway_applications_review_status_ref01_data","suffix":"_dt0"},"m":{"id":"zero_trust_gateway_applications_review_status01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_applications_review_status_ref01"}}],"index$":1}]}, 'ZeroTrustGatewayApplicationsReviewStatus', {"GET /accounts/{account_id}/gateway/apps/review_status":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Provide the identifier string.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-3"},"index$":0}]},"PUT /accounts/{account_id}/gateway/apps/review_status":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"approved_apps":{"description":"Contains the ids of the approved applications.","type":"array","items":{"format":"int64","type":"integer"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_approved_apps","key$":"approved_apps"},"in_review_apps":{"description":"Contains the ids of the applications in review.","type":"array","items":{"format":"int64","type":"integer"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_in_review_apps","key$":"in_review_apps"},"unapproved_apps":{"description":"Contains the ids of the unapproved applications.","type":"array","items":{"format":"int64","type":"integer"},"x-stainless-collection-type":"set","x-ref":"#/components/schemas/zero-trust-gateway_unapproved_apps","key$":"unapproved_apps"}},"required":["approved_apps","unapproved_apps","in_review_apps"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Provide the identifier string.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-3"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zero_trust_gateway_applications_review_status_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_applications_review_status)[0] as any

    // UPDATE
    const zero_trust_gateway_applications_review_status_ref01_ent = client.ZeroTrustGatewayApplicationsReviewStatus()
    const zero_trust_gateway_applications_review_status_ref01_data_up0: any = {}

    const zero_trust_gateway_applications_review_status_ref01_resdata_up0 = (await zero_trust_gateway_applications_review_status_ref01_ent.update(zero_trust_gateway_applications_review_status_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_applications_review_status_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_applications_review_status/ZeroTrustGatewayApplicationsReviewStatusTestData.json')

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
    ['zero_trust_gateway_applications_review_status01','zero_trust_gateway_applications_review_status02','zero_trust_gateway_applications_review_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_APPLICATIONS_REVIEW_STATUS_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_APPLICATIONS_REVIEW_STATUS_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_APPLICATIONS_REVIEW_STATUS_ENTID']
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
  
