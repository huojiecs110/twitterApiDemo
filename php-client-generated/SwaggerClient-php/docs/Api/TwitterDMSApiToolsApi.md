# Swagger\Client\TwitterDMSApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDMSListV2UsingGET**](TwitterDMSApiToolsApi.md#getDMSListV2UsingGET) | **GET** /base/apitools/getDMSListV2 | get DMS List
[**getDMSListV2UsingPOST**](TwitterDMSApiToolsApi.md#getDMSListV2UsingPOST) | **POST** /base/apitools/getDMSListV2 | get DMS List
[**getDMSUsingGET**](TwitterDMSApiToolsApi.md#getDMSUsingGET) | **GET** /base/apitools/getDMS | receiving events
[**getDMSUsingPOST**](TwitterDMSApiToolsApi.md#getDMSUsingPOST) | **POST** /base/apitools/getDMS | receiving events
[**sendDMSMediaUsingGET**](TwitterDMSApiToolsApi.md#sendDMSMediaUsingGET) | **GET** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**sendDMSMediaUsingPOST**](TwitterDMSApiToolsApi.md#sendDMSMediaUsingPOST) | **POST** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**sendDMSUsingGET**](TwitterDMSApiToolsApi.md#sendDMSUsingGET) | **GET** /base/apitools/sendDMS | sendDMS events.
[**sendDMSUsingPOST**](TwitterDMSApiToolsApi.md#sendDMSUsingPOST) | **POST** /base/apitools/sendDMS | sendDMS events.
[**uploadMediaDMUsingGET**](TwitterDMSApiToolsApi.md#uploadMediaDMUsingGET) | **GET** /base/apitools/uploadMediaDM | upload media for DM
[**uploadMediaDMUsingPOST**](TwitterDMSApiToolsApi.md#uploadMediaDMUsingPOST) | **POST** /base/apitools/uploadMediaDM | upload media for DM


# **getDMSListV2UsingGET**
> \Swagger\Client\Model\ResultT getDMSListV2UsingGET($api_key, $auth_token, $ct0, $cursor)

get DMS List

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->getDMSListV2UsingGET($api_key, $auth_token, $ct0, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->getDMSListV2UsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **string**|  | [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDMSListV2UsingPOST**
> \Swagger\Client\Model\ResultT getDMSListV2UsingPOST($api_key, $auth_token, $ct0, $cursor)

get DMS List

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->getDMSListV2UsingPOST($api_key, $auth_token, $ct0, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->getDMSListV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **string**|  | [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDMSUsingGET**
> \Swagger\Client\Model\ResultT getDMSUsingGET($api_key, $auth_token, $ct0, $id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "id_example"; // string | 

try {
    $result = $apiInstance->getDMSUsingGET($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->getDMSUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  |

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDMSUsingPOST**
> \Swagger\Client\Model\ResultT getDMSUsingPOST($api_key, $auth_token, $ct0, $id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$id = "id_example"; // string | 

try {
    $result = $apiInstance->getDMSUsingPOST($api_key, $auth_token, $ct0, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->getDMSUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  |

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendDMSMediaUsingGET**
> \Swagger\Client\Model\ResultT sendDMSMediaUsingGET($api_key, $attachment_media_id, $attachment_type, $auth_token, $ct0, $recipient_id, $text, $type, $quick_reply_type)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$attachment_media_id = "attachment_media_id_example"; // string | 
$attachment_type = "media"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$recipient_id = "recipient_id_example"; // string | 
$text = "(This message is sent by the best api tools twitter.utools.me)"; // string | 
$type = "message_create"; // string | 
$quick_reply_type = "quick_reply_type_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.

try {
    $result = $apiInstance->sendDMSMediaUsingGET($api_key, $attachment_media_id, $attachment_type, $auth_token, $ct0, $recipient_id, $text, $type, $quick_reply_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->sendDMSMediaUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **attachment_media_id** | **string**|  |
 **attachment_type** | **string**|  | [default to media]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **string**|  |
 **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **string**|  | [default to message_create]
 **quick_reply_type** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendDMSMediaUsingPOST**
> \Swagger\Client\Model\ResultT sendDMSMediaUsingPOST($api_key, $attachment_media_id, $attachment_type, $auth_token, $ct0, $recipient_id, $text, $type, $quick_reply_type)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$attachment_media_id = "attachment_media_id_example"; // string | 
$attachment_type = "media"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$recipient_id = "recipient_id_example"; // string | 
$text = "(This message is sent by the best api tools twitter.utools.me)"; // string | 
$type = "message_create"; // string | 
$quick_reply_type = "quick_reply_type_example"; // string | Returns results with an ID less than (that is, older than) or equal to the specified ID.

try {
    $result = $apiInstance->sendDMSMediaUsingPOST($api_key, $attachment_media_id, $attachment_type, $auth_token, $ct0, $recipient_id, $text, $type, $quick_reply_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->sendDMSMediaUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **attachment_media_id** | **string**|  |
 **attachment_type** | **string**|  | [default to media]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **string**|  |
 **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **string**|  | [default to message_create]
 **quick_reply_type** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendDMSUsingGET**
> \Swagger\Client\Model\ResultT sendDMSUsingGET($api_key, $auth_token, $ct0, $recipient_id, $text, $type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$recipient_id = "recipient_id_example"; // string | 
$text = "text_example"; // string | 
$type = "message_create"; // string | 

try {
    $result = $apiInstance->sendDMSUsingGET($api_key, $auth_token, $ct0, $recipient_id, $text, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->sendDMSUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **string**|  |
 **text** | **string**|  |
 **type** | **string**|  | [default to message_create]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendDMSUsingPOST**
> \Swagger\Client\Model\ResultT sendDMSUsingPOST($api_key, $auth_token, $ct0, $recipient_id, $text, $type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$recipient_id = "recipient_id_example"; // string | 
$text = "text_example"; // string | 
$type = "message_create"; // string | 

try {
    $result = $apiInstance->sendDMSUsingPOST($api_key, $auth_token, $ct0, $recipient_id, $text, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->sendDMSUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **string**|  |
 **text** | **string**|  |
 **type** | **string**|  | [default to message_create]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadMediaDMUsingGET**
> \Swagger\Client\Model\ResultT uploadMediaDMUsingGET($api_key, $auth_token, $ct0, $file)

upload media for DM

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$file = "/path/to/file.txt"; // \SplFileObject | file

try {
    $result = $apiInstance->uploadMediaDMUsingGET($api_key, $auth_token, $ct0, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->uploadMediaDMUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **\SplFileObject**| file |

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadMediaDMUsingPOST**
> \Swagger\Client\Model\ResultT uploadMediaDMUsingPOST($api_key, $auth_token, $ct0, $file)

upload media for DM

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterDMSApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$file = "/path/to/file.txt"; // \SplFileObject | file

try {
    $result = $apiInstance->uploadMediaDMUsingPOST($api_key, $auth_token, $ct0, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterDMSApiToolsApi->uploadMediaDMUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **\SplFileObject**| file |

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

