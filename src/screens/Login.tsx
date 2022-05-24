import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import { VStack, Text, useToast } from '@chakra-ui/react';
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { PrimaryButton, RTextFormField, Spacer } from '../components/atoms';
import { EmailIcon, LoginGraphic, PasswordIcon } from '../assets';
import { Formik, Form, Field } from 'formik';
import { AuthApi } from '../api';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../reducers/authSlice';

const { Title } = Typography;
const { Footer, Content } = Layout;

interface MyFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const toast = useToast();

  const schema = yup.object({
    email: yup
      .string()
      .email('Email format is required')
      .min(3)
      .max(60)
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6)
      .max(60)
      .required('Password is a required field'),
  });

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };

  const { loading: logInLoading, fetch: logIn } = AuthApi.useAdminLogin(
    (err: any, res: any) => {
      if (err) {
        toast({
          title: 'Login failed',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else if (res) {
        dispatch(
          LOGIN({
            user: res.data.user,
            accessToken: res.data.tokens.access,
            refreshToken: res.data.tokens.refresh,
          }),
        );

        window.location.href = '/';
      }
    },
  );

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Spacer size="lg" />
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 8, offset: 4 }}
              md={{ span: 12 }}
            >
              <VStack spacing={[2, 4, 6]} alignItems={'flex-start'}>
                <Title className="mb-15">Admin Log-In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your email and password to sign in
                </Title>

                <Formik
                  validationSchema={schema}
                  initialValues={initialValues}
                  onSubmit={(data) => {
                    logIn(data);
                  }}
                >
                  {() => (
                    <Form
                      style={{
                        width: '100%',
                      }}
                    >
                      <VStack spacing={9}>
                        <Field
                          label="Email: "
                          name="email"
                          leftIcon={EmailIcon}
                          placeholder="xxx@gmail.com"
                          component={RTextFormField}
                          customLabel={
                            <Text fontSize="md" color="#1A202C">
                              Email <span style={{ color: 'red' }}>*</span>
                            </Text>
                          }
                        />

                        <Field
                          label="Password: "
                          name="password"
                          leftIcon={PasswordIcon}
                          placeholder="*********"
                          component={RTextFormField}
                          type="password"
                          customLabel={
                            <Text fontSize="md" color="#1A202C">
                              Password <span style={{ color: 'red' }}>*</span>
                            </Text>
                          }
                        />
                      </VStack>

                      <PrimaryButton
                        mt="35px"
                        borderRadius="8px"
                        w="100%"
                        isLoading={logInLoading ? true : false}
                        type="submit"
                      >
                        Login
                      </PrimaryButton>
                    </Form>
                  )}
                </Formik>
              </VStack>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 10 }}
              md={{ span: 12 }}
            >
              <img src={LoginGraphic} alt="" />
            </Col>
          </Row>
        </Content>

        <Spacer size="md" />

        <Footer>
          <Menu mode="horizontal">
            <Menu.Item>Company</Menu.Item>
            <Menu.Item>About Us</Menu.Item>
            <Menu.Item>Teams</Menu.Item>
            <Menu.Item>Products</Menu.Item>
            <Menu.Item>Blogs</Menu.Item>
            <Menu.Item>Pricing</Menu.Item>
          </Menu>
          <Menu mode="horizontal" className="menu-nav-social">
            <Menu.Item>
              <Link to="#">{<DribbbleOutlined />}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#">{<TwitterOutlined />}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#">{<InstagramOutlined />}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#">
                <svg
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                </svg>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#">{<GithubOutlined />}</Link>
            </Menu.Item>
          </Menu>
          <p className="copyright">
            Copyright © 2022<a href="https://rodeo.my/">Rodeo</a>
          </p>
        </Footer>
        <Spacer size="lg" />
      </Layout>
    </>
  );
}
