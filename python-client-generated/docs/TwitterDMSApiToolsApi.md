# swagger_client.TwitterDMSApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dms_list_v2_using_get**](TwitterDMSApiToolsApi.md#get_dms_list_v2_using_get) | **GET** /base/apitools/getDMSListV2 | get DMS List
[**get_dms_list_v2_using_post**](TwitterDMSApiToolsApi.md#get_dms_list_v2_using_post) | **POST** /base/apitools/getDMSListV2 | get DMS List
[**get_dms_using_get**](TwitterDMSApiToolsApi.md#get_dms_using_get) | **GET** /base/apitools/getDMS | receiving events
[**get_dms_using_post**](TwitterDMSApiToolsApi.md#get_dms_using_post) | **POST** /base/apitools/getDMS | receiving events
[**send_dms_media_using_get**](TwitterDMSApiToolsApi.md#send_dms_media_using_get) | **GET** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**send_dms_media_using_post**](TwitterDMSApiToolsApi.md#send_dms_media_using_post) | **POST** /base/apitools/sendDMSMedia | sendDMSMedia events.
[**send_dms_using_get**](TwitterDMSApiToolsApi.md#send_dms_using_get) | **GET** /base/apitools/sendDMS | sendDMS events.
[**send_dms_using_post**](TwitterDMSApiToolsApi.md#send_dms_using_post) | **POST** /base/apitools/sendDMS | sendDMS events.
[**upload_media_dm_using_get**](TwitterDMSApiToolsApi.md#upload_media_dm_using_get) | **GET** /base/apitools/uploadMediaDM | upload media for DM 
[**upload_media_dm_using_post**](TwitterDMSApiToolsApi.md#upload_media_dm_using_post) | **POST** /base/apitools/uploadMediaDM | upload media for DM 


# **get_dms_list_v2_using_get**
> ResultT get_dms_list_v2_using_get(api_key, auth_token, ct0, cursor)

get DMS List

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
cursor = '-1' # str |  (default to -1)

try:
    # get DMS List
    api_response = api_instance.get_dms_list_v2_using_get(api_key, auth_token, ct0, cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->get_dms_list_v2_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **str**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dms_list_v2_using_post**
> ResultT get_dms_list_v2_using_post(api_key, auth_token, ct0, cursor)

get DMS List

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
cursor = '-1' # str |  (default to -1)

try:
    # get DMS List
    api_response = api_instance.get_dms_list_v2_using_post(api_key, auth_token, ct0, cursor)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->get_dms_list_v2_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **cursor** | **str**|  | [default to -1]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dms_using_get**
> ResultT get_dms_using_get(api_key, auth_token, ct0, id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = 'id_example' # str | 

try:
    # receiving events
    api_response = api_instance.get_dms_using_get(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->get_dms_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dms_using_post**
> ResultT get_dms_using_post(api_key, auth_token, ct0, id)

receiving events

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
id = 'id_example' # str | 

try:
    # receiving events
    api_response = api_instance.get_dms_using_post(api_key, auth_token, ct0, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->get_dms_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **id** | **str**|  | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_dms_media_using_get**
> ResultT send_dms_media_using_get(api_key, attachment_media_id, attachment_type, auth_token, ct0, recipient_id, text, type, quick_reply_type=quick_reply_type)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
attachment_media_id = 'attachment_media_id_example' # str | 
attachment_type = 'media' # str |  (default to media)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
recipient_id = 'recipient_id_example' # str | 
text = '(This message is sent by the best api tools twitter.utools.me)' # str |  (default to (This message is sent by the best api tools twitter.utools.me))
type = 'message_create' # str |  (default to message_create)
quick_reply_type = 'quick_reply_type_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)

try:
    # sendDMSMedia events.
    api_response = api_instance.send_dms_media_using_get(api_key, attachment_media_id, attachment_type, auth_token, ct0, recipient_id, text, type, quick_reply_type=quick_reply_type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->send_dms_media_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **attachment_media_id** | **str**|  | 
 **attachment_type** | **str**|  | [default to media]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **str**|  | 
 **text** | **str**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **str**|  | [default to message_create]
 **quick_reply_type** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_dms_media_using_post**
> ResultT send_dms_media_using_post(api_key, attachment_media_id, attachment_type, auth_token, ct0, recipient_id, text, type, quick_reply_type=quick_reply_type)

sendDMSMedia events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
attachment_media_id = 'attachment_media_id_example' # str | 
attachment_type = 'media' # str |  (default to media)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
recipient_id = 'recipient_id_example' # str | 
text = '(This message is sent by the best api tools twitter.utools.me)' # str |  (default to (This message is sent by the best api tools twitter.utools.me))
type = 'message_create' # str |  (default to message_create)
quick_reply_type = 'quick_reply_type_example' # str | Returns results with an ID less than (that is, older than) or equal to the specified ID. (optional)

try:
    # sendDMSMedia events.
    api_response = api_instance.send_dms_media_using_post(api_key, attachment_media_id, attachment_type, auth_token, ct0, recipient_id, text, type, quick_reply_type=quick_reply_type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->send_dms_media_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **attachment_media_id** | **str**|  | 
 **attachment_type** | **str**|  | [default to media]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **str**|  | 
 **text** | **str**|  | [default to (This message is sent by the best api tools twitter.utools.me)]
 **type** | **str**|  | [default to message_create]
 **quick_reply_type** | **str**| Returns results with an ID less than (that is, older than) or equal to the specified ID. | [optional] 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_dms_using_get**
> ResultT send_dms_using_get(api_key, auth_token, ct0, recipient_id, text, type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
recipient_id = 'recipient_id_example' # str | 
text = 'text_example' # str | 
type = 'message_create' # str |  (default to message_create)

try:
    # sendDMS events.
    api_response = api_instance.send_dms_using_get(api_key, auth_token, ct0, recipient_id, text, type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->send_dms_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **str**|  | 
 **text** | **str**|  | 
 **type** | **str**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_dms_using_post**
> ResultT send_dms_using_post(api_key, auth_token, ct0, recipient_id, text, type)

sendDMS events.

See details https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event<br>  how to get <b>auth_token and ct0</b>? <br> https://twitter.com/chen22218/status/1722138510680043555 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
recipient_id = 'recipient_id_example' # str | 
text = 'text_example' # str | 
type = 'message_create' # str |  (default to message_create)

try:
    # sendDMS events.
    api_response = api_instance.send_dms_using_post(api_key, auth_token, ct0, recipient_id, text, type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->send_dms_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **recipient_id** | **str**|  | 
 **text** | **str**|  | 
 **type** | **str**|  | [default to message_create]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_media_dm_using_get**
> ResultT upload_media_dm_using_get(api_key, auth_token, ct0, file)

upload media for DM 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
file = '/path/to/file.txt' # file | file

try:
    # upload media for DM 
    api_response = api_instance.upload_media_dm_using_get(api_key, auth_token, ct0, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->upload_media_dm_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **file**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_media_dm_using_post**
> ResultT upload_media_dm_using_post(api_key, auth_token, ct0, file)

upload media for DM 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterDMSApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
auth_token = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
ct0 = 'get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555' # str |  (default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555)
file = '/path/to/file.txt' # file | file

try:
    # upload media for DM 
    api_response = api_instance.upload_media_dm_using_post(api_key, auth_token, ct0, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterDMSApiToolsApi->upload_media_dm_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **auth_token** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **ct0** | **str**|  | [default to get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555]
 **file** | **file**| file | 

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

