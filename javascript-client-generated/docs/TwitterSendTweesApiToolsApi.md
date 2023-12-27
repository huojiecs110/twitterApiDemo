# UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi

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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var tweetId = "1722885211313307819"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRetweetUsingGET(apiKey, authToken, ct0, tweetId, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var tweetId = "1722885211313307819"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRetweetUsingPOST(apiKey, authToken, ct0, tweetId, callback);
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
> ResultT createTweetUsingGET(apiKey, authToken, ct0, text, opts)

create a Tweet

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 

var opts = { 
  'medias': ["medias_example"] // [String] | medias ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTweetUsingGET(apiKey, authToken, ct0, text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**[String]**](String.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createTweetUsingPOST"></a>
# **createTweetUsingPOST**
> ResultT createTweetUsingPOST(apiKey, authToken, ct0, text, opts)

create a Tweet

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 

var opts = { 
  'medias': ["medias_example"] // [String] | medias ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTweetUsingPOST(apiKey, authToken, ct0, text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**[String]**](String.md)| medias ids | [optional] 

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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "1722138510680043555"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.likeTweetUsingGET(apiKey, authToken, ct0, id, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "1722138510680043555"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.likeTweetUsingPOST(apiKey, authToken, ct0, id, callback);
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
> ResultT tweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, opts)

reply to tweet 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 

var tweetId = "1722885211313307819"; // String | 

var opts = { 
  'medias': ["medias_example"] // [String] | medias ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **String**|  | [default to 1722885211313307819]
 **medias** | [**[String]**](String.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="tweetReplyUsingPOST"></a>
# **tweetReplyUsingPOST**
> ResultT tweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, opts)

reply to tweet 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var text = "this tweet by utools auto send by https://twitter.utools.me"; // String | 

var tweetId = "1722885211313307819"; // String | 

var opts = { 
  'medias': ["medias_example"] // [String] | medias ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **String**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweetId** | **String**|  | [default to 1722885211313307819]
 **medias** | [**[String]**](String.md)| medias ids | [optional] 

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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "1722138510680043555"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unlikeTweetUsingGET(apiKey, authToken, ct0, id, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "1722138510680043555"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unlikeTweetUsingPOST(apiKey, authToken, ct0, id, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var mediaUrl = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMediaUsingGET(apiKey, authToken, ct0, mediaUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **mediaUrl** | **String**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1]

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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var mediaUrl = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMediaUsingPOST(apiKey, authToken, ct0, mediaUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **mediaUrl** | **String**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

