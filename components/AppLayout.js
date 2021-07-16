import PropTypes from 'prop-types';//props의 타입을 검사해준다. ts 를 쓴다면 안써도 된다고 한다.
import Link from 'next/link'; //react-router 대체 해준다.
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';

import UserProfile from '../components/userProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

//컴포넌트에 style을 미리 적용하려면, 이런식으로 사용한다.
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

//children에는 AppLayout태그 사이에 있던 것이 들어있다.
const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    노드버드
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput style={{verticalAlign: 'middle'}} enterButton/>
                </Menu.Item>
            </Menu>
            
            <Row gutter={8}>
                <Col sx={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
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