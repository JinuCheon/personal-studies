import { Form, Input, Button } from 'antd';
import { useState, useCallback} from 'react';
import Link from 'next/link'; 
const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    //컨포넌트에 props 로 넘겨주는 function은 최적화를 위해 꼭 useCallBack을 써주자.
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    },[]);
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[]);

    return(
        <form>
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
            <div style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </form>
    );
}
export default LoginForm;