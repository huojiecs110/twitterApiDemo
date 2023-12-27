# TwitterUsersApiToolsApi

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
> ResultT blocksCreateUsingGET(apiKey, authToken, ct0, screenName, userId)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String screenName = "screenName_example"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.blocksCreateUsingGET(apiKey, authToken, ct0, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#blocksCreateUsingGET");
    e.printStackTrace();
}
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
> ResultT blocksCreateUsingPOST(apiKey, authToken, ct0, screenName, userId)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String screenName = "screenName_example"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.blocksCreateUsingPOST(apiKey, authToken, ct0, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#blocksCreateUsingPOST");
    e.printStackTrace();
}
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
> ResultT blocksDestroyUsingGET(apiKey, authToken, ct0, screenName, userId)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String screenName = "screenName_example"; // String | 
String userId = "44196397"; // String | 
try {
    ResultT result = apiInstance.blocksDestroyUsingGET(apiKey, authToken, ct0, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#blocksDestroyUsingGET");
    e.printStackTrace();
}
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
> ResultT blocksDestroyUsingPOST(apiKey, authToken, ct0, screenName, userId)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555"; // String | 
String screenName = "screenName_example"; // String | 
String userId = "44196397"; // String | 
try {
    ResultT result = apiInstance.blocksDestroyUsingPOST(apiKey, authToken, ct0, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#blocksDestroyUsingPOST");
    e.printStackTrace();
}
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
> ResultT getListByUserIdOrScreenNameUsingGET(apiKey, screenName, userId)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getListByUserIdOrScreenNameUsingGET(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getListByUserIdOrScreenNameUsingGET");
    e.printStackTrace();
}
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
> ResultT getListByUserIdOrScreenNameUsingPOST(apiKey, screenName, userId)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getListByUserIdOrScreenNameUsingPOST(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getListByUserIdOrScreenNameUsingPOST");
    e.printStackTrace();
}
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
> ResultT getListMembersByListIdUsingGET(apiKey, listId, cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String listId = "1453837432479227913"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.getListMembersByListIdUsingGET(apiKey, listId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getListMembersByListIdUsingGET");
    e.printStackTrace();
}
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
> ResultT getListMembersByListIdUsingPOST(apiKey, listId, cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String listId = "1453837432479227913"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.getListMembersByListIdUsingPOST(apiKey, listId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getListMembersByListIdUsingPOST");
    e.printStackTrace();
}
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
> ResultT getUserByIdOrNameLookUpUsingGET(apiKey, screenName, userId)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getUserByIdOrNameLookUpUsingGET(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getUserByIdOrNameLookUpUsingGET");
    e.printStackTrace();
}
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
> ResultT getUserByIdOrNameLookUpUsingPOST(apiKey, screenName, userId)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getUserByIdOrNameLookUpUsingPOST(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getUserByIdOrNameLookUpUsingPOST");
    e.printStackTrace();
}
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
> ResultT getUserByIdOrNameShowUsingGET(apiKey, screenName, userId)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getUserByIdOrNameShowUsingGET(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getUserByIdOrNameShowUsingGET");
    e.printStackTrace();
}
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
> ResultT getUserByIdOrNameShowUsingPOST(apiKey, screenName, userId)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "elonmusk"; // String | 
String userId = "1574242047661207552"; // String | 
try {
    ResultT result = apiInstance.getUserByIdOrNameShowUsingPOST(apiKey, screenName, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#getUserByIdOrNameShowUsingPOST");
    e.printStackTrace();
}
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
> ResultT uerByIdRestIdV2UsingGET(apiKey, userId, cursor)

Get uerByIdRestId by V2

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.uerByIdRestIdV2UsingGET(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#uerByIdRestIdV2UsingGET");
    e.printStackTrace();
}
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
> ResultT uerByIdRestIdV2UsingPOST(apiKey, userId, cursor)

Get uerByIdRestId by V2

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.uerByIdRestIdV2UsingPOST(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#uerByIdRestIdV2UsingPOST");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "pWP5s7zypwvCwJp"; // String | 
try {
    ResultT result = apiInstance.userByScreenNameV2UsingGET(apiKey, screenName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userByScreenNameV2UsingGET");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String screenName = "pWP5s7zypwvCwJp"; // String | 
try {
    ResultT result = apiInstance.userByScreenNameV2UsingPOST(apiKey, screenName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userByScreenNameV2UsingPOST");
    e.printStackTrace();
}
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
> ResultT userTimelineUsingGET(apiKey, userId, cursor)

Get UserTimeline  tweets info

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.userTimelineUsingGET(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userTimelineUsingGET");
    e.printStackTrace();
}
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
> ResultT userTimelineUsingPOST(apiKey, userId, cursor)

Get UserTimeline  tweets info

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.userTimelineUsingPOST(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userTimelineUsingPOST");
    e.printStackTrace();
}
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
> ResultT userTweetsV2UsingGET(apiKey, userId, cursor)

Get UserTweets by V2

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.userTweetsV2UsingGET(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userTweetsV2UsingGET");
    e.printStackTrace();
}
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
> ResultT userTweetsV2UsingPOST(apiKey, userId, cursor)

Get UserTweets by V2

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TwitterUsersApiToolsApi;


TwitterUsersApiToolsApi apiInstance = new TwitterUsersApiToolsApi();
String apiKey = "your own apikey"; // String | 
String userId = "1574242047661207552"; // String | 
String cursor = "-1"; // String | 
try {
    ResultT result = apiInstance.userTweetsV2UsingPOST(apiKey, userId, cursor);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TwitterUsersApiToolsApi#userTweetsV2UsingPOST");
    e.printStackTrace();
}
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

