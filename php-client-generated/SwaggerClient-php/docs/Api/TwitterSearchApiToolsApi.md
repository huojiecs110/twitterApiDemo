# Swagger\Client\TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsingGET**](TwitterSearchApiToolsApi.md#searchUsingGET) | **GET** /base/apitools/search | Advanced Search
[**searchUsingPOST**](TwitterSearchApiToolsApi.md#searchUsingPOST) | **POST** /base/apitools/search | Advanced Search
[**trendsUsingGET**](TwitterSearchApiToolsApi.md#trendsUsingGET) | **GET** /base/apitools/trends | trends Search
[**trendsUsingPOST**](TwitterSearchApiToolsApi.md#trendsUsingPOST) | **POST** /base/apitools/trends | trends Search


# **searchUsingGET**
> \Swagger\Client\Model\ResultT searchUsingGET($api_key, $words, $any, $cursor, $from, $likes, $mentioning, $none, $phrase, $replies, $retweets, $since, $tag, $to, $until)

Advanced Search

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSearchApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$words = "words_example"; // string | 
$any = "any_example"; // string | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
$cursor = "cursor_example"; // string | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
$from = "from_example"; // string | From these accounts (Example: @Twitter �� sent from @Twitter)
$likes = "likes_example"; // string | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
$mentioning = "mentioning_example"; // string | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
$none = "none_example"; // string | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
$phrase = "phrase_example"; // string | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
$replies = "replies_example"; // string | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
$retweets = "retweets_example"; // string | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
$since = "since_example"; // string | start time (Example: 2020-01-01 )
$tag = "tag_example"; // string | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
$to = "to_example"; // string | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
$until = "until_example"; // string | end time (Example: 2021-02-02)

try {
    $result = $apiInstance->searchUsingGET($api_key, $words, $any, $cursor, $from, $likes, $mentioning, $none, $phrase, $replies, $retweets, $since, $tag, $to, $until);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSearchApiToolsApi->searchUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
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

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **searchUsingPOST**
> \Swagger\Client\Model\ResultT searchUsingPOST($api_key, $words, $any, $cursor, $from, $likes, $mentioning, $none, $phrase, $replies, $retweets, $since, $tag, $to, $until)

Advanced Search

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSearchApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$words = "words_example"; // string | 
$any = "any_example"; // string | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
$cursor = "cursor_example"; // string | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
$from = "from_example"; // string | From these accounts (Example: @Twitter �� sent from @Twitter)
$likes = "likes_example"; // string | Minimum likes (Example: 280 �� Tweets with at least 280 likes))
$mentioning = "mentioning_example"; // string | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
$none = "none_example"; // string | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
$phrase = "phrase_example"; // string | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
$replies = "replies_example"; // string | Minimum replies (Example: 280 �� Tweets with at least 280 replies)
$retweets = "retweets_example"; // string | Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
$since = "since_example"; // string | start time (Example: 2020-01-01 )
$tag = "tag_example"; // string | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
$to = "to_example"; // string | To these accounts (Example: @Twitter �� sent in reply to @Twitter)
$until = "until_example"; // string | end time (Example: 2021-02-02)

try {
    $result = $apiInstance->searchUsingPOST($api_key, $words, $any, $cursor, $from, $likes, $mentioning, $none, $phrase, $replies, $retweets, $since, $tag, $to, $until);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSearchApiToolsApi->searchUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
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

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **trendsUsingGET**
> \Swagger\Client\Model\ResultT trendsUsingGET($api_key, $id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSearchApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1"; // string | 

try {
    $result = $apiInstance->trendsUsingGET($api_key, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSearchApiToolsApi->trendsUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **trendsUsingPOST**
> \Swagger\Client\Model\ResultT trendsUsingPOST($api_key, $id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSearchApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1"; // string | 

try {
    $result = $apiInstance->trendsUsingPOST($api_key, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSearchApiToolsApi->trendsUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

