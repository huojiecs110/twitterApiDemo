# TwitterLoginGetTokenApiToolsApi

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterLoginGetTokenApiToolsApi;


TwitterLoginGetTokenApiToolsApi apiInstance = new TwitterLoginGetTokenApiToolsApi();
String apiKey = "your own apikey"; // String | 
String code = "elonmusk"; // String | 
try {
    ResultT result = apiInstance.login2FAUsingGET(apiKey, code);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterLoginGetTokenApiToolsApi#login2FAUsingGET");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterLoginGetTokenApiToolsApi;


TwitterLoginGetTokenApiToolsApi apiInstance = new TwitterLoginGetTokenApiToolsApi();
String apiKey = "your own apikey"; // String | 
String code = "elonmusk"; // String | 
try {
    ResultT result = apiInstance.login2FAUsingPOST(apiKey, code);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterLoginGetTokenApiToolsApi#login2FAUsingPOST");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterLoginGetTokenApiToolsApi;


TwitterLoginGetTokenApiToolsApi apiInstance = new TwitterLoginGetTokenApiToolsApi();
String apiKey = "your own apikey"; // String | 
String email = "elonmusk@gmail.com"; // String | 
String password = "tesla"; // String | 
String screenName = "elonmusk"; // String | 
try {
    ResultT result = apiInstance.loginUsingGET(apiKey, email, password, screenName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterLoginGetTokenApiToolsApi#loginUsingGET");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterLoginGetTokenApiToolsApi;


TwitterLoginGetTokenApiToolsApi apiInstance = new TwitterLoginGetTokenApiToolsApi();
String apiKey = "your own apikey"; // String | 
String email = "elonmusk@gmail.com"; // String | 
String password = "tesla"; // String | 
String screenName = "elonmusk"; // String | 
try {
    ResultT result = apiInstance.loginUsingPOST(apiKey, email, password, screenName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterLoginGetTokenApiToolsApi#loginUsingPOST");
    e.printStackTrace();
}
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

