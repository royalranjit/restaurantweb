import React from "react";
import { Form, Input, Select, Space } from "antd";
import CustomeButton from "../../../common/button";
const { TextArea } = Input;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ContactForm = () => (
  <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
    className="contact_form"
  >
    <div className="grid grid-cols-2 gap-x-[16px] first_last_name">
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
    <Form.Item
      label="Email"
      name="email"
      className="email"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="What can we do for you"
      name="choose"
      className="email"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Select className="h-[44px]">
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Phone Number"
      name="email"
      className="email"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input
        addonBefore={
          <Space>
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4480_419)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.5L13 8.5H6L13 15.5H0V0.5Z"
                  fill="#003495"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.00006 2.5L9.00006 7.5H3.00006L10.0001 14.5H1.00001C1 14 1.00006 14.044 1.00006 13.498V2.5Z"
                  fill="#DF0A37"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.915 5.5C4.97 5.578 5 5.662 5 5.75C5 6.164 4.328 6.5 3.5 6.5C2.672 6.5 2 6.164 2 5.75C2 5.662 2.03 5.578 2.085 5.5C2.291 5.646 2.847 5.75 3.5 5.75C4.153 5.75 4.71 5.646 4.915 5.5Z"
                  fill="white"
                />
                <path
                  d="M3.5 13.5C4.32843 13.5 5 12.8284 5 12C5 11.1716 4.32843 10.5 3.5 10.5C2.67157 10.5 2 11.1716 2 12C2 12.8284 2.67157 13.5 3.5 13.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4480_419">
                  <rect
                    width="21"
                    height="15"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            +977
          </Space>
        }
      />
    </Form.Item>
    <Form.Item
      label="Message"
      name="message"
      className="email"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <TextArea />
    </Form.Item>
    <Form.Item>
      <CustomeButton title={"Send Message"} htmlType={"submit"} />
    </Form.Item>
  </Form>
);
export default ContactForm;
