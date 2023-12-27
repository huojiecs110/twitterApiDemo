# UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**favoritersV2UsingGET**](TwitterGetTweesApiToolsApi.md#favoritersV2UsingGET) | **GET** /base/apitools/favoritersV2 | Favoriters by V2
[**favoritersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#favoritersV2UsingPOST) | **POST** /base/apitools/favoritersV2 | Favoriters by V2
[**favoritesListUsingGET**](TwitterGetTweesApiToolsApi.md#favoritesListUsingGET) | **GET** /base/apitools/favoritesList | favorites are now known as likes.
[**favoritesListUsingPOST**](TwitterGetTweesApiToolsApi.md#favoritesListUsingPOST) | **POST** /base/apitools/favoritesList | favorites are now known as likes.
[**mentionsTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#mentionsTimelineUsingGET) | **GET** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**mentionsTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#mentionsTimelineUsingPOST) | **POST** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**quotesV2UsingGET**](TwitterGetTweesApiToolsApi.md#quotesV2UsingGET) | **GET** /base/apitools/quotesV2 | Quotes by V2
[**quotesV2UsingPOST**](TwitterGetTweesApiToolsApi.md#quotesV2UsingPOST) | **POST** /base/apitools/quotesV2 | Quotes by V2
[**retweetersIdsUsingGET**](TwitterGetTweesApiToolsApi.md#retweetersIdsUsingGET) | **GET** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**retweetersIdsUsingPOST**](TwitterGetTweesApiToolsApi.md#retweetersIdsUsingPOST) | **POST** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**retweetersV2UsingGET**](TwitterGetTweesApiToolsApi.md#retweetersV2UsingGET) | **GET** /base/apitools/retweetersV2 | Retweeters by V2
[**retweetersV2UsingPOST**](TwitterGetTweesApiToolsApi.md#retweetersV2UsingPOST) | **POST** /base/apitools/retweetersV2 | Retweeters by V2
[**tweetSimpleUsingGET**](TwitterGetTweesApiToolsApi.md#tweetSimpleUsingGET) | **GET** /base/apitools/tweetSimple | tweet Brief information
[**tweetSimpleUsingPOST**](TwitterGetTweesApiToolsApi.md#tweetSimpleUsingPOST) | **POST** /base/apitools/tweetSimple | tweet Brief information
[**tweetTimelineUsingGET**](TwitterGetTweesApiToolsApi.md#tweetTimelineUsingGET) | **GET** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**tweetTimelineUsingPOST**](TwitterGetTweesApiToolsApi.md#tweetTimelineUsingPOST) | **POST** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**userTweetReplyUsingGET**](TwitterGetTweesApiToolsApi.md#userTweetReplyUsingGET) | **GET** /base/apitools/userTweetReply | get userTweetReply 
[**userTweetReplyUsingPOST**](TwitterGetTweesApiToolsApi.md#userTweetReplyUsingPOST) | **POST** /base/apitools/userTweetReply | get userTweetReply 


<a name="favoritersV2UsingGET"></a>
# **favoritersV2UsingGET**
> ResultT favoritersV2UsingGET(apiKey, tweetId, opts)

Favoriters by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoritersV2UsingGET(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="favoritersV2UsingPOST"></a>
# **favoritersV2UsingPOST**
> ResultT favoritersV2UsingPOST(apiKey, tweetId, opts)

Favoriters by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoritersV2UsingPOST(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="favoritesListUsingGET"></a>
# **favoritesListUsingGET**
> ResultT favoritesListUsingGET(apiKey, userId, opts)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'maxId': "maxId_example", // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
  'screenName': "elonmusk", // String | 
  'sinceId': "sinceId_example" // String | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoritesListUsingGET(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **maxId** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **sinceId** | **String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="favoritesListUsingPOST"></a>
# **favoritesListUsingPOST**
> ResultT favoritesListUsingPOST(apiKey, userId, opts)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'maxId': "maxId_example", // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
  'screenName': "elonmusk", // String | 
  'sinceId': "sinceId_example" // String | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoritesListUsingPOST(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **maxId** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **sinceId** | **String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="mentionsTimelineUsingGET"></a>
# **mentionsTimelineUsingGET**
> ResultT mentionsTimelineUsingGET(apiKey, authToken, ct0, opts)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'includeEntities': "false", // String | 
  'maxId': "maxId_example", // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
  'sinceId': "sinceId_example", // String | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
  'trimUser': "true" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mentionsTimelineUsingGET(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **includeEntities** | **String**|  | [optional] [default to false]
 **maxId** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **sinceId** | **String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trimUser** | **String**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="mentionsTimelineUsingPOST"></a>
# **mentionsTimelineUsingPOST**
> ResultT mentionsTimelineUsingPOST(apiKey, authToken, ct0, opts)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'includeEntities': "false", // String | 
  'maxId': "maxId_example", // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
  'sinceId': "sinceId_example", // String | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
  'trimUser': "true" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mentionsTimelineUsingPOST(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **includeEntities** | **String**|  | [optional] [default to false]
 **maxId** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **sinceId** | **String**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trimUser** | **String**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="quotesV2UsingGET"></a>
# **quotesV2UsingGET**
> ResultT quotesV2UsingGET(apiKey, tweetId, opts)

Quotes by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotesV2UsingGET(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="quotesV2UsingPOST"></a>
# **quotesV2UsingPOST**
> ResultT quotesV2UsingPOST(apiKey, tweetId, opts)

Quotes by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotesV2UsingPOST(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retweetersIdsUsingGET"></a>
# **retweetersIdsUsingGET**
> ResultT retweetersIdsUsingGET(apiKey, id, opts)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retweetersIdsUsingGET(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="retweetersIdsUsingPOST"></a>
# **retweetersIdsUsingPOST**
> ResultT retweetersIdsUsingPOST(apiKey, id, opts)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retweetersIdsUsingPOST(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retweetersV2UsingGET"></a>
# **retweetersV2UsingGET**
> ResultT retweetersV2UsingGET(apiKey, tweetId, opts)

Retweeters by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retweetersV2UsingGET(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="retweetersV2UsingPOST"></a>
# **retweetersV2UsingPOST**
> ResultT retweetersV2UsingPOST(apiKey, tweetId, opts)

Retweeters by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var tweetId = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retweetersV2UsingPOST(apiKey, tweetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **tweetId** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="tweetSimpleUsingGET"></a>
# **tweetSimpleUsingGET**
> ResultT tweetSimpleUsingGET(apiKey, id, opts)

tweet Brief information

get tweet Brief information

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetSimpleUsingGET(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="tweetSimpleUsingPOST"></a>
# **tweetSimpleUsingPOST**
> ResultT tweetSimpleUsingPOST(apiKey, id, opts)

tweet Brief information

get tweet Brief information

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetSimpleUsingPOST(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="tweetTimelineUsingGET"></a>
# **tweetTimelineUsingGET**
> ResultT tweetTimelineUsingGET(apiKey, id, opts)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetTimelineUsingGET(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="tweetTimelineUsingPOST"></a>
# **tweetTimelineUsingPOST**
> ResultT tweetTimelineUsingPOST(apiKey, id, opts)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1722138510680043555"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tweetTimelineUsingPOST(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1722138510680043555]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userTweetReplyUsingGET"></a>
# **userTweetReplyUsingGET**
> ResultT userTweetReplyUsingGET(apiKey, userId, opts)

get userTweetReply 

get user Tweet Reply

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTweetReplyUsingGET(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="userTweetReplyUsingPOST"></a>
# **userTweetReplyUsingPOST**
> ResultT userTweetReplyUsingPOST(apiKey, userId, opts)

get userTweetReply 

get user Tweet Reply

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTweetReplyUsingPOST(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

