# IO.Swagger.Api.TwitterGetTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**FavoritersV2UsingGET**](TwitterGetTweesApiToolsApi.md#favoritersv2usingget) | **GET** /base/apitools/favoritersV2 | Favoriters by V2
[**FavoritersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#favoritersv2usingpost) | **POST** /base/apitools/favoritersV2 | Favoriters by V2
[**FavoritesListUsingGET**](TwitterGetTweesApiToolsApi.md#favoriteslistusingget) | **GET** /base/apitools/favoritesList | favorites are now known as likes.
[**FavoritesListUsingPOST**](TwitterGetTweesApiToolsApi.md#favoriteslistusingpost) | **POST** /base/apitools/favoritesList | favorites are now known as likes.
[**MentionsTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#mentionstimelineusingget) | **GET** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**MentionsTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#mentionstimelineusingpost) | **POST** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**QuotesV2UsingGET**](TwitterGetTweesApiToolsApi.md#quotesv2usingget) | **GET** /base/apitools/quotesV2 | Quotes by V2
[**QuotesV2UsingPOST**](TwitterGetTweesApiToolsApi.md#quotesv2usingpost) | **POST** /base/apitools/quotesV2 | Quotes by V2
[**RetweetersIdsUsingGET**](TwitterGetTweesApiToolsApi.md#retweetersidsusingget) | **GET** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**RetweetersIdsUsingPOST**](TwitterGetTweesApiToolsApi.md#retweetersidsusingpost) | **POST** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**RetweetersV2UsingGET**](TwitterGetTweesApiToolsApi.md#retweetersv2usingget) | **GET** /base/apitools/retweetersV2 | Retweeters by V2
[**RetweetersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#retweetersv2usingpost) | **POST** /base/apitools/retweetersV2 | Retweeters by V2
[**TweetSimpleUsingGET**](TwitterGetTweesApiToolsApi.md#tweetsimpleusingget) | **GET** /base/apitools/tweetSimple | tweet Brief information
[**TweetSimpleUsingPOST**](TwitterGetTweesApiToolsApi.md#tweetsimpleusingpost) | **POST** /base/apitools/tweetSimple | tweet Brief information
[**TweetTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#tweettimelineusingget) | **GET** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**TweetTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#tweettimelineusingpost) | **POST** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**UserTweetReplyUsingGET**](TwitterGetTweesApiToolsApi.md#usertweetreplyusingget) | **GET** /base/apitools/userTweetReply | get userTweetReply 
[**UserTweetReplyUsingPOST**](TwitterGetTweesApiToolsApi.md#usertweetreplyusingpost) | **POST** /base/apitools/userTweetReply | get userTweetReply 


<a name="favoritersv2usingget"></a>
# **FavoritersV2UsingGET**
> ResultT FavoritersV2UsingGET (string apiKey, string tweetId, string cursor = null)

Favoriters by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FavoritersV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Favoriters by V2
                ResultT result = apiInstance.FavoritersV2UsingGET(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.FavoritersV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="favoritersv2usingpost"></a>
# **FavoritersV2UsingPOST**
> ResultT FavoritersV2UsingPOST (string apiKey, string tweetId, string cursor = null)

Favoriters by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FavoritersV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Favoriters by V2
                ResultT result = apiInstance.FavoritersV2UsingPOST(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.FavoritersV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="favoriteslistusingget"></a>
# **FavoritesListUsingGET**
> ResultT FavoritesListUsingGET (string apiKey, string userId, string maxId = null, string screenName = null, string sinceId = null)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FavoritesListUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var maxId = maxId_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var sinceId = sinceId_example;  // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional) 

            try
            {
                // favorites are now known as likes.
                ResultT result = apiInstance.FavoritesListUsingGET(apiKey, userId, maxId, screenName, sinceId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.FavoritesListUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **maxId** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **sinceId** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="favoriteslistusingpost"></a>
# **FavoritesListUsingPOST**
> ResultT FavoritesListUsingPOST (string apiKey, string userId, string maxId = null, string screenName = null, string sinceId = null)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FavoritesListUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var maxId = maxId_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var sinceId = sinceId_example;  // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional) 

            try
            {
                // favorites are now known as likes.
                ResultT result = apiInstance.FavoritesListUsingPOST(apiKey, userId, maxId, screenName, sinceId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.FavoritesListUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **maxId** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **sinceId** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mentionstimelineusingget"></a>
# **MentionsTimelineUsingGET**
> ResultT MentionsTimelineUsingGET (string apiKey, string authToken, string ct0, string includeEntities = null, string maxId = null, string sinceId = null, string trimUser = null)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MentionsTimelineUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var includeEntities = includeEntities_example;  // string |  (optional)  (default to false)
            var maxId = maxId_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 
            var sinceId = sinceId_example;  // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional) 
            var trimUser = trimUser_example;  // string |  (optional)  (default to true)

            try
            {
                // get mentionsTimeline Detail
                ResultT result = apiInstance.MentionsTimelineUsingGET(apiKey, authToken, ct0, includeEntities, maxId, sinceId, trimUser);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.MentionsTimelineUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **includeEntities** | **string**|  | [optional] [default to false]
 **maxId** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **sinceId** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trimUser** | **string**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mentionstimelineusingpost"></a>
# **MentionsTimelineUsingPOST**
> ResultT MentionsTimelineUsingPOST (string apiKey, string authToken, string ct0, string includeEntities = null, string maxId = null, string sinceId = null, string trimUser = null)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MentionsTimelineUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var includeEntities = includeEntities_example;  // string |  (optional)  (default to false)
            var maxId = maxId_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 
            var sinceId = sinceId_example;  // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional) 
            var trimUser = trimUser_example;  // string |  (optional)  (default to true)

            try
            {
                // get mentionsTimeline Detail
                ResultT result = apiInstance.MentionsTimelineUsingPOST(apiKey, authToken, ct0, includeEntities, maxId, sinceId, trimUser);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.MentionsTimelineUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **includeEntities** | **string**|  | [optional] [default to false]
 **maxId** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **sinceId** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trimUser** | **string**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="quotesv2usingget"></a>
# **QuotesV2UsingGET**
> ResultT QuotesV2UsingGET (string apiKey, string tweetId, string cursor = null)

Quotes by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class QuotesV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Quotes by V2
                ResultT result = apiInstance.QuotesV2UsingGET(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.QuotesV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="quotesv2usingpost"></a>
# **QuotesV2UsingPOST**
> ResultT QuotesV2UsingPOST (string apiKey, string tweetId, string cursor = null)

Quotes by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class QuotesV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Quotes by V2
                ResultT result = apiInstance.QuotesV2UsingPOST(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.QuotesV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="retweetersidsusingget"></a>
# **RetweetersIdsUsingGET**
> ResultT RetweetersIdsUsingGET (string apiKey, string id, string cursor = null)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RetweetersIdsUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get retwweeters ids by tweetId
                ResultT result = apiInstance.RetweetersIdsUsingGET(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.RetweetersIdsUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="retweetersidsusingpost"></a>
# **RetweetersIdsUsingPOST**
> ResultT RetweetersIdsUsingPOST (string apiKey, string id, string cursor = null)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RetweetersIdsUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get retwweeters ids by tweetId
                ResultT result = apiInstance.RetweetersIdsUsingPOST(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.RetweetersIdsUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="retweetersv2usingget"></a>
# **RetweetersV2UsingGET**
> ResultT RetweetersV2UsingGET (string apiKey, string tweetId, string cursor = null)

Retweeters by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RetweetersV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Retweeters by V2
                ResultT result = apiInstance.RetweetersV2UsingGET(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.RetweetersV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="retweetersv2usingpost"></a>
# **RetweetersV2UsingPOST**
> ResultT RetweetersV2UsingPOST (string apiKey, string tweetId, string cursor = null)

Retweeters by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class RetweetersV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var tweetId = tweetId_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Retweeters by V2
                ResultT result = apiInstance.RetweetersV2UsingPOST(apiKey, tweetId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.RetweetersV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **tweetId** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweetsimpleusingget"></a>
# **TweetSimpleUsingGET**
> ResultT TweetSimpleUsingGET (string apiKey, string id, string cursor = null)

tweet Brief information

get tweet Brief information

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetSimpleUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // tweet Brief information
                ResultT result = apiInstance.TweetSimpleUsingGET(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.TweetSimpleUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweetsimpleusingpost"></a>
# **TweetSimpleUsingPOST**
> ResultT TweetSimpleUsingPOST (string apiKey, string id, string cursor = null)

tweet Brief information

get tweet Brief information

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetSimpleUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // tweet Brief information
                ResultT result = apiInstance.TweetSimpleUsingPOST(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.TweetSimpleUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweettimelineusingget"></a>
# **TweetTimelineUsingGET**
> ResultT TweetTimelineUsingGET (string apiKey, string id, string cursor = null)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetTimelineUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get TweetTimeline Detail
                ResultT result = apiInstance.TweetTimelineUsingGET(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.TweetTimelineUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweettimelineusingpost"></a>
# **TweetTimelineUsingPOST**
> ResultT TweetTimelineUsingPOST (string apiKey, string id, string cursor = null)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetTimelineUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1722138510680043555)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get TweetTimeline Detail
                ResultT result = apiInstance.TweetTimelineUsingPOST(apiKey, id, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.TweetTimelineUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertweetreplyusingget"></a>
# **UserTweetReplyUsingGET**
> ResultT UserTweetReplyUsingGET (string apiKey, string userId, string cursor = null)

get userTweetReply 

get user Tweet Reply

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTweetReplyUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get userTweetReply 
                ResultT result = apiInstance.UserTweetReplyUsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.UserTweetReplyUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertweetreplyusingpost"></a>
# **UserTweetReplyUsingPOST**
> ResultT UserTweetReplyUsingPOST (string apiKey, string userId, string cursor = null)

get userTweetReply 

get user Tweet Reply

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTweetReplyUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterGetTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get userTweetReply 
                ResultT result = apiInstance.UserTweetReplyUsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterGetTweesApiToolsApi.UserTweetReplyUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

