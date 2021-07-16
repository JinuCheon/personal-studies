import { Form, Input, Button } from 'antd';
import { useState, useCallback } from 'react';
import Link from 'next/link'; 
import styled from 'styled-components';

//커스텀 태그를 div로 만들고, 여기에 스타일을 미리 적용할 수 있다.
const ButtonWrapper = styled.div`
 margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    //컨포넌트에 props 로 넘겨주는 function은 최적화를 위해 꼭 useCallBack을 써주자.
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    },[]);
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[]);

    const onSubmitForm = useCallback(()=>{
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return(
        //antd의 Form은 prevent.default가 적용되어 있음. 
        <FormWrapper onFinish={onSubmitForm}>
            {/* div 태그 내에는 style={{marginTop:10}} 처럼 객체를 넣으면 안된다.*/}
            {/* 동일 객체를 비교해도 항상 false가 나오기 때문에, 렌더링이 일어난다. */}
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}
export default LoginForm;