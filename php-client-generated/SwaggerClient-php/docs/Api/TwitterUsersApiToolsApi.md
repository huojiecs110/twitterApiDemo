# Swagger\Client\TwitterUsersApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blocksCreateUsingGET**](TwitterUsersApiToolsApi.md#blocksCreateUsingGET) | **GET** /base/apitools/blocksCreate | blocks Create
[**blocksCreateUsingPOST**](TwitterUsersApiToolsApi.md#blocksCreateUsingPOST) | **POST** /base/apitools/blocksCreate | blocks Create
[**blocksDestroyUsingGET**](TwitterUsersApiToolsApi.md#blocksDestroyUsingGET) | **GET** /base/apitools/blocksDestroy | blocks Destroy
[**blocksDestroyUsingPOST**](TwitterUsersApiToolsApi.md#blocksDestroyUsingPOST) | **POST** /base/apitools/blocksDestroy | blocks Destroy
[**getListByUserIdOrScreenNameUsingGET**](TwitterUsersApiToolsApi.md#getListByUserIdOrScreenNameUsingGET) | **GET** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**getListByUserIdOrScreenNameUsingPOST**](TwitterUsersApiToolsApi.md#getListByUserIdOrScreenNameUsingPOST) | **POST** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**getListMembersByListIdUsingGET**](TwitterUsersApiToolsApi.md#getListMembersByListIdUsingGET) | **GET** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**getListMembersByListIdUsingPOST**](TwitterUsersApiToolsApi.md#getListMembersByListIdUsingPOST) | **POST** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**getUserByIdOrNameLookUpUsingGET**](TwitterUsersApiToolsApi.md#getUserByIdOrNameLookUpUsingGET) | **GET** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**getUserByIdOrNameLookUpUsingPOST**](TwitterUsersApiToolsApi.md#getUserByIdOrNameLookUpUsingPOST) | **POST** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**getUserByIdOrNameShowUsingGET**](TwitterUsersApiToolsApi.md#getUserByIdOrNameShowUsingGET) | **GET** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**getUserByIdOrNameShowUsingPOST**](TwitterUsersApiToolsApi.md#getUserByIdOrNameShowUsingPOST) | **POST** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**uerByIdRestIdV2UsingGET**](TwitterUsersApiToolsApi.md#uerByIdRestIdV2UsingGET) | **GET** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**uerByIdRestIdV2UsingPOST**](TwitterUsersApiToolsApi.md#uerByIdRestIdV2UsingPOST) | **POST** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**userByScreenNameV2UsingGET**](TwitterUsersApiToolsApi.md#userByScreenNameV2UsingGET) | **GET** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**userByScreenNameV2UsingPOST**](TwitterUsersApiToolsApi.md#userByScreenNameV2UsingPOST) | **POST** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**userTimelineUsingGET**](TwitterUsersApiToolsApi.md#userTimelineUsingGET) | **GET** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**userTimelineUsingPOST**](TwitterUsersApiToolsApi.md#userTimelineUsingPOST) | **POST** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**userTweetsV2UsingGET**](TwitterUsersApiToolsApi.md#userTweetsV2UsingGET) | **GET** /base/apitools/userTweetsV2 | Get UserTweets by V2
[**userTweetsV2UsingPOST**](TwitterUsersApiToolsApi.md#userTweetsV2UsingPOST) | **POST** /base/apitools/userTweetsV2 | Get UserTweets by V2


# **blocksCreateUsingGET**
> \Swagger\Client\Model\ResultT blocksCreateUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$screen_name = "screen_name_example"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->blocksCreateUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->blocksCreateUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **string**|  | [optional]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **blocksCreateUsingPOST**
> \Swagger\Client\Model\ResultT blocksCreateUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$screen_name = "screen_name_example"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->blocksCreateUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->blocksCreateUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **string**|  | [optional]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **blocksDestroyUsingGET**
> \Swagger\Client\Model\ResultT blocksDestroyUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$screen_name = "screen_name_example"; // string | 
$user_id = "44196397"; // string | 

try {
    $result = $apiInstance->blocksDestroyUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->blocksDestroyUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **string**|  | [optional]
 **user_id** | **string**|  | [optional] [default to 44196397]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **blocksDestroyUsingPOST**
> \Swagger\Client\Model\ResultT blocksDestroyUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$auth_token = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // string | 
$screen_name = "screen_name_example"; // string | 
$user_id = "44196397"; // string | 

try {
    $result = $apiInstance->blocksDestroyUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->blocksDestroyUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **auth_token** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **string**|  | [optional]
 **user_id** | **string**|  | [optional] [default to 44196397]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getListByUserIdOrScreenNameUsingGET**
> \Swagger\Client\Model\ResultT getListByUserIdOrScreenNameUsingGET($api_key, $screen_name, $user_id)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getListByUserIdOrScreenNameUsingGET($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getListByUserIdOrScreenNameUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getListByUserIdOrScreenNameUsingPOST**
> \Swagger\Client\Model\ResultT getListByUserIdOrScreenNameUsingPOST($api_key, $screen_name, $user_id)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getListByUserIdOrScreenNameUsingPOST($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getListByUserIdOrScreenNameUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getListMembersByListIdUsingGET**
> \Swagger\Client\Model\ResultT getListMembersByListIdUsingGET($api_key, $list_id, $cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$list_id = "1453837432479227913"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->getListMembersByListIdUsingGET($api_key, $list_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getListMembersByListIdUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **list_id** | **string**|  | [default to 1453837432479227913]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getListMembersByListIdUsingPOST**
> \Swagger\Client\Model\ResultT getListMembersByListIdUsingPOST($api_key, $list_id, $cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$list_id = "1453837432479227913"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->getListMembersByListIdUsingPOST($api_key, $list_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getListMembersByListIdUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **list_id** | **string**|  | [default to 1453837432479227913]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserByIdOrNameLookUpUsingGET**
> \Swagger\Client\Model\ResultT getUserByIdOrNameLookUpUsingGET($api_key, $screen_name, $user_id)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getUserByIdOrNameLookUpUsingGET($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getUserByIdOrNameLookUpUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserByIdOrNameLookUpUsingPOST**
> \Swagger\Client\Model\ResultT getUserByIdOrNameLookUpUsingPOST($api_key, $screen_name, $user_id)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getUserByIdOrNameLookUpUsingPOST($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getUserByIdOrNameLookUpUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserByIdOrNameShowUsingGET**
> \Swagger\Client\Model\ResultT getUserByIdOrNameShowUsingGET($api_key, $screen_name, $user_id)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getUserByIdOrNameShowUsingGET($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getUserByIdOrNameShowUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserByIdOrNameShowUsingPOST**
> \Swagger\Client\Model\ResultT getUserByIdOrNameShowUsingPOST($api_key, $screen_name, $user_id)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->getUserByIdOrNameShowUsingPOST($api_key, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->getUserByIdOrNameShowUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [optional] [default to elonmusk]
 **user_id** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uerByIdRestIdV2UsingGET**
> \Swagger\Client\Model\ResultT uerByIdRestIdV2UsingGET($api_key, $user_id, $cursor)

Get uerByIdRestId by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->uerByIdRestIdV2UsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->uerByIdRestIdV2UsingGET: ', $e->getMessage(), PHP_EOL;
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

# **uerByIdRestIdV2UsingPOST**
> \Swagger\Client\Model\ResultT uerByIdRestIdV2UsingPOST($api_key, $user_id, $cursor)

Get uerByIdRestId by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->uerByIdRestIdV2UsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->uerByIdRestIdV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **userByScreenNameV2UsingGET**
> \Swagger\Client\Model\ResultT userByScreenNameV2UsingGET($api_key, $screen_name)

Get userByScreenName by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "pWP5s7zypwvCwJp"; // string | 

try {
    $result = $apiInstance->userByScreenNameV2UsingGET($api_key, $screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userByScreenNameV2UsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **userByScreenNameV2UsingPOST**
> \Swagger\Client\Model\ResultT userByScreenNameV2UsingPOST($api_key, $screen_name)

Get userByScreenName by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$screen_name = "pWP5s7zypwvCwJp"; // string | 

try {
    $result = $apiInstance->userByScreenNameV2UsingPOST($api_key, $screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userByScreenNameV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **screen_name** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **userTimelineUsingGET**
> \Swagger\Client\Model\ResultT userTimelineUsingGET($api_key, $user_id, $cursor)

Get UserTimeline  tweets info

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTimelineUsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userTimelineUsingGET: ', $e->getMessage(), PHP_EOL;
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

# **userTimelineUsingPOST**
> \Swagger\Client\Model\ResultT userTimelineUsingPOST($api_key, $user_id, $cursor)

Get UserTimeline  tweets info

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTimelineUsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userTimelineUsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **userTweetsV2UsingGET**
> \Swagger\Client\Model\ResultT userTweetsV2UsingGET($api_key, $user_id, $cursor)

Get UserTweets by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTweetsV2UsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userTweetsV2UsingGET: ', $e->getMessage(), PHP_EOL;
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

# **userTweetsV2UsingPOST**
> \Swagger\Client\Model\ResultT userTweetsV2UsingPOST($api_key, $user_id, $cursor)

Get UserTweets by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterUsersApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->userTweetsV2UsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterUsersApiToolsApi->userTweetsV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

