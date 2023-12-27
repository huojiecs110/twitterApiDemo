/*
 * Utools_twitter_tools_api
 * X (Twitter) API for search, Tweets, users, followers, images, media and more. Supports some v1.1 and v2 API endpoints, with more to come in the future!
 *
 * OpenAPI spec version: 1.1
 * Contact: huojiecs@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.37
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResultT'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResultT'));
  } else {
    // Browser globals (root is window)
    if (!root.UtoolsTwitterToolsApi) {
      root.UtoolsTwitterToolsApi = {};
    }
    root.UtoolsTwitterToolsApi.TwitterSendTweesApiToolsApi = factory(root.UtoolsTwitterToolsApi.ApiClient, root.UtoolsTwitterToolsApi.ResultT);
  }
}(this, function(ApiClient, ResultT) {
  'use strict';

  /**
   * TwitterSendTweesApiTools service.
   * @module api/TwitterSendTweesApiToolsApi
   * @version 1.1
   */

  /**
   * Constructs a new TwitterSendTweesApiToolsApi. 
   * @alias module:api/TwitterSendTweesApiToolsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRetweetUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~createRetweetUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retweet a Tweet
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} tweetId 
     * @param {module:api/TwitterSendTweesApiToolsApi~createRetweetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.createRetweetUsingGET = function(apiKey, authToken, ct0, tweetId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createRetweetUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling createRetweetUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling createRetweetUsingGET");
      }

      // verify the required parameter 'tweetId' is set
      if (tweetId === undefined || tweetId === null) {
        throw new Error("Missing the required parameter 'tweetId' when calling createRetweetUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'tweetId': tweetId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/createRetweet', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRetweetUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~createRetweetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retweet a Tweet
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} tweetId 
     * @param {module:api/TwitterSendTweesApiToolsApi~createRetweetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.createRetweetUsingPOST = function(apiKey, authToken, ct0, tweetId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createRetweetUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling createRetweetUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling createRetweetUsingPOST");
      }

      // verify the required parameter 'tweetId' is set
      if (tweetId === undefined || tweetId === null) {
        throw new Error("Missing the required parameter 'tweetId' when calling createRetweetUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'tweetId': tweetId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/createRetweet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTweetUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~createTweetUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a Tweet
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} text 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.medias medias ids
     * @param {module:api/TwitterSendTweesApiToolsApi~createTweetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.createTweetUsingGET = function(apiKey, authToken, ct0, text, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createTweetUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling createTweetUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling createTweetUsingGET");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling createTweetUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'text': text,
      };
      var collectionQueryParams = {
        'medias': {
          value: opts['medias'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/createTweet', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTweetUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~createTweetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a Tweet
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} text 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.medias medias ids
     * @param {module:api/TwitterSendTweesApiToolsApi~createTweetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.createTweetUsingPOST = function(apiKey, authToken, ct0, text, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createTweetUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling createTweetUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling createTweetUsingPOST");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling createTweetUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'text': text,
      };
      var collectionQueryParams = {
        'medias': {
          value: opts['medias'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/createTweet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the likeTweetUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~likeTweetUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * like(favorites) Tweet
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} id 
     * @param {module:api/TwitterSendTweesApiToolsApi~likeTweetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.likeTweetUsingGET = function(apiKey, authToken, ct0, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling likeTweetUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling likeTweetUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling likeTweetUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling likeTweetUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/likeTweet', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the likeTweetUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~likeTweetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * like(favorites) Tweet
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} id 
     * @param {module:api/TwitterSendTweesApiToolsApi~likeTweetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.likeTweetUsingPOST = function(apiKey, authToken, ct0, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling likeTweetUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling likeTweetUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling likeTweetUsingPOST");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling likeTweetUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/likeTweet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tweetReplyUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~tweetReplyUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reply to tweet 
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} text 
     * @param {String} tweetId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.medias medias ids
     * @param {module:api/TwitterSendTweesApiToolsApi~tweetReplyUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.tweetReplyUsingGET = function(apiKey, authToken, ct0, text, tweetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling tweetReplyUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling tweetReplyUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling tweetReplyUsingGET");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling tweetReplyUsingGET");
      }

      // verify the required parameter 'tweetId' is set
      if (tweetId === undefined || tweetId === null) {
        throw new Error("Missing the required parameter 'tweetId' when calling tweetReplyUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'text': text,
        'tweetId': tweetId,
      };
      var collectionQueryParams = {
        'medias': {
          value: opts['medias'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/tweetReply', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tweetReplyUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~tweetReplyUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reply to tweet 
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} text 
     * @param {String} tweetId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.medias medias ids
     * @param {module:api/TwitterSendTweesApiToolsApi~tweetReplyUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.tweetReplyUsingPOST = function(apiKey, authToken, ct0, text, tweetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling tweetReplyUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling tweetReplyUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling tweetReplyUsingPOST");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling tweetReplyUsingPOST");
      }

      // verify the required parameter 'tweetId' is set
      if (tweetId === undefined || tweetId === null) {
        throw new Error("Missing the required parameter 'tweetId' when calling tweetReplyUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'text': text,
        'tweetId': tweetId,
      };
      var collectionQueryParams = {
        'medias': {
          value: opts['medias'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/tweetReply', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unlikeTweetUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~unlikeTweetUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unlike(unfavorites) Tweet
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} id 
     * @param {module:api/TwitterSendTweesApiToolsApi~unlikeTweetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.unlikeTweetUsingGET = function(apiKey, authToken, ct0, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling unlikeTweetUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling unlikeTweetUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling unlikeTweetUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unlikeTweetUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/unlikeTweet', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unlikeTweetUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~unlikeTweetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unlike(unfavorites) Tweet
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} id 
     * @param {module:api/TwitterSendTweesApiToolsApi~unlikeTweetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.unlikeTweetUsingPOST = function(apiKey, authToken, ct0, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling unlikeTweetUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling unlikeTweetUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling unlikeTweetUsingPOST");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unlikeTweetUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/unlikeTweet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMediaUsingGET operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~uploadMediaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * upload media (gif)
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} mediaUrl 
     * @param {module:api/TwitterSendTweesApiToolsApi~uploadMediaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.uploadMediaUsingGET = function(apiKey, authToken, ct0, mediaUrl, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling uploadMediaUsingGET");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling uploadMediaUsingGET");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling uploadMediaUsingGET");
      }

      // verify the required parameter 'mediaUrl' is set
      if (mediaUrl === undefined || mediaUrl === null) {
        throw new Error("Missing the required parameter 'mediaUrl' when calling uploadMediaUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'media_url': mediaUrl,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/uploadMedia', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMediaUsingPOST operation.
     * @callback module:api/TwitterSendTweesApiToolsApi~uploadMediaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * upload media (gif)
     * @param {String} apiKey 
     * @param {String} authToken 
     * @param {String} ct0 
     * @param {String} mediaUrl 
     * @param {module:api/TwitterSendTweesApiToolsApi~uploadMediaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.uploadMediaUsingPOST = function(apiKey, authToken, ct0, mediaUrl, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling uploadMediaUsingPOST");
      }

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling uploadMediaUsingPOST");
      }

      // verify the required parameter 'ct0' is set
      if (ct0 === undefined || ct0 === null) {
        throw new Error("Missing the required parameter 'ct0' when calling uploadMediaUsingPOST");
      }

      // verify the required parameter 'mediaUrl' is set
      if (mediaUrl === undefined || mediaUrl === null) {
        throw new Error("Missing the required parameter 'mediaUrl' when calling uploadMediaUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
        'auth_token': authToken,
        'ct0': ct0,
        'media_url': mediaUrl,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResultT;

      return this.apiClient.callApi(
        '/base/apitools/uploadMedia', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
