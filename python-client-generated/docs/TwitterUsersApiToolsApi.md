# swagger_client.TwitterUsersApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blocks_create_using_get**](TwitterUsersApiToolsApi.md#blocks_create_using_get) | **GET** /base/apitools/blocksCreate | blocks Create
[**blocks_create_using_post**](TwitterUsersApiToolsApi.md#blocks_create_using_post) | **POST** /base/apitools/blocksCreate | blocks Create
[**blocks_destroy_using_get**](TwitterUsersApiToolsApi.md#blocks_destroy_using_get) | **GET** /base/apitools/blocksDestroy | blocks Destroy
[**blocks_destroy_using_post**](TwitterUsersApiToolsApi.md#blocks_destroy_using_post) | **POST** /base/apitools/blocksDestroy | blocks Destroy
[**get_list_by_user_id_or_screen_name_using_get**](TwitterUsersApiToolsApi.md#get_list_by_user_id_or_screen_name_using_get) | **GET** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**get_list_by_user_id_or_screen_name_using_post**](TwitterUsersApiToolsApi.md#get_list_by_user_id_or_screen_name_using_post) | **POST** /base/apitools/listByUserIdOrScreenName | Get List by user_id or screen_name(get-lists-list)
[**get_list_members_by_list_id_using_get**](TwitterUsersApiToolsApi.md#get_list_members_by_list_id_using_get) | **GET** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**get_list_members_by_list_id_using_post**](TwitterUsersApiToolsApi.md#get_list_members_by_list_id_using_post) | **POST** /base/apitools/listMembersByListId | Get List Members By ListId (get-lists-members)
[**get_user_by_id_or_name_look_up_using_get**](TwitterUsersApiToolsApi.md#get_user_by_id_or_name_look_up_using_get) | **GET** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**get_user_by_id_or_name_look_up_using_post**](TwitterUsersApiToolsApi.md#get_user_by_id_or_name_look_up_using_post) | **POST** /base/apitools/uerByIdOrNameLookUp | Get user information based on username or id (lookup)
[**get_user_by_id_or_name_show_using_get**](TwitterUsersApiToolsApi.md#get_user_by_id_or_name_show_using_get) | **GET** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**get_user_by_id_or_name_show_using_post**](TwitterUsersApiToolsApi.md#get_user_by_id_or_name_show_using_post) | **POST** /base/apitools/uerByIdOrNameShow | Get user information based on username or id (show)
[**uer_by_id_rest_id_v2_using_get**](TwitterUsersApiToolsApi.md#uer_by_id_rest_id_v2_using_get) | **GET** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**uer_by_id_rest_id_v2_using_post**](TwitterUsersApiToolsApi.md#uer_by_id_rest_id_v2_using_post) | **POST** /base/apitools/uerByIdRestIdV2 | Get uerByIdRestId by V2
[**user_by_screen_name_v2_using_get**](TwitterUsersApiToolsApi.md#user_by_screen_name_v2_using_get) | **GET** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**user_by_screen_name_v2_using_post**](TwitterUsersApiToolsApi.md#user_by_screen_name_v2_using_post) | **POST** /base/apitools/userByScreenNameV2 | Get userByScreenName by V2
[**user_timeline_using_get**](TwitterUsersApiToolsApi.md#user_timeline_using_get) | **GET** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**user_timeline_using_post**](TwitterUsersApiToolsApi.md#user_timeline_using_post) | **POST** /base/apitools/userTimeline | Get UserTimeline  tweets info
[**user_tweets_v2_using_get**](TwitterUsersApiToolsApi.md#user_tweets_v2_using_get) | **GET** /base/apitools/userTweetsV2 | Get UserTweets by V2
[**user_tweets_v2_using_post**](TwitterUsersApiToolsApi.md#user_tweets_v2_using_post) | **POST** /base/apitools/userTweetsV2 | Get UserTweets by V2


# **blocks_create_using_get**
> ResultT blocks_create_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # blocks Create
    api_response = api_instance.blocks_create_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->blocks_create_using_get: %s\n" % e)
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

# **blocks_create_using_post**
> ResultT blocks_create_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

blocks Create

See details  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # blocks Create
    api_response = api_instance.blocks_create_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->blocks_create_using_post: %s\n" % e)
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

# **blocks_destroy_using_get**
> ResultT blocks_destroy_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '44196397' # str |  (optional) (default to 44196397)

try:
    # blocks Destroy
    api_response = api_instance.blocks_destroy_using_get(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->blocks_destroy_using_get: %s\n" % e)
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

# **blocks_destroy_using_post**
> ResultT blocks_destroy_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)

blocks Destroy

https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
screen_name = 'screen_name_example' # str |  (optional)
user_id = '44196397' # str |  (optional) (default to 44196397)

try:
    # blocks Destroy
    api_response = api_instance.blocks_destroy_using_post(api_key, auth_token, ct0, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->blocks_destroy_using_post: %s\n" % e)
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

# **get_list_by_user_id_or_screen_name_using_get**
> ResultT get_list_by_user_id_or_screen_name_using_get(api_key, screen_name=screen_name, user_id=user_id)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get List by user_id or screen_name(get-lists-list)
    api_response = api_instance.get_list_by_user_id_or_screen_name_using_get(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_list_by_user_id_or_screen_name_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **get_list_by_user_id_or_screen_name_using_post**
> ResultT get_list_by_user_id_or_screen_name_using_post(api_key, screen_name=screen_name, user_id=user_id)

Get List by user_id or screen_name(get-lists-list)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get List by user_id or screen_name(get-lists-list)
    api_response = api_instance.get_list_by_user_id_or_screen_name_using_post(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_list_by_user_id_or_screen_name_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **get_list_members_by_list_id_using_get**
> ResultT get_list_members_by_list_id_using_get(api_key, list_id, cursor=cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
list_id = '1453837432479227913' # str |  (default to 1453837432479227913)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get List Members By ListId (get-lists-members)
    api_response = api_instance.get_list_members_by_list_id_using_get(api_key, list_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_list_members_by_list_id_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **list_id** | **str**|  | [default to 1453837432479227913]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_list_members_by_list_id_using_post**
> ResultT get_list_members_by_list_id_using_post(api_key, list_id, cursor=cursor)

Get List Members By ListId (get-lists-members)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-members

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
list_id = '1453837432479227913' # str |  (default to 1453837432479227913)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get List Members By ListId (get-lists-members)
    api_response = api_instance.get_list_members_by_list_id_using_post(api_key, list_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_list_members_by_list_id_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **list_id** | **str**|  | [default to 1453837432479227913]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id_or_name_look_up_using_get**
> ResultT get_user_by_id_or_name_look_up_using_get(api_key, screen_name=screen_name, user_id=user_id)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get user information based on username or id (lookup)
    api_response = api_instance.get_user_by_id_or_name_look_up_using_get(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_user_by_id_or_name_look_up_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **get_user_by_id_or_name_look_up_using_post**
> ResultT get_user_by_id_or_name_look_up_using_post(api_key, screen_name=screen_name, user_id=user_id)

Get user information based on username or id (lookup)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get user information based on username or id (lookup)
    api_response = api_instance.get_user_by_id_or_name_look_up_using_post(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_user_by_id_or_name_look_up_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **get_user_by_id_or_name_show_using_get**
> ResultT get_user_by_id_or_name_show_using_get(api_key, screen_name=screen_name, user_id=user_id)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get user information based on username or id (show)
    api_response = api_instance.get_user_by_id_or_name_show_using_get(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_user_by_id_or_name_show_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **get_user_by_id_or_name_show_using_post**
> ResultT get_user_by_id_or_name_show_using_post(api_key, screen_name=screen_name, user_id=user_id)

Get user information based on username or id (show)

See details https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
user_id = '1574242047661207552' # str |  (optional) (default to 1574242047661207552)

try:
    # Get user information based on username or id (show)
    api_response = api_instance.get_user_by_id_or_name_show_using_post(api_key, screen_name=screen_name, user_id=user_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->get_user_by_id_or_name_show_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
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

# **uer_by_id_rest_id_v2_using_get**
> ResultT uer_by_id_rest_id_v2_using_get(api_key, user_id, cursor=cursor)

Get uerByIdRestId by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get uerByIdRestId by V2
    api_response = api_instance.uer_by_id_rest_id_v2_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->uer_by_id_rest_id_v2_using_get: %s\n" % e)
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

# **uer_by_id_rest_id_v2_using_post**
> ResultT uer_by_id_rest_id_v2_using_post(api_key, user_id, cursor=cursor)

Get uerByIdRestId by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get uerByIdRestId by V2
    api_response = api_instance.uer_by_id_rest_id_v2_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->uer_by_id_rest_id_v2_using_post: %s\n" % e)
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

# **user_by_screen_name_v2_using_get**
> ResultT user_by_screen_name_v2_using_get(api_key, screen_name)

Get userByScreenName by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'pWP5s7zypwvCwJp' # str |  (default to pWP5s7zypwvCwJp)

try:
    # Get userByScreenName by V2
    api_response = api_instance.user_by_screen_name_v2_using_get(api_key, screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_by_screen_name_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **screen_name** | **str**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_by_screen_name_v2_using_post**
> ResultT user_by_screen_name_v2_using_post(api_key, screen_name)

Get userByScreenName by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
screen_name = 'pWP5s7zypwvCwJp' # str |  (default to pWP5s7zypwvCwJp)

try:
    # Get userByScreenName by V2
    api_response = api_instance.user_by_screen_name_v2_using_post(api_key, screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_by_screen_name_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **screen_name** | **str**|  | [default to pWP5s7zypwvCwJp]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_timeline_using_get**
> ResultT user_timeline_using_get(api_key, user_id, cursor=cursor)

Get UserTimeline  tweets info

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get UserTimeline  tweets info
    api_response = api_instance.user_timeline_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_timeline_using_get: %s\n" % e)
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

# **user_timeline_using_post**
> ResultT user_timeline_using_post(api_key, user_id, cursor=cursor)

Get UserTimeline  tweets info

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get UserTimeline  tweets info
    api_response = api_instance.user_timeline_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_timeline_using_post: %s\n" % e)
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

# **user_tweets_v2_using_get**
> ResultT user_tweets_v2_using_get(api_key, user_id, cursor=cursor)

Get UserTweets by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get UserTweets by V2
    api_response = api_instance.user_tweets_v2_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_tweets_v2_using_get: %s\n" % e)
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

# **user_tweets_v2_using_post**
> ResultT user_tweets_v2_using_post(api_key, user_id, cursor=cursor)

Get UserTweets by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterUsersApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Get UserTweets by V2
    api_response = api_instance.user_tweets_v2_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterUsersApiToolsApi->user_tweets_v2_using_post: %s\n" % e)
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

