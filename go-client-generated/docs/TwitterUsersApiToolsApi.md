# \TwitterUsersApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlocksCreateUsingGET**](TwitterUsersApiToolsApi.md#BlocksCreateUsingGET) | **Get** /base/apitools/blocksCreate | blocks Create
[**BlocksCreateUsingPOST**](TwitterUsersApiToolsApi.md#BlocksCreateUsingPOST) | **Post** /base/apitools/blocksCreate | blocks Create
[**BlocksDestroyUsingGET**](TwitterUsersApiToolsApi.md#BlocksDestroyUsingGET) | **Get** /base/apitools/blocksDestroy | blocks Destroy
[**BlocksDestroyUsingPOST**](TwitterUsersApiToolsApi.md#BlocksDestroyUsingPOST) | **Post** /base/apitools/blocksDestroy | blocks Destroy
[**GetListByUserIdOrScreenNameUsingGET**](TwitterUsersApiToolsApi.md#GetListByUserIdOrScreenNameUsingGET) | **Get** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**GetListByUserIdOrScreenNameUsingPOST**](TwitterUsersApiToolsApi.md#GetListByUserIdOrScreenNameUsingPOST) | **Post** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**GetListMembersByListIdUsingGET**](TwitterUsersApiToolsApi.md#GetListMembersByListIdUsingGET) | **Get** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**GetListMembersByListIdUsingPOST**](TwitterUsersApiToolsApi.md#GetListMembersByListIdUsingPOST) | **Post** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**GetUserByIdOrNameLookUpUsingGET**](TwitterUsersApiToolsApi.md#GetUserByIdOrNameLookUpUsingGET) | **Get** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**GetUserByIdOrNameLookUpUsingPOST**](TwitterUsersApiToolsApi.md#GetUserByIdOrNameLookUpUsingPOST) | **Post** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**GetUserByIdOrNameShowUsingGET**](TwitterUsersApiToolsApi.md#GetUserByIdOrNameShowUsingGET) | **Get** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**GetUserByIdOrNameShowUsingPOST**](TwitterUsersApiToolsApi.md#GetUserByIdOrNameShowUsingPOST) | **Post** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**UerByIdRestIdV2UsingGET**](TwitterUsersApiToolsApi.md#UerByIdRestIdV2UsingGET) | **Get** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**UerByIdRestIdV2UsingPOST**](TwitterUsersApiToolsApi.md#UerByIdRestIdV2UsingPOST) | **Post** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**UserByScreenNameV2UsingGET**](TwitterUsersApiToolsApi.md#UserByScreenNameV2UsingGET) | **Get** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**UserByScreenNameV2UsingPOST**](TwitterUsersApiToolsApi.md#UserByScreenNameV2UsingPOST) | **Post** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**UserTimelineUsingGET**](TwitterUsersApiToolsApi.md#UserTimelineUsingGET) | **Get** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**UserTimelineUsingPOST**](TwitterUsersApiToolsApi.md#UserTimelineUsingPOST) | **Post** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**UserTweetsV2UsingGET**](TwitterUsersApiToolsApi.md#UserTweetsV2UsingGET) | **Get** /base/apitools/userTweetsV2 | Get UserTweets by V2
[**UserTweetsV2UsingPOST**](TwitterUsersApiToolsApi.md#UserTweetsV2UsingPOST) | **Post** /base/apitools/userTweetsV2 | Get UserTweets by V2


# **BlocksCreateUsingGET**
> ResultT BlocksCreateUsingGET(ctx, apiKey, authToken, ct0, optional)
blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterUsersApiToolsApiBlocksCreateUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiBlocksCreateUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **screenName** | **optional.String**|  | 
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BlocksCreateUsingPOST**
> ResultT BlocksCreateUsingPOST(ctx, apiKey, authToken, ct0, optional)
blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterUsersApiToolsApiBlocksCreateUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiBlocksCreateUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **screenName** | **optional.String**|  | 
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BlocksDestroyUsingGET**
> ResultT BlocksDestroyUsingGET(ctx, apiKey, authToken, ct0, optional)
blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterUsersApiToolsApiBlocksDestroyUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiBlocksDestroyUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **screenName** | **optional.String**|  | 
 **userId** | **optional.String**|  | [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BlocksDestroyUsingPOST**
> ResultT BlocksDestroyUsingPOST(ctx, apiKey, authToken, ct0, optional)
blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterUsersApiToolsApiBlocksDestroyUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiBlocksDestroyUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **screenName** | **optional.String**|  | 
 **userId** | **optional.String**|  | [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetListByUserIdOrScreenNameUsingGET**
> ResultT GetListByUserIdOrScreenNameUsingGET(ctx, apiKey, optional)
Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetListByUserIdOrScreenNameUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetListByUserIdOrScreenNameUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetListByUserIdOrScreenNameUsingPOST**
> ResultT GetListByUserIdOrScreenNameUsingPOST(ctx, apiKey, optional)
Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetListByUserIdOrScreenNameUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetListByUserIdOrScreenNameUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetListMembersByListIdUsingGET**
> ResultT GetListMembersByListIdUsingGET(ctx, apiKey, listId, optional)
Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **listId** | **string**|  | [default to 1453837432479227913]
 **optional** | ***TwitterUsersApiToolsApiGetListMembersByListIdUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetListMembersByListIdUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetListMembersByListIdUsingPOST**
> ResultT GetListMembersByListIdUsingPOST(ctx, apiKey, listId, optional)
Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **listId** | **string**|  | [default to 1453837432479227913]
 **optional** | ***TwitterUsersApiToolsApiGetListMembersByListIdUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetListMembersByListIdUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetUserByIdOrNameLookUpUsingGET**
> ResultT GetUserByIdOrNameLookUpUsingGET(ctx, apiKey, optional)
Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetUserByIdOrNameLookUpUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetUserByIdOrNameLookUpUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetUserByIdOrNameLookUpUsingPOST**
> ResultT GetUserByIdOrNameLookUpUsingPOST(ctx, apiKey, optional)
Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetUserByIdOrNameLookUpUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetUserByIdOrNameLookUpUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetUserByIdOrNameShowUsingGET**
> ResultT GetUserByIdOrNameShowUsingGET(ctx, apiKey, optional)
Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetUserByIdOrNameShowUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetUserByIdOrNameShowUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetUserByIdOrNameShowUsingPOST**
> ResultT GetUserByIdOrNameShowUsingPOST(ctx, apiKey, optional)
Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterUsersApiToolsApiGetUserByIdOrNameShowUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiGetUserByIdOrNameShowUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **screenName** | **optional.String**|  | [default to elonmusk]
 **userId** | **optional.String**|  | [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UerByIdRestIdV2UsingGET**
> ResultT UerByIdRestIdV2UsingGET(ctx, apiKey, userId, optional)
Get uerByIdRestId by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUerByIdRestIdV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUerByIdRestIdV2UsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UerByIdRestIdV2UsingPOST**
> ResultT UerByIdRestIdV2UsingPOST(ctx, apiKey, userId, optional)
Get uerByIdRestId by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUerByIdRestIdV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUerByIdRestIdV2UsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserByScreenNameV2UsingGET**
> ResultT UserByScreenNameV2UsingGET(ctx, apiKey, screenName)
Get userByScreenName by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **screenName** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserByScreenNameV2UsingPOST**
> ResultT UserByScreenNameV2UsingPOST(ctx, apiKey, screenName)
Get userByScreenName by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **screenName** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserTimelineUsingGET**
> ResultT UserTimelineUsingGET(ctx, apiKey, userId, optional)
Get UserTimeline  tweets info

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUserTimelineUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUserTimelineUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserTimelineUsingPOST**
> ResultT UserTimelineUsingPOST(ctx, apiKey, userId, optional)
Get UserTimeline  tweets info

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUserTimelineUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUserTimelineUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserTweetsV2UsingGET**
> ResultT UserTweetsV2UsingGET(ctx, apiKey, userId, optional)
Get UserTweets by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUserTweetsV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUserTweetsV2UsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserTweetsV2UsingPOST**
> ResultT UserTweetsV2UsingPOST(ctx, apiKey, userId, optional)
Get UserTweets by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterUsersApiToolsApiUserTweetsV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterUsersApiToolsApiUserTweetsV2UsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cursor** | **optional.String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

