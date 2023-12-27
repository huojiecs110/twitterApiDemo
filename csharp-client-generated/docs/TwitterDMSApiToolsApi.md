# IO.Swagger.Api.TwitterDMSApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetDMSListV2UsingGET**](TwitterDMSApiToolsApi.md#getdmslistv2usingget) | **GET** /base/apitools/getDMSListV2 | get DMS List
[**GetDMSListV2UsingPOST**](TwitterDMSApiToolsApi.md#getdmslistv2usingpost) | **POST** /base/apitools/getDMSListV2 | get DMS List
[**GetDMSUsingGET**](TwitterDMSApiToolsApi.md#getdmsusingget) | **GET** /base/apitools/getDMS | receiving events
[**GetDMSUsingPOST**](TwitterDMSApiToolsApi.md#getdmsusingpost) | **POST** /base/apitools/getDMS | receiving events
[**SendDMSMediaUsingGET**](TwitterDMSApiToolsApi.md#senddmsmediausingget) | **GET** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**SendDMSMediaUsingPOST**](TwitterDMSApiToolsApi.md#senddmsmediausingpost) | **POST** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**SendDMSUsingGET**](TwitterDMSApiToolsApi.md#senddmsusingget) | **GET** /base/apitools/sendDMS | sendDMS events.
[**SendDMSUsingPOST**](TwitterDMSApiToolsApi.md#senddmsusingpost) | **POST** /base/apitools/sendDMS | sendDMS events.
[**UploadMediaDMUsingGET**](TwitterDMSApiToolsApi.md#uploadmediadmusingget) | **GET** /base/apitools/uploadMediaDM | upload media for DM 
[**UploadMediaDMUsingPOST**](TwitterDMSApiToolsApi.md#uploadmediadmusingpost) | **POST** /base/apitools/uploadMediaDM | upload media for DM 


<a name="getdmslistv2usingget"></a>
# **GetDMSListV2UsingGET**
> ResultT GetDMSListV2UsingGET (string apiKey, string authToken, string ct0, string cursor)

get DMS List

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetDMSListV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var cursor = cursor_example;  // string |  (default to -1)

            try
            {
                // get DMS List
                ResultT result = apiInstance.GetDMSListV2UsingGET(apiKey, authToken, ct0, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.GetDMSListV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **string**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getdmslistv2usingpost"></a>
# **GetDMSListV2UsingPOST**
> ResultT GetDMSListV2UsingPOST (string apiKey, string authToken, string ct0, string cursor)

get DMS List

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetDMSListV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var cursor = cursor_example;  // string |  (default to -1)

            try
            {
                // get DMS List
                ResultT result = apiInstance.GetDMSListV2UsingPOST(apiKey, authToken, ct0, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.GetDMSListV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **string**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getdmsusingget"></a>
# **GetDMSUsingGET**
> ResultT GetDMSUsingGET (string apiKey, string authToken, string ct0, string id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetDMSUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string | 

            try
            {
                // receiving events
                ResultT result = apiInstance.GetDMSUsingGET(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.GetDMSUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getdmsusingpost"></a>
# **GetDMSUsingPOST**
> ResultT GetDMSUsingPOST (string apiKey, string authToken, string ct0, string id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetDMSUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var id = id_example;  // string | 

            try
            {
                // receiving events
                ResultT result = apiInstance.GetDMSUsingPOST(apiKey, authToken, ct0, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.GetDMSUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **string**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="senddmsmediausingget"></a>
# **SendDMSMediaUsingGET**
> ResultT SendDMSMediaUsingGET (string apiKey, string attachmentMediaId, string attachmentType, string authToken, string ct0, string recipientId, string text, string type, string quickReplyType = null)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SendDMSMediaUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var attachmentMediaId = attachmentMediaId_example;  // string | 
            var attachmentType = attachmentType_example;  // string |  (default to media)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var recipientId = recipientId_example;  // string | 
            var text = text_example;  // string |  (default to (This message is sent by the best api tools twitter.utools.me))
            var type = type_example;  // string |  (default to message_create)
            var quickReplyType = quickReplyType_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 

            try
            {
                // sendDMSMedia events.
                ResultT result = apiInstance.SendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.SendDMSMediaUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **attachmentMediaId** | **string**|  | 
 **attachmentType** | **string**|  | [default to media]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **string**|  | 
 **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **string**|  | [default to message_create]
 **quickReplyType** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="senddmsmediausingpost"></a>
# **SendDMSMediaUsingPOST**
> ResultT SendDMSMediaUsingPOST (string apiKey, string attachmentMediaId, string attachmentType, string authToken, string ct0, string recipientId, string text, string type, string quickReplyType = null)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SendDMSMediaUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var attachmentMediaId = attachmentMediaId_example;  // string | 
            var attachmentType = attachmentType_example;  // string |  (default to media)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var recipientId = recipientId_example;  // string | 
            var text = text_example;  // string |  (default to (This message is sent by the best api tools twitter.utools.me))
            var type = type_example;  // string |  (default to message_create)
            var quickReplyType = quickReplyType_example;  // string | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional) 

            try
            {
                // sendDMSMedia events.
                ResultT result = apiInstance.SendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.SendDMSMediaUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **attachmentMediaId** | **string**|  | 
 **attachmentType** | **string**|  | [default to media]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **string**|  | 
 **text** | **string**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **string**|  | [default to message_create]
 **quickReplyType** | **string**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="senddmsusingget"></a>
# **SendDMSUsingGET**
> ResultT SendDMSUsingGET (string apiKey, string authToken, string ct0, string recipientId, string text, string type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SendDMSUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var recipientId = recipientId_example;  // string | 
            var text = text_example;  // string | 
            var type = type_example;  // string |  (default to message_create)

            try
            {
                // sendDMS events.
                ResultT result = apiInstance.SendDMSUsingGET(apiKey, authToken, ct0, recipientId, text, type);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.SendDMSUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **string**|  | 
 **text** | **string**|  | 
 **type** | **string**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="senddmsusingpost"></a>
# **SendDMSUsingPOST**
> ResultT SendDMSUsingPOST (string apiKey, string authToken, string ct0, string recipientId, string text, string type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SendDMSUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var recipientId = recipientId_example;  // string | 
            var text = text_example;  // string | 
            var type = type_example;  // string |  (default to message_create)

            try
            {
                // sendDMS events.
                ResultT result = apiInstance.SendDMSUsingPOST(apiKey, authToken, ct0, recipientId, text, type);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.SendDMSUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **string**|  | 
 **text** | **string**|  | 
 **type** | **string**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmediadmusingget"></a>
# **UploadMediaDMUsingGET**
> ResultT UploadMediaDMUsingGET (string apiKey, string authToken, string ct0, System.IO.Stream _file)

upload media for DM 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UploadMediaDMUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var _file = new System.IO.Stream(); // System.IO.Stream | file

            try
            {
                // upload media for DM 
                ResultT result = apiInstance.UploadMediaDMUsingGET(apiKey, authToken, ct0, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.UploadMediaDMUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **_file** | **System.IO.Stream**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmediadmusingpost"></a>
# **UploadMediaDMUsingPOST**
> ResultT UploadMediaDMUsingPOST (string apiKey, string authToken, string ct0, System.IO.Stream _file)

upload media for DM 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UploadMediaDMUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterDMSApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var _file = new System.IO.Stream(); // System.IO.Stream | file

            try
            {
                // upload media for DM 
                ResultT result = apiInstance.UploadMediaDMUsingPOST(apiKey, authToken, ct0, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterDMSApiToolsApi.UploadMediaDMUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **authToken** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **string**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **_file** | **System.IO.Stream**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

