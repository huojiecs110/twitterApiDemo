/*
 * Utools_twitter_tools_api
 * X (Twitter) API for search, Tweets, users, followers, images, media and more. Supports some v1.1 and v2 API endpoints, with more to come in the future!
 *
 * OpenAPI spec version: 1.1
 * Contact: huojiecs@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiCallback;
import io.swagger.client.ApiClient;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.Configuration;
import io.swagger.client.Pair;
import io.swagger.client.ProgressRequestBody;
import io.swagger.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.swagger.client.model.ResultT;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TwitterLoginGetTokenApiToolsApi {
    private ApiClient apiClient;

    public TwitterLoginGetTokenApiToolsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public TwitterLoginGetTokenApiToolsApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for login2FAUsingGET
     * @param apiKey  (required)
     * @param code  (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call login2FAUsingGETCall(String apiKey, String code, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/base/apitools/login2FA";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (apiKey != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("apiKey", apiKey));
        if (code != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("code", code));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call login2FAUsingGETValidateBeforeCall(String apiKey, String code, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'apiKey' is set
        if (apiKey == null) {
            throw new ApiException("Missing the required parameter 'apiKey' when calling login2FAUsingGET(Async)");
        }
        
        // verify the required parameter 'code' is set
        if (code == null) {
            throw new ApiException("Missing the required parameter 'code' when calling login2FAUsingGET(Async)");
        }
        

        com.squareup.okhttp.Call call = login2FAUsingGETCall(apiKey, code, progressListener, progressRequestListener);
        return call;

    }

    /**
     * login by code
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @return ResultT
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ResultT login2FAUsingGET(String apiKey, String code) throws ApiException {
        ApiResponse<ResultT> resp = login2FAUsingGETWithHttpInfo(apiKey, code);
        return resp.getData();
    }

    /**
     * login by code
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @return ApiResponse&lt;ResultT&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<ResultT> login2FAUsingGETWithHttpInfo(String apiKey, String code) throws ApiException {
        com.squareup.okhttp.Call call = login2FAUsingGETValidateBeforeCall(apiKey, code, null, null);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * login by code (asynchronously)
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call login2FAUsingGETAsync(String apiKey, String code, final ApiCallback<ResultT> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = login2FAUsingGETValidateBeforeCall(apiKey, code, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for login2FAUsingPOST
     * @param apiKey  (required)
     * @param code  (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call login2FAUsingPOSTCall(String apiKey, String code, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/base/apitools/login2FA";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (apiKey != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("apiKey", apiKey));
        if (code != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("code", code));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call login2FAUsingPOSTValidateBeforeCall(String apiKey, String code, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'apiKey' is set
        if (apiKey == null) {
            throw new ApiException("Missing the required parameter 'apiKey' when calling login2FAUsingPOST(Async)");
        }
        
        // verify the required parameter 'code' is set
        if (code == null) {
            throw new ApiException("Missing the required parameter 'code' when calling login2FAUsingPOST(Async)");
        }
        

        com.squareup.okhttp.Call call = login2FAUsingPOSTCall(apiKey, code, progressListener, progressRequestListener);
        return call;

    }

    /**
     * login by code
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @return ResultT
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ResultT login2FAUsingPOST(String apiKey, String code) throws ApiException {
        ApiResponse<ResultT> resp = login2FAUsingPOSTWithHttpInfo(apiKey, code);
        return resp.getData();
    }

    /**
     * login by code
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @return ApiResponse&lt;ResultT&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<ResultT> login2FAUsingPOSTWithHttpInfo(String apiKey, String code) throws ApiException {
        com.squareup.okhttp.Call call = login2FAUsingPOSTValidateBeforeCall(apiKey, code, null, null);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * login by code (asynchronously)
     * 
     * @param apiKey  (required)
     * @param code  (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call login2FAUsingPOSTAsync(String apiKey, String code, final ApiCallback<ResultT> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = login2FAUsingPOSTValidateBeforeCall(apiKey, code, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for loginUsingGET
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call loginUsingGETCall(String apiKey, String email, String password, String screenName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/base/apitools/login";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (apiKey != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("apiKey", apiKey));
        if (email != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("email", email));
        if (password != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("password", password));
        if (screenName != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("screenName", screenName));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call loginUsingGETValidateBeforeCall(String apiKey, String email, String password, String screenName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'apiKey' is set
        if (apiKey == null) {
            throw new ApiException("Missing the required parameter 'apiKey' when calling loginUsingGET(Async)");
        }
        
        // verify the required parameter 'email' is set
        if (email == null) {
            throw new ApiException("Missing the required parameter 'email' when calling loginUsingGET(Async)");
        }
        
        // verify the required parameter 'password' is set
        if (password == null) {
            throw new ApiException("Missing the required parameter 'password' when calling loginUsingGET(Async)");
        }
        
        // verify the required parameter 'screenName' is set
        if (screenName == null) {
            throw new ApiException("Missing the required parameter 'screenName' when calling loginUsingGET(Async)");
        }
        

        com.squareup.okhttp.Call call = loginUsingGETCall(apiKey, email, password, screenName, progressListener, progressRequestListener);
        return call;

    }

    /**
     * login by userName and passwrd
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @return ResultT
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ResultT loginUsingGET(String apiKey, String email, String password, String screenName) throws ApiException {
        ApiResponse<ResultT> resp = loginUsingGETWithHttpInfo(apiKey, email, password, screenName);
        return resp.getData();
    }

    /**
     * login by userName and passwrd
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @return ApiResponse&lt;ResultT&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<ResultT> loginUsingGETWithHttpInfo(String apiKey, String email, String password, String screenName) throws ApiException {
        com.squareup.okhttp.Call call = loginUsingGETValidateBeforeCall(apiKey, email, password, screenName, null, null);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * login by userName and passwrd (asynchronously)
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call loginUsingGETAsync(String apiKey, String email, String password, String screenName, final ApiCallback<ResultT> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = loginUsingGETValidateBeforeCall(apiKey, email, password, screenName, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for loginUsingPOST
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call loginUsingPOSTCall(String apiKey, String email, String password, String screenName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/base/apitools/login";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (apiKey != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("apiKey", apiKey));
        if (email != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("email", email));
        if (password != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("password", password));
        if (screenName != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("screenName", screenName));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {  };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call loginUsingPOSTValidateBeforeCall(String apiKey, String email, String password, String screenName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'apiKey' is set
        if (apiKey == null) {
            throw new ApiException("Missing the required parameter 'apiKey' when calling loginUsingPOST(Async)");
        }
        
        // verify the required parameter 'email' is set
        if (email == null) {
            throw new ApiException("Missing the required parameter 'email' when calling loginUsingPOST(Async)");
        }
        
        // verify the required parameter 'password' is set
        if (password == null) {
            throw new ApiException("Missing the required parameter 'password' when calling loginUsingPOST(Async)");
        }
        
        // verify the required parameter 'screenName' is set
        if (screenName == null) {
            throw new ApiException("Missing the required parameter 'screenName' when calling loginUsingPOST(Async)");
        }
        

        com.squareup.okhttp.Call call = loginUsingPOSTCall(apiKey, email, password, screenName, progressListener, progressRequestListener);
        return call;

    }

    /**
     * login by userName and passwrd
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @return ResultT
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ResultT loginUsingPOST(String apiKey, String email, String password, String screenName) throws ApiException {
        ApiResponse<ResultT> resp = loginUsingPOSTWithHttpInfo(apiKey, email, password, screenName);
        return resp.getData();
    }

    /**
     * login by userName and passwrd
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @return ApiResponse&lt;ResultT&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<ResultT> loginUsingPOSTWithHttpInfo(String apiKey, String email, String password, String screenName) throws ApiException {
        com.squareup.okhttp.Call call = loginUsingPOSTValidateBeforeCall(apiKey, email, password, screenName, null, null);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * login by userName and passwrd (asynchronously)
     * 
     * @param apiKey  (required)
     * @param email  (required)
     * @param password  (required)
     * @param screenName  (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call loginUsingPOSTAsync(String apiKey, String email, String password, String screenName, final ApiCallback<ResultT> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = loginUsingPOSTValidateBeforeCall(apiKey, email, password, screenName, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<ResultT>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
