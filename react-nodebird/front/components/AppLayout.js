import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>메인</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={6}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://www.github.com/JinuCheon" target="_blank" rel="noreferrer noopener">here is my github</a>
        </Col>
      </Row>
    </div>
  )
};

// PropTypes : 타입검사를 위함
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
