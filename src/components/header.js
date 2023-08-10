import {
  Image,
  Modal,
  Input,
  Button,
  Form,
  Checkbox,
  Dropdown,
  message,
} from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Auth from "@/utils/Auth";
// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
//   return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
// };
// const MyFormItem = ({ name, ...props }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//   return <Form.Item name={concatName} {...props} />;
// };``
// function check() {
//   if (document.getElementById('password').value ==
//     document.getElementById('password-confirm').value) {
//     document.getElementById('message').style.color = 'green';
//     document.getElementById('message').innerHTML = 'matching';
//   } else {
//     document.getElementById('message').style.color = 'red';
//     document.getElementById('message').innerHTML = 'not matching';
//   }
// }

// const onSignUpFinish = (values) => {
//   console.log("Success:", values);
// };

const Header = ({ name }) => {
  const router = useRouter();
  const [isIModalOpen, setIsIModalOpen] = useState(false);
  const [form] = Form.useForm();

  const Logout = () => {
    Auth.removeToken();
    message.success("Logout successfully");
    location.reload();
  };

  const signinModal = () => {
    setIsIModalOpen(true);
  };
  const handleICancel = () => {
    setIsIModalOpen(false);
    form.resetFields();
  };
  const onIFinish = async (values) => {
    console.log("Success:", values);
    form.resetFields();

    const apiResult = await axios.post("https://skon.mn/user/login", {
      jsonrpc: "2.0",
      params: {
        login: values.email,
        password: values.password,
      },
    });
    

    console.log(apiResult, "ur dun");

    if (apiResult?.data?.error) {
      message.warning(apiResult?.data?.error.data.message);
    }

    if (apiResult?.data?.result) {
      Auth.setToken(apiResult?.data?.result.access_token);
      Auth.setName(apiResult?.data?.result?.name);
      message.success("Амжилттай нэвтэрлээ");
      handleICancel();
      router.push("/");
    }
  };

  const [isUModalOpen, setIsUModalOpen] = useState(false);
  const signupModal = () => {
    setIsUModalOpen(true);
  };
  const handleUCancel = () => {
    setIsUModalOpen(false);
    form.resetFields();
  };
  const onUFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();

    const result = axios.post("https://skon.mn/user/signup", {
      jsonrpc: "2.0",
      params: {
        name: values.name,
        surname: values.surname,
        login: values.email,
        email:values.email,
        password: values.password,
        confirm_password: values.password,
        phone_number: values.phone,
        address: values.address,
        company_type: "person",
        ssnid: "AP12345679",
      },
    });
    
    if (result) {
      message.success("Амжилттай бүртгэгдлээ");
      handleUCancel();
      router.push("/");
    }
  };


  const items = [
    {
      label: "Profile",
      key: "1",
    },
    {
      label: <div onClick={() => Logout()}>Logout</div>,
      key: "2",
    },
  ];
  // const onUFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <div className="Container">
      <div className=" flex items-center">
        <Image preview={false} src="/img/globus.png" />
        <span className=" pl-[10px]">Global - English</span>
      </div>
      <div className="return flex space-x-2 items-center">
        <div>RETURNING AN ORDER</div>
        <a className="cursor-pointer">
          <u>Click for more info?</u>
        </a>
      </div>
      {/* <div className="register flex space-x-2 items-center">
          <div
            className="sign-in flex items-center cursor-pointer"
            onClick={signinModal}
          >
            SIGN IN
          </div>

          <div className="sign-up cursor-pointer" onClick={signupModal}>
            SIGN UP
          </div>
        </div> */}
      {Auth.getToken() ? (
        <div className="flex items-center">
          <Dropdown.Button
            menu={{ items }}
            trigger={["click"]}
            icon={<Image src="/img/icons8.png" preview={false} />}
          >
            <div style={{ color: "#fff" }}>{Auth.getName()}</div>
          </Dropdown.Button>
        </div>
      ) : (
        <div className="register flex space-x-2 items-center">
          <div
            className="sign-in flex items-center cursor-pointer"
            onClick={signinModal}
          >
            SIGN IN
          </div>

          <div className="sign-up cursor-pointer" onClick={signupModal}>
            SIGN UP
          </div>
        </div>
      )}
      <Modal
        title="Sign In"
        open={isIModalOpen}
        onCancel={handleICancel}
        footer={null}
      >
        <Form
          name="sign-in"
          form={form}
          onFinish={onIFinish}
          autoComplete="off"
        >
          <div>Email</div>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>Password</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <div className="flex justify-between items">
              <Checkbox>Remember me</Checkbox>
              <a className=" text-blue-400" href="/">
                Forgotten Password?
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="sign-button flex justify-center">
              <Button
                type=" primary"
                className=" w-[200px] bg-blue-400 text-white"
                htmlType="submit"
              >
                Sign In
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Sign Up"
        open={isUModalOpen}
        onCancel={handleUCancel}
        footer={null}
      >
        <Form form={form} name="sign-up" onFinish={onUFinish}>
          <div>First Name</div>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div>Last Name</div>
          <Form.Item
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div>Email</div>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>Phone Number</div>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>Address</div>
          <Form.Item
            name={"address"}
            rules={[
              {
                required: false,
                message: "Please input your address!",
              },
            ]}
          >
            <Input  />
          </Form.Item>
          <div>Password</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                len: 8,
                message: "Password should be 8 characters",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div>Confirm Password</div>
          <Form.Item
            name="password-confirm"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <div className="sign-button flex justify-center">
              <Button
                type=" primary"
                className=" w-[200px] bg-blue-400 text-white"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Header;
