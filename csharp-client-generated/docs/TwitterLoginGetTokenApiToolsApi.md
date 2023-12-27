# IO.Swagger.Api.TwitterLoginGetTokenApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Login2FAUsingGET**](TwitterLoginGetTokenApiToolsApi.md#login2fausingget) | **GET** /base/apitools/login2FA | login by code
[**Login2FAUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#login2fausingpost) | **POST** /base/apitools/login2FA | login by code
[**LoginUsingGET**](TwitterLoginGetTokenApiToolsApi.md#loginusingget) | **GET** /base/apitools/login | login by userName and passwrd
[**LoginUsingPOST**](TwitterLoginGetTokenApiToolsApi.md#loginusingpost) | **POST** /base/apitools/login | login by userName and passwrd


<a name="login2fausingget"></a>
# **Login2FAUsingGET**
> ResultT Login2FAUsingGET (string apiKey, string code)

login by code

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Login2FAUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterLoginGetTokenApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var code = code_example;  // string |  (default to elonmusk)

            try
            {
                // login by code
                ResultT result = apiInstance.Login2FAUsingGET(apiKey, code);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterLoginGetTokenApiToolsApi.Login2FAUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **code** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="login2fausingpost"></a>
# **Login2FAUsingPOST**
> ResultT Login2FAUsingPOST (string apiKey, string code)

login by code

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Login2FAUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterLoginGetTokenApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var code = code_example;  // string |  (default to elonmusk)

            try
            {
                // login by code
                ResultT result = apiInstance.Login2FAUsingPOST(apiKey, code);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterLoginGetTokenApiToolsApi.Login2FAUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **code** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="loginusingget"></a>
# **LoginUsingGET**
> ResultT LoginUsingGET (string apiKey, string email, string password, string screenName)

login by userName and passwrd

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LoginUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterLoginGetTokenApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var email = email_example;  // string |  (default to elonmusk@gmail.com)
            var password = password_example;  // string |  (default to tesla)
            var screenName = screenName_example;  // string |  (default to elonmusk)

            try
            {
                // login by userName and passwrd
                ResultT result = apiInstance.LoginUsingGET(apiKey, email, password, screenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterLoginGetTokenApiToolsApi.LoginUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **email** | **string**|  | [default to elonmusk@gmail.com]
 **password** | **string**|  | [default to tesla]
 **screenName** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="loginusingpost"></a>
# **LoginUsingPOST**
> ResultT LoginUsingPOST (string apiKey, string email, string password, string screenName)

login by userName and passwrd

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LoginUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterLoginGetTokenApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var email = email_example;  // string |  (default to elonmusk@gmail.com)
            var password = password_example;  // string |  (default to tesla)
            var screenName = screenName_example;  // string |  (default to elonmusk)

            try
            {
                // login by userName and passwrd
                ResultT result = apiInstance.LoginUsingPOST(apiKey, email, password, screenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterLoginGetTokenApiToolsApi.LoginUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **email** | **string**|  | [default to elonmusk@gmail.com]
 **password** | **string**|  | [default to tesla]
 **screenName** | **string**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

