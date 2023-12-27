# TwitterSendTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRetweetUsingGET**](TwitterSendTweesApiToolsApi.md#createRetweetUsingGET) | **GET** /base/apitools/createRetweet | retweet a Tweet
[**createRetweetUsingPOST**](TwitterSendTweesApiToolsApi.md#createRetweetUsingPOST) | **POST** /base/apitools/createRetweet | retweet a Tweet
[**createTweetUsingGET**](TwitterSendTweesApiToolsApi.md#createTweetUsingGET) | **GET** /base/apitools/createTweet | create a Tweet
[**createTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#createTweetUsingPOST) | **POST** /base/apitools/createTweet | create a Tweet
[**likeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#likeTweetUsingGET) | **GET** /base/apitools/likeTweet | like(favorites) Tweet
[**likeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#likeTweetUsingPOST) | **POST** /base/apitools/likeTweet | like(favorites) Tweet
[**tweetReplyUsingGET**](TwitterSendTweesApiToolsApi.md#tweetReplyUsingGET) | **GET** /base/apitools/tweetReply | reply to tweet 
[**tweetReplyUsingPOST**](TwitterSendTweesApiToolsApi.md#tweetReplyUsingPOST) | **POST** /base/apitools/tweetReply | reply to tweet 
[**unlikeTweetUsingGET**](TwitterSendTweesApiToolsApi.md#unlikeTweetUsingGET) | **GET** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**unlikeTweetUsingPOST**](TwitterSendTweesApiToolsApi.md#unlikeTweetUsingPOST) | **POST** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**uploadMediaUsingGET**](TwitterSendTweesApiToolsApi.md#uploadMediaUsingGET) | **GET** /base/apitools/uploadMedia | upload media (gif)
[**uploadMediaUsingPOST**](TwitterSendTweesApiToolsApi.md#uploadMediaUsingPOST) | **POST** /base/apitools/uploadMedia | upload media (gif)


<a name="createRetweetUsingGET"></a>
# **createRetweetUsingGET**
> ResultT createRetweetUsingGET(apiKey, authToken, ct0, tweetId)

retweet a Tweet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String tweetId = "1722885211313307819"; // String | 
try {
    ResultT result = apiInstance.createRetweetUsingGET(apiKey, authToken, ct0, tweetId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#createRetweetUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweetId** | **String**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createRetweetUsingPOST"></a>
# **createRetweetUsingPOST**
> ResultT createRetweetUsingPOST(apiKey, authToken, ct0, tweetId)

retweet a Tweet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String tweetId = "1722885211313307819"; // String | 
try {
    ResultT result = apiInstance.createRetweetUsingPOST(apiKey, authToken, ct0, tweetId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#createRetweetUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweetId** | **String**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createTweetUsingGET"></a>
# **createTweetUsingGET**
> ResultT createTweetUsingGET(apiKey, authToken, ct0, text, medias)

create a Tweet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 
List<String> medias = Arrays.asList("medias_example"); // List<String> | medias ids
try {
    ResultT result = apiInstance.createTweetUsingGET(apiKey, authToken, ct0, text, medias);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#createTweetUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**List&lt;String&gt;**](String.md)| medias ids | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createTweetUsingPOST"></a>
# **createTweetUsingPOST**
> ResultT createTweetUsingPOST(apiKey, authToken, ct0, text, medias)

create a Tweet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 
List<String> medias = Arrays.asList("medias_example"); // List<String> | medias ids
try {
    ResultT result = apiInstance.createTweetUsingPOST(apiKey, authToken, ct0, text, medias);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#createTweetUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**List&lt;String&gt;**](String.md)| medias ids | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="likeTweetUsingGET"></a>
# **likeTweetUsingGET**
> ResultT likeTweetUsingGET(apiKey, authToken, ct0, id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "1722138510680043555"; // String | 
try {
    ResultT result = apiInstance.likeTweetUsingGET(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#likeTweetUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="likeTweetUsingPOST"></a>
# **likeTweetUsingPOST**
> ResultT likeTweetUsingPOST(apiKey, authToken, ct0, id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "1722138510680043555"; // String | 
try {
    ResultT result = apiInstance.likeTweetUsingPOST(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#likeTweetUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="tweetReplyUsingGET"></a>
# **tweetReplyUsingGET**
> ResultT tweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, medias)

reply to tweet 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 
String tweetId = "1722885211313307819"; // String | 
List<String> medias = Arrays.asList("medias_example"); // List<String> | medias ids
try {
    ResultT result = apiInstance.tweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, medias);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#tweetReplyUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **String**|  | [default to 1722885211313307819]
 **medias** | [**List&lt;String&gt;**](String.md)| medias ids | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="tweetReplyUsingPOST"></a>
# **tweetReplyUsingPOST**
> ResultT tweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, medias)

reply to tweet 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 
String tweetId = "1722885211313307819"; // String | 
List<String> medias = Arrays.asList("medias_example"); // List<String> | medias ids
try {
    ResultT result = apiInstance.tweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, medias);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#tweetReplyUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **String**|  | [default to 1722885211313307819]
 **medias** | [**List&lt;String&gt;**](String.md)| medias ids | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="unlikeTweetUsingGET"></a>
# **unlikeTweetUsingGET**
> ResultT unlikeTweetUsingGET(apiKey, authToken, ct0, id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "1722138510680043555"; // String | 
try {
    ResultT result = apiInstance.unlikeTweetUsingGET(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#unlikeTweetUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="unlikeTweetUsingPOST"></a>
# **unlikeTweetUsingPOST**
> ResultT unlikeTweetUsingPOST(apiKey, authToken, ct0, id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "1722138510680043555"; // String | 
try {
    ResultT result = apiInstance.unlikeTweetUsingPOST(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#unlikeTweetUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="uploadMediaUsingGET"></a>
# **uploadMediaUsingGET**
> ResultT uploadMediaUsingGET(apiKey, authToken, ct0, mediaUrl)

upload media (gif)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String mediaUrl = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // String | 
try {
    ResultT result = apiInstance.uploadMediaUsingGET(apiKey, authToken, ct0, mediaUrl);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#uploadMediaUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **mediaUrl** | **String**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="uploadMediaUsingPOST"></a>
# **uploadMediaUsingPOST**
> ResultT uploadMediaUsingPOST(apiKey, authToken, ct0, mediaUrl)

upload media (gif)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSendTweesApiToolsApi;


TwitterSendTweesApiToolsApi apiInstance = new TwitterSendTweesApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String mediaUrl = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // String | 
try {
    ResultT result = apiInstance.uploadMediaUsingPOST(apiKey, authToken, ct0, mediaUrl);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSendTweesApiToolsApi#uploadMediaUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **mediaUrl** | **String**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

