# IO.Swagger.Api.TwitterUsersApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlocksCreateUsingGET**](TwitterUsersApiToolsApi.md#blockscreateusingget) | **GET** /base/apitools/blocksCreate | blocks Create
[**BlocksCreateUsingPOST**](TwitterUsersApiToolsApi.md#blockscreateusingpost) | **POST** /base/apitools/blocksCreate | blocks Create
[**BlocksDestroyUsingGET**](TwitterUsersApiToolsApi.md#blocksdestroyusingget) | **GET** /base/apitools/blocksDestroy | blocks Destroy
[**BlocksDestroyUsingPOST**](TwitterUsersApiToolsApi.md#blocksdestroyusingpost) | **POST** /base/apitools/blocksDestroy | blocks Destroy
[**GetListByUserIdOrScreenNameUsingGET**](TwitterUsersApiToolsApi.md#getlistbyuseridorscreennameusingget) | **GET** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**GetListByUserIdOrScreenNameUsingPOST**](TwitterUsersApiToolsApi.md#getlistbyuseridorscreennameusingpost) | **POST** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**GetListMembersByListIdUsingGET**](TwitterUsersApiToolsApi.md#getlistmembersbylistidusingget) | **GET** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**GetListMembersByListIdUsingPOST**](TwitterUsersApiToolsApi.md#getlistmembersbylistidusingpost) | **POST** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**GetUserByIdOrNameLookUpUsingGET**](TwitterUsersApiToolsApi.md#getuserbyidornamelookupusingget) | **GET** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**GetUserByIdOrNameLookUpUsingPOST**](TwitterUsersApiToolsApi.md#getuserbyidornamelookupusingpost) | **POST** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**GetUserByIdOrNameShowUsingGET**](TwitterUsersApiToolsApi.md#getuserbyidornameshowusingget) | **GET** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**GetUserByIdOrNameShowUsingPOST**](TwitterUsersApiToolsApi.md#getuserbyidornameshowusingpost) | **POST** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**UerByIdRestIdV2UsingGET**](TwitterUsersApiToolsApi.md#uerbyidrestidv2usingget) | **GET** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**UerByIdRestIdV2UsingPOST**](TwitterUsersApiToolsApi.md#uerbyidrestidv2usingpost) | **POST** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**UserByScreenNameV2UsingGET**](TwitterUsersApiToolsApi.md#userbyscreennamev2usingget) | **GET** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**UserByScreenNameV2UsingPOST**](TwitterUsersApiToolsApi.md#userbyscreennamev2usingpost) | **POST** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**UserTimelineUsingGET**](TwitterUsersApiToolsApi.md#usertimelineusingget) | **GET** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**UserTimelineUsingPOST**](TwitterUsersApiToolsApi.md#usertimelineusingpost) | **POST** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**UserTweetsV2UsingGET**](TwitterUsersApiToolsApi.md#usertweetsv2usingget) | **GET** /base/apitools/userTweetsV2 | Get UserTweets by V2
[**UserTweetsV2UsingPOST**](TwitterUsersApiToolsApi.md#usertweetsv2usingpost) | **POST** /base/apitools/userTweetsV2 | Get UserTweets by V2


<a name="blockscreateusingget"></a>
# **BlocksCreateUsingGET**
> ResultT BlocksCreateUsingGET (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlocksCreateUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // blocks Create
                ResultT result = apiInstance.BlocksCreateUsingGET(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.BlocksCreateUsingGET: " + e.Message );
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
 **screenName** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="blockscreateusingpost"></a>
# **BlocksCreateUsingPOST**
> ResultT BlocksCreateUsingPOST (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlocksCreateUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // blocks Create
                ResultT result = apiInstance.BlocksCreateUsingPOST(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.BlocksCreateUsingPOST: " + e.Message );
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
 **screenName** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="blocksdestroyusingget"></a>
# **BlocksDestroyUsingGET**
> ResultT BlocksDestroyUsingGET (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlocksDestroyUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 44196397)

            try
            {
                // blocks Destroy
                ResultT result = apiInstance.BlocksDestroyUsingGET(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.BlocksDestroyUsingGET: " + e.Message );
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
 **screenName** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="blocksdestroyusingpost"></a>
# **BlocksDestroyUsingPOST**
> ResultT BlocksDestroyUsingPOST (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlocksDestroyUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 44196397)

            try
            {
                // blocks Destroy
                ResultT result = apiInstance.BlocksDestroyUsingPOST(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.BlocksDestroyUsingPOST: " + e.Message );
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
 **screenName** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistbyuseridorscreennameusingget"></a>
# **GetListByUserIdOrScreenNameUsingGET**
> ResultT GetListByUserIdOrScreenNameUsingGET (string apiKey, string screenName = null, string userId = null)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetListByUserIdOrScreenNameUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get List by user_id or screen_name(get-lists-list)
                ResultT result = apiInstance.GetListByUserIdOrScreenNameUsingGET(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetListByUserIdOrScreenNameUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistbyuseridorscreennameusingpost"></a>
# **GetListByUserIdOrScreenNameUsingPOST**
> ResultT GetListByUserIdOrScreenNameUsingPOST (string apiKey, string screenName = null, string userId = null)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetListByUserIdOrScreenNameUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get List by user_id or screen_name(get-lists-list)
                ResultT result = apiInstance.GetListByUserIdOrScreenNameUsingPOST(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetListByUserIdOrScreenNameUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistmembersbylistidusingget"></a>
# **GetListMembersByListIdUsingGET**
> ResultT GetListMembersByListIdUsingGET (string apiKey, string listId, string cursor = null)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetListMembersByListIdUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var listId = listId_example;  // string |  (default to 1453837432479227913)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get List Members By ListId (get-lists-members)
                ResultT result = apiInstance.GetListMembersByListIdUsingGET(apiKey, listId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetListMembersByListIdUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **listId** | **string**|  | [default to 1453837432479227913]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistmembersbylistidusingpost"></a>
# **GetListMembersByListIdUsingPOST**
> ResultT GetListMembersByListIdUsingPOST (string apiKey, string listId, string cursor = null)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetListMembersByListIdUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var listId = listId_example;  // string |  (default to 1453837432479227913)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get List Members By ListId (get-lists-members)
                ResultT result = apiInstance.GetListMembersByListIdUsingPOST(apiKey, listId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetListMembersByListIdUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **listId** | **string**|  | [default to 1453837432479227913]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getuserbyidornamelookupusingget"></a>
# **GetUserByIdOrNameLookUpUsingGET**
> ResultT GetUserByIdOrNameLookUpUsingGET (string apiKey, string screenName = null, string userId = null)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetUserByIdOrNameLookUpUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get user information based on username or id (lookup)
                ResultT result = apiInstance.GetUserByIdOrNameLookUpUsingGET(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetUserByIdOrNameLookUpUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getuserbyidornamelookupusingpost"></a>
# **GetUserByIdOrNameLookUpUsingPOST**
> ResultT GetUserByIdOrNameLookUpUsingPOST (string apiKey, string screenName = null, string userId = null)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetUserByIdOrNameLookUpUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get user information based on username or id (lookup)
                ResultT result = apiInstance.GetUserByIdOrNameLookUpUsingPOST(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetUserByIdOrNameLookUpUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getuserbyidornameshowusingget"></a>
# **GetUserByIdOrNameShowUsingGET**
> ResultT GetUserByIdOrNameShowUsingGET (string apiKey, string screenName = null, string userId = null)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetUserByIdOrNameShowUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get user information based on username or id (show)
                ResultT result = apiInstance.GetUserByIdOrNameShowUsingGET(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetUserByIdOrNameShowUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getuserbyidornameshowusingpost"></a>
# **GetUserByIdOrNameShowUsingPOST**
> ResultT GetUserByIdOrNameShowUsingPOST (string apiKey, string screenName = null, string userId = null)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetUserByIdOrNameShowUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get user information based on username or id (show)
                ResultT result = apiInstance.GetUserByIdOrNameShowUsingPOST(apiKey, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.GetUserByIdOrNameShowUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [optional] [default to elonmusk]
 **userId** | **string**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uerbyidrestidv2usingget"></a>
# **UerByIdRestIdV2UsingGET**
> ResultT UerByIdRestIdV2UsingGET (string apiKey, string userId, string cursor = null)

Get uerByIdRestId by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UerByIdRestIdV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get uerByIdRestId by V2
                ResultT result = apiInstance.UerByIdRestIdV2UsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UerByIdRestIdV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uerbyidrestidv2usingpost"></a>
# **UerByIdRestIdV2UsingPOST**
> ResultT UerByIdRestIdV2UsingPOST (string apiKey, string userId, string cursor = null)

Get uerByIdRestId by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UerByIdRestIdV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get uerByIdRestId by V2
                ResultT result = apiInstance.UerByIdRestIdV2UsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UerByIdRestIdV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="userbyscreennamev2usingget"></a>
# **UserByScreenNameV2UsingGET**
> ResultT UserByScreenNameV2UsingGET (string apiKey, string screenName)

Get userByScreenName by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserByScreenNameV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (default to pWP5s7zypwvCwJp)

            try
            {
                // Get userByScreenName by V2
                ResultT result = apiInstance.UserByScreenNameV2UsingGET(apiKey, screenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserByScreenNameV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="userbyscreennamev2usingpost"></a>
# **UserByScreenNameV2UsingPOST**
> ResultT UserByScreenNameV2UsingPOST (string apiKey, string screenName)

Get userByScreenName by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserByScreenNameV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var screenName = screenName_example;  // string |  (default to pWP5s7zypwvCwJp)

            try
            {
                // Get userByScreenName by V2
                ResultT result = apiInstance.UserByScreenNameV2UsingPOST(apiKey, screenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserByScreenNameV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **screenName** | **string**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertimelineusingget"></a>
# **UserTimelineUsingGET**
> ResultT UserTimelineUsingGET (string apiKey, string userId, string cursor = null)

Get UserTimeline  tweets info

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTimelineUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get UserTimeline  tweets info
                ResultT result = apiInstance.UserTimelineUsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserTimelineUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertimelineusingpost"></a>
# **UserTimelineUsingPOST**
> ResultT UserTimelineUsingPOST (string apiKey, string userId, string cursor = null)

Get UserTimeline  tweets info

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTimelineUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get UserTimeline  tweets info
                ResultT result = apiInstance.UserTimelineUsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserTimelineUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertweetsv2usingget"></a>
# **UserTweetsV2UsingGET**
> ResultT UserTweetsV2UsingGET (string apiKey, string userId, string cursor = null)

Get UserTweets by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTweetsV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get UserTweets by V2
                ResultT result = apiInstance.UserTweetsV2UsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserTweetsV2UsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usertweetsv2usingpost"></a>
# **UserTweetsV2UsingPOST**
> ResultT UserTweetsV2UsingPOST (string apiKey, string userId, string cursor = null)

Get UserTweets by V2

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserTweetsV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterUsersApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // Get UserTweets by V2
                ResultT result = apiInstance.UserTweetsV2UsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterUsersApiToolsApi.UserTweetsV2UsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **userId** | **string**|  | [default to 1574242047661207552]
 **cursor** | **string**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

