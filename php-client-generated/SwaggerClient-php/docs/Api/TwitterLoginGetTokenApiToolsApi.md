# Swagger\Client\TwitterLoginGetTokenApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login2FAUsingGET**](TwitterLoginGetTokenApiToolsApi.md#login2FAUsingGET) | **GET** /base/apitools/login2FA | login by code
[**login2FAUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#login2FAUsingPOST) | **POST** /base/apitools/login2FA | login by code
[**loginUsingGET**](TwitterLoginGetTokenApiToolsApi.md#loginUsingGET) | **GET** /base/apitools/login | login by userName and passwrd
[**loginUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#loginUsingPOST) | **POST** /base/apitools/login | login by userName and passwrd


# **login2FAUsingGET**
> \Swagger\Client\Model\ResultT login2FAUsingGET($api_key, $code)

login by code

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterLoginGetTokenApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$code = "elonmusk"; // string | 

try {
    $result = $apiInstance->login2FAUsingGET($api_key, $code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterLoginGetTokenApiToolsApi->login2FAUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **code** | **string**|  | [default to elonmusk]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **login2FAUsingPOST**
> \Swagger\Client\Model\ResultT login2FAUsingPOST($api_key, $code)

login by code

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterLoginGetTokenApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$code = "elonmusk"; // string | 

try {
    $result = $apiInstance->login2FAUsingPOST($api_key, $code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterLoginGetTokenApiToolsApi->login2FAUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **code** | **string**|  | [default to elonmusk]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **loginUsingGET**
> \Swagger\Client\Model\ResultT loginUsingGET($api_key, $email, $password, $screen_name)

login by userName and passwrd

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterLoginGetTokenApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$email = "elonmusk@gmail.com"; // string | 
$password = "tesla"; // string | 
$screen_name = "elonmusk"; // string | 

try {
    $result = $apiInstance->loginUsingGET($api_key, $email, $password, $screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterLoginGetTokenApiToolsApi->loginUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **email** | **string**|  | [default to elonmusk@gmail.com]
 **password** | **string**|  | [default to tesla]
 **screen_name** | **string**|  | [default to elonmusk]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **loginUsingPOST**
> \Swagger\Client\Model\ResultT loginUsingPOST($api_key, $email, $password, $screen_name)

login by userName and passwrd

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TwitterLoginGetTokenApiToolsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$api_key = "your own apikey"; // string | 
$email = "elonmusk@gmail.com"; // string | 
$password = "tesla"; // string | 
$screen_name = "elonmusk"; // string | 

try {
    $result = $apiInstance->loginUsingPOST($api_key, $email, $password, $screen_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TwitterLoginGetTokenApiToolsApi->loginUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **string**|  | [default to your own apikey]
 **email** | **string**|  | [default to elonmusk@gmail.com]
 **password** | **string**|  | [default to tesla]
 **screen_name** | **string**|  | [default to elonmusk]

### Return type

[**\Swagger\Client\Model\ResultT**](../Model/ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

