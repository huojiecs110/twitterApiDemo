# UtoolsTwitterToolsApi.TwitterDMSApiToolsApi

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


<a name="getDMSListV2UsingGET"></a>
# **getDMSListV2UsingGET**
> ResultT getDMSListV2UsingGET(apiKey, authToken, ct0, cursor)

get DMS List

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var cursor = "-1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDMSListV2UsingGET(apiKey, authToken, ct0, cursor, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var cursor = "-1"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDMSListV2UsingPOST(apiKey, authToken, ct0, cursor, callback);
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

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDMSUsingGET(apiKey, authToken, ct0, id, callback);
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

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDMSUsingPOST(apiKey, authToken, ct0, id, callback);
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
> ResultT sendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var attachmentMediaId = "attachmentMediaId_example"; // String | 

var attachmentType = "media"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var recipientId = "recipientId_example"; // String | 

var text = "(This message is sent by the best api tools twitter.utools.me)"; // String | 

var type = "message_create"; // String | 

var opts = { 
  'quickReplyType': "quickReplyType_example" // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts, callback);
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
> ResultT sendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var attachmentMediaId = "attachmentMediaId_example"; // String | 

var attachmentType = "media"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var recipientId = "recipientId_example"; // String | 

var text = "(This message is sent by the best api tools twitter.utools.me)"; // String | 

var type = "message_create"; // String | 

var opts = { 
  'quickReplyType': "quickReplyType_example" // String | Returns results with an ID less than (that is, older than) or equal to the specified ID.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts, callback);
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

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var recipientId = "recipientId_example"; // String | 

var text = "text_example"; // String | 

var type = "message_create"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendDMSUsingGET(apiKey, authToken, ct0, recipientId, text, type, callback);
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

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var recipientId = "recipientId_example"; // String | 

var text = "text_example"; // String | 

var type = "message_create"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendDMSUsingPOST(apiKey, authToken, ct0, recipientId, text, type, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMediaDMUsingGET(apiKey, authToken, ct0, file, callback);
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
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMediaDMUsingPOST(apiKey, authToken, ct0, file, callback);
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

