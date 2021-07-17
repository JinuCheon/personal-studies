//next.js는, pages 폴더명이 고정이다. 그리고 react가 자동 import 된다.
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home;