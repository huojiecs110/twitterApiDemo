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

import io.swagger.client.model.ResultT;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TwitterLoginGetTokenApiToolsApi
 */
@Ignore
public class TwitterLoginGetTokenApiToolsApiTest {

    private final TwitterLoginGetTokenApiToolsApi api = new TwitterLoginGetTokenApiToolsApi();

    
    /**
     * login by code
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void login2FAUsingGETTest() throws Exception {
        String apiKey = null;
        String code = null;
        ResultT response = api.login2FAUsingGET(apiKey, code);

        // TODO: test validations
    }
    
    /**
     * login by code
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void login2FAUsingPOSTTest() throws Exception {
        String apiKey = null;
        String code = null;
        ResultT response = api.login2FAUsingPOST(apiKey, code);

        // TODO: test validations
    }
    
    /**
     * login by userName and passwrd
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void loginUsingGETTest() throws Exception {
        String apiKey = null;
        String email = null;
        String password = null;
        String screenName = null;
        ResultT response = api.loginUsingGET(apiKey, email, password, screenName);

        // TODO: test validations
    }
    
    /**
     * login by userName and passwrd
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void loginUsingPOSTTest() throws Exception {
        String apiKey = null;
        String email = null;
        String password = null;
        String screenName = null;
        ResultT response = api.loginUsingPOST(apiKey, email, password, screenName);

        // TODO: test validations
    }
    
}
