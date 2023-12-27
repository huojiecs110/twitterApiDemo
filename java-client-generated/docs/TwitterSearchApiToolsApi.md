# TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsingGET**](TwitterSearchApiToolsApi.md#searchUsingGET) | **GET** /base/apitools/search | Advanced Search
[**searchUsingPOST**](TwitterSearchApiToolsApi.md#searchUsingPOST) | **POST** /base/apitools/search | Advanced Search
[**trendsUsingGET**](TwitterSearchApiToolsApi.md#trendsUsingGET) | **GET** /base/apitools/trends | trends Search
[**trendsUsingPOST**](TwitterSearchApiToolsApi.md#trendsUsingPOST) | **POST** /base/apitools/trends | trends Search


<a name="searchUsingGET"></a>
# **searchUsingGET**
> ResultT searchUsingGET(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until)

Advanced Search

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSearchApiToolsApi;


TwitterSearchApiToolsApi apiInstance = new TwitterSearchApiToolsApi();
String apiKey = "your own apikey"; // String | 
String words = "words_example"; // String | 
String any = "any_example"; // String | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
String cursor = "cursor_example"; // String | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
String from = "from_example"; // String | From these accounts (Example: @Twitter �� sent from @Twitter)
String likes = "likes_example"; // String | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
String mentioning = "mentioning_example"; // String | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
String none = "none_example"; // String | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
String phrase = "phrase_example"; // String | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
String replies = "replies_example"; // String | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
String retweets = "retweets_example"; // String | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
String since = "since_example"; // String | start time (Example: 2020-01-01 )
String tag = "tag_example"; // String | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
String to = "to_example"; // String | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
String until = "until_example"; // String | end time (Example: 2021-02-02)
try {
    ResultT result = apiInstance.searchUsingGET(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSearchApiToolsApi#searchUsingGET");
    e.printStackTrace();
}
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
> ResultT searchUsingPOST(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until)

Advanced Search

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSearchApiToolsApi;


TwitterSearchApiToolsApi apiInstance = new TwitterSearchApiToolsApi();
String apiKey = "your own apikey"; // String | 
String words = "words_example"; // String | 
String any = "any_example"; // String | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
String cursor = "cursor_example"; // String | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
String from = "from_example"; // String | From these accounts (Example: @Twitter �� sent from @Twitter)
String likes = "likes_example"; // String | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
String mentioning = "mentioning_example"; // String | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
String none = "none_example"; // String | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
String phrase = "phrase_example"; // String | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
String replies = "replies_example"; // String | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
String retweets = "retweets_example"; // String | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
String since = "since_example"; // String | start time (Example: 2020-01-01 )
String tag = "tag_example"; // String | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
String to = "to_example"; // String | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
String until = "until_example"; // String | end time (Example: 2021-02-02)
try {
    ResultT result = apiInstance.searchUsingPOST(apiKey, words, any, cursor, from, likes, mentioning, none, phrase, replies, retweets, since, tag, to, until);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSearchApiToolsApi#searchUsingPOST");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSearchApiToolsApi;


TwitterSearchApiToolsApi apiInstance = new TwitterSearchApiToolsApi();
String apiKey = "your own apikey"; // String | 
String id = "1"; // String | 
try {
    ResultT result = apiInstance.trendsUsingGET(apiKey, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSearchApiToolsApi#trendsUsingGET");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterSearchApiToolsApi;


TwitterSearchApiToolsApi apiInstance = new TwitterSearchApiToolsApi();
String apiKey = "your own apikey"; // String | 
String id = "1"; // String | 
try {
    ResultT result = apiInstance.trendsUsingPOST(apiKey, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterSearchApiToolsApi#trendsUsingPOST");
    e.printStackTrace();
}
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

