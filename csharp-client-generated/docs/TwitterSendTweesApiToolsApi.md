# IO.Swagger.Api.TwitterSendTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateRetweetUsingGET**](TwitterSendTweesApiToolsApi.md#createretweetusingget) | **GET** /base/apitools/createRetweet | retweet a Tweet
[**CreateRetweetUsingPOST**](TwitterSendTweesApiToolsApi.md#createretweetusingpost) | **POST** /base/apitools/createRetweet | retweet a Tweet
[**CreateTweetUsingGET**](TwitterSendTweesApiToolsApi.md#createtweetusingget) | **GET** /base/apitools/createTweet | create a Tweet
[**CreateTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#createtweetusingpost) | **POST** /base/apitools/createTweet | create a Tweet
[**LikeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#liketweetusingget) | **GET** /base/apitools/likeTweet | like(favorites) Tweet
[**LikeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#liketweetusingpost) | **POST** /base/apitools/likeTweet | like(favorites) Tweet
[**TweetReplyUsingGET**](TwitterSendTweesApiToolsApi.md#tweetreplyusingget) | **GET** /base/apitools/tweetReply | reply to tweet 
[**TweetReplyUsingPOST**](TwitterSendTweesApiToolsApi.md#tweetreplyusingpost) | **POST** /base/apitools/tweetReply | reply to tweet 
[**UnlikeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#unliketweetusingget) | **GET** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**UnlikeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#unliketweetusingpost) | **POST** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**UploadMediaUsingGET**](TwitterSendTweesApiToolsApi.md#uploadmediausingget) | **GET** /base/apitools/uploadMedia | upload media (gif)
[**UploadMediaUsingPOST**](TwitterSendTweesApiToolsApi.md#uploadmediausingpost) | **POST** /base/apitools/uploadMedia | upload media (gif)


<a name="createretweetusingget"></a>
# **CreateRetweetUsingGET**
> ResultT CreateRetweetUsingGET (string apiKey, string authToken, string ct0, string tweetId)

retweet a Tweet

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CreateRetweetUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var tweetId = tweetId_example;  // string |  (default to 1722885211313307819)

            try
            {
                // retweet a Tweet
                ResultT result = apiInstance.CreateRetweetUsingGET(apiKey, authToken, ct0, tweetId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.CreateRetweetUsingGET: " + e.Message );
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
 **tweetId** | **string**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createretweetusingpost"></a>
# **CreateRetweetUsingPOST**
> ResultT CreateRetweetUsingPOST (string apiKey, string authToken, string ct0, string tweetId)

retweet a Tweet

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CreateRetweetUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var tweetId = tweetId_example;  // string |  (default to 1722885211313307819)

            try
            {
                // retweet a Tweet
                ResultT result = apiInstance.CreateRetweetUsingPOST(apiKey, authToken, ct0, tweetId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.CreateRetweetUsingPOST: " + e.Message );
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
 **tweetId** | **string**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createtweetusingget"></a>
# **CreateTweetUsingGET**
> ResultT CreateTweetUsingGET (string apiKey, string authToken, string ct0, string text, List<string> medias = null)

create a Tweet

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CreateTweetUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var text = text_example;  // string |  (default to this tweet by utools auto send by https://twitter.utools.me)
            var medias = new List<string>(); // List<string> | medias ids (optional) 

            try
            {
                // create a Tweet
                ResultT result = apiInstance.CreateTweetUsingGET(apiKey, authToken, ct0, text, medias);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.CreateTweetUsingGET: " + e.Message );
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
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**List&lt;string&gt;**](string.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createtweetusingpost"></a>
# **CreateTweetUsingPOST**
> ResultT CreateTweetUsingPOST (string apiKey, string authToken, string ct0, string text, List<string> medias = null)

create a Tweet

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CreateTweetUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var text = text_example;  // string |  (default to this tweet by utools auto send by https://twitter.utools.me)
            var medias = new List<string>(); // List<string> | medias ids (optional) 

            try
            {
                // create a Tweet
                ResultT result = apiInstance.CreateTweetUsingPOST(apiKey, authToken, ct0, text, medias);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.CreateTweetUsingPOST: " + e.Message );
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
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**List&lt;string&gt;**](string.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="liketweetusingget"></a>
# **LikeTweetUsingGET**
> ResultT LikeTweetUsingGET (string apiKey, string authToken, string ct0, string id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LikeTweetUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string |  (default to 1722138510680043555)

            try
            {
                // like(favorites) Tweet
                ResultT result = apiInstance.LikeTweetUsingGET(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.LikeTweetUsingGET: " + e.Message );
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
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="liketweetusingpost"></a>
# **LikeTweetUsingPOST**
> ResultT LikeTweetUsingPOST (string apiKey, string authToken, string ct0, string id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LikeTweetUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string |  (default to 1722138510680043555)

            try
            {
                // like(favorites) Tweet
                ResultT result = apiInstance.LikeTweetUsingPOST(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.LikeTweetUsingPOST: " + e.Message );
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
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweetreplyusingget"></a>
# **TweetReplyUsingGET**
> ResultT TweetReplyUsingGET (string apiKey, string authToken, string ct0, string text, string tweetId, List<string> medias = null)

reply to tweet 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetReplyUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var text = text_example;  // string |  (default to this tweet by utools auto send by https://twitter.utools.me)
            var tweetId = tweetId_example;  // string |  (default to 1722885211313307819)
            var medias = new List<string>(); // List<string> | medias ids (optional) 

            try
            {
                // reply to tweet 
                ResultT result = apiInstance.TweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, medias);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.TweetReplyUsingGET: " + e.Message );
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
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **string**|  | [default to 1722885211313307819]
 **medias** | [**List&lt;string&gt;**](string.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tweetreplyusingpost"></a>
# **TweetReplyUsingPOST**
> ResultT TweetReplyUsingPOST (string apiKey, string authToken, string ct0, string text, string tweetId, List<string> medias = null)

reply to tweet 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TweetReplyUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var text = text_example;  // string |  (default to this tweet by utools auto send by https://twitter.utools.me)
            var tweetId = tweetId_example;  // string |  (default to 1722885211313307819)
            var medias = new List<string>(); // List<string> | medias ids (optional) 

            try
            {
                // reply to tweet 
                ResultT result = apiInstance.TweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, medias);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.TweetReplyUsingPOST: " + e.Message );
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
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **string**|  | [default to 1722885211313307819]
 **medias** | [**List&lt;string&gt;**](string.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unliketweetusingget"></a>
# **UnlikeTweetUsingGET**
> ResultT UnlikeTweetUsingGET (string apiKey, string authToken, string ct0, string id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UnlikeTweetUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string |  (default to 1722138510680043555)

            try
            {
                // unlike(unfavorites) Tweet
                ResultT result = apiInstance.UnlikeTweetUsingGET(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.UnlikeTweetUsingGET: " + e.Message );
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
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unliketweetusingpost"></a>
# **UnlikeTweetUsingPOST**
> ResultT UnlikeTweetUsingPOST (string apiKey, string authToken, string ct0, string id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UnlikeTweetUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string |  (default to 1722138510680043555)

            try
            {
                // unlike(unfavorites) Tweet
                ResultT result = apiInstance.UnlikeTweetUsingPOST(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.UnlikeTweetUsingPOST: " + e.Message );
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
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmediausingget"></a>
# **UploadMediaUsingGET**
> ResultT UploadMediaUsingGET (string apiKey, string authToken, string ct0, string mediaUrl)

upload media (gif)

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UploadMediaUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var mediaUrl = mediaUrl_example;  // string |  (default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1)

            try
            {
                // upload media (gif)
                ResultT result = apiInstance.UploadMediaUsingGET(apiKey, authToken, ct0, mediaUrl);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.UploadMediaUsingGET: " + e.Message );
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
 **mediaUrl** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmediausingpost"></a>
# **UploadMediaUsingPOST**
> ResultT UploadMediaUsingPOST (string apiKey, string authToken, string ct0, string mediaUrl)

upload media (gif)

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UploadMediaUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterSendTweesApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var mediaUrl = mediaUrl_example;  // string |  (default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1)

            try
            {
                // upload media (gif)
                ResultT result = apiInstance.UploadMediaUsingPOST(apiKey, authToken, ct0, mediaUrl);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterSendTweesApiToolsApi.UploadMediaUsingPOST: " + e.Message );
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
 **mediaUrl** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

