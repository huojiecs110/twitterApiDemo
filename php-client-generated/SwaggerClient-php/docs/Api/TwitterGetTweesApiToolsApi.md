# Swagger\Client\TwitterGetTweesApiToolsApi

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


# **favoritersV2UsingGET**
> \Swagger\Client\Model\ResultT favoritersV2UsingGET($api_key, $tweet_id, $cursor)

Favoriters by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->favoritersV2UsingGET($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->favoritersV2UsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **favoritersV2UsingPOST**
> \Swagger\Client\Model\ResultT favoritersV2UsingPOST($api_key, $tweet_id, $cursor)

Favoriters by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->favoritersV2UsingPOST($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->favoritersV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **favoritesListUsingGET**
> \Swagger\Client\Model\ResultT favoritesListUsingGET($api_key, $user_id, $max_id, $screen_name, $since_id)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$max_id = "max_id_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.
$screen_name = "elonmusk"; // string | 
$since_id = "since_id_example"; // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.

try {
    $result = $apiInstance->favoritesListUsingGET($api_key, $user_id, $max_id, $screen_name, $since_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->favoritesListUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **user_id** | **string**|  | [default to 1574242047661207552]
 **max_id** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **since_id** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **favoritesListUsingPOST**
> \Swagger\Client\Model\ResultT favoritesListUsingPOST($api_key, $user_id, $max_id, $screen_name, $since_id)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$max_id = "max_id_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.
$screen_name = "elonmusk"; // string | 
$since_id = "since_id_example"; // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.

try {
    $result = $apiInstance->favoritesListUsingPOST($api_key, $user_id, $max_id, $screen_name, $since_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->favoritesListUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **user_id** | **string**|  | [default to 1574242047661207552]
 **max_id** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **since_id** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **mentionsTimelineUsingGET**
> \Swagger\Client\Model\ResultT mentionsTimelineUsingGET($api_key, $auth_token, $ct0, $include_entities, $max_id, $since_id, $trim_user)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$include_entities = "false"; // string | 
$max_id = "max_id_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.
$since_id = "since_id_example"; // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
$trim_user = "true"; // string | 

try {
    $result = $apiInstance->mentionsTimelineUsingGET($api_key, $auth_token, $ct0, $include_entities, $max_id, $since_id, $trim_user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->mentionsTimelineUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **include_entities** | **string**|  | [optional] [default to false]
 **max_id** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]
 **since_id** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional]
 **trim_user** | **string**|  | [optional] [default to true]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **mentionsTimelineUsingPOST**
> \Swagger\Client\Model\ResultT mentionsTimelineUsingPOST($api_key, $auth_token, $ct0, $include_entities, $max_id, $since_id, $trim_user)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$include_entities = "false"; // string | 
$max_id = "max_id_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.
$since_id = "since_id_example"; // string | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
$trim_user = "true"; // string | 

try {
    $result = $apiInstance->mentionsTimelineUsingPOST($api_key, $auth_token, $ct0, $include_entities, $max_id, $since_id, $trim_user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->mentionsTimelineUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **include_entities** | **string**|  | [optional] [default to false]
 **max_id** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]
 **since_id** | **string**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional]
 **trim_user** | **string**|  | [optional] [default to true]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **quotesV2UsingGET**
> \Swagger\Client\Model\ResultT quotesV2UsingGET($api_key, $tweet_id, $cursor)

Quotes by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->quotesV2UsingGET($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->quotesV2UsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **quotesV2UsingPOST**
> \Swagger\Client\Model\ResultT quotesV2UsingPOST($api_key, $tweet_id, $cursor)

Quotes by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->quotesV2UsingPOST($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->quotesV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **retweetersIdsUsingGET**
> \Swagger\Client\Model\ResultT retweetersIdsUsingGET($api_key, $id, $cursor)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->retweetersIdsUsingGET($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->retweetersIdsUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **retweetersIdsUsingPOST**
> \Swagger\Client\Model\ResultT retweetersIdsUsingPOST($api_key, $id, $cursor)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->retweetersIdsUsingPOST($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->retweetersIdsUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **retweetersV2UsingGET**
> \Swagger\Client\Model\ResultT retweetersV2UsingGET($api_key, $tweet_id, $cursor)

Retweeters by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->retweetersV2UsingGET($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->retweetersV2UsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **retweetersV2UsingPOST**
> \Swagger\Client\Model\ResultT retweetersV2UsingPOST($api_key, $tweet_id, $cursor)

Retweeters by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$tweet_id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->retweetersV2UsingPOST($api_key, $tweet_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->retweetersV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **tweet_id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetSimpleUsingGET**
> \Swagger\Client\Model\ResultT tweetSimpleUsingGET($api_key, $id, $cursor)

tweet Brief information

get tweet Brief information

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->tweetSimpleUsingGET($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->tweetSimpleUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetSimpleUsingPOST**
> \Swagger\Client\Model\ResultT tweetSimpleUsingPOST($api_key, $id, $cursor)

tweet Brief information

get tweet Brief information

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->tweetSimpleUsingPOST($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->tweetSimpleUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetTimelineUsingGET**
> \Swagger\Client\Model\ResultT tweetTimelineUsingGET($api_key, $id, $cursor)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->tweetTimelineUsingGET($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->tweetTimelineUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetTimelineUsingPOST**
> \Swagger\Client\Model\ResultT tweetTimelineUsingPOST($api_key, $id, $cursor)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$id = "1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->tweetTimelineUsingPOST($api_key, $id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->tweetTimelineUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **id** | **string**|  | [default to 1722138510680043555]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **userTweetReplyUsingGET**
> \Swagger\Client\Model\ResultT userTweetReplyUsingGET($api_key, $user_id, $cursor)

get userTweetReply

get user Tweet Reply

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTweetReplyUsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->userTweetReplyUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **user_id** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **userTweetReplyUsingPOST**
> \Swagger\Client\Model\ResultT userTweetReplyUsingPOST($api_key, $user_id, $cursor)

get userTweetReply

get user Tweet Reply

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterGetTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTweetReplyUsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterGetTweesApiToolsApi->userTweetReplyUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **user_id** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

