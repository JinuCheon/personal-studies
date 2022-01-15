import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/index';

// eslint-disable-next-line no-unused-vars
const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    // antd 에서는 preventDefault()가 이미 적용되어있음.
    console.log(id, password);
    // setIsLoggedIn(true);
    dispatch(loginAction({id, password}));
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <lavel htmlFor="user-id">아이디</lavel>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <lavel htmlFor="user-id">패스워드</lavel>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </Form>
  );
}

export default LoginForm;
