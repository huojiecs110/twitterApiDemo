# \TwitterDMSApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetDMSListV2UsingGET**](TwitterDMSApiToolsApi.md#GetDMSListV2UsingGET) | **Get** /base/apitools/getDMSListV2 | get DMS List
[**GetDMSListV2UsingPOST**](TwitterDMSApiToolsApi.md#GetDMSListV2UsingPOST) | **Post** /base/apitools/getDMSListV2 | get DMS List
[**GetDMSUsingGET**](TwitterDMSApiToolsApi.md#GetDMSUsingGET) | **Get** /base/apitools/getDMS | receiving events
[**GetDMSUsingPOST**](TwitterDMSApiToolsApi.md#GetDMSUsingPOST) | **Post** /base/apitools/getDMS | receiving events
[**SendDMSMediaUsingGET**](TwitterDMSApiToolsApi.md#SendDMSMediaUsingGET) | **Get** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**SendDMSMediaUsingPOST**](TwitterDMSApiToolsApi.md#SendDMSMediaUsingPOST) | **Post** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**SendDMSUsingGET**](TwitterDMSApiToolsApi.md#SendDMSUsingGET) | **Get** /base/apitools/sendDMS | sendDMS events.
[**SendDMSUsingPOST**](TwitterDMSApiToolsApi.md#SendDMSUsingPOST) | **Post** /base/apitools/sendDMS | sendDMS events.
[**UploadMediaDMUsingGET**](TwitterDMSApiToolsApi.md#UploadMediaDMUsingGET) | **Get** /base/apitools/uploadMediaDM | upload media for DM 
[**UploadMediaDMUsingPOST**](TwitterDMSApiToolsApi.md#UploadMediaDMUsingPOST) | **Post** /base/apitools/uploadMediaDM | upload media for DM 


# **GetDMSListV2UsingGET**
> ResultT GetDMSListV2UsingGET(ctx, apiKey, authToken, ct0, cursor)
get DMS List

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **cursor** | **string**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetDMSListV2UsingPOST**
> ResultT GetDMSListV2UsingPOST(ctx, apiKey, authToken, ct0, cursor)
get DMS List

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **cursor** | **string**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetDMSUsingGET**
> ResultT GetDMSUsingGET(ctx, apiKey, authToken, ct0, id)
receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetDMSUsingPOST**
> ResultT GetDMSUsingPOST(ctx, apiKey, authToken, ct0, id)
receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendDMSMediaUsingGET**
> ResultT SendDMSMediaUsingGET(ctx, apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type_, optional)
sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **attachmentMediaId** | **string**|  | 
  **attachmentType** | **string**|  | [default to media]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **recipientId** | **string**|  | 
  **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
  **type_** | **string**|  | [default to message_create]
 **optional** | ***TwitterDMSApiToolsApiSendDMSMediaUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterDMSApiToolsApiSendDMSMediaUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------








 **quickReplyType** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendDMSMediaUsingPOST**
> ResultT SendDMSMediaUsingPOST(ctx, apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type_, optional)
sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **attachmentMediaId** | **string**|  | 
  **attachmentType** | **string**|  | [default to media]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **recipientId** | **string**|  | 
  **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
  **type_** | **string**|  | [default to message_create]
 **optional** | ***TwitterDMSApiToolsApiSendDMSMediaUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterDMSApiToolsApiSendDMSMediaUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------








 **quickReplyType** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendDMSUsingGET**
> ResultT SendDMSUsingGET(ctx, apiKey, authToken, ct0, recipientId, text, type_)
sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **recipientId** | **string**|  | 
  **text** | **string**|  | 
  **type_** | **string**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendDMSUsingPOST**
> ResultT SendDMSUsingPOST(ctx, apiKey, authToken, ct0, recipientId, text, type_)
sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **recipientId** | **string**|  | 
  **text** | **string**|  | 
  **type_** | **string**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadMediaDMUsingGET**
> ResultT UploadMediaDMUsingGET(ctx, apiKey, authToken, ct0, file)
upload media for DM 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **file** | ***os.File**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadMediaDMUsingPOST**
> ResultT UploadMediaDMUsingPOST(ctx, apiKey, authToken, ct0, file)
upload media for DM 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **file** | ***os.File**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

