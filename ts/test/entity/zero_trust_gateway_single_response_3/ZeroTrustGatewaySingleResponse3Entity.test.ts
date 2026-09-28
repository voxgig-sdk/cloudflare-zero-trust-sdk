

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


describe('ZeroTrustGatewaySingleResponse3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZeroTrustSDK.test()
    const ent = testsdk.ZeroTrustGatewaySingleResponse3()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zero_trust_gateway_single_response_3.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_default":{"a":true,"h":"Client Default","n":"client_default","r":false,"sh":"Indicate whether this location is the default location.","t":"`$BOOLEAN`","key$":"client_default","index$":0},"dns_destination_ips_id":{"a":true,"h":"Dns Destination Ips Id","n":"dns_destination_ips_id","r":false,"sh":"Specify the identifier of the pair of IPv4 addresses assigned to this location.","t":"`$STRING`","key$":"dns_destination_ips_id","index$":1},"ecs_support":{"a":true,"h":"Ecs Support","n":"ecs_support","r":false,"sh":"Indicate whether the location must resolve EDNS queries.","t":"`$BOOLEAN`","key$":"ecs_support","index$":2},"endpoints":{"a":true,"h":"Endpoints","n":"endpoints","r":true,"sh":"Configure the destination endpoints for this location.","t":"`$OBJECT`","key$":"endpoints","index$":3},"max_ttl":{"a":true,"h":"Max Ttl","n":"max_ttl","r":true,"sh":"Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting.","t":"`$OBJECT`","key$":"max_ttl","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Specify the location name.","t":"`$STRING`","key$":"name","index$":5},"networks":{"a":true,"h":"Networks","n":"networks","r":false,"sh":"Specify the list of network ranges from which requests at this location originate.","t":"`$ARRAY`","key$":"networks","index$":6},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":7}},"name":"zero_trust_gateway_single_response_3","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/gateway/locations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/gateway/locations","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"locations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/gateway/locations/{location_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed35569b41ce4d1facfe683550f54086","k":"param","n":"location_id","or":"location_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/gateway/locations/{location_id}","q":{"exist":["account_id","location_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"locations"},{"var":"location_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/gateway/locations/{location_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed35569b41ce4d1facfe683550f54086","k":"param","n":"location_id","or":"location_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/gateway/locations/{location_id}","q":{"exist":["account_id","location_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"gateway"},{"lit":"locations"},{"var":"location_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.location"]]},"key$":"zero_trust_gateway_single_response_3","name__orig":"zero_trust_gateway_single_response_3","Name":"ZeroTrustGatewaySingleResponse3","name_":"zero_trust_gateway_single_response_3","name-":"zero-trust-gateway-single-response-3","NAME":"ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_3","index$":111}, {"active":true,"entity":"zero_trust_gateway_single_response_3","key$":"BasicZeroTrustGatewaySingleResponse3Flow","kind":"basic","name":"BasicZeroTrustGatewaySingleResponse3Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_3_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"zero_trust_gateway_single_response_3_ref01","srcdatavar":"zero_trust_gateway_single_response_3_ref01_data","suffix":"_up0","textfield":"dns_destination_ips_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_3_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"zero_trust_gateway_single_response_3_ref01","srcdatavar":"zero_trust_gateway_single_response_3_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"zero_trust_gateway_single_response_301"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zero_trust_gateway_single_response_3_ref01"}}],"index$":2}]}, 'ZeroTrustGatewaySingleResponse3', {"POST /accounts/{account_id}/gateway/locations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"client_default":{"description":"Indicate whether this location is the default location.","type":"boolean","example":false,"default":false,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_client-default","key$":"client_default"},"dns_destination_ips_id":{"description":"Specify the identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.","type":"string","example":"0e4a32c6-6fb8-4858-9296-98f51631e8e6","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/zero-trust-gateway_dns-destination-ips-id-write","key$":"dns_destination_ips_id"},"ecs_support":{"description":"Indicate whether the location must resolve EDNS queries.","type":"boolean","example":false,"default":false,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_ecs-support","key$":"ecs_support"},"endpoints":{"description":"Configure the destination endpoints for this location.","type":"object","properties":{"doh":{"properties":{"enabled":{},"networks":{},"require_token":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_doh_endpoint"},"dot":{"properties":{"enabled":{},"networks":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_dot_endpoint"},"ipv4":{"properties":{"enabled":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_ipv4_endpoint"},"ipv6":{"properties":{"enabled":{},"networks":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_ipv6_endpoint"}},"nullable":true,"required":["ipv4","ipv6","doh","dot"],"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_endpoints","key$":"endpoints"},"max_ttl":{"description":"Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. Omitting `max_ttl` on update resets it to `inherit`.","type":"object","properties":{"mode":{"description":"`inherit` uses the account `max_ttl_secs`. `override` uses this location's `ttl_secs`. `disabled` leaves returned TTLs unchanged.","enum":["inherit","override","disabled"],"example":"override","type":"string","x-auditable":true},"ttl_secs":{"description":"Location-specific cap on DNS response TTLs, in seconds. Required when `mode` is `override`. Must be omitted when `mode` is `inherit` or `disabled`.","example":3600,"maximum":36000,"minimum":60,"nullable":true,"type":"integer","x-auditable":true}},"default":{"mode":"inherit"},"nullable":true,"required":["mode"],"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_max-ttl","key$":"max_ttl"},"name":{"description":"Specify the location name.","type":"string","example":"Austin Office Location","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name-2","key$":"name"},"networks":{"description":"Specify the list of network ranges from which requests at this location originate. The list takes effect only if it is non-empty and the IPv4 endpoint is enabled for this location.","type":"array","items":{"type":"object","properties":{"network":{"description":"Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.","example":"192.0.2.1/32","type":"string","x-auditable":true}},"required":["network"],"x-ref":"#/components/schemas/zero-trust-gateway_ipv4_network"},"nullable":true,"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_ipv4_networks","key$":"networks"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":0}]},"GET /accounts/{account_id}/gateway/locations/{location_id}":{"protocol":"http","parameters":[{"name":"location_id","in":"path","required":true,"schema":{"type":"string","example":"ed35569b41ce4d1facfe683550f54086","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-3"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]},"PUT /accounts/{account_id}/gateway/locations/{location_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"client_default":{"description":"Indicate whether this location is the default location.","type":"boolean","example":false,"default":false,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_client-default","key$":"client_default"},"dns_destination_ips_id":{"description":"Specify the identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.","type":"string","example":"0e4a32c6-6fb8-4858-9296-98f51631e8e6","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/zero-trust-gateway_dns-destination-ips-id-write","key$":"dns_destination_ips_id"},"ecs_support":{"description":"Indicate whether the location must resolve EDNS queries.","type":"boolean","example":false,"default":false,"x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_ecs-support","key$":"ecs_support"},"endpoints":{"description":"Configure the destination endpoints for this location.","type":"object","properties":{"doh":{"properties":{"enabled":{},"networks":{},"require_token":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_doh_endpoint"},"dot":{"properties":{"enabled":{},"networks":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_dot_endpoint"},"ipv4":{"properties":{"enabled":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_ipv4_endpoint"},"ipv6":{"properties":{"enabled":{},"networks":{}},"type":"object","x-ref":"#/components/schemas/zero-trust-gateway_ipv6_endpoint"}},"nullable":true,"required":["ipv4","ipv6","doh","dot"],"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_endpoints","key$":"endpoints"},"max_ttl":{"description":"Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. Omitting `max_ttl` on update resets it to `inherit`.","type":"object","properties":{"mode":{"description":"`inherit` uses the account `max_ttl_secs`. `override` uses this location's `ttl_secs`. `disabled` leaves returned TTLs unchanged.","enum":["inherit","override","disabled"],"example":"override","type":"string","x-auditable":true},"ttl_secs":{"description":"Location-specific cap on DNS response TTLs, in seconds. Required when `mode` is `override`. Must be omitted when `mode` is `inherit` or `disabled`.","example":3600,"maximum":36000,"minimum":60,"nullable":true,"type":"integer","x-auditable":true}},"default":{"mode":"inherit"},"nullable":true,"required":["mode"],"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_max-ttl","key$":"max_ttl"},"name":{"description":"Specify the location name.","type":"string","example":"Austin Office Location","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_name-2","key$":"name"},"networks":{"description":"Specify the list of network ranges from which requests at this location originate. The list takes effect only if it is non-empty and the IPv4 endpoint is enabled for this location.","type":"array","items":{"type":"object","properties":{"network":{"description":"Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.","example":"192.0.2.1/32","type":"string","x-auditable":true}},"required":["network"],"x-ref":"#/components/schemas/zero-trust-gateway_ipv4_network"},"nullable":true,"x-stainless-terraform-configurability":"optional","x-ref":"#/components/schemas/zero-trust-gateway_ipv4_networks","key$":"networks"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"location_id","in":"path","required":true,"schema":{"type":"string","example":"ed35569b41ce4d1facfe683550f54086","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_uuid-3"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Specify the Cloudflare account identifier.","type":"string","example":"699d98642c564d2e855e9661899b7252","x-auditable":true,"x-ref":"#/components/schemas/zero-trust-gateway_identifier-2"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zero_trust_gateway_single_response_3_ref01_ent = client.ZeroTrustGatewaySingleResponse3()
    let zero_trust_gateway_single_response_3_ref01_data = setup.data.new.zero_trust_gateway_single_response_3['zero_trust_gateway_single_response_3_ref01']
    zero_trust_gateway_single_response_3_ref01_data['account_id'] = setup.idmap['account01']

    zero_trust_gateway_single_response_3_ref01_data = (await zero_trust_gateway_single_response_3_ref01_ent.create(zero_trust_gateway_single_response_3_ref01_data)).data()
    assert(null != zero_trust_gateway_single_response_3_ref01_data)


    // UPDATE
    const zero_trust_gateway_single_response_3_ref01_data_up0: any = {}
    zero_trust_gateway_single_response_3_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const zero_trust_gateway_single_response_3_ref01_markdef_up0 = { name: 'dns_destination_ips_id', value: 'Mark01-zero_trust_gateway_single_response_3_ref01_' + setup.now }
    ;(zero_trust_gateway_single_response_3_ref01_data_up0 as any)[zero_trust_gateway_single_response_3_ref01_markdef_up0.name] = zero_trust_gateway_single_response_3_ref01_markdef_up0.value

    const zero_trust_gateway_single_response_3_ref01_resdata_up0 = (await zero_trust_gateway_single_response_3_ref01_ent.update(zero_trust_gateway_single_response_3_ref01_data_up0)).data()
    assert(null != zero_trust_gateway_single_response_3_ref01_resdata_up0)

    assert((zero_trust_gateway_single_response_3_ref01_resdata_up0 as any)[zero_trust_gateway_single_response_3_ref01_markdef_up0.name] === zero_trust_gateway_single_response_3_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zero_trust_gateway_single_response_3/ZeroTrustGatewaySingleResponse3TestData.json')

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
    ['zero_trust_gateway_single_response_301','zero_trust_gateway_single_response_302','zero_trust_gateway_single_response_303','location01','location02','location03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_3_ENTID': idmap,
    'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_3_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_3_ENTID']
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
  
