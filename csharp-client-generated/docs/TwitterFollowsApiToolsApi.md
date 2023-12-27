# IO.Swagger.Api.TwitterFollowsApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlueVerifiedFollowersV2UsingGET**](TwitterFollowsApiToolsApi.md#blueverifiedfollowersv2usingget) | **GET** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**BlueVerifiedFollowersV2UsingPOST**](TwitterFollowsApiToolsApi.md#blueverifiedfollowersv2usingpost) | **POST** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**FollowUsingGET**](TwitterFollowsApiToolsApi.md#followusingget) | **GET** /base/apitools/follow | to follow 
[**FollowUsingPOST**](TwitterFollowsApiToolsApi.md#followusingpost) | **POST** /base/apitools/follow | to follow 
[**FollowersIdsUsingGET**](TwitterFollowsApiToolsApi.md#followersidsusingget) | **GET** /base/apitools/followersIds | Get Followers Ids
[**FollowersIdsUsingPOST**](TwitterFollowsApiToolsApi.md#followersidsusingpost) | **POST** /base/apitools/followersIds | Get Followers Ids
[**FollowersListUsingGET**](TwitterFollowsApiToolsApi.md#followerslistusingget) | **GET** /base/apitools/followersList | Get Followers User Collection
[**FollowersListUsingPOST**](TwitterFollowsApiToolsApi.md#followerslistusingpost) | **POST** /base/apitools/followersList | Get Followers User Collection
[**FollowersListV2UsingGET**](TwitterFollowsApiToolsApi.md#followerslistv2usingget) | **GET** /base/apitools/followersListV2 | get followersList by V2 
[**FollowersListV2UsingPOST**](TwitterFollowsApiToolsApi.md#followerslistv2usingpost) | **POST** /base/apitools/followersListV2 | get followersList by V2 
[**FollowingsIdsUsingGET**](TwitterFollowsApiToolsApi.md#followingsidsusingget) | **GET** /base/apitools/followingsIds | Get Followings Ids
[**FollowingsIdsUsingPOST**](TwitterFollowsApiToolsApi.md#followingsidsusingpost) | **POST** /base/apitools/followingsIds | Get Followings Ids
[**FollowingsListUsingGET**](TwitterFollowsApiToolsApi.md#followingslistusingget) | **GET** /base/apitools/followingsList | Get Followings User Collection
[**FollowingsListUsingPOST**](TwitterFollowsApiToolsApi.md#followingslistusingpost) | **POST** /base/apitools/followingsList | Get Followings User Collection
[**FollowingsListV2UsingGET**](TwitterFollowsApiToolsApi.md#followingslistv2usingget) | **GET** /base/apitools/followingsListV2 | get followingsList by V2 
[**FollowingsListV2UsingPOST**](TwitterFollowsApiToolsApi.md#followingslistv2usingpost) | **POST** /base/apitools/followingsListV2 | get followingsList by V2 
[**GetFriendshipsShowUsingGET**](TwitterFollowsApiToolsApi.md#getfriendshipsshowusingget) | **GET** /base/apitools/friendshipsShow | Get relationship information between two users
[**GetFriendshipsShowUsingPOST**](TwitterFollowsApiToolsApi.md#getfriendshipsshowusingpost) | **POST** /base/apitools/friendshipsShow | Get relationship information between two users
[**UnfollowUsingGET**](TwitterFollowsApiToolsApi.md#unfollowusingget) | **GET** /base/apitools/unfollow | to unfollow 
[**UnfollowUsingPOST**](TwitterFollowsApiToolsApi.md#unfollowusingpost) | **POST** /base/apitools/unfollow | to unfollow 


<a name="blueverifiedfollowersv2usingget"></a>
# **BlueVerifiedFollowersV2UsingGET**
> ResultT BlueVerifiedFollowersV2UsingGET (string apiKey, string userId, string cursor = null)

get blueVerifiedFollowers by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlueVerifiedFollowersV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get blueVerifiedFollowers by V2 
                ResultT result = apiInstance.BlueVerifiedFollowersV2UsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.BlueVerifiedFollowersV2UsingGET: " + e.Message );
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

<a name="blueverifiedfollowersv2usingpost"></a>
# **BlueVerifiedFollowersV2UsingPOST**
> ResultT BlueVerifiedFollowersV2UsingPOST (string apiKey, string userId, string cursor = null)

get blueVerifiedFollowers by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlueVerifiedFollowersV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get blueVerifiedFollowers by V2 
                ResultT result = apiInstance.BlueVerifiedFollowersV2UsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.BlueVerifiedFollowersV2UsingPOST: " + e.Message );
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

<a name="followusingget"></a>
# **FollowUsingGET**
> ResultT FollowUsingGET (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // to follow 
                ResultT result = apiInstance.FollowUsingGET(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowUsingGET: " + e.Message );
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

<a name="followusingpost"></a>
# **FollowUsingPOST**
> ResultT FollowUsingPOST (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // to follow 
                ResultT result = apiInstance.FollowUsingPOST(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowUsingPOST: " + e.Message );
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

<a name="followersidsusingget"></a>
# **FollowersIdsUsingGET**
> ResultT FollowersIdsUsingGET (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersIdsUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followers Ids
                ResultT result = apiInstance.FollowersIdsUsingGET(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersIdsUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followersidsusingpost"></a>
# **FollowersIdsUsingPOST**
> ResultT FollowersIdsUsingPOST (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersIdsUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followers Ids
                ResultT result = apiInstance.FollowersIdsUsingPOST(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersIdsUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followerslistusingget"></a>
# **FollowersListUsingGET**
> ResultT FollowersListUsingGET (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersListUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followers User Collection
                ResultT result = apiInstance.FollowersListUsingGET(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersListUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followerslistusingpost"></a>
# **FollowersListUsingPOST**
> ResultT FollowersListUsingPOST (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersListUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followers User Collection
                ResultT result = apiInstance.FollowersListUsingPOST(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersListUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followerslistv2usingget"></a>
# **FollowersListV2UsingGET**
> ResultT FollowersListV2UsingGET (string apiKey, string userId, string cursor = null)

get followersList by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersListV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get followersList by V2 
                ResultT result = apiInstance.FollowersListV2UsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersListV2UsingGET: " + e.Message );
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

<a name="followerslistv2usingpost"></a>
# **FollowersListV2UsingPOST**
> ResultT FollowersListV2UsingPOST (string apiKey, string userId, string cursor = null)

get followersList by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowersListV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get followersList by V2 
                ResultT result = apiInstance.FollowersListV2UsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowersListV2UsingPOST: " + e.Message );
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

<a name="followingsidsusingget"></a>
# **FollowingsIdsUsingGET**
> ResultT FollowingsIdsUsingGET (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsIdsUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followings Ids
                ResultT result = apiInstance.FollowingsIdsUsingGET(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsIdsUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followingsidsusingpost"></a>
# **FollowingsIdsUsingPOST**
> ResultT FollowingsIdsUsingPOST (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsIdsUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followings Ids
                ResultT result = apiInstance.FollowingsIdsUsingPOST(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsIdsUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followingslistusingget"></a>
# **FollowingsListUsingGET**
> ResultT FollowingsListUsingGET (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsListUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followings User Collection
                ResultT result = apiInstance.FollowingsListUsingGET(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsListUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followingslistusingpost"></a>
# **FollowingsListUsingPOST**
> ResultT FollowingsListUsingPOST (string apiKey, string cursor = null, string screenName = null, string userId = null)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsListUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)
            var screenName = screenName_example;  // string |  (optional)  (default to elonmusk)
            var userId = userId_example;  // string |  (optional)  (default to 1574242047661207552)

            try
            {
                // Get Followings User Collection
                ResultT result = apiInstance.FollowingsListUsingPOST(apiKey, cursor, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsListUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **cursor** | **string**|  | [optional] [default to -1]
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

<a name="followingslistv2usingget"></a>
# **FollowingsListV2UsingGET**
> ResultT FollowingsListV2UsingGET (string apiKey, string userId, string cursor = null)

get followingsList by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsListV2UsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get followingsList by V2 
                ResultT result = apiInstance.FollowingsListV2UsingGET(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsListV2UsingGET: " + e.Message );
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

<a name="followingslistv2usingpost"></a>
# **FollowingsListV2UsingPOST**
> ResultT FollowingsListV2UsingPOST (string apiKey, string userId, string cursor = null)

get followingsList by V2 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FollowingsListV2UsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var userId = userId_example;  // string |  (default to 1574242047661207552)
            var cursor = cursor_example;  // string |  (optional)  (default to -1)

            try
            {
                // get followingsList by V2 
                ResultT result = apiInstance.FollowingsListV2UsingPOST(apiKey, userId, cursor);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.FollowingsListV2UsingPOST: " + e.Message );
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

<a name="getfriendshipsshowusingget"></a>
# **GetFriendshipsShowUsingGET**
> ResultT GetFriendshipsShowUsingGET (string apiKey, string sourceId = null, string sourceScreenName = null, string targetId = null, string targetScreenName = null)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetFriendshipsShowUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var sourceId = sourceId_example;  // string |  (optional)  (default to 1574242047661207552)
            var sourceScreenName = sourceScreenName_example;  // string |  (optional) 
            var targetId = targetId_example;  // string |  (optional)  (default to 1620357967962058752)
            var targetScreenName = targetScreenName_example;  // string |  (optional) 

            try
            {
                // Get relationship information between two users
                ResultT result = apiInstance.GetFriendshipsShowUsingGET(apiKey, sourceId, sourceScreenName, targetId, targetScreenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.GetFriendshipsShowUsingGET: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **sourceId** | **string**|  | [optional] [default to 1574242047661207552]
 **sourceScreenName** | **string**|  | [optional] 
 **targetId** | **string**|  | [optional] [default to 1620357967962058752]
 **targetScreenName** | **string**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getfriendshipsshowusingpost"></a>
# **GetFriendshipsShowUsingPOST**
> ResultT GetFriendshipsShowUsingPOST (string apiKey, string sourceId = null, string sourceScreenName = null, string targetId = null, string targetScreenName = null)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetFriendshipsShowUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var sourceId = sourceId_example;  // string |  (optional)  (default to 1574242047661207552)
            var sourceScreenName = sourceScreenName_example;  // string |  (optional) 
            var targetId = targetId_example;  // string |  (optional)  (default to 1620357967962058752)
            var targetScreenName = targetScreenName_example;  // string |  (optional) 

            try
            {
                // Get relationship information between two users
                ResultT result = apiInstance.GetFriendshipsShowUsingPOST(apiKey, sourceId, sourceScreenName, targetId, targetScreenName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.GetFriendshipsShowUsingPOST: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **string**|  | [default to your own apikey]
 **sourceId** | **string**|  | [optional] [default to 1574242047661207552]
 **sourceScreenName** | **string**|  | [optional] 
 **targetId** | **string**|  | [optional] [default to 1620357967962058752]
 **targetScreenName** | **string**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unfollowusingget"></a>
# **UnfollowUsingGET**
> ResultT UnfollowUsingGET (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UnfollowUsingGETExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 44196397)

            try
            {
                // to unfollow 
                ResultT result = apiInstance.UnfollowUsingGET(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.UnfollowUsingGET: " + e.Message );
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

<a name="unfollowusingpost"></a>
# **UnfollowUsingPOST**
> ResultT UnfollowUsingPOST (string apiKey, string authToken, string ct0, string screenName = null, string userId = null)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UnfollowUsingPOSTExample
    {
        public void main()
        {
            var apiInstance = new TwitterFollowsApiToolsApi();
            var apiKey = apiKey_example;  // string |  (default to your own apikey)
            var authToken = authToken_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var ct0 = ct0_example;  // string |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
            var screenName = screenName_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional)  (default to 44196397)

            try
            {
                // to unfollow 
                ResultT result = apiInstance.UnfollowUsingPOST(apiKey, authToken, ct0, screenName, userId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TwitterFollowsApiToolsApi.UnfollowUsingPOST: " + e.Message );
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

