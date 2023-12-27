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
    instance = new UtoolsTwitterToolsApi.TwitterDMSApiToolsApi();
  });

  describe('(package)', function() {
    describe('TwitterDMSApiToolsApi', function() {
      describe('getDMSListV2UsingGET', function() {
        it('should call getDMSListV2UsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getDMSListV2UsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var cursor = "-1";

          instance.getDMSListV2UsingGET(apiKey, authToken, ct0, cursor, function(error, data, response) {
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
      describe('getDMSListV2UsingPOST', function() {
        it('should call getDMSListV2UsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getDMSListV2UsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var cursor = "-1";

          instance.getDMSListV2UsingPOST(apiKey, authToken, ct0, cursor, function(error, data, response) {
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
      describe('getDMSUsingGET', function() {
        it('should call getDMSUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getDMSUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var id = "id_example";

          instance.getDMSUsingGET(apiKey, authToken, ct0, id, function(error, data, response) {
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
      describe('getDMSUsingPOST', function() {
        it('should call getDMSUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getDMSUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var id = "id_example";

          instance.getDMSUsingPOST(apiKey, authToken, ct0, id, function(error, data, response) {
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
      describe('sendDMSMediaUsingGET', function() {
        it('should call sendDMSMediaUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for sendDMSMediaUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var attachmentMediaId = "attachmentMediaId_example";
          var attachmentType = "media";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var recipientId = "recipientId_example";
          var text = "(This message is sent by the best api tools twitter.utools.me)";
          var type = "message_create";
          var opts = {};
          opts.quickReplyType = "quickReplyType_example";

          instance.sendDMSMediaUsingGET(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts, function(error, data, response) {
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
      describe('sendDMSMediaUsingPOST', function() {
        it('should call sendDMSMediaUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for sendDMSMediaUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var attachmentMediaId = "attachmentMediaId_example";
          var attachmentType = "media";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var recipientId = "recipientId_example";
          var text = "(This message is sent by the best api tools twitter.utools.me)";
          var type = "message_create";
          var opts = {};
          opts.quickReplyType = "quickReplyType_example";

          instance.sendDMSMediaUsingPOST(apiKey, attachmentMediaId, attachmentType, authToken, ct0, recipientId, text, type, opts, function(error, data, response) {
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
      describe('sendDMSUsingGET', function() {
        it('should call sendDMSUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for sendDMSUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var recipientId = "recipientId_example";
          var text = "text_example";
          var type = "message_create";

          instance.sendDMSUsingGET(apiKey, authToken, ct0, recipientId, text, type, function(error, data, response) {
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
      describe('sendDMSUsingPOST', function() {
        it('should call sendDMSUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for sendDMSUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var recipientId = "recipientId_example";
          var text = "text_example";
          var type = "message_create";

          instance.sendDMSUsingPOST(apiKey, authToken, ct0, recipientId, text, type, function(error, data, response) {
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
      describe('uploadMediaDMUsingGET', function() {
        it('should call uploadMediaDMUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadMediaDMUsingGET call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var file = "/path/to/file.txt";

          instance.uploadMediaDMUsingGET(apiKey, authToken, ct0, file, function(error, data, response) {
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
      describe('uploadMediaDMUsingPOST', function() {
        it('should call uploadMediaDMUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadMediaDMUsingPOST call and complete the assertions
          /*
          var apiKey = "your own apikey";
          var authToken = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var ct0 = "get it 1:from login API, 2:https://twitter.com/chen22218/status/1722138510680043555";
          var file = "/path/to/file.txt";

          instance.uploadMediaDMUsingPOST(apiKey, authToken, ct0, file, function(error, data, response) {
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