# Swagger\Client\TwitterSendTweesApiToolsApi

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


# **createRetweetUsingGET**
> \Swagger\Client\Model\ResultT createRetweetUsingGET($api_key, $auth_token, $ct0, $tweet_id)

retweet a Tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$tweet_id = "1722885211313307819"; // string | 

try {
    $result = $apiInstance->createRetweetUsingGET($api_key, $auth_token, $ct0, $tweet_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->createRetweetUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweet_id** | **string**|  | [default to 1722885211313307819]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createRetweetUsingPOST**
> \Swagger\Client\Model\ResultT createRetweetUsingPOST($api_key, $auth_token, $ct0, $tweet_id)

retweet a Tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$tweet_id = "1722885211313307819"; // string | 

try {
    $result = $apiInstance->createRetweetUsingPOST($api_key, $auth_token, $ct0, $tweet_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->createRetweetUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweet_id** | **string**|  | [default to 1722885211313307819]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTweetUsingGET**
> \Swagger\Client\Model\ResultT createTweetUsingGET($api_key, $auth_token, $ct0, $text, $medias)

create a Tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$text = "this tweet by utools auto send by https://twitter.utools.me"; // string | 
$medias = array("medias_example"); // string[] | medias ids

try {
    $result = $apiInstance->createTweetUsingGET($api_key, $auth_token, $ct0, $text, $medias);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->createTweetUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**string[]**](../Model/string.md)| medias ids | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTweetUsingPOST**
> \Swagger\Client\Model\ResultT createTweetUsingPOST($api_key, $auth_token, $ct0, $text, $medias)

create a Tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$text = "this tweet by utools auto send by https://twitter.utools.me"; // string | 
$medias = array("medias_example"); // string[] | medias ids

try {
    $result = $apiInstance->createTweetUsingPOST($api_key, $auth_token, $ct0, $text, $medias);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->createTweetUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**string[]**](../Model/string.md)| medias ids | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **likeTweetUsingGET**
> \Swagger\Client\Model\ResultT likeTweetUsingGET($api_key, $auth_token, $ct0, $id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "1722138510680043555"; // string | 

try {
    $result = $apiInstance->likeTweetUsingGET($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->likeTweetUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **likeTweetUsingPOST**
> \Swagger\Client\Model\ResultT likeTweetUsingPOST($api_key, $auth_token, $ct0, $id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "1722138510680043555"; // string | 

try {
    $result = $apiInstance->likeTweetUsingPOST($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->likeTweetUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetReplyUsingGET**
> \Swagger\Client\Model\ResultT tweetReplyUsingGET($api_key, $auth_token, $ct0, $text, $tweet_id, $medias)

reply to tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$text = "this tweet by utools auto send by https://twitter.utools.me"; // string | 
$tweet_id = "1722885211313307819"; // string | 
$medias = array("medias_example"); // string[] | medias ids

try {
    $result = $apiInstance->tweetReplyUsingGET($api_key, $auth_token, $ct0, $text, $tweet_id, $medias);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->tweetReplyUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweet_id** | **string**|  | [default to 1722885211313307819]
 **medias** | [**string[]**](../Model/string.md)| medias ids | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tweetReplyUsingPOST**
> \Swagger\Client\Model\ResultT tweetReplyUsingPOST($api_key, $auth_token, $ct0, $text, $tweet_id, $medias)

reply to tweet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$text = "this tweet by utools auto send by https://twitter.utools.me"; // string | 
$tweet_id = "1722885211313307819"; // string | 
$medias = array("medias_example"); // string[] | medias ids

try {
    $result = $apiInstance->tweetReplyUsingPOST($api_key, $auth_token, $ct0, $text, $tweet_id, $medias);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->tweetReplyUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **string**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweet_id** | **string**|  | [default to 1722885211313307819]
 **medias** | [**string[]**](../Model/string.md)| medias ids | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unlikeTweetUsingGET**
> \Swagger\Client\Model\ResultT unlikeTweetUsingGET($api_key, $auth_token, $ct0, $id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "1722138510680043555"; // string | 

try {
    $result = $apiInstance->unlikeTweetUsingGET($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->unlikeTweetUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unlikeTweetUsingPOST**
> \Swagger\Client\Model\ResultT unlikeTweetUsingPOST($api_key, $auth_token, $ct0, $id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "1722138510680043555"; // string | 

try {
    $result = $apiInstance->unlikeTweetUsingPOST($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->unlikeTweetUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | [default to 1722138510680043555]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadMediaUsingGET**
> \Swagger\Client\Model\ResultT uploadMediaUsingGET($api_key, $auth_token, $ct0, $media_url)

upload media (gif)

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$media_url = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // string | 

try {
    $result = $apiInstance->uploadMediaUsingGET($api_key, $auth_token, $ct0, $media_url);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->uploadMediaUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **media_url** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadMediaUsingPOST**
> \Swagger\Client\Model\ResultT uploadMediaUsingPOST($api_key, $auth_token, $ct0, $media_url)

upload media (gif)

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterSendTweesApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$media_url = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"; // string | 

try {
    $result = $apiInstance->uploadMediaUsingPOST($api_key, $auth_token, $ct0, $media_url);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterSendTweesApiToolsApi->uploadMediaUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **media_url** | **string**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

