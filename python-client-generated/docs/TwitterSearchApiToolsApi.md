# swagger_client.TwitterSearchApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_using_get**](TwitterSearchApiToolsApi.md#search_using_get) | **GET** /base/apitools/search | Advanced Search
[**search_using_post**](TwitterSearchApiToolsApi.md#search_using_post) | **POST** /base/apitools/search | Advanced Search
[**trends_using_get**](TwitterSearchApiToolsApi.md#trends_using_get) | **GET** /base/apitools/trends | trends Search
[**trends_using_post**](TwitterSearchApiToolsApi.md#trends_using_post) | **POST** /base/apitools/trends | trends Search


# **search_using_get**
> ResultT search_using_get(api_key, words, any=any, cursor=cursor, _from=_from, likes=likes, mentioning=mentioning, _none=_none, phrase=phrase, replies=replies, retweets=retweets, since=since, tag=tag, to=to, until=until)

Advanced Search

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSearchApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
words = 'words_example' # str | 
any = 'any_example' # str | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) (optional)
cursor = 'cursor_example' # str | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) (optional)
_from = '_from_example' # str | From these accounts (Example: @Twitter �� sent from @Twitter) (optional)
likes = 'likes_example' # str | Minimum likes (Example: 280 �� Tweets with at least 280 likes)) (optional)
mentioning = 'mentioning_example' # str | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) (optional)
_none = '_none_example' # str | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) (optional)
phrase = 'phrase_example' # str | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) (optional)
replies = 'replies_example' # str | Minimum replies (Example: 280 �� Tweets with at least 280 replies) (optional)
retweets = 'retweets_example' # str | Minimum retweets (Example: 280 �� Tweets with at least 280 likes) (optional)
since = 'since_example' # str | start time (Example: 2020-01-01 ) (optional)
tag = 'tag_example' # str | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) (optional)
to = 'to_example' # str | To these accounts (Example: @Twitter �� sent in reply to @Twitter) (optional)
until = 'until_example' # str | end time (Example: 2021-02-02) (optional)

try:
    # Advanced Search
    api_response = api_instance.search_using_get(api_key, words, any=any, cursor=cursor, _from=_from, likes=likes, mentioning=mentioning, _none=_none, phrase=phrase, replies=replies, retweets=retweets, since=since, tag=tag, to=to, until=until)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSearchApiToolsApi->search_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **words** | **str**|  | 
 **any** | **str**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **str**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **_from** | **str**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **str**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **str**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **_none** | **str**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **str**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **str**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **str**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **str**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **str**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **str**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **str**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_using_post**
> ResultT search_using_post(api_key, words, any=any, cursor=cursor, _from=_from, likes=likes, mentioning=mentioning, _none=_none, phrase=phrase, replies=replies, retweets=retweets, since=since, tag=tag, to=to, until=until)

Advanced Search

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSearchApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
words = 'words_example' # str | 
any = 'any_example' # str | Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) (optional)
cursor = 'cursor_example' # str | cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) (optional)
_from = '_from_example' # str | From these accounts (Example: @Twitter �� sent from @Twitter) (optional)
likes = 'likes_example' # str | Minimum likes (Example: 280 �� Tweets with at least 280 likes)) (optional)
mentioning = 'mentioning_example' # str | Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) (optional)
_none = '_none_example' # str | None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) (optional)
phrase = 'phrase_example' # str | This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) (optional)
replies = 'replies_example' # str | Minimum replies (Example: 280 �� Tweets with at least 280 replies) (optional)
retweets = 'retweets_example' # str | Minimum retweets (Example: 280 �� Tweets with at least 280 likes) (optional)
since = 'since_example' # str | start time (Example: 2020-01-01 ) (optional)
tag = 'tag_example' # str | These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) (optional)
to = 'to_example' # str | To these accounts (Example: @Twitter �� sent in reply to @Twitter) (optional)
until = 'until_example' # str | end time (Example: 2021-02-02) (optional)

try:
    # Advanced Search
    api_response = api_instance.search_using_post(api_key, words, any=any, cursor=cursor, _from=_from, likes=likes, mentioning=mentioning, _none=_none, phrase=phrase, replies=replies, retweets=retweets, since=since, tag=tag, to=to, until=until)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSearchApiToolsApi->search_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **words** | **str**|  | 
 **any** | **str**| Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both)) | [optional] 
 **cursor** | **str**| cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA ) | [optional] 
 **_from** | **str**| From these accounts (Example: @Twitter �� sent from @Twitter) | [optional] 
 **likes** | **str**| Minimum likes (Example: 280 �� Tweets with at least 280 likes)) | [optional] 
 **mentioning** | **str**| Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain) | [optional] 
 **_none** | **str**| None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��) | [optional] 
 **phrase** | **str**| This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��) | [optional] 
 **replies** | **str**| Minimum replies (Example: 280 �� Tweets with at least 280 replies) | [optional] 
 **retweets** | **str**| Minimum retweets (Example: 280 �� Tweets with at least 280 likes) | [optional] 
 **since** | **str**| start time (Example: 2020-01-01 ) | [optional] 
 **tag** | **str**| These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday) | [optional] 
 **to** | **str**| To these accounts (Example: @Twitter �� sent in reply to @Twitter) | [optional] 
 **until** | **str**| end time (Example: 2021-02-02) | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_using_get**
> ResultT trends_using_get(api_key, id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSearchApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1' # str |  (default to 1)

try:
    # trends Search
    api_response = api_instance.trends_using_get(api_key, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSearchApiToolsApi->trends_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_using_post**
> ResultT trends_using_post(api_key, id)

trends Search

see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterSearchApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
id = '1' # str |  (default to 1)

try:
    # trends Search
    api_response = api_instance.trends_using_post(api_key, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterSearchApiToolsApi->trends_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **id** | **str**|  | [default to 1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

