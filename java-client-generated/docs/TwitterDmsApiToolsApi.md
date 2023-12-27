# TwitterDmsApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDMSListV2UsingGET**](TwitterDmsApiToolsApi.md#getDMSListV2UsingGET) | **GET** /base/apitools/getDMSListV2 | get DMS List
[**getDMSListV2UsingPOST**](TwitterDmsApiToolsApi.md#getDMSListV2UsingPOST) | **POST** /base/apitools/getDMSListV2 | get DMS List
[**getDMSUsingGET**](TwitterDmsApiToolsApi.md#getDMSUsingGET) | **GET** /base/apitools/getDMS | receiving events
[**getDMSUsingPOST**](TwitterDmsApiToolsApi.md#getDMSUsingPOST) | **POST** /base/apitools/getDMS | receiving events
[**sendDMSMediaUsingGET**](TwitterDmsApiToolsApi.md#sendDMSMediaUsingGET) | **GET** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**sendDMSMediaUsingPOST**](TwitterDmsApiToolsApi.md#sendDMSMediaUsingPOST) | **POST** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**sendDMSUsingGET**](TwitterDmsApiToolsApi.md#sendDMSUsingGET) | **GET** /base/apitools/sendDMS | sendDMS events.
[**sendDMSUsingPOST**](TwitterDmsApiToolsApi.md#sendDMSUsingPOST) | **POST** /base/apitools/sendDMS | sendDMS events.
[**uploadMediaDMUsingGET**](TwitterDmsApiToolsApi.md#uploadMediaDMUsingGET) | **GET** /base/apitools/uploadMediaDM | upload media for DM 
[**uploadMediaDMUsingPOST**](TwitterDmsApiToolsApi.md#uploadMediaDMUsingPOST) | **POST** /base/apitools/uploadMediaDM | upload media for DM 


<a name="getDMSListV2UsingGET"></a>
# **getDMSListV2UsingGET**
> ResultT getDMSListV2UsingGET(apiKey, authToken, ct0, cursor)

get DMS List

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.getDMSListV2UsingGET(apiKey, authToken, ct0, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#getDMSListV2UsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getDMSListV2UsingPOST"></a>
# **getDMSListV2UsingPOST**
> ResultT getDMSListV2UsingPOST(apiKey, authToken, ct0, cursor)

get DMS List

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.getDMSListV2UsingPOST(apiKey, authToken, ct0, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#getDMSListV2UsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **String**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getDMSUsingGET"></a>
# **getDMSUsingGET**
> ResultT getDMSUsingGET(apiKey, authToken, ct0, id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "id_example"; // String | 
try {
    ResultT result = apiInstance.getDMSUsingGET(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#getDMSUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  |

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getDMSUsingPOST"></a>
# **getDMSUsingPOST**
> ResultT getDMSUsingPOST(apiKey, authToken, ct0, id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String id = "id_example"; // String | 
try {
    ResultT result = apiInstance.getDMSUsingPOST(apiKey, authToken, ct0, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#getDMSUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **String**|  |

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendDMSMediaUsingGET"></a>
# **sendDMSMediaUsingGET**
> ResultT sendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String attachmentMediaId = "attachmentMediaId_example"; // String | 
String attachmentType = "media"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String recipientId = "recipientId_example"; // String | 
String text = "(This message is sent by the best api tools twitter.utools.me)"; // String | 
String type = "message_create"; // String | 
String quickReplyType = "quickReplyType_example"; // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
try {
    ResultT result = apiInstance.sendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#sendDMSMediaUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **attachmentMediaId** | **String**|  |
 **attachmentType** | **String**|  | [default to media]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **String**|  |
 **text** | **String**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **String**|  | [default to message_create]
 **quickReplyType** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendDMSMediaUsingPOST"></a>
# **sendDMSMediaUsingPOST**
> ResultT sendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String attachmentMediaId = "attachmentMediaId_example"; // String | 
String attachmentType = "media"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String recipientId = "recipientId_example"; // String | 
String text = "(This message is sent by the best api tools twitter.utools.me)"; // String | 
String type = "message_create"; // String | 
String quickReplyType = "quickReplyType_example"; // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
try {
    ResultT result = apiInstance.sendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, quickReplyType);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#sendDMSMediaUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **attachmentMediaId** | **String**|  |
 **attachmentType** | **String**|  | [default to media]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **String**|  |
 **text** | **String**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **String**|  | [default to message_create]
 **quickReplyType** | **String**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendDMSUsingGET"></a>
# **sendDMSUsingGET**
> ResultT sendDMSUsingGET(apiKey, authToken, ct0, recipientId, text, type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String recipientId = "recipientId_example"; // String | 
String text = "text_example"; // String | 
String type = "message_create"; // String | 
try {
    ResultT result = apiInstance.sendDMSUsingGET(apiKey, authToken, ct0, recipientId, text, type);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#sendDMSUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **String**|  |
 **text** | **String**|  |
 **type** | **String**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendDMSUsingPOST"></a>
# **sendDMSUsingPOST**
> ResultT sendDMSUsingPOST(apiKey, authToken, ct0, recipientId, text, type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event&lt;br&gt;  how to get &lt;b&gt;auth_token and ct0&lt;/b&gt;? &lt;br&gt; https://twitter.com/chen22218/status/1722138510680043555 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String recipientId = "recipientId_example"; // String | 
String text = "text_example"; // String | 
String type = "message_create"; // String | 
try {
    ResultT result = apiInstance.sendDMSUsingPOST(apiKey, authToken, ct0, recipientId, text, type);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#sendDMSUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipientId** | **String**|  |
 **text** | **String**|  |
 **type** | **String**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="uploadMediaDMUsingGET"></a>
# **uploadMediaDMUsingGET**
> ResultT uploadMediaDMUsingGET(apiKey, authToken, ct0, file)

upload media for DM 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
File file = new File("/path/to/file.txt"); // File | file
try {
    ResultT result = apiInstance.uploadMediaDMUsingGET(apiKey, authToken, ct0, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#uploadMediaDMUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **File**| file |

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

<a name="uploadMediaDMUsingPOST"></a>
# **uploadMediaDMUsingPOST**
> ResultT uploadMediaDMUsingPOST(apiKey, authToken, ct0, file)

upload media for DM 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterDmsApiToolsApi;


TwitterDmsApiToolsApi apiInstance = new TwitterDmsApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
File file = new File("/path/to/file.txt"); // File | file
try {
    ResultT result = apiInstance.uploadMediaDMUsingPOST(apiKey, authToken, ct0, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterDmsApiToolsApi#uploadMediaDMUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **File**| file |

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

