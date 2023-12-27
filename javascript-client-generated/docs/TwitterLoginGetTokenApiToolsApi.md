# UtoolsTwitterToolsApi.TwitterLoginGetTokenApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login2FAUsingGET**](TwitterLoginGetTokenApiToolsApi.md#login2FAUsingGET) | **GET** /base/apitools/login2FA | login by code
[**login2FAUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#login2FAUsingPOST) | **POST** /base/apitools/login2FA | login by code
[**loginUsingGET**](TwitterLoginGetTokenApiToolsApi.md#loginUsingGET) | **GET** /base/apitools/login | login by userName and passwrd
[**loginUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#loginUsingPOST) | **POST** /base/apitools/login | login by userName and passwrd


<a name="login2FAUsingGET"></a>
# **login2FAUsingGET**
> ResultT login2FAUsingGET(apiKey, code)

login by code

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterLoginGetTokenApiToolsApi();

var apiKey = "your own apikey"; // String | 

var code = "elonmusk"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login2FAUsingGET(apiKey, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **code** | **String**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="login2FAUsingPOST"></a>
# **login2FAUsingPOST**
> ResultT login2FAUsingPOST(apiKey, code)

login by code

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterLoginGetTokenApiToolsApi();

var apiKey = "your own apikey"; // String | 

var code = "elonmusk"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login2FAUsingPOST(apiKey, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **code** | **String**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="loginUsingGET"></a>
# **loginUsingGET**
> ResultT loginUsingGET(apiKey, email, password, screenName)

login by userName and passwrd

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterLoginGetTokenApiToolsApi();

var apiKey = "your own apikey"; // String | 

var email = "elonmusk@gmail.com"; // String | 

var password = "tesla"; // String | 

var screenName = "elonmusk"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUsingGET(apiKey, email, password, screenName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **email** | **String**|  | [default to elonmusk@gmail.com]
 **password** | **String**|  | [default to tesla]
 **screenName** | **String**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="loginUsingPOST"></a>
# **loginUsingPOST**
> ResultT loginUsingPOST(apiKey, email, password, screenName)

login by userName and passwrd

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterLoginGetTokenApiToolsApi();

var apiKey = "your own apikey"; // String | 

var email = "elonmusk@gmail.com"; // String | 

var password = "tesla"; // String | 

var screenName = "elonmusk"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUsingPOST(apiKey, email, password, screenName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **email** | **String**|  | [default to elonmusk@gmail.com]
 **password** | **String**|  | [default to tesla]
 **screenName** | **String**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

