# IO.Swagger.Api.TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SearchUsingGET**](TwitterSearchApiToolsApi.md#searchusingget) | **GET** /base/apitools/search | Advanced Search
[**SearchUsingPOST**](TwitterSearchApiToolsApi.md#searchusingpost) | **POST** /base/apitools/search | Advanced Search
[**TrendsUsingGET**](TwitterSearchApiToolsApi.md#trendsusingget) | **GET** /base/apitools/trends | trends Search
[**TrendsUsingPOST**](TwitterSearchApiToolsApi.md#trendsusingpost) | **POST** /base/apitools/trends | trends Search


<a name="searchusingget"></a>
# **SearchUsingGET**
> ResultT SearchUsingGET (string apiKey, string words, string any = null, string cursor = null, string from = null, string likes = null, string mentioning = null, string none = null, string phrase = null, string replies = null, string retweets = null, string since = null, string tag = null, string to = null, string until = null)

Advanced Search

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SearchUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSearchApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var words = words_example;  // string | 
            var any = any_example;  // string | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) (optional) 
            var cursor = cursor_example;  // string | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) (optional) 
            var from = from_example;  // string | From these accounts (Example: @Twitter �� sent from @Twitter) (optional) 
            var likes = likes_example;  // string | Minimum likes (Example: 280 �� Tweets with at least 280 likes)) (optional) 
            var mentioning = mentioning_example;  // string | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) (optional) 
            var none = none_example;  // string | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) (optional) 
            var phrase = phrase_example;  // string | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) (optional) 
            var replies = replies_example;  // string | Minimum replies (Example: 280 �� Tweets with at least 280 replies) (optional) 
            var retweets = retweets_example;  // string | Minimum retweets (Example: 280 �� Tweets with at least 280 likes) (optional) 
            var since = since_example;  // string | start time (Example: 2020-01-01 ) (optional) 
            var tag = tag_example;  // string | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) (optional) 
            var to = to_example;  // string | To these accounts (Example: @Twitter �� sent in reply to @Twitter) (optional) 
            var until = until_example;  // string | end time (Example: 2021-02-02) (optional) 

            try
            {
                // Advanced Search
                ResultT result = apiInstance.SearchUsingGET(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSearchApiToolsApi.SearchUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **words** | **string**|  | 
 **any** | **string**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **string**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **from** | **string**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **string**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **string**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **none** | **string**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **string**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **string**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **string**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **string**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **string**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **string**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **string**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchusingpost"></a>
# **SearchUsingPOST**
> ResultT SearchUsingPOST (string apiKey, string words, string any = null, string cursor = null, string from = null, string likes = null, string mentioning = null, string none = null, string phrase = null, string replies = null, string retweets = null, string since = null, string tag = null, string to = null, string until = null)

Advanced Search

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SearchUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSearchApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var words = words_example;  // string | 
            var any = any_example;  // string | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) (optional) 
            var cursor = cursor_example;  // string | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) (optional) 
            var from = from_example;  // string | From these accounts (Example: @Twitter �� sent from @Twitter) (optional) 
            var likes = likes_example;  // string | Minimum likes (Example: 280 �� Tweets with at least 280 likes)) (optional) 
            var mentioning = mentioning_example;  // string | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) (optional) 
            var none = none_example;  // string | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) (optional) 
            var phrase = phrase_example;  // string | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) (optional) 
            var replies = replies_example;  // string | Minimum replies (Example: 280 �� Tweets with at least 280 replies) (optional) 
            var retweets = retweets_example;  // string | Minimum retweets (Example: 280 �� Tweets with at least 280 likes) (optional) 
            var since = since_example;  // string | start time (Example: 2020-01-01 ) (optional) 
            var tag = tag_example;  // string | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) (optional) 
            var to = to_example;  // string | To these accounts (Example: @Twitter �� sent in reply to @Twitter) (optional) 
            var until = until_example;  // string | end time (Example: 2021-02-02) (optional) 

            try
            {
                // Advanced Search
                ResultT result = apiInstance.SearchUsingPOST(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSearchApiToolsApi.SearchUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **words** | **string**|  | 
 **any** | **string**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **string**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **from** | **string**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **string**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **string**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **none** | **string**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **string**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **string**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **string**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **string**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **string**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **string**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **string**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="trendsusingget"></a>
# **TrendsUsingGET**
> ResultT TrendsUsingGET (string apiKey, string id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TrendsUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSearchApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1)

            try
            {
                // trends Search
                ResultT result = apiInstance.TrendsUsingGET(apiKey, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSearchApiToolsApi.TrendsUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="trendsusingpost"></a>
# **TrendsUsingPOST**
> ResultT TrendsUsingPOST (string apiKey, string id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TrendsUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSearchApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var id = id_example;  // string |  (default to 1)

            try
            {
                // trends Search
                ResultT result = apiInstance.TrendsUsingPOST(apiKey, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSearchApiToolsApi.TrendsUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

