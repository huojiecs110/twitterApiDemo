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
 * API tests for TwitterSendTweesApiToolsApi
 */
@Ignore
public class TwitterSendTweesApiToolsApiTest {

    private final TwitterSendTweesApiToolsApi api = new TwitterSendTweesApiToolsApi();

    
    /**
     * retweet a Tweet
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void createRetweetUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String tweetId = null;
        ResultT response = api.createRetweetUsingGET(apiKey, authToken, ct0, tweetId);

        // TODO: test validations
    }
    
    /**
     * retweet a Tweet
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void createRetweetUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String tweetId = null;
        ResultT response = api.createRetweetUsingPOST(apiKey, authToken, ct0, tweetId);

        // TODO: test validations
    }
    
    /**
     * create a Tweet
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void createTweetUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String text = null;
        List<String> medias = null;
        ResultT response = api.createTweetUsingGET(apiKey, authToken, ct0, text, medias);

        // TODO: test validations
    }
    
    /**
     * create a Tweet
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void createTweetUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String text = null;
        List<String> medias = null;
        ResultT response = api.createTweetUsingPOST(apiKey, authToken, ct0, text, medias);

        // TODO: test validations
    }
    
    /**
     * like(favorites) Tweet
     *
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void likeTweetUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String id = null;
        ResultT response = api.likeTweetUsingGET(apiKey, authToken, ct0, id);

        // TODO: test validations
    }
    
    /**
     * like(favorites) Tweet
     *
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-create
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void likeTweetUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String id = null;
        ResultT response = api.likeTweetUsingPOST(apiKey, authToken, ct0, id);

        // TODO: test validations
    }
    
    /**
     * reply to tweet 
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void tweetReplyUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String text = null;
        String tweetId = null;
        List<String> medias = null;
        ResultT response = api.tweetReplyUsingGET(apiKey, authToken, ct0, text, tweetId, medias);

        // TODO: test validations
    }
    
    /**
     * reply to tweet 
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void tweetReplyUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String text = null;
        String tweetId = null;
        List<String> medias = null;
        ResultT response = api.tweetReplyUsingPOST(apiKey, authToken, ct0, text, tweetId, medias);

        // TODO: test validations
    }
    
    /**
     * unlike(unfavorites) Tweet
     *
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void unlikeTweetUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String id = null;
        ResultT response = api.unlikeTweetUsingGET(apiKey, authToken, ct0, id);

        // TODO: test validations
    }
    
    /**
     * unlike(unfavorites) Tweet
     *
     * see details https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-favorites-destroy
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void unlikeTweetUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String id = null;
        ResultT response = api.unlikeTweetUsingPOST(apiKey, authToken, ct0, id);

        // TODO: test validations
    }
    
    /**
     * upload media (gif)
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void uploadMediaUsingGETTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String mediaUrl = null;
        ResultT response = api.uploadMediaUsingGET(apiKey, authToken, ct0, mediaUrl);

        // TODO: test validations
    }
    
    /**
     * upload media (gif)
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void uploadMediaUsingPOSTTest() throws Exception {
        String apiKey = null;
        String authToken = null;
        String ct0 = null;
        String mediaUrl = null;
        ResultT response = api.uploadMediaUsingPOST(apiKey, authToken, ct0, mediaUrl);

        // TODO: test validations
    }
    
}