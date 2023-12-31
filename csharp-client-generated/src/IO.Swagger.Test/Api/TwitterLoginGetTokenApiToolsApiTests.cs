/* 
 * Utools_twitter_tools_api
 *
 * X (Twitter) API for search, Tweets, users, followers, images, media and more. Supports some v1.1 and v2 API endpoints, with more to come in the future!
 *
 * OpenAPI spec version: 1.1
 * Contact: huojiecs@gmail.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing TwitterLoginGetTokenApiToolsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class TwitterLoginGetTokenApiToolsApiTests
    {
        private TwitterLoginGetTokenApiToolsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new TwitterLoginGetTokenApiToolsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of TwitterLoginGetTokenApiToolsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' TwitterLoginGetTokenApiToolsApi
            //Assert.IsInstanceOfType(typeof(TwitterLoginGetTokenApiToolsApi), instance, "instance is a TwitterLoginGetTokenApiToolsApi");
        }

        
        /// <summary>
        /// Test Login2FAUsingGET
        /// </summary>
        [Test]
        public void Login2FAUsingGETTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string apiKey = null;
            //string code = null;
            //var response = instance.Login2FAUsingGET(apiKey, code);
            //Assert.IsInstanceOf<ResultT> (response, "response is ResultT");
        }
        
        /// <summary>
        /// Test Login2FAUsingPOST
        /// </summary>
        [Test]
        public void Login2FAUsingPOSTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string apiKey = null;
            //string code = null;
            //var response = instance.Login2FAUsingPOST(apiKey, code);
            //Assert.IsInstanceOf<ResultT> (response, "response is ResultT");
        }
        
        /// <summary>
        /// Test LoginUsingGET
        /// </summary>
        [Test]
        public void LoginUsingGETTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string apiKey = null;
            //string email = null;
            //string password = null;
            //string screenName = null;
            //var response = instance.LoginUsingGET(apiKey, email, password, screenName);
            //Assert.IsInstanceOf<ResultT> (response, "response is ResultT");
        }
        
        /// <summary>
        /// Test LoginUsingPOST
        /// </summary>
        [Test]
        public void LoginUsingPOSTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string apiKey = null;
            //string email = null;
            //string password = null;
            //string screenName = null;
            //var response = instance.LoginUsingPOST(apiKey, email, password, screenName);
            //Assert.IsInstanceOf<ResultT> (response, "response is ResultT");
        }
        
    }

}
