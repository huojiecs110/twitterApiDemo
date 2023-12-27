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
    instance = new UtoolsTwitterToolsApi.TwitterUsersApiToolsApi();
  });

  describe('(package)', function() {
    describe('TwitterUsersApiToolsApi', function() {
      describe('blocksCreateUsingGET', function() {
        it('should call blocksCreateUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for blocksCreateUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.screenName = "screenName_example";
          opts.userId = "1574242047661207552";

          instance.blocksCreateUsingGET(apiKey, authToken, ct0, opts, function(error, data, response) {
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
      describe('blocksCreateUsingPOST', function() {
        it('should call blocksCreateUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for blocksCreateUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.screenName = "screenName_example";
          opts.userId = "1574242047661207552";

          instance.blocksCreateUsingPOST(apiKey, authToken, ct0, opts, function(error, data, response) {
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
      describe('blocksDestroyUsingGET', function() {
        it('should call blocksDestroyUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for blocksDestroyUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.screenName = "screenName_example";
          opts.userId = "44196397";

          instance.blocksDestroyUsingGET(apiKey, authToken, ct0, opts, function(error, data, response) {
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
      describe('blocksDestroyUsingPOST', function() {
        it('should call blocksDestroyUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for blocksDestroyUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var opts = {};
          opts.screenName = "screenName_example";
          opts.userId = "44196397";

          instance.blocksDestroyUsingPOST(apiKey, authToken, ct0, opts, function(error, data, response) {
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
      describe('getListByUserIdOrScreenNameUsingGET', function() {
        it('should call getListByUserIdOrScreenNameUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getListByUserIdOrScreenNameUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getListByUserIdOrScreenNameUsingGET(apiKey, opts, function(error, data, response) {
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
      describe('getListByUserIdOrScreenNameUsingPOST', function() {
        it('should call getListByUserIdOrScreenNameUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getListByUserIdOrScreenNameUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getListByUserIdOrScreenNameUsingPOST(apiKey, opts, function(error, data, response) {
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
      describe('getListMembersByListIdUsingGET', function() {
        it('should call getListMembersByListIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getListMembersByListIdUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var listId = "1453837432479227913";
          var opts = {};
          opts.cursor = "-1";

          instance.getListMembersByListIdUsingGET(apiKey, listId, opts, function(error, data, response) {
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
      describe('getListMembersByListIdUsingPOST', function() {
        it('should call getListMembersByListIdUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getListMembersByListIdUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var listId = "1453837432479227913";
          var opts = {};
          opts.cursor = "-1";

          instance.getListMembersByListIdUsingPOST(apiKey, listId, opts, function(error, data, response) {
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
      describe('getUserByIdOrNameLookUpUsingGET', function() {
        it('should call getUserByIdOrNameLookUpUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByIdOrNameLookUpUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getUserByIdOrNameLookUpUsingGET(apiKey, opts, function(error, data, response) {
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
      describe('getUserByIdOrNameLookUpUsingPOST', function() {
        it('should call getUserByIdOrNameLookUpUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByIdOrNameLookUpUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getUserByIdOrNameLookUpUsingPOST(apiKey, opts, function(error, data, response) {
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
      describe('getUserByIdOrNameShowUsingGET', function() {
        it('should call getUserByIdOrNameShowUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByIdOrNameShowUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getUserByIdOrNameShowUsingGET(apiKey, opts, function(error, data, response) {
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
      describe('getUserByIdOrNameShowUsingPOST', function() {
        it('should call getUserByIdOrNameShowUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByIdOrNameShowUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var opts = {};
          opts.screenName = "elonmusk";
          opts.userId = "1574242047661207552";

          instance.getUserByIdOrNameShowUsingPOST(apiKey, opts, function(error, data, response) {
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
      describe('uerByIdRestIdV2UsingGET', function() {
        it('should call uerByIdRestIdV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for uerByIdRestIdV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.uerByIdRestIdV2UsingGET(apiKey, userId, opts, function(error, data, response) {
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
      describe('uerByIdRestIdV2UsingPOST', function() {
        it('should call uerByIdRestIdV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for uerByIdRestIdV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.uerByIdRestIdV2UsingPOST(apiKey, userId, opts, function(error, data, response) {
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
      describe('userByScreenNameV2UsingGET', function() {
        it('should call userByScreenNameV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for userByScreenNameV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var screenName = "pWP5s7zypwvCwJp";

          instance.userByScreenNameV2UsingGET(apiKey, screenName, function(error, data, response) {
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
      describe('userByScreenNameV2UsingPOST', function() {
        it('should call userByScreenNameV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for userByScreenNameV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var screenName = "pWP5s7zypwvCwJp";

          instance.userByScreenNameV2UsingPOST(apiKey, screenName, function(error, data, response) {
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
      describe('userTimelineUsingGET', function() {
        it('should call userTimelineUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for userTimelineUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTimelineUsingGET(apiKey, userId, opts, function(error, data, response) {
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
      describe('userTimelineUsingPOST', function() {
        it('should call userTimelineUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for userTimelineUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTimelineUsingPOST(apiKey, userId, opts, function(error, data, response) {
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
      describe('userTweetsV2UsingGET', function() {
        it('should call userTweetsV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for userTweetsV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTweetsV2UsingGET(apiKey, userId, opts, function(error, data, response) {
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
      describe('userTweetsV2UsingPOST', function() {
        it('should call userTweetsV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for userTweetsV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var userId = "1574242047661207552";
          var opts = {};
          opts.cursor = "-1";

          instance.userTweetsV2UsingPOST(apiKey, userId, opts, function(error, data, response) {
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