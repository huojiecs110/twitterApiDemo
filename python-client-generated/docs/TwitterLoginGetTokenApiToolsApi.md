# swagger_client.TwitterLoginGetTokenApiToolsApi

All URIs are relative to *https://twitter.utools.me/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login2_fa_using_get**](TwitterLoginGetTokenApiToolsApi.md#login2_fa_using_get) | **GET** /base/apitools/login2FA | login by code
[**login2_fa_using_post**](TwitterLoginGetTokenApiToolsApi.md#login2_fa_using_post) | **POST** /base/apitools/login2FA | login by code
[**login_using_get**](TwitterLoginGetTokenApiToolsApi.md#login_using_get) | **GET** /base/apitools/login | login by userName and passwrd
[**login_using_post**](TwitterLoginGetTokenApiToolsApi.md#login_using_post) | **POST** /base/apitools/login | login by userName and passwrd


# **login2_fa_using_get**
> ResultT login2_fa_using_get(api_key, code)

login by code

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterLoginGetTokenApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
code = 'elonmusk' # str |  (default to elonmusk)

try:
    # login by code
    api_response = api_instance.login2_fa_using_get(api_key, code)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterLoginGetTokenApiToolsApi->login2_fa_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **code** | **str**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login2_fa_using_post**
> ResultT login2_fa_using_post(api_key, code)

login by code

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterLoginGetTokenApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
code = 'elonmusk' # str |  (default to elonmusk)

try:
    # login by code
    api_response = api_instance.login2_fa_using_post(api_key, code)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterLoginGetTokenApiToolsApi->login2_fa_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **code** | **str**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_using_get**
> ResultT login_using_get(api_key, email, password, screen_name)

login by userName and passwrd

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterLoginGetTokenApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
email = 'elonmusk@gmail.com' # str |  (default to elonmusk@gmail.com)
password = 'tesla' # str |  (default to tesla)
screen_name = 'elonmusk' # str |  (default to elonmusk)

try:
    # login by userName and passwrd
    api_response = api_instance.login_using_get(api_key, email, password, screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterLoginGetTokenApiToolsApi->login_using_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **email** | **str**|  | [default to elonmusk@gmail.com]
 **password** | **str**|  | [default to tesla]
 **screen_name** | **str**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_using_post**
> ResultT login_using_post(api_key, email, password, screen_name)

login by userName and passwrd

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TwitterLoginGetTokenApiToolsApi()
api_key = 'your own apikey' # str |  (default to your own apikey)
email = 'elonmusk@gmail.com' # str |  (default to elonmusk@gmail.com)
password = 'tesla' # str |  (default to tesla)
screen_name = 'elonmusk' # str |  (default to elonmusk)

try:
    # login by userName and passwrd
    api_response = api_instance.login_using_post(api_key, email, password, screen_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TwitterLoginGetTokenApiToolsApi->login_using_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [default to your own apikey]
 **email** | **str**|  | [default to elonmusk@gmail.com]
 **password** | **str**|  | [default to tesla]
 **screen_name** | **str**|  | [default to elonmusk]

### Return type

[**ResultT**](ResultT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

