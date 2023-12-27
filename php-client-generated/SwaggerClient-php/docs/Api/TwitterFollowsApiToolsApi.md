# Swagger\Client\TwitterFollowsApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blueVerifiedFollowersV2UsingGET**](TwitterFollowsApiToolsApi.md#blueVerifiedFollowersV2UsingGET) | **GET** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2
[**blueVerifiedFollowersV2UsingPOST**](TwitterFollowsApiToolsApi.md#blueVerifiedFollowersV2UsingPOST) | **POST** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2
[**followUsingGET**](TwitterFollowsApiToolsApi.md#followUsingGET) | **GET** /base/apitools/follow | to follow
[**followUsingPOST**](TwitterFollowsApiToolsApi.md#followUsingPOST) | **POST** /base/apitools/follow | to follow
[**followersIdsUsingGET**](TwitterFollowsApiToolsApi.md#followersIdsUsingGET) | **GET** /base/apitools/followersIds | Get Followers Ids
[**followersIdsUsingPOST**](TwitterFollowsApiToolsApi.md#followersIdsUsingPOST) | **POST** /base/apitools/followersIds | Get Followers Ids
[**followersListUsingGET**](TwitterFollowsApiToolsApi.md#followersListUsingGET) | **GET** /base/apitools/followersList | Get Followers User Collection
[**followersListUsingPOST**](TwitterFollowsApiToolsApi.md#followersListUsingPOST) | **POST** /base/apitools/followersList | Get Followers User Collection
[**followersListV2UsingGET**](TwitterFollowsApiToolsApi.md#followersListV2UsingGET) | **GET** /base/apitools/followersListV2 | get followersList by V2
[**followersListV2UsingPOST**](TwitterFollowsApiToolsApi.md#followersListV2UsingPOST) | **POST** /base/apitools/followersListV2 | get followersList by V2
[**followingsIdsUsingGET**](TwitterFollowsApiToolsApi.md#followingsIdsUsingGET) | **GET** /base/apitools/followingsIds | Get Followings Ids
[**followingsIdsUsingPOST**](TwitterFollowsApiToolsApi.md#followingsIdsUsingPOST) | **POST** /base/apitools/followingsIds | Get Followings Ids
[**followingsListUsingGET**](TwitterFollowsApiToolsApi.md#followingsListUsingGET) | **GET** /base/apitools/followingsList | Get Followings User Collection
[**followingsListUsingPOST**](TwitterFollowsApiToolsApi.md#followingsListUsingPOST) | **POST** /base/apitools/followingsList | Get Followings User Collection
[**followingsListV2UsingGET**](TwitterFollowsApiToolsApi.md#followingsListV2UsingGET) | **GET** /base/apitools/followingsListV2 | get followingsList by V2
[**followingsListV2UsingPOST**](TwitterFollowsApiToolsApi.md#followingsListV2UsingPOST) | **POST** /base/apitools/followingsListV2 | get followingsList by V2
[**getFriendshipsShowUsingGET**](TwitterFollowsApiToolsApi.md#getFriendshipsShowUsingGET) | **GET** /base/apitools/friendshipsShow | Get relationship information between two users
[**getFriendshipsShowUsingPOST**](TwitterFollowsApiToolsApi.md#getFriendshipsShowUsingPOST) | **POST** /base/apitools/friendshipsShow | Get relationship information between two users
[**unfollowUsingGET**](TwitterFollowsApiToolsApi.md#unfollowUsingGET) | **GET** /base/apitools/unfollow | to unfollow
[**unfollowUsingPOST**](TwitterFollowsApiToolsApi.md#unfollowUsingPOST) | **POST** /base/apitools/unfollow | to unfollow


# **blueVerifiedFollowersV2UsingGET**
> \Swagger\Client\Model\ResultT blueVerifiedFollowersV2UsingGET($api_key, $user_id, $cursor)

get blueVerifiedFollowers by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->blueVerifiedFollowersV2UsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->blueVerifiedFollowersV2UsingGET: ', $e->getMessage(), PHP_EOL;
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

# **blueVerifiedFollowersV2UsingPOST**
> \Swagger\Client\Model\ResultT blueVerifiedFollowersV2UsingPOST($api_key, $user_id, $cursor)

get blueVerifiedFollowers by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->blueVerifiedFollowersV2UsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->blueVerifiedFollowersV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **followUsingGET**
> \Swagger\Client\Model\ResultT followUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id)

to follow

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
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
    $result = $apiInstance->followUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followUsingGET: ', $e->getMessage(), PHP_EOL;
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

# **followUsingPOST**
> \Swagger\Client\Model\ResultT followUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id)

to follow

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
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
    $result = $apiInstance->followUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followUsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **followersIdsUsingGET**
> \Swagger\Client\Model\ResultT followersIdsUsingGET($api_key, $cursor, $screen_name, $user_id)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followersIdsUsingGET($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersIdsUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followersIdsUsingPOST**
> \Swagger\Client\Model\ResultT followersIdsUsingPOST($api_key, $cursor, $screen_name, $user_id)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followersIdsUsingPOST($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersIdsUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followersListUsingGET**
> \Swagger\Client\Model\ResultT followersListUsingGET($api_key, $cursor, $screen_name, $user_id)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followersListUsingGET($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersListUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followersListUsingPOST**
> \Swagger\Client\Model\ResultT followersListUsingPOST($api_key, $cursor, $screen_name, $user_id)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followersListUsingPOST($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersListUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followersListV2UsingGET**
> \Swagger\Client\Model\ResultT followersListV2UsingGET($api_key, $user_id, $cursor)

get followersList by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->followersListV2UsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersListV2UsingGET: ', $e->getMessage(), PHP_EOL;
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

# **followersListV2UsingPOST**
> \Swagger\Client\Model\ResultT followersListV2UsingPOST($api_key, $user_id, $cursor)

get followersList by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->followersListV2UsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followersListV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **followingsIdsUsingGET**
> \Swagger\Client\Model\ResultT followingsIdsUsingGET($api_key, $cursor, $screen_name, $user_id)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followingsIdsUsingGET($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsIdsUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followingsIdsUsingPOST**
> \Swagger\Client\Model\ResultT followingsIdsUsingPOST($api_key, $cursor, $screen_name, $user_id)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followingsIdsUsingPOST($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsIdsUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followingsListUsingGET**
> \Swagger\Client\Model\ResultT followingsListUsingGET($api_key, $cursor, $screen_name, $user_id)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followingsListUsingGET($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsListUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followingsListUsingPOST**
> \Swagger\Client\Model\ResultT followingsListUsingPOST($api_key, $cursor, $screen_name, $user_id)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$cursor = "-1"; // string | 
$screen_name = "elonmusk"; // string | 
$user_id = "1574242047661207552"; // string | 

try {
    $result = $apiInstance->followingsListUsingPOST($api_key, $cursor, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsListUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

# **followingsListV2UsingGET**
> \Swagger\Client\Model\ResultT followingsListV2UsingGET($api_key, $user_id, $cursor)

get followingsList by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->followingsListV2UsingGET($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsListV2UsingGET: ', $e->getMessage(), PHP_EOL;
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

# **followingsListV2UsingPOST**
> \Swagger\Client\Model\ResultT followingsListV2UsingPOST($api_key, $user_id, $cursor)

get followingsList by V2

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$user_id = "1574242047661207552"; // string | 
$cursor = "-1"; // string | 

try {
    $result = $apiInstance->followingsListV2UsingPOST($api_key, $user_id, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->followingsListV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

# **getFriendshipsShowUsingGET**
> \Swagger\Client\Model\ResultT getFriendshipsShowUsingGET($api_key, $source_id, $source_screen_name, $target_id, $target_screen_name)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$source_id = "1574242047661207552"; // string | 
$source_screen_name = "source_screen_name_example"; // string | 
$target_id = "1620357967962058752"; // string | 
$target_screen_name = "target_screen_name_example"; // string | 

try {
    $result = $apiInstance->getFriendshipsShowUsingGET($api_key, $source_id, $source_screen_name, $target_id, $target_screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->getFriendshipsShowUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **source_id** | **string**|  | [optional] [default to 1574242047661207552]
 **source_screen_name** | **string**|  | [optional]
 **target_id** | **string**|  | [optional] [default to 1620357967962058752]
 **target_screen_name** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFriendshipsShowUsingPOST**
> \Swagger\Client\Model\ResultT getFriendshipsShowUsingPOST($api_key, $source_id, $source_screen_name, $target_id, $target_screen_name)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$source_id = "1574242047661207552"; // string | 
$source_screen_name = "source_screen_name_example"; // string | 
$target_id = "1620357967962058752"; // string | 
$target_screen_name = "target_screen_name_example"; // string | 

try {
    $result = $apiInstance->getFriendshipsShowUsingPOST($api_key, $source_id, $source_screen_name, $target_id, $target_screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->getFriendshipsShowUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **source_id** | **string**|  | [optional] [default to 1574242047661207552]
 **source_screen_name** | **string**|  | [optional]
 **target_id** | **string**|  | [optional] [default to 1620357967962058752]
 **target_screen_name** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unfollowUsingGET**
> \Swagger\Client\Model\ResultT unfollowUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id)

to unfollow

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
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
    $result = $apiInstance->unfollowUsingGET($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->unfollowUsingGET: ', $e->getMessage(), PHP_EOL;
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

# **unfollowUsingPOST**
> \Swagger\Client\Model\ResultT unfollowUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id)

to unfollow

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterFollowsApiToolsApi(
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
    $result = $apiInstance->unfollowUsingPOST($api_key, $auth_token, $ct0, $screen_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterFollowsApiToolsApi->unfollowUsingPOST: ', $e->getMessage(), PHP_EOL;
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

