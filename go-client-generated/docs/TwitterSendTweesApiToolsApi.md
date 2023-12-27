# \TwitterSendTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateRetweetUsingGET**](TwitterSendTweesApiToolsApi.md#CreateRetweetUsingGET) | **Get** /base/apitools/createRetweet | retweet a Tweet
[**CreateRetweetUsingPOST**](TwitterSendTweesApiToolsApi.md#CreateRetweetUsingPOST) | **Post** /base/apitools/createRetweet | retweet a Tweet
[**CreateTweetUsingGET**](TwitterSendTweesApiToolsApi.md#CreateTweetUsingGET) | **Get** /base/apitools/createTweet | create a Tweet
[**CreateTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#CreateTweetUsingPOST) | **Post** /base/apitools/createTweet | create a Tweet
[**LikeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#LikeTweetUsingGET) | **Get** /base/apitools/likeTweet | like(favorites) Tweet
[**LikeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#LikeTweetUsingPOST) | **Post** /base/apitools/likeTweet | like(favorites) Tweet
[**TweetReplyUsingGET**](TwitterSendTweesApiToolsApi.md#TweetReplyUsingGET) | **Get** /base/apitools/tweetReply | reply to tweet 
[**TweetReplyUsingPOST**](TwitterSendTweesApiToolsApi.md#TweetReplyUsingPOST) | **Post** /base/apitools/tweetReply | reply to tweet 
[**UnlikeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#UnlikeTweetUsingGET) | **Get** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**UnlikeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#UnlikeTweetUsingPOST) | **Post** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**UploadMediaUsingGET**](TwitterSendTweesApiToolsApi.md#UploadMediaUsingGET) | **Get** /base/apitools/uploadMedia | upload media (gif)
[**UploadMediaUsingPOST**](TwitterSendTweesApiToolsApi.md#UploadMediaUsingPOST) | **Post** /base/apitools/uploadMedia | upload media (gif)


# **CreateRetweetUsingGET**
> ResultT CreateRetweetUsingGET(ctx, apiKey, authToken, ct0, tweetId)
retweet a Tweet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **tweetId** | **string**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateRetweetUsingPOST**
> ResultT CreateRetweetUsingPOST(ctx, apiKey, authToken, ct0, tweetId)
retweet a Tweet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **tweetId** | **string**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateTweetUsingGET**
> ResultT CreateTweetUsingGET(ctx, apiKey, authToken, ct0, text, optional)
create a Tweet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **optional** | ***TwitterSendTweesApiToolsApiCreateTweetUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSendTweesApiToolsApiCreateTweetUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **medias** | [**optional.Interface of []string**](string.md)| medias ids | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateTweetUsingPOST**
> ResultT CreateTweetUsingPOST(ctx, apiKey, authToken, ct0, text, optional)
create a Tweet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **optional** | ***TwitterSendTweesApiToolsApiCreateTweetUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSendTweesApiToolsApiCreateTweetUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **medias** | [**optional.Interface of []string**](string.md)| medias ids | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **LikeTweetUsingGET**
> ResultT LikeTweetUsingGET(ctx, apiKey, authToken, ct0, id)
like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **LikeTweetUsingPOST**
> ResultT LikeTweetUsingPOST(ctx, apiKey, authToken, ct0, id)
like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TweetReplyUsingGET**
> ResultT TweetReplyUsingGET(ctx, apiKey, authToken, ct0, text, tweetId, optional)
reply to tweet 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
  **tweetId** | **string**|  | [default to 1722885211313307819]
 **optional** | ***TwitterSendTweesApiToolsApiTweetReplyUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSendTweesApiToolsApiTweetReplyUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





 **medias** | [**optional.Interface of []string**](string.md)| medias ids | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TweetReplyUsingPOST**
> ResultT TweetReplyUsingPOST(ctx, apiKey, authToken, ct0, text, tweetId, optional)
reply to tweet 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
  **tweetId** | **string**|  | [default to 1722885211313307819]
 **optional** | ***TwitterSendTweesApiToolsApiTweetReplyUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterSendTweesApiToolsApiTweetReplyUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





 **medias** | [**optional.Interface of []string**](string.md)| medias ids | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UnlikeTweetUsingGET**
> ResultT UnlikeTweetUsingGET(ctx, apiKey, authToken, ct0, id)
unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UnlikeTweetUsingPOST**
> ResultT UnlikeTweetUsingPOST(ctx, apiKey, authToken, ct0, id)
unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadMediaUsingGET**
> ResultT UploadMediaUsingGET(ctx, apiKey, authToken, ct0, mediaUrl)
upload media (gif)

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **mediaUrl** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadMediaUsingPOST**
> ResultT UploadMediaUsingPOST(ctx, apiKey, authToken, ct0, mediaUrl)
upload media (gif)

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **mediaUrl** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

