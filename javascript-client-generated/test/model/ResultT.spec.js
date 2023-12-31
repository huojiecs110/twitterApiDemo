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

  describe('(package)', function() {
    describe('ResultT', function() {
      beforeEach(function() {
        instance = new UtoolsTwitterToolsApi.ResultT();
      });

      it('should create an instance of ResultT', function() {
        // TODO: update the code to test ResultT
        expect(instance).to.be.a(UtoolsTwitterToolsApi.ResultT);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property msg (base name: "msg")', function() {
        // TODO: update the code to test the property msg
        expect(instance).to.have.property('msg');
        // expect(instance.msg).to.be(expectedValueLiteral);
      });

    });
  });

}));
