# \TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SearchUsingGET**](TwitterSearchApiToolsApi.md#SearchUsingGET) | **Get** /base/apitools/search | Advanced Search
[**SearchUsingPOST**](TwitterSearchApiToolsApi.md#SearchUsingPOST) | **Post** /base/apitools/search | Advanced Search
[**TrendsUsingGET**](TwitterSearchApiToolsApi.md#TrendsUsingGET) | **Get** /base/apitools/trends | trends Search
[**TrendsUsingPOST**](TwitterSearchApiToolsApi.md#TrendsUsingPOST) | **Post** /base/apitools/trends | trends Search


# **SearchUsingGET**
> ResultT SearchUsingGET(ctx, apiKey, words, optional)
Advanced Search

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **words** | **string**|  | 
 **optional** | ***TwitterSearchApiToolsApiSearchUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSearchApiToolsApiSearchUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **any** | **optional.String**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | 
 **cursor** | **optional.String**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | 
 **from** | **optional.String**| From these accounts (Example: @Twitter �� sent from @Twitter) | 
 **likes** | **optional.String**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | 
 **mentioning** | **optional.String**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | 
 **none** | **optional.String**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | 
 **phrase** | **optional.String**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | 
 **replies** | **optional.String**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | 
 **retweets** | **optional.String**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | 
 **since** | **optional.String**| start time (Example: 2020-01-01 ) | 
 **tag** | **optional.String**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | 
 **to** | **optional.String**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | 
 **until** | **optional.String**| end time (Example: 2021-02-02) | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SearchUsingPOST**
> ResultT SearchUsingPOST(ctx, apiKey, words, optional)
Advanced Search

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **words** | **string**|  | 
 **optional** | ***TwitterSearchApiToolsApiSearchUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSearchApiToolsApiSearchUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **any** | **optional.String**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | 
 **cursor** | **optional.String**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | 
 **from** | **optional.String**| From these accounts (Example: @Twitter �� sent from @Twitter) | 
 **likes** | **optional.String**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | 
 **mentioning** | **optional.String**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | 
 **none** | **optional.String**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | 
 **phrase** | **optional.String**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | 
 **replies** | **optional.String**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | 
 **retweets** | **optional.String**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | 
 **since** | **optional.String**| start time (Example: 2020-01-01 ) | 
 **tag** | **optional.String**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | 
 **to** | **optional.String**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | 
 **until** | **optional.String**| end time (Example: 2021-02-02) | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TrendsUsingGET**
> ResultT TrendsUsingGET(ctx, apiKey, id)
trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TrendsUsingPOST**
> ResultT TrendsUsingPOST(ctx, apiKey, id)
trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

