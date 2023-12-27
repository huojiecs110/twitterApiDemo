# coding: utf-8

"""
    Utools_twitter_tools_api

    X (Twitter) API for search, Tweets, users, followers, images, media and more. Supports some v1.1 and v2 API endpoints, with more to come in the future!  # noqa: E501

    OpenAPI spec version: 1.1
    Contact: huojiecs@gmail.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.configuration import Configuration


class ResultT(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'code': 'int',
        'data': 'object',
        'msg': 'str'
    }

    attribute_map = {
        'code': 'code',
        'data': 'data',
        'msg': 'msg'
    }

    def __init__(self, code=None, data=None, msg=None, _configuration=None):  # noqa: E501
        """ResultT - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._code = None
        self._data = None
        self._msg = None
        self.discriminator = None

        if code is not None:
            self.code = code
        if data is not None:
            self.data = data
        if msg is not None:
            self.msg = msg

    @property
    def code(self):
        """Gets the code of this ResultT.  # noqa: E501


        :return: The code of this ResultT.  # noqa: E501
        :rtype: int
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this ResultT.


        :param code: The code of this ResultT.  # noqa: E501
        :type: int
        """

        self._code = code

    @property
    def data(self):
        """Gets the data of this ResultT.  # noqa: E501


        :return: The data of this ResultT.  # noqa: E501
        :rtype: object
        """
        return self._data

    @data.setter
    def data(self, data):
        """Sets the data of this ResultT.


        :param data: The data of this ResultT.  # noqa: E501
        :type: object
        """

        self._data = data

    @property
    def msg(self):
        """Gets the msg of this ResultT.  # noqa: E501


        :return: The msg of this ResultT.  # noqa: E501
        :rtype: str
        """
        return self._msg

    @msg.setter
    def msg(self, msg):
        """Sets the msg of this ResultT.


        :param msg: The msg of this ResultT.  # noqa: E501
        :type: str
        """

        self._msg = msg

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ResultT, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ResultT):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResultT):
            return True

        return self.to_dict() != other.to_dict()