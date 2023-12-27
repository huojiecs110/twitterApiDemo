# UtoolsTwitterToolsApi.TwitterUsersApiToolsApi

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


<a name="blocksCreateUsingGET"></a>
# **blocksCreateUsingGET**
> ResultT blocksCreateUsingGET(apiKey, authToken, ct0, opts)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'screenName': "screenName_example", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blocksCreateUsingGET(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screenName** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="blocksCreateUsingPOST"></a>
# **blocksCreateUsingPOST**
> ResultT blocksCreateUsingPOST(apiKey, authToken, ct0, opts)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'screenName': "screenName_example", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blocksCreateUsingPOST(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screenName** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="blocksDestroyUsingGET"></a>
# **blocksDestroyUsingGET**
> ResultT blocksDestroyUsingGET(apiKey, authToken, ct0, opts)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'screenName': "screenName_example", // String | 
  'userId': "44196397" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blocksDestroyUsingGET(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screenName** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="blocksDestroyUsingPOST"></a>
# **blocksDestroyUsingPOST**
> ResultT blocksDestroyUsingPOST(apiKey, authToken, ct0, opts)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 

var opts = { 
  'screenName': "screenName_example", // String | 
  'userId': "44196397" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blocksDestroyUsingPOST(apiKey, authToken, ct0, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **authToken** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **String**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screenName** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getListByUserIdOrScreenNameUsingGET"></a>
# **getListByUserIdOrScreenNameUsingGET**
> ResultT getListByUserIdOrScreenNameUsingGET(apiKey, opts)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListByUserIdOrScreenNameUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getListByUserIdOrScreenNameUsingPOST"></a>
# **getListByUserIdOrScreenNameUsingPOST**
> ResultT getListByUserIdOrScreenNameUsingPOST(apiKey, opts)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListByUserIdOrScreenNameUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getListMembersByListIdUsingGET"></a>
# **getListMembersByListIdUsingGET**
> ResultT getListMembersByListIdUsingGET(apiKey, listId, opts)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var listId = "1453837432479227913"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListMembersByListIdUsingGET(apiKey, listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **listId** | **String**|  | [default to 1453837432479227913]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getListMembersByListIdUsingPOST"></a>
# **getListMembersByListIdUsingPOST**
> ResultT getListMembersByListIdUsingPOST(apiKey, listId, opts)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var listId = "1453837432479227913"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListMembersByListIdUsingPOST(apiKey, listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **listId** | **String**|  | [default to 1453837432479227913]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserByIdOrNameLookUpUsingGET"></a>
# **getUserByIdOrNameLookUpUsingGET**
> ResultT getUserByIdOrNameLookUpUsingGET(apiKey, opts)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByIdOrNameLookUpUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUserByIdOrNameLookUpUsingPOST"></a>
# **getUserByIdOrNameLookUpUsingPOST**
> ResultT getUserByIdOrNameLookUpUsingPOST(apiKey, opts)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByIdOrNameLookUpUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserByIdOrNameShowUsingGET"></a>
# **getUserByIdOrNameShowUsingGET**
> ResultT getUserByIdOrNameShowUsingGET(apiKey, opts)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByIdOrNameShowUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUserByIdOrNameShowUsingPOST"></a>
# **getUserByIdOrNameShowUsingPOST**
> ResultT getUserByIdOrNameShowUsingPOST(apiKey, opts)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'screenName': "elonmusk", // String | 
  'userId': "1574242047661207552" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByIdOrNameShowUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="uerByIdRestIdV2UsingGET"></a>
# **uerByIdRestIdV2UsingGET**
> ResultT uerByIdRestIdV2UsingGET(apiKey, userId, opts)

Get uerByIdRestId by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uerByIdRestIdV2UsingGET(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="uerByIdRestIdV2UsingPOST"></a>
# **uerByIdRestIdV2UsingPOST**
> ResultT uerByIdRestIdV2UsingPOST(apiKey, userId, opts)

Get uerByIdRestId by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uerByIdRestIdV2UsingPOST(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userByScreenNameV2UsingGET"></a>
# **userByScreenNameV2UsingGET**
> ResultT userByScreenNameV2UsingGET(apiKey, screenName)

Get userByScreenName by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var screenName = "pWP5s7zypwvCwJp"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userByScreenNameV2UsingGET(apiKey, screenName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="userByScreenNameV2UsingPOST"></a>
# **userByScreenNameV2UsingPOST**
> ResultT userByScreenNameV2UsingPOST(apiKey, screenName)

Get userByScreenName by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var screenName = "pWP5s7zypwvCwJp"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userByScreenNameV2UsingPOST(apiKey, screenName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **screenName** | **String**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userTimelineUsingGET"></a>
# **userTimelineUsingGET**
> ResultT userTimelineUsingGET(apiKey, userId, opts)

Get UserTimeline  tweets info

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTimelineUsingGET(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="userTimelineUsingPOST"></a>
# **userTimelineUsingPOST**
> ResultT userTimelineUsingPOST(apiKey, userId, opts)

Get UserTimeline  tweets info

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTimelineUsingPOST(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userTweetsV2UsingGET"></a>
# **userTweetsV2UsingGET**
> ResultT userTweetsV2UsingGET(apiKey, userId, opts)

Get UserTweets by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTweetsV2UsingGET(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="userTweetsV2UsingPOST"></a>
# **userTweetsV2UsingPOST**
> ResultT userTweetsV2UsingPOST(apiKey, userId, opts)

Get UserTweets by V2

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();

var apiKey = "your own apikey"; // String | 

var userId = "1574242047661207552"; // String | 

var opts = { 
  'cursor': "-1" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTweetsV2UsingPOST(apiKey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **userId** | **String**|  | [default to 1574242047661207552]
 **cursor** | **String**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

