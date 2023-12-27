# swagger_client.TwitterSendTweesApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_retweet_using_get**](TwitterSendTweesApiToolsApi.md#create_retweet_using_get) | **GET** /base/apitools/createRetweet | retweet a Tweet
[**create_retweet_using_post**](TwitterSendTweesApiToolsApi.md#create_retweet_using_post) | **POST** /base/apitools/createRetweet | retweet a Tweet
[**create_tweet_using_get**](TwitterSendTweesApiToolsApi.md#create_tweet_using_get) | **GET** /base/apitools/createTweet | create a Tweet
[**create_tweet_using_post**](TwitterSendTweesApiToolsApi.md#create_tweet_using_post) | **POST** /base/apitools/createTweet | create a Tweet
[**like_tweet_using_get**](TwitterSendTweesApiToolsApi.md#like_tweet_using_get) | **GET** /base/apitools/likeTweet | like(favorites) Tweet
[**like_tweet_using_post**](TwitterSendTweesApiToolsApi.md#like_tweet_using_post) | **POST** /base/apitools/likeTweet | like(favorites) Tweet
[**tweet_reply_using_get**](TwitterSendTweesApiToolsApi.md#tweet_reply_using_get) | **GET** /base/apitools/tweetReply | reply to tweet 
[**tweet_reply_using_post**](TwitterSendTweesApiToolsApi.md#tweet_reply_using_post) | **POST** /base/apitools/tweetReply | reply to tweet 
[**unlike_tweet_using_get**](TwitterSendTweesApiToolsApi.md#unlike_tweet_using_get) | **GET** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**unlike_tweet_using_post**](TwitterSendTweesApiToolsApi.md#unlike_tweet_using_post) | **POST** /base/apitools/unlikeTweet | unlike(unfavorites) Tweet
[**upload_media_using_get**](TwitterSendTweesApiToolsApi.md#upload_media_using_get) | **GET** /base/apitools/uploadMedia | upload media (gif)
[**upload_media_using_post**](TwitterSendTweesApiToolsApi.md#upload_media_using_post) | **POST** /base/apitools/uploadMedia | upload media (gif)


# **create_retweet_using_get**
> ResultT create_retweet_using_get(api_key, auth_token, ct0, tweet_id)

retweet a Tweet

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
tweet_id = '1722885211313307819' # str |  (default to 1722885211313307819)

try:
    # retweet a Tweet
    api_response = api_instance.create_retweet_using_get(api_key, auth_token, ct0, tweet_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->create_retweet_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweet_id** | **str**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_retweet_using_post**
> ResultT create_retweet_using_post(api_key, auth_token, ct0, tweet_id)

retweet a Tweet

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
tweet_id = '1722885211313307819' # str |  (default to 1722885211313307819)

try:
    # retweet a Tweet
    api_response = api_instance.create_retweet_using_post(api_key, auth_token, ct0, tweet_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->create_retweet_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **tweet_id** | **str**|  | [default to 1722885211313307819]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tweet_using_get**
> ResultT create_tweet_using_get(api_key, auth_token, ct0, text, medias=medias)

create a Tweet

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
text = 'this tweet by utools auto send by https://twitter.utools.me' # str |  (default to this tweet by utools auto send by https://twitter.utools.me)
medias = ['medias_example'] # list[str] | medias ids (optional)

try:
    # create a Tweet
    api_response = api_instance.create_tweet_using_get(api_key, auth_token, ct0, text, medias=medias)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->create_tweet_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **str**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**list[str]**](str.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tweet_using_post**
> ResultT create_tweet_using_post(api_key, auth_token, ct0, text, medias=medias)

create a Tweet

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
text = 'this tweet by utools auto send by https://twitter.utools.me' # str |  (default to this tweet by utools auto send by https://twitter.utools.me)
medias = ['medias_example'] # list[str] | medias ids (optional)

try:
    # create a Tweet
    api_response = api_instance.create_tweet_using_post(api_key, auth_token, ct0, text, medias=medias)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->create_tweet_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **str**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **medias** | [**list[str]**](str.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_tweet_using_get**
> ResultT like_tweet_using_get(api_key, auth_token, ct0, id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = '1722138510680043555' # str |  (default to 1722138510680043555)

try:
    # like(favorites) Tweet
    api_response = api_instance.like_tweet_using_get(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->like_tweet_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_tweet_using_post**
> ResultT like_tweet_using_post(api_key, auth_token, ct0, id)

like(favorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = '1722138510680043555' # str |  (default to 1722138510680043555)

try:
    # like(favorites) Tweet
    api_response = api_instance.like_tweet_using_post(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->like_tweet_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_reply_using_get**
> ResultT tweet_reply_using_get(api_key, auth_token, ct0, text, tweet_id, medias=medias)

reply to tweet 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
text = 'this tweet by utools auto send by https://twitter.utools.me' # str |  (default to this tweet by utools auto send by https://twitter.utools.me)
tweet_id = '1722885211313307819' # str |  (default to 1722885211313307819)
medias = ['medias_example'] # list[str] | medias ids (optional)

try:
    # reply to tweet 
    api_response = api_instance.tweet_reply_using_get(api_key, auth_token, ct0, text, tweet_id, medias=medias)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->tweet_reply_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **str**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweet_id** | **str**|  | [default to 1722885211313307819]
 **medias** | [**list[str]**](str.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_reply_using_post**
> ResultT tweet_reply_using_post(api_key, auth_token, ct0, text, tweet_id, medias=medias)

reply to tweet 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
text = 'this tweet by utools auto send by https://twitter.utools.me' # str |  (default to this tweet by utools auto send by https://twitter.utools.me)
tweet_id = '1722885211313307819' # str |  (default to 1722885211313307819)
medias = ['medias_example'] # list[str] | medias ids (optional)

try:
    # reply to tweet 
    api_response = api_instance.tweet_reply_using_post(api_key, auth_token, ct0, text, tweet_id, medias=medias)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->tweet_reply_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **text** | **str**|  | [default to this tweet by utools auto send by https://twitter.utools.me]
 **tweet_id** | **str**|  | [default to 1722885211313307819]
 **medias** | [**list[str]**](str.md)| medias ids | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlike_tweet_using_get**
> ResultT unlike_tweet_using_get(api_key, auth_token, ct0, id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = '1722138510680043555' # str |  (default to 1722138510680043555)

try:
    # unlike(unfavorites) Tweet
    api_response = api_instance.unlike_tweet_using_get(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->unlike_tweet_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlike_tweet_using_post**
> ResultT unlike_tweet_using_post(api_key, auth_token, ct0, id)

unlike(unfavorites) Tweet

see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = '1722138510680043555' # str |  (default to 1722138510680043555)

try:
    # unlike(unfavorites) Tweet
    api_response = api_instance.unlike_tweet_using_post(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->unlike_tweet_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | [default to 1722138510680043555]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_media_using_get**
> ResultT upload_media_using_get(api_key, auth_token, ct0, media_url)

upload media (gif)

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
media_url = 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1' # str |  (default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1)

try:
    # upload media (gif)
    api_response = api_instance.upload_media_using_get(api_key, auth_token, ct0, media_url)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->upload_media_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **media_url** | **str**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_media_using_post**
> ResultT upload_media_using_post(api_key, auth_token, ct0, media_url)

upload media (gif)

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSendTweesApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
media_url = 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1' # str |  (default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1)

try:
    # upload media (gif)
    api_response = api_instance.upload_media_using_post(api_key, auth_token, ct0, media_url)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSendTweesApiToolsApi->upload_media_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **media_url** | **str**|  | [default to https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit&#x3D;476%2C280&amp;ssl&#x3D;1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

