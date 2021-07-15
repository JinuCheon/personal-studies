// _app.js에는 모든 페이지에서 완전 공통인 것을 작성합니다.
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';


const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequire,
}
export default NodeBird;