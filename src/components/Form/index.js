import React from "react";
import { Form, Input, Button, Select } from "antd";
import styles from "./style.module.scss";
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const ContactForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className={styles.contact_form_container}>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup className="first_last" prefix={["name"]}>
            <MyFormItem name="firstName" label="First Name">
              <Input className="first_name" />
            </MyFormItem>
            <MyFormItem name="lastName" label="Last Name">
              <Input className="last_name" />
            </MyFormItem>
          </MyFormItemGroup>

          <MyFormItem name="email" label="Email">
            <Input />
          </MyFormItem>
          <MyFormItem name="description" label="What can we do for you">
            <Select
              defaultValue="lucy"
              allowClear
              options={[
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </MyFormItem>
        </MyFormItemGroup>

        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
};
export default ContactForm;
