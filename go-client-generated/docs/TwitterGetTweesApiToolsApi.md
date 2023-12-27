# \TwitterGetTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**FavoritersV2UsingGET**](TwitterGetTweesApiToolsApi.md#FavoritersV2UsingGET) | **Get** /base/apitools/favoritersV2 | Favoriters by V2
[**FavoritersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#FavoritersV2UsingPOST) | **Post** /base/apitools/favoritersV2 | Favoriters by V2
[**FavoritesListUsingGET**](TwitterGetTweesApiToolsApi.md#FavoritesListUsingGET) | **Get** /base/apitools/favoritesList | favorites are now known as likes.
[**FavoritesListUsingPOST**](TwitterGetTweesApiToolsApi.md#FavoritesListUsingPOST) | **Post** /base/apitools/favoritesList | favorites are now known as likes.
[**MentionsTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#MentionsTimelineUsingGET) | **Get** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**MentionsTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#MentionsTimelineUsingPOST) | **Post** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**QuotesV2UsingGET**](TwitterGetTweesApiToolsApi.md#QuotesV2UsingGET) | **Get** /base/apitools/quotesV2 | Quotes by V2
[**QuotesV2UsingPOST**](TwitterGetTweesApiToolsApi.md#QuotesV2UsingPOST) | **Post** /base/apitools/quotesV2 | Quotes by V2
[**RetweetersIdsUsingGET**](TwitterGetTweesApiToolsApi.md#RetweetersIdsUsingGET) | **Get** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**RetweetersIdsUsingPOST**](TwitterGetTweesApiToolsApi.md#RetweetersIdsUsingPOST) | **Post** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**RetweetersV2UsingGET**](TwitterGetTweesApiToolsApi.md#RetweetersV2UsingGET) | **Get** /base/apitools/retweetersV2 | Retweeters by V2
[**RetweetersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#RetweetersV2UsingPOST) | **Post** /base/apitools/retweetersV2 | Retweeters by V2
[**TweetSimpleUsingGET**](TwitterGetTweesApiToolsApi.md#TweetSimpleUsingGET) | **Get** /base/apitools/tweetSimple | tweet Brief information
[**TweetSimpleUsingPOST**](TwitterGetTweesApiToolsApi.md#TweetSimpleUsingPOST) | **Post** /base/apitools/tweetSimple | tweet Brief information
[**TweetTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#TweetTimelineUsingGET) | **Get** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**TweetTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#TweetTimelineUsingPOST) | **Post** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**UserTweetReplyUsingGET**](TwitterGetTweesApiToolsApi.md#UserTweetReplyUsingGET) | **Get** /base/apitools/userTweetReply | get userTweetReply 
[**UserTweetReplyUsingPOST**](TwitterGetTweesApiToolsApi.md#UserTweetReplyUsingPOST) | **Post** /base/apitools/userTweetReply | get userTweetReply 


# **FavoritersV2UsingGET**
> ResultT FavoritersV2UsingGET(ctx, apiKey, tweetId, optional)
Favoriters by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiFavoritersV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiFavoritersV2UsingGETOpts struct

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

# **FavoritersV2UsingPOST**
> ResultT FavoritersV2UsingPOST(ctx, apiKey, tweetId, optional)
Favoriters by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiFavoritersV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiFavoritersV2UsingPOSTOpts struct

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

# **FavoritesListUsingGET**
> ResultT FavoritesListUsingGET(ctx, apiKey, userId, optional)
favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterGetTweesApiToolsApiFavoritesListUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiFavoritesListUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **maxId** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 
 **screenName** | **optional.String**|  | [default to elonmusk]
 **sinceId** | **optional.String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FavoritesListUsingPOST**
> ResultT FavoritesListUsingPOST(ctx, apiKey, userId, optional)
favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterGetTweesApiToolsApiFavoritesListUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiFavoritesListUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **maxId** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 
 **screenName** | **optional.String**|  | [default to elonmusk]
 **sinceId** | **optional.String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MentionsTimelineUsingGET**
> ResultT MentionsTimelineUsingGET(ctx, apiKey, authToken, ct0, optional)
get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiMentionsTimelineUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiMentionsTimelineUsingGETOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **includeEntities** | **optional.String**|  | [default to false]
 **maxId** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 
 **sinceId** | **optional.String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | 
 **trimUser** | **optional.String**|  | [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MentionsTimelineUsingPOST**
> ResultT MentionsTimelineUsingPOST(ctx, apiKey, authToken, ct0, optional)
get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
  **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiMentionsTimelineUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiMentionsTimelineUsingPOSTOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **includeEntities** | **optional.String**|  | [default to false]
 **maxId** | **optional.String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | 
 **sinceId** | **optional.String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | 
 **trimUser** | **optional.String**|  | [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **QuotesV2UsingGET**
> ResultT QuotesV2UsingGET(ctx, apiKey, tweetId, optional)
Quotes by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiQuotesV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiQuotesV2UsingGETOpts struct

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

# **QuotesV2UsingPOST**
> ResultT QuotesV2UsingPOST(ctx, apiKey, tweetId, optional)
Quotes by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiQuotesV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiQuotesV2UsingPOSTOpts struct

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

# **RetweetersIdsUsingGET**
> ResultT RetweetersIdsUsingGET(ctx, apiKey, id, optional)
get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiRetweetersIdsUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiRetweetersIdsUsingGETOpts struct

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

# **RetweetersIdsUsingPOST**
> ResultT RetweetersIdsUsingPOST(ctx, apiKey, id, optional)
get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiRetweetersIdsUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiRetweetersIdsUsingPOSTOpts struct

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

# **RetweetersV2UsingGET**
> ResultT RetweetersV2UsingGET(ctx, apiKey, tweetId, optional)
Retweeters by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiRetweetersV2UsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiRetweetersV2UsingGETOpts struct

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

# **RetweetersV2UsingPOST**
> ResultT RetweetersV2UsingPOST(ctx, apiKey, tweetId, optional)
Retweeters by V2

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **tweetId** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiRetweetersV2UsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiRetweetersV2UsingPOSTOpts struct

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

# **TweetSimpleUsingGET**
> ResultT TweetSimpleUsingGET(ctx, apiKey, id, optional)
tweet Brief information

get tweet Brief information

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiTweetSimpleUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiTweetSimpleUsingGETOpts struct

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

# **TweetSimpleUsingPOST**
> ResultT TweetSimpleUsingPOST(ctx, apiKey, id, optional)
tweet Brief information

get tweet Brief information

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiTweetSimpleUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiTweetSimpleUsingPOSTOpts struct

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

# **TweetTimelineUsingGET**
> ResultT TweetTimelineUsingGET(ctx, apiKey, id, optional)
get TweetTimeline Detail

get tweetDetail and reply

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiTweetTimelineUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiTweetTimelineUsingGETOpts struct

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

# **TweetTimelineUsingPOST**
> ResultT TweetTimelineUsingPOST(ctx, apiKey, id, optional)
get TweetTimeline Detail

get tweetDetail and reply

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **id** | **string**|  | [default to 1722138510680043555]
 **optional** | ***TwitterGetTweesApiToolsApiTweetTimelineUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiTweetTimelineUsingPOSTOpts struct

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

# **UserTweetReplyUsingGET**
> ResultT UserTweetReplyUsingGET(ctx, apiKey, userId, optional)
get userTweetReply 

get user Tweet Reply

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterGetTweesApiToolsApiUserTweetReplyUsingGETOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiUserTweetReplyUsingGETOpts struct

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

# **UserTweetReplyUsingPOST**
> ResultT UserTweetReplyUsingPOST(ctx, apiKey, userId, optional)
get userTweetReply 

get user Tweet Reply

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **apiKey** | **string**|  | [default to your own apikey]
  **userId** | **string**|  | [default to 1574242047661207552]
 **optional** | ***TwitterGetTweesApiToolsApiUserTweetReplyUsingPOSTOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TwitterGetTweesApiToolsApiUserTweetReplyUsingPOSTOpts struct

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

