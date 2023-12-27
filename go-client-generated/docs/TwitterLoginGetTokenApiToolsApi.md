# \TwitterLoginGetTokenApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Login2FAUsingGET**](TwitterLoginGetTokenApiToolsApi.md#Login2FAUsingGET) | **Get** /base/apitools/login2FA | login by code
[**Login2FAUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#Login2FAUsingPOST) | **Post** /base/apitools/login2FA | login by code
[**LoginUsingGET**](TwitterLoginGetTokenApiToolsApi.md#LoginUsingGET) | **Get** /base/apitools/login | login by userName and passwrd
[**LoginUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#LoginUsingPOST) | **Post** /base/apitools/login | login by userName and passwrd


# **Login2FAUsingGET**
> ResultT Login2FAUsingGET(ctx, apiKey, code)
login by code

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **code** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Login2FAUsingPOST**
> ResultT Login2FAUsingPOST(ctx, apiKey, code)
login by code

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **code** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **LoginUsingGET**
> ResultT LoginUsingGET(ctx, apiKey, email, password, screenName)
login by userName and passwrd

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **email** | **string**|  | [default to elonmusk@gmail.com]
  **password** | **string**|  | [default to tesla]
  **screenName** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **LoginUsingPOST**
> ResultT LoginUsingPOST(ctx, apiKey, email, password, screenName)
login by userName and passwrd

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **email** | **string**|  | [default to elonmusk@gmail.com]
  **password** | **string**|  | [default to tesla]
  **screenName** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

