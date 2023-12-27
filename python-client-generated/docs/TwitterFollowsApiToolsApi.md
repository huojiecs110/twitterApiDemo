# swagger_client.TwitterFollowsApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blue_verified_followers_v2_using_get**](TwitterFollowsApiToolsApi.md#blue_verified_followers_v2_using_get) | **GET** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**blue_verified_followers_v2_using_post**](TwitterFollowsApiToolsApi.md#blue_verified_followers_v2_using_post) | **POST** /base/apitools/blueVerifiedFollowersV2 | get blueVerifiedFollowers by V2 
[**follow_using_get**](TwitterFollowsApiToolsApi.md#follow_using_get) | **GET** /base/apitools/follow | to follow 
[**follow_using_post**](TwitterFollowsApiToolsApi.md#follow_using_post) | **POST** /base/apitools/follow | to follow 
[**followers_ids_using_get**](TwitterFollowsApiToolsApi.md#followers_ids_using_get) | **GET** /base/apitools/followersIds | Get Followers Ids
[**followers_ids_using_post**](TwitterFollowsApiToolsApi.md#followers_ids_using_post) | **POST** /base/apitools/followersIds | Get Followers Ids
[**followers_list_using_get**](TwitterFollowsApiToolsApi.md#followers_list_using_get) | **GET** /base/apitools/followersList | Get Followers User Collection
[**followers_list_using_post**](TwitterFollowsApiToolsApi.md#followers_list_using_post) | **POST** /base/apitools/followersList | Get Followers User Collection
[**followers_list_v2_using_get**](TwitterFollowsApiToolsApi.md#followers_list_v2_using_get) | **GET** /base/apitools/followersListV2 | get followersList by V2 
[**followers_list_v2_using_post**](TwitterFollowsApiToolsApi.md#followers_list_v2_using_post) | **POST** /base/apitools/followersListV2 | get followersList by V2 
[**followings_ids_using_get**](TwitterFollowsApiToolsApi.md#followings_ids_using_get) | **GET** /base/apitools/followingsIds | Get Followings Ids
[**followings_ids_using_post**](TwitterFollowsApiToolsApi.md#followings_ids_using_post) | **POST** /base/apitools/followingsIds | Get Followings Ids
[**followings_list_using_get**](TwitterFollowsApiToolsApi.md#followings_list_using_get) | **GET** /base/apitools/followingsList | Get Followings User Collection
[**followings_list_using_post**](TwitterFollowsApiToolsApi.md#followings_list_using_post) | **POST** /base/apitools/followingsList | Get Followings User Collection
[**followings_list_v2_using_get**](TwitterFollowsApiToolsApi.md#followings_list_v2_using_get) | **GET** /base/apitools/followingsListV2 | get followingsList by V2 
[**followings_list_v2_using_post**](TwitterFollowsApiToolsApi.md#followings_list_v2_using_post) | **POST** /base/apitools/followingsListV2 | get followingsList by V2 
[**get_friendships_show_using_get**](TwitterFollowsApiToolsApi.md#get_friendships_show_using_get) | **GET** /base/apitools/friendshipsShow | Get relationship information between two users
[**get_friendships_show_using_post**](TwitterFollowsApiToolsApi.md#get_friendships_show_using_post) | **POST** /base/apitools/friendshipsShow | Get relationship information between two users
[**unfollow_using_get**](TwitterFollowsApiToolsApi.md#unfollow_using_get) | **GET** /base/apitools/unfollow | to unfollow 
[**unfollow_using_post**](TwitterFollowsApiToolsApi.md#unfollow_using_post) | **POST** /base/apitools/unfollow | to unfollow 


# **blue_verified_followers_v2_using_get**
> ResultT blue_verified_followers_v2_using_get(api_key, user_id, cursor=cursor)

get blueVerifiedFollowers by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get blueVerifiedFollowers by V2 
    api_response = api_instance.blue_verified_followers_v2_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->blue_verified_followers_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blue_verified_followers_v2_using_post**
> ResultT blue_verified_followers_v2_using_post(api_key, user_id, cursor=cursor)

get blueVerifiedFollowers by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get blueVerifiedFollowers by V2 
    api_response = api_instance.blue_verified_followers_v2_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->blue_verified_followers_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **follow_using_get**
> ResultT follow_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # to follow 
    api_response = api_instance.follow_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->follow_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **follow_using_post**
> ResultT follow_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

to follow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # to follow 
    api_response = api_instance.follow_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->follow_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_ids_using_get**
> ResultT followers_ids_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followers Ids
    api_response = api_instance.followers_ids_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_ids_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_ids_using_post**
> ResultT followers_ids_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followers Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followers Ids
    api_response = api_instance.followers_ids_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_ids_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_list_using_get**
> ResultT followers_list_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followers User Collection
    api_response = api_instance.followers_list_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_list_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_list_using_post**
> ResultT followers_list_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followers User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followers User Collection
    api_response = api_instance.followers_list_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_list_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_list_v2_using_get**
> ResultT followers_list_v2_using_get(api_key, user_id, cursor=cursor)

get followersList by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get followersList by V2 
    api_response = api_instance.followers_list_v2_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_list_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followers_list_v2_using_post**
> ResultT followers_list_v2_using_post(api_key, user_id, cursor=cursor)

get followersList by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get followersList by V2 
    api_response = api_instance.followers_list_v2_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followers_list_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_ids_using_get**
> ResultT followings_ids_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followings Ids
    api_response = api_instance.followings_ids_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_ids_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_ids_using_post**
> ResultT followings_ids_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followings Ids

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followings Ids
    api_response = api_instance.followings_ids_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_ids_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_list_using_get**
> ResultT followings_list_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followings User Collection
    api_response = api_instance.followings_list_using_get(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_list_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_list_using_post**
> ResultT followings_list_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)

Get Followings User Collection

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
cursor = '-1' # str |  (optional) (default to -1)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get Followings User Collection
    api_response = api_instance.followings_list_using_post(api_key, cursor=cursor, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_list_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **cursor** | **str**|  | [optional] [default to -1]
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **user_id** | **str**|  | [optional] [default to 1574242047661207552]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_list_v2_using_get**
> ResultT followings_list_v2_using_get(api_key, user_id, cursor=cursor)

get followingsList by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get followingsList by V2 
    api_response = api_instance.followings_list_v2_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_list_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followings_list_v2_using_post**
> ResultT followings_list_v2_using_post(api_key, user_id, cursor=cursor)

get followingsList by V2 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get followingsList by V2 
    api_response = api_instance.followings_list_v2_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->followings_list_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_friendships_show_using_get**
> ResultT get_friendships_show_using_get(api_key, source_id=source_id, source_screen_name=source_screen_name, target_id=target_id, target_screen_name=target_screen_name)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
source_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)
source_screen_name = 'source_screen_name_example' # str |  (optional)
target_id = '1620357967962058752' # str |  (optional) (default to 1620357967962058752)
target_screen_name = 'target_screen_name_example' # str |  (optional)

try:
    # Get relationship information between two users
    api_response = api_instance.get_friendships_show_using_get(api_key, source_id=source_id, source_screen_name=source_screen_name, target_id=target_id, target_screen_name=target_screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->get_friendships_show_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **source_id** | **str**|  | [optional] [default to 1574242047661207552]
 **source_screen_name** | **str**|  | [optional] 
 **target_id** | **str**|  | [optional] [default to 1620357967962058752]
 **target_screen_name** | **str**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_friendships_show_using_post**
> ResultT get_friendships_show_using_post(api_key, source_id=source_id, source_screen_name=source_screen_name, target_id=target_id, target_screen_name=target_screen_name)

Get relationship information between two users

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
source_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)
source_screen_name = 'source_screen_name_example' # str |  (optional)
target_id = '1620357967962058752' # str |  (optional) (default to 1620357967962058752)
target_screen_name = 'target_screen_name_example' # str |  (optional)

try:
    # Get relationship information between two users
    api_response = api_instance.get_friendships_show_using_post(api_key, source_id=source_id, source_screen_name=source_screen_name, target_id=target_id, target_screen_name=target_screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->get_friendships_show_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **source_id** | **str**|  | [optional] [default to 1574242047661207552]
 **source_screen_name** | **str**|  | [optional] 
 **target_id** | **str**|  | [optional] [default to 1620357967962058752]
 **target_screen_name** | **str**|  | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfollow_using_get**
> ResultT unfollow_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '44196397' # str |  (optional) (default to 44196397)

try:
    # to unfollow 
    api_response = api_instance.unfollow_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->unfollow_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfollow_using_post**
> ResultT unfollow_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

to unfollow 

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterFollowsApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '44196397' # str |  (optional) (default to 44196397)

try:
    # to unfollow 
    api_response = api_instance.unfollow_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterFollowsApiToolsApi->unfollow_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **screen_name** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] [default to 44196397]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

