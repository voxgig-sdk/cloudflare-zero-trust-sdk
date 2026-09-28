# CloudflareZeroTrust SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareZeroTrustUtility.registrar = ->(u) {
  u.clean = CloudflareZeroTrustUtilities::Clean
  u.done = CloudflareZeroTrustUtilities::Done
  u.make_error = CloudflareZeroTrustUtilities::MakeError
  u.feature_add = CloudflareZeroTrustUtilities::FeatureAdd
  u.feature_hook = CloudflareZeroTrustUtilities::FeatureHook
  u.feature_init = CloudflareZeroTrustUtilities::FeatureInit
  u.fetcher = CloudflareZeroTrustUtilities::Fetcher
  u.make_fetch_def = CloudflareZeroTrustUtilities::MakeFetchDef
  u.make_context = CloudflareZeroTrustUtilities::MakeContext
  u.make_options = CloudflareZeroTrustUtilities::MakeOptions
  u.make_request = CloudflareZeroTrustUtilities::MakeRequest
  u.make_response = CloudflareZeroTrustUtilities::MakeResponse
  u.make_result = CloudflareZeroTrustUtilities::MakeResult
  u.make_point = CloudflareZeroTrustUtilities::MakePoint
  u.make_spec = CloudflareZeroTrustUtilities::MakeSpec
  u.make_url = CloudflareZeroTrustUtilities::MakeUrl
  u.param = CloudflareZeroTrustUtilities::Param
  u.prepare_auth = CloudflareZeroTrustUtilities::PrepareAuth
  u.prepare_body = CloudflareZeroTrustUtilities::PrepareBody
  u.prepare_headers = CloudflareZeroTrustUtilities::PrepareHeaders
  u.prepare_method = CloudflareZeroTrustUtilities::PrepareMethod
  u.prepare_params = CloudflareZeroTrustUtilities::PrepareParams
  u.prepare_path = CloudflareZeroTrustUtilities::PreparePath
  u.prepare_query = CloudflareZeroTrustUtilities::PrepareQuery
  u.graphql_body = CloudflareZeroTrustUtilities::GraphqlBody
  u.graphql_errors = CloudflareZeroTrustUtilities::GraphqlErrors
  u.result_basic = CloudflareZeroTrustUtilities::ResultBasic
  u.result_body = CloudflareZeroTrustUtilities::ResultBody
  u.result_headers = CloudflareZeroTrustUtilities::ResultHeaders
  u.transform_request = CloudflareZeroTrustUtilities::TransformRequest
  u.transform_response = CloudflareZeroTrustUtilities::TransformResponse
}
