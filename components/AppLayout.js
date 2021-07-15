import PropTypes from 'prop-types';//props의 타입을 검사해준다. ts 를 쓴다면 안써도 된다고 한다.
import Link from 'next/link'; //react-router 대체 해준다.
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';

import UserProfile from '../components/userProfile';
import LoginForm from '../components/LoginForm';

//children에는 AppLayout태그 사이에 있던 것이 들어있다.
const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Input.Search style={{verticalAlign: 'middle'}} enterButton/>
            <Row gutter={8}>
                <Col sx={24} md={6}>
                    왼쪽메뉴
                </Col>
                <Col sx={24} md={12}>
                    {children}
                </Col>
                <Col sx={24} md={6}>
                    <a href="https://velog.io/@woojin8787" target="_blank" rel="noreferrer noopener">Jinu Cheon</a>
                </Col>
            </Row>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    //node 타입은 render로 반환 가능한 것이라고 한다.
};

export default AppLayout;