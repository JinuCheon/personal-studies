//next.js는, pages 폴더명이 고정이다.

import AppLayout from "../components/AppLayout";

//또한 React를 따로 import 하지 않아도 된다.(자유)
const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;