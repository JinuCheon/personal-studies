import React from "react";
import PropTypes from "prop-types";
import 'antd/dist/antd.css';
import Head from "next/head";

// index.js의 return 이 Component 로 들어온다. (최상위)
// 이곳에 공통적으로 사용할 CSS, JavaScript 를 import 해준다.
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>메인페이지</title>
      </Head>
      <Component />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default App;
