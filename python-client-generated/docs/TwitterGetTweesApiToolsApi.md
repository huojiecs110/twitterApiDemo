# swagger_client.TwitterGetTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**favoriters_v2_using_get**](TwitterGetTweesApiToolsApi.md#favoriters_v2_using_get) | **GET** /base/apitools/favoritersV2 | Favoriters by V2
[**favoriters_v2_using_post**](TwitterGetTweesApiToolsApi.md#favoriters_v2_using_post) | **POST** /base/apitools/favoritersV2 | Favoriters by V2
[**favorites_list_using_get**](TwitterGetTweesApiToolsApi.md#favorites_list_using_get) | **GET** /base/apitools/favoritesList | favorites are now known as likes.
[**favorites_list_using_post**](TwitterGetTweesApiToolsApi.md#favorites_list_using_post) | **POST** /base/apitools/favoritesList | favorites are now known as likes.
[**mentions_timeline_using_get**](TwitterGetTweesApiToolsApi.md#mentions_timeline_using_get) | **GET** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**mentions_timeline_using_post**](TwitterGetTweesApiToolsApi.md#mentions_timeline_using_post) | **POST** /base/apitools/mentionsTimeline | get mentionsTimeline Detail
[**quotes_v2_using_get**](TwitterGetTweesApiToolsApi.md#quotes_v2_using_get) | **GET** /base/apitools/quotesV2 | Quotes by V2
[**quotes_v2_using_post**](TwitterGetTweesApiToolsApi.md#quotes_v2_using_post) | **POST** /base/apitools/quotesV2 | Quotes by V2
[**retweeters_ids_using_get**](TwitterGetTweesApiToolsApi.md#retweeters_ids_using_get) | **GET** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**retweeters_ids_using_post**](TwitterGetTweesApiToolsApi.md#retweeters_ids_using_post) | **POST** /base/apitools/retweetersIds | get retwweeters ids by tweetId
[**retweeters_v2_using_get**](TwitterGetTweesApiToolsApi.md#retweeters_v2_using_get) | **GET** /base/apitools/retweetersV2 | Retweeters by V2
[**retweeters_v2_using_post**](TwitterGetTweesApiToolsApi.md#retweeters_v2_using_post) | **POST** /base/apitools/retweetersV2 | Retweeters by V2
[**tweet_simple_using_get**](TwitterGetTweesApiToolsApi.md#tweet_simple_using_get) | **GET** /base/apitools/tweetSimple | tweet Brief information
[**tweet_simple_using_post**](TwitterGetTweesApiToolsApi.md#tweet_simple_using_post) | **POST** /base/apitools/tweetSimple | tweet Brief information
[**tweet_timeline_using_get**](TwitterGetTweesApiToolsApi.md#tweet_timeline_using_get) | **GET** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**tweet_timeline_using_post**](TwitterGetTweesApiToolsApi.md#tweet_timeline_using_post) | **POST** /base/apitools/tweetTimeline | get TweetTimeline Detail
[**user_tweet_reply_using_get**](TwitterGetTweesApiToolsApi.md#user_tweet_reply_using_get) | **GET** /base/apitools/userTweetReply | get userTweetReply 
[**user_tweet_reply_using_post**](TwitterGetTweesApiToolsApi.md#user_tweet_reply_using_post) | **POST** /base/apitools/userTweetReply | get userTweetReply 


# **favoriters_v2_using_get**
> ResultT favoriters_v2_using_get(api_key, tweet_id, cursor=cursor)

Favoriters by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Favoriters by V2
    api_response = api_instance.favoriters_v2_using_get(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->favoriters_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favoriters_v2_using_post**
> ResultT favoriters_v2_using_post(api_key, tweet_id, cursor=cursor)

Favoriters by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Favoriters by V2
    api_response = api_instance.favoriters_v2_using_post(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->favoriters_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_list_using_get**
> ResultT favorites_list_using_get(api_key, user_id, max_id=max_id, screen_name=screen_name, since_id=since_id)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)

try:
    # favorites are now known as likes.
    api_response = api_instance.favorites_list_using_get(api_key, user_id, max_id=max_id, screen_name=screen_name, since_id=since_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->favorites_list_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_list_using_post**
> ResultT favorites_list_using_post(api_key, user_id, max_id=max_id, screen_name=screen_name, since_id=since_id)

favorites are now known as likes.

See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
screen_name = 'elonmusk' # str |  (optional) (default to elonmusk)
since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)

try:
    # favorites are now known as likes.
    api_response = api_instance.favorites_list_using_post(api_key, user_id, max_id=max_id, screen_name=screen_name, since_id=since_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->favorites_list_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **user_id** | **str**|  | [default to 1574242047661207552]
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **screen_name** | **str**|  | [optional] [default to elonmusk]
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mentions_timeline_using_get**
> ResultT mentions_timeline_using_get(api_key, auth_token, ct0, include_entities=include_entities, max_id=max_id, since_id=since_id, trim_user=trim_user)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
include_entities = 'false' # str |  (optional) (default to false)
max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
trim_user = 'true' # str |  (optional) (default to true)

try:
    # get mentionsTimeline Detail
    api_response = api_instance.mentions_timeline_using_get(api_key, auth_token, ct0, include_entities=include_entities, max_id=max_id, since_id=since_id, trim_user=trim_user)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->mentions_timeline_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **include_entities** | **str**|  | [optional] [default to false]
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trim_user** | **str**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mentions_timeline_using_post**
> ResultT mentions_timeline_using_post(api_key, auth_token, ct0, include_entities=include_entities, max_id=max_id, since_id=since_id, trim_user=trim_user)

get mentionsTimeline Detail

See details  https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
include_entities = 'false' # str |  (optional) (default to false)
max_id = 'max_id_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)
since_id = 'since_id_example' # str | Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. (optional)
trim_user = 'true' # str |  (optional) (default to true)

try:
    # get mentionsTimeline Detail
    api_response = api_instance.mentions_timeline_using_post(api_key, auth_token, ct0, include_entities=include_entities, max_id=max_id, since_id=since_id, trim_user=trim_user)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->mentions_timeline_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **include_entities** | **str**|  | [optional] [default to false]
 **max_id** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 
 **since_id** | **str**| Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available. | [optional] 
 **trim_user** | **str**|  | [optional] [default to true]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotes_v2_using_get**
> ResultT quotes_v2_using_get(api_key, tweet_id, cursor=cursor)

Quotes by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Quotes by V2
    api_response = api_instance.quotes_v2_using_get(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->quotes_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotes_v2_using_post**
> ResultT quotes_v2_using_post(api_key, tweet_id, cursor=cursor)

Quotes by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Quotes by V2
    api_response = api_instance.quotes_v2_using_post(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->quotes_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retweeters_ids_using_get**
> ResultT retweeters_ids_using_get(api_key, id, cursor=cursor)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get retwweeters ids by tweetId
    api_response = api_instance.retweeters_ids_using_get(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->retweeters_ids_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retweeters_ids_using_post**
> ResultT retweeters_ids_using_post(api_key, id, cursor=cursor)

get retwweeters ids by tweetId

Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter. See details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get retwweeters ids by tweetId
    api_response = api_instance.retweeters_ids_using_post(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->retweeters_ids_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retweeters_v2_using_get**
> ResultT retweeters_v2_using_get(api_key, tweet_id, cursor=cursor)

Retweeters by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Retweeters by V2
    api_response = api_instance.retweeters_v2_using_get(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->retweeters_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retweeters_v2_using_post**
> ResultT retweeters_v2_using_post(api_key, tweet_id, cursor=cursor)

Retweeters by V2

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
tweet_id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # Retweeters by V2
    api_response = api_instance.retweeters_v2_using_post(api_key, tweet_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->retweeters_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **tweet_id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_simple_using_get**
> ResultT tweet_simple_using_get(api_key, id, cursor=cursor)

tweet Brief information

get tweet Brief information

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # tweet Brief information
    api_response = api_instance.tweet_simple_using_get(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->tweet_simple_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_simple_using_post**
> ResultT tweet_simple_using_post(api_key, id, cursor=cursor)

tweet Brief information

get tweet Brief information

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # tweet Brief information
    api_response = api_instance.tweet_simple_using_post(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->tweet_simple_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_timeline_using_get**
> ResultT tweet_timeline_using_get(api_key, id, cursor=cursor)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get TweetTimeline Detail
    api_response = api_instance.tweet_timeline_using_get(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->tweet_timeline_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_timeline_using_post**
> ResultT tweet_timeline_using_post(api_key, id, cursor=cursor)

get TweetTimeline Detail

get tweetDetail and reply

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1722138510680043555' # str |  (default to 1722138510680043555)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get TweetTimeline Detail
    api_response = api_instance.tweet_timeline_using_post(api_key, id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->tweet_timeline_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1722138510680043555]
 **cursor** | **str**|  | [optional] [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tweet_reply_using_get**
> ResultT user_tweet_reply_using_get(api_key, user_id, cursor=cursor)

get userTweetReply 

get user Tweet Reply

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get userTweetReply 
    api_response = api_instance.user_tweet_reply_using_get(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->user_tweet_reply_using_get: %s\n" % e)
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

# **user_tweet_reply_using_post**
> ResultT user_tweet_reply_using_post(api_key, user_id, cursor=cursor)

get userTweetReply 

get user Tweet Reply

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterGetTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
user_id = '1574242047661207552' # str |  (default to 1574242047661207552)
cursor = '-1' # str |  (optional) (default to -1)

try:
    # get userTweetReply 
    api_response = api_instance.user_tweet_reply_using_post(api_key, user_id, cursor=cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterGetTweesApiToolsApi->user_tweet_reply_using_post: %s\n" % e)
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

