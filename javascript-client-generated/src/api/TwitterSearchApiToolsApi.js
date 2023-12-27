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
    root.UtoolsTwitterToolsApi.TwitterSearchApiToolsApi = factory(root.UtoolsTwitterToolsApi.ApiClient, root.UtoolsTwitterToolsApi.ResultT);
  }
}(this, function(ApiClient, ResultT) {
  'use strict';

  /**
   * TwitterSearchApiTools service.
   * @module api/TwitterSearchApiToolsApi
   * @version 1.1
   */

  /**
   * Constructs a new TwitterSearchApiToolsApi. 
   * @alias module:api/TwitterSearchApiToolsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the searchUsingGET operation.
     * @callback module:api/TwitterSearchApiToolsApi~searchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Advanced Search
     * @param {String} apiKey 
     * @param {String} words 
     * @param {Object} opts Optional parameters
     * @param {String} opts.any Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
     * @param {String} opts.cursor cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
     * @param {String} opts.from From these accounts (Example: @Twitter �� sent from @Twitter)
     * @param {String} opts.likes Minimum likes (Example: 280 �� Tweets with at least 280 likes))
     * @param {String} opts.mentioning Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
     * @param {String} opts.none None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
     * @param {String} opts.phrase This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
     * @param {String} opts.replies Minimum replies (Example: 280 �� Tweets with at least 280 replies)
     * @param {String} opts.retweets Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
     * @param {String} opts.since start time (Example: 2020-01-01 )
     * @param {String} opts.tag These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
     * @param {String} opts.to To these accounts (Example: @Twitter �� sent in reply to @Twitter)
     * @param {String} opts.until end time (Example: 2021-02-02)
     * @param {module:api/TwitterSearchApiToolsApi~searchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.searchUsingGET = function(apiKey, words, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling searchUsingGET");
      }

      // verify the required parameter 'words' is set
      if (words === undefined || words === null) {
        throw new Error("Missing the required parameter 'words' when calling searchUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'any': opts['any'],
        'apiKey': apiKey,
        'cursor': opts['cursor'],
        'from': opts['from'],
        'likes': opts['likes'],
        'mentioning': opts['mentioning'],
        'none': opts['none'],
        'phrase': opts['phrase'],
        'replies': opts['replies'],
        'retweets': opts['retweets'],
        'since': opts['since'],
        'tag': opts['tag'],
        'to': opts['to'],
        'until': opts['until'],
        'words': words,
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
        '/base/apitools/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingPOST operation.
     * @callback module:api/TwitterSearchApiToolsApi~searchUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Advanced Search
     * @param {String} apiKey 
     * @param {String} words 
     * @param {Object} opts Optional parameters
     * @param {String} opts.any Any of these words (Example: cats dogs �� contains either ��cats�� or ��dogs�� (or both))
     * @param {String} opts.cursor cursor (Example: AACCgACF91iNpzAJxAKAAMX3WI2nL-x4AgABAAAAA )
     * @param {String} opts.from From these accounts (Example: @Twitter �� sent from @Twitter)
     * @param {String} opts.likes Minimum likes (Example: 280 �� Tweets with at least 280 likes))
     * @param {String} opts.mentioning Mentioning these accounts (Example: @SFBART @Caltrain �� mentions @SFBART or mentions @Caltrain)
     * @param {String} opts.none None of these words (Example: cats dogs �� does not contain ��cats�� and does not contain ��dogs��)
     * @param {String} opts.phrase This exact phrase (Example: happy hour �� contains the exact phrase ��happy hour��)
     * @param {String} opts.replies Minimum replies (Example: 280 �� Tweets with at least 280 replies)
     * @param {String} opts.retweets Minimum retweets (Example: 280 �� Tweets with at least 280 likes)
     * @param {String} opts.since start time (Example: 2020-01-01 )
     * @param {String} opts.tag These hashtags (Example: #ThrowbackThursday �� contains the hashtag #ThrowbackThursday)
     * @param {String} opts.to To these accounts (Example: @Twitter �� sent in reply to @Twitter)
     * @param {String} opts.until end time (Example: 2021-02-02)
     * @param {module:api/TwitterSearchApiToolsApi~searchUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.searchUsingPOST = function(apiKey, words, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling searchUsingPOST");
      }

      // verify the required parameter 'words' is set
      if (words === undefined || words === null) {
        throw new Error("Missing the required parameter 'words' when calling searchUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'any': opts['any'],
        'apiKey': apiKey,
        'cursor': opts['cursor'],
        'from': opts['from'],
        'likes': opts['likes'],
        'mentioning': opts['mentioning'],
        'none': opts['none'],
        'phrase': opts['phrase'],
        'replies': opts['replies'],
        'retweets': opts['retweets'],
        'since': opts['since'],
        'tag': opts['tag'],
        'to': opts['to'],
        'until': opts['until'],
        'words': words,
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
        '/base/apitools/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trendsUsingGET operation.
     * @callback module:api/TwitterSearchApiToolsApi~trendsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * trends Search
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place
     * @param {String} apiKey 
     * @param {String} id 
     * @param {module:api/TwitterSearchApiToolsApi~trendsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.trendsUsingGET = function(apiKey, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling trendsUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trendsUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
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
        '/base/apitools/trends', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trendsUsingPOST operation.
     * @callback module:api/TwitterSearchApiToolsApi~trendsUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * trends Search
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place
     * @param {String} apiKey 
     * @param {String} id 
     * @param {module:api/TwitterSearchApiToolsApi~trendsUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultT}
     */
    this.trendsUsingPOST = function(apiKey, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling trendsUsingPOST");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trendsUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey,
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
        '/base/apitools/trends', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));