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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UtoolsTwitterToolsApi);
  }
}(this, function(expect, UtoolsTwitterToolsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UtoolsTwitterToolsApi.TwitterGetTweesApiToolsApi();
  });

  describe('(package)', function() {
    describe('TwitterGetTweesApiToolsApi', function() {
      describe('favoritersV2UsingGET', function() {
        it('should call favoritersV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for favoritersV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.favoritersV2UsingGET(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('favoritersV2UsingPOST', function() {
        it('should call favoritersV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for favoritersV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.favoritersV2UsingPOST(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('favoritesListUsingGET', function() {
        it('should call favoritesListUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for favoritesListUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.maxId = "maxId_example";
          opts.screenName = "elonmusk";
          opts.sinceId = "sinceId_example";

          instance.favoritesListUsingGET(apiKey, userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('favoritesListUsingPOST', function() {
        it('should call favoritesListUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for favoritesListUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.maxId = "maxId_example";
          opts.screenName = "elonmusk";
          opts.sinceId = "sinceId_example";

          instance.favoritesListUsingPOST(apiKey, userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mentionsTimelineUsingGET', function() {
        it('should call mentionsTimelineUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for mentionsTimelineUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.includeEntities = "false";
          opts.maxId = "maxId_example";
          opts.sinceId = "sinceId_example";
          opts.trimUser = "true";

          instance.mentionsTimelineUsingGET(apiKey, authToken, ct0, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mentionsTimelineUsingPOST', function() {
        it('should call mentionsTimelineUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for mentionsTimelineUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.includeEntities = "false";
          opts.maxId = "maxId_example";
          opts.sinceId = "sinceId_example";
          opts.trimUser = "true";

          instance.mentionsTimelineUsingPOST(apiKey, authToken, ct0, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('quotesV2UsingGET', function() {
        it('should call quotesV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for quotesV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.quotesV2UsingGET(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('quotesV2UsingPOST', function() {
        it('should call quotesV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for quotesV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.quotesV2UsingPOST(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('retweetersIdsUsingGET', function() {
        it('should call retweetersIdsUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for retweetersIdsUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.retweetersIdsUsingGET(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('retweetersIdsUsingPOST', function() {
        it('should call retweetersIdsUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for retweetersIdsUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.retweetersIdsUsingPOST(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('retweetersV2UsingGET', function() {
        it('should call retweetersV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for retweetersV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.retweetersV2UsingGET(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('retweetersV2UsingPOST', function() {
        it('should call retweetersV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for retweetersV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var tweetId = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.retweetersV2UsingPOST(apiKey, tweetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tweetSimpleUsingGET', function() {
        it('should call tweetSimpleUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for tweetSimpleUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.tweetSimpleUsingGET(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tweetSimpleUsingPOST', function() {
        it('should call tweetSimpleUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for tweetSimpleUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.tweetSimpleUsingPOST(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tweetTimelineUsingGET', function() {
        it('should call tweetTimelineUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for tweetTimelineUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.tweetTimelineUsingGET(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tweetTimelineUsingPOST', function() {
        it('should call tweetTimelineUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for tweetTimelineUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var id = "1722138510680043555";
          var opts = {};
          opts.cursor = "-1";

          instance.tweetTimelineUsingPOST(apiKey, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userTweetReplyUsingGET', function() {
        it('should call userTweetReplyUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for userTweetReplyUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTweetReplyUsingGET(apiKey, userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userTweetReplyUsingPOST', function() {
        it('should call userTweetReplyUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for userTweetReplyUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTweetReplyUsingPOST(apiKey, userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UtoolsTwitterToolsApi.ResultT);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            expect(data.msg).to.be.a('string');
            expect(data.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
