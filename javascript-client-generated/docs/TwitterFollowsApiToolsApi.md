# UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi

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


<a name="blueVerifiedFollowersV2UsingGET"></a>
# **blueVerifiedFollowersV2UsingGET**
> ResultT blueVerifiedFollowersV2UsingGET(apiKey, userId, opts)

get blueVerifiedFollowers by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.blueVerifiedFollowersV2UsingGET(apiKey, userId, opts, callback);
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

<a name="blueVerifiedFollowersV2UsingPOST"></a>
# **blueVerifiedFollowersV2UsingPOST**
> ResultT blueVerifiedFollowersV2UsingPOST(apiKey, userId, opts)

get blueVerifiedFollowers by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.blueVerifiedFollowersV2UsingPOST(apiKey, userId, opts, callback);
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

<a name="followUsingGET"></a>
# **followUsingGET**
> ResultT followUsingGET(apiKey, authToken, ct0, opts)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followUsingGET(apiKey, authToken, ct0, opts, callback);
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

<a name="followUsingPOST"></a>
# **followUsingPOST**
> ResultT followUsingPOST(apiKey, authToken, ct0, opts)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followUsingPOST(apiKey, authToken, ct0, opts, callback);
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

<a name="followersIdsUsingGET"></a>
# **followersIdsUsingGET**
> ResultT followersIdsUsingGET(apiKey, opts)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followersIdsUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="followersIdsUsingPOST"></a>
# **followersIdsUsingPOST**
> ResultT followersIdsUsingPOST(apiKey, opts)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followersIdsUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="followersListUsingGET"></a>
# **followersListUsingGET**
> ResultT followersListUsingGET(apiKey, opts)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followersListUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="followersListUsingPOST"></a>
# **followersListUsingPOST**
> ResultT followersListUsingPOST(apiKey, opts)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followersListUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="followersListV2UsingGET"></a>
# **followersListV2UsingGET**
> ResultT followersListV2UsingGET(apiKey, userId, opts)

get followersList by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followersListV2UsingGET(apiKey, userId, opts, callback);
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

<a name="followersListV2UsingPOST"></a>
# **followersListV2UsingPOST**
> ResultT followersListV2UsingPOST(apiKey, userId, opts)

get followersList by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followersListV2UsingPOST(apiKey, userId, opts, callback);
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

<a name="followingsIdsUsingGET"></a>
# **followingsIdsUsingGET**
> ResultT followingsIdsUsingGET(apiKey, opts)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followingsIdsUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="followingsIdsUsingPOST"></a>
# **followingsIdsUsingPOST**
> ResultT followingsIdsUsingPOST(apiKey, opts)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followingsIdsUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="followingsListUsingGET"></a>
# **followingsListUsingGET**
> ResultT followingsListUsingGET(apiKey, opts)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followingsListUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="followingsListUsingPOST"></a>
# **followingsListUsingPOST**
> ResultT followingsListUsingPOST(apiKey, opts)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'cursor': "-1", // String | 
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
apiInstance.followingsListUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **cursor** | **String**|  | [optional] [default to -1]
 **screenName** | **String**|  | [optional] [default to elonmusk]
 **userId** | **String**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="followingsListV2UsingGET"></a>
# **followingsListV2UsingGET**
> ResultT followingsListV2UsingGET(apiKey, userId, opts)

get followingsList by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followingsListV2UsingGET(apiKey, userId, opts, callback);
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

<a name="followingsListV2UsingPOST"></a>
# **followingsListV2UsingPOST**
> ResultT followingsListV2UsingPOST(apiKey, userId, opts)

get followingsList by V2 

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.followingsListV2UsingPOST(apiKey, userId, opts, callback);
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

<a name="getFriendshipsShowUsingGET"></a>
# **getFriendshipsShowUsingGET**
> ResultT getFriendshipsShowUsingGET(apiKey, opts)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'sourceId': "1574242047661207552", // String | 
  'sourceScreenName': "sourceScreenName_example", // String | 
  'targetId': "1620357967962058752", // String | 
  'targetScreenName': "targetScreenName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFriendshipsShowUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **sourceId** | **String**|  | [optional] [default to 1574242047661207552]
 **sourceScreenName** | **String**|  | [optional] 
 **targetId** | **String**|  | [optional] [default to 1620357967962058752]
 **targetScreenName** | **String**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getFriendshipsShowUsingPOST"></a>
# **getFriendshipsShowUsingPOST**
> ResultT getFriendshipsShowUsingPOST(apiKey, opts)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

var apiKey = "your own apikey"; // String | 

var opts = { 
  'sourceId': "1574242047661207552", // String | 
  'sourceScreenName': "sourceScreenName_example", // String | 
  'targetId': "1620357967962058752", // String | 
  'targetScreenName': "targetScreenName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFriendshipsShowUsingPOST(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | [default to your own apikey]
 **sourceId** | **String**|  | [optional] [default to 1574242047661207552]
 **sourceScreenName** | **String**|  | [optional] 
 **targetId** | **String**|  | [optional] [default to 1620357967962058752]
 **targetScreenName** | **String**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="unfollowUsingGET"></a>
# **unfollowUsingGET**
> ResultT unfollowUsingGET(apiKey, authToken, ct0, opts)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.unfollowUsingGET(apiKey, authToken, ct0, opts, callback);
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

<a name="unfollowUsingPOST"></a>
# **unfollowUsingPOST**
> ResultT unfollowUsingPOST(apiKey, authToken, ct0, opts)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```javascript
var UtoolsTwitterToolsApi = require('utools_twitter_tools_api');

var apiInstance = new UtoolsTwitterToolsApi.TwitterFollowsApiToolsApi();

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
apiInstance.unfollowUsingPOST(apiKey, authToken, ct0, opts, callback);
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

