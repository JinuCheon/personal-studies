import React, { useState, useCallback, useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import { Button, Checkbox, Form, Input } from 'antd';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);
  
  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);
  
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const onChnagePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  })
  
  const onSubmit = useCallback(() => {
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if(!term) {
        return setTermError(true);
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, password, nickname },
      });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <Input 
          name="user-password-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChnagePasswordCheck}
        />
        {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
        {/* true일 경우에만 표시 */}
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의하시나요</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의해주세요.</div>}
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
};

export default Signup;
