# UtoolsTwitterToolsApi.TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsingGET**](TwitterSearchApiToolsApi.md#searchUsingGET) | **GET** /base/apitools/search | Advanced Search
[**searchUsingPOST**](TwitterSearchApiToolsApi.md#searchUsingPOST) | **POST** /base/apitools/search | Advanced Search
[**trendsUsingGET**](TwitterSearchApiToolsApi.md#trendsUsingGET) | **GET** /base/apitools/trends | trends Search
[**trendsUsingPOST**](TwitterSearchApiToolsApi.md#trendsUsingPOST) | **POST** /base/apitools/trends | trends Search


<a name="searchUsingGET"></a>
# **searchUsingGET**
> ResultT searchUsingGET(apiKey, words, opts)

Advanced Search

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSearchApiToolsApi();

var apiKey = "your own apikey"; // String | 

var words = "words_example"; // String | 

var opts = { 
  'any': "any_example", // String | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
  'cursor': "cursor_example", // String | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
  'from': "from_example", // String | From these accounts (Example: @Twitter �� sent from @Twitter)
  'likes': "likes_example", // String | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
  'mentioning': "mentioning_example", // String | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
  'none': "none_example", // String | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
  'phrase': "phrase_example", // String | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
  'replies': "replies_example", // String | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
  'retweets': "retweets_example", // String | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
  'since': "since_example", // String | start time (Example: 2020-01-01 )
  'tag': "tag_example", // String | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
  'to': "to_example", // String | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
  'until': "until_example" // String | end time (Example: 2021-02-02)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsingGET(apiKey, words, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **words** | **String**|  | 
 **any** | **String**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **String**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **from** | **String**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **String**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **String**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **none** | **String**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **String**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **String**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **String**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **String**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **String**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **String**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **String**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="searchUsingPOST"></a>
# **searchUsingPOST**
> ResultT searchUsingPOST(apiKey, words, opts)

Advanced Search

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSearchApiToolsApi();

var apiKey = "your own apikey"; // String | 

var words = "words_example"; // String | 

var opts = { 
  'any': "any_example", // String | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
  'cursor': "cursor_example", // String | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
  'from': "from_example", // String | From these accounts (Example: @Twitter �� sent from @Twitter)
  'likes': "likes_example", // String | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
  'mentioning': "mentioning_example", // String | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
  'none': "none_example", // String | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
  'phrase': "phrase_example", // String | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
  'replies': "replies_example", // String | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
  'retweets': "retweets_example", // String | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
  'since': "since_example", // String | start time (Example: 2020-01-01 )
  'tag': "tag_example", // String | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
  'to': "to_example", // String | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
  'until': "until_example" // String | end time (Example: 2021-02-02)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsingPOST(apiKey, words, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **words** | **String**|  | 
 **any** | **String**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **String**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **from** | **String**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **String**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **String**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **none** | **String**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **String**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **String**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **String**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **String**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **String**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **String**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **String**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="trendsUsingGET"></a>
# **trendsUsingGET**
> ResultT trendsUsingGET(apiKey, id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSearchApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trendsUsingGET(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="trendsUsingPOST"></a>
# **trendsUsingPOST**
> ResultT trendsUsingPOST(apiKey, id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterSearchApiToolsApi();

var apiKey = "your own apikey"; // String | 

var id = "1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trendsUsingPOST(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **id** | **String**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

