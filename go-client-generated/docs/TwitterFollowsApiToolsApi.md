# \TwitterFollowsApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlueVerifiedFollowersV2UsingGET**](TwitterFollowsApiToolsApi.md#BlueVerifiedFollowersV2UsingGET) | **Get** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**BlueVerifiedFollowersV2UsingPOST**](TwitterFollowsApiToolsApi.md#BlueVerifiedFollowersV2UsingPOST) | **Post** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**FollowUsingGET**](TwitterFollowsApiToolsApi.md#FollowUsingGET) | **Get** /base/apitools/follow | to follow 
[**FollowUsingPOST**](TwitterFollowsApiToolsApi.md#FollowUsingPOST) | **Post** /base/apitools/follow | to follow 
[**FollowersIdsUsingGET**](TwitterFollowsApiToolsApi.md#FollowersIdsUsingGET) | **Get** /base/apitools/followersIds | Get Followers Ids
[**FollowersIdsUsingPOST**](TwitterFollowsApiToolsApi.md#FollowersIdsUsingPOST) | **Post** /base/apitools/followersIds | Get Followers Ids
[**FollowersListUsingGET**](TwitterFollowsApiToolsApi.md#FollowersListUsingGET) | **Get** /base/apitools/followersList | Get Followers User Collection
[**FollowersListUsingPOST**](TwitterFollowsApiToolsApi.md#FollowersListUsingPOST) | **Post** /base/apitools/followersList | Get Followers User Collection
[**FollowersListV2UsingGET**](TwitterFollowsApiToolsApi.md#FollowersListV2UsingGET) | **Get** /base/apitools/followersListV2 | get followersList by V2 
[**FollowersListV2UsingPOST**](TwitterFollowsApiToolsApi.md#FollowersListV2UsingPOST) | **Post** /base/apitools/followersListV2 | get followersList by V2 
[**FollowingsIdsUsingGET**](TwitterFollowsApiToolsApi.md#FollowingsIdsUsingGET) | **Get** /base/apitools/followingsIds | Get Followings Ids
[**FollowingsIdsUsingPOST**](TwitterFollowsApiToolsApi.md#FollowingsIdsUsingPOST) | **Post** /base/apitools/followingsIds | Get Followings Ids
[**FollowingsListUsingGET**](TwitterFollowsApiToolsApi.md#FollowingsListUsingGET) | **Get** /base/apitools/followingsList | Get Followings User Collection
[**FollowingsListUsingPOST**](TwitterFollowsApiToolsApi.md#FollowingsListUsingPOST) | **Post** /base/apitools/followingsList | Get Followings User Collection
[**FollowingsListV2UsingGET**](TwitterFollowsApiToolsApi.md#FollowingsListV2UsingGET) | **Get** /base/apitools/followingsListV2 | get followingsList by V2 
[**FollowingsListV2UsingPOST**](TwitterFollowsApiToolsApi.md#FollowingsListV2UsingPOST) | **Post** /base/apitools/followingsListV2 | get followingsList by V2 
[**GetFriendshipsShowUsingGET**](TwitterFollowsApiToolsApi.md#GetFriendshipsShowUsingGET) | **Get** /base/apitools/friendshipsShow | Get relationship information between two users
[**GetFriendshipsShowUsingPOST**](TwitterFollowsApiToolsApi.md#GetFriendshipsShowUsingPOST) | **Post** /base/apitools/friendshipsShow | Get relationship information between two users
[**UnfollowUsingGET**](TwitterFollowsApiToolsApi.md#UnfollowUsingGET) | **Get** /base/apitools/unfollow | to unfollow 
[**UnfollowUsingPOST**](TwitterFollowsApiToolsApi.md#UnfollowUsingPOST) | **Post** /base/apitools/unfollow | to unfollow 


# **BlueVerifiedFollowersV2UsingGET**
> ResultT BlueVerifiedFollowersV2UsingGET(ctx, apiKey, userId, optional)
get blueVerifiedFollowers by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiBlueVerifiedFollowersV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiBlueVerifiedFollowersV2UsingGETOpts struct

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

# **BlueVerifiedFollowersV2UsingPOST**
> ResultT BlueVerifiedFollowersV2UsingPOST(ctx, apiKey, userId, optional)
get blueVerifiedFollowers by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiBlueVerifiedFollowersV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiBlueVerifiedFollowersV2UsingPOSTOpts struct

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

# **FollowUsingGET**
> ResultT FollowUsingGET(ctx, apiKey, authToken, ct0, optional)
to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterFollowsApiToolsApiFollowUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowUsingGETOpts struct

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

# **FollowUsingPOST**
> ResultT FollowUsingPOST(ctx, apiKey, authToken, ct0, optional)
to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterFollowsApiToolsApiFollowUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowUsingPOSTOpts struct

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

# **FollowersIdsUsingGET**
> ResultT FollowersIdsUsingGET(ctx, apiKey, optional)
Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowersIdsUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersIdsUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowersIdsUsingPOST**
> ResultT FollowersIdsUsingPOST(ctx, apiKey, optional)
Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowersIdsUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersIdsUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowersListUsingGET**
> ResultT FollowersListUsingGET(ctx, apiKey, optional)
Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowersListUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersListUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowersListUsingPOST**
> ResultT FollowersListUsingPOST(ctx, apiKey, optional)
Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowersListUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersListUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowersListV2UsingGET**
> ResultT FollowersListV2UsingGET(ctx, apiKey, userId, optional)
get followersList by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiFollowersListV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersListV2UsingGETOpts struct

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

# **FollowersListV2UsingPOST**
> ResultT FollowersListV2UsingPOST(ctx, apiKey, userId, optional)
get followersList by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiFollowersListV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowersListV2UsingPOSTOpts struct

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

# **FollowingsIdsUsingGET**
> ResultT FollowingsIdsUsingGET(ctx, apiKey, optional)
Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsIdsUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsIdsUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowingsIdsUsingPOST**
> ResultT FollowingsIdsUsingPOST(ctx, apiKey, optional)
Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsIdsUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsIdsUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowingsListUsingGET**
> ResultT FollowingsListUsingGET(ctx, apiKey, optional)
Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsListUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsListUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowingsListUsingPOST**
> ResultT FollowingsListUsingPOST(ctx, apiKey, optional)
Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsListUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsListUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **optional.String**|  | [default to -1]
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

# **FollowingsListV2UsingGET**
> ResultT FollowingsListV2UsingGET(ctx, apiKey, userId, optional)
get followingsList by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsListV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsListV2UsingGETOpts struct

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

# **FollowingsListV2UsingPOST**
> ResultT FollowingsListV2UsingPOST(ctx, apiKey, userId, optional)
get followingsList by V2 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterFollowsApiToolsApiFollowingsListV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiFollowingsListV2UsingPOSTOpts struct

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

# **GetFriendshipsShowUsingGET**
> ResultT GetFriendshipsShowUsingGET(ctx, apiKey, optional)
Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiGetFriendshipsShowUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiGetFriendshipsShowUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sourceId** | **optional.String**|  | [default to 1574242047661207552]
 **sourceScreenName** | **optional.String**|  | 
 **targetId** | **optional.String**|  | [default to 1620357967962058752]
 **targetScreenName** | **optional.String**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetFriendshipsShowUsingPOST**
> ResultT GetFriendshipsShowUsingPOST(ctx, apiKey, optional)
Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
 **optional** | ***TwitterFollowsApiToolsApiGetFriendshipsShowUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiGetFriendshipsShowUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sourceId** | **optional.String**|  | [default to 1574242047661207552]
 **sourceScreenName** | **optional.String**|  | 
 **targetId** | **optional.String**|  | [default to 1620357967962058752]
 **targetScreenName** | **optional.String**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UnfollowUsingGET**
> ResultT UnfollowUsingGET(ctx, apiKey, authToken, ct0, optional)
to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterFollowsApiToolsApiUnfollowUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiUnfollowUsingGETOpts struct

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

# **UnfollowUsingPOST**
> ResultT UnfollowUsingPOST(ctx, apiKey, authToken, ct0, optional)
to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterFollowsApiToolsApiUnfollowUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterFollowsApiToolsApiUnfollowUsingPOSTOpts struct

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

