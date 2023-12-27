# coding: utf-8

"""
    Utools_twitter_tools_api

    X (Twitter) API for search, Tweets, users, followers, images, media and more. Supports some v1.1 and v2 API endpoints, with more to come in the future!  # noqa: E501

    OpenAPI spec version: 1.1
    Contact: huojiecs@gmail.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import swagger_client
from swagger_client.api.twitter_dms_api_tools_api import TwitterDMSApiToolsApi  # noqa: E501
from swagger_client.rest import ApiException


class TestTwitterDMSApiToolsApi(unittest.TestCase):
    """TwitterDMSApiToolsApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.twitter_dms_api_tools_api.TwitterDMSApiToolsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_dms_list_v2_using_get(self):
        """Test case for get_dms_list_v2_using_get

        get DMS List  # noqa: E501
        """
        pass

    def test_get_dms_list_v2_using_post(self):
        """Test case for get_dms_list_v2_using_post

        get DMS List  # noqa: E501
        """
        pass

    def test_get_dms_using_get(self):
        """Test case for get_dms_using_get

        receiving events  # noqa: E501
        """
        pass

    def test_get_dms_using_post(self):
        """Test case for get_dms_using_post

        receiving events  # noqa: E501
        """
        pass

    def test_send_dms_media_using_get(self):
        """Test case for send_dms_media_using_get

        sendDMSMedia events.  # noqa: E501
        """
        pass

    def test_send_dms_media_using_post(self):
        """Test case for send_dms_media_using_post

        sendDMSMedia events.  # noqa: E501
        """
        pass

    def test_send_dms_using_get(self):
        """Test case for send_dms_using_get

        sendDMS events.  # noqa: E501
        """
        pass

    def test_send_dms_using_post(self):
        """Test case for send_dms_using_post

        sendDMS events.  # noqa: E501
        """
        pass

    def test_upload_media_dm_using_get(self):
        """Test case for upload_media_dm_using_get

        upload media for DM   # noqa: E501
        """
        pass

    def test_upload_media_dm_using_post(self):
        """Test case for upload_media_dm_using_post

        upload media for DM   # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()