import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <>
      <Head>
        <title>메인페이지</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {console.log(mainPosts)}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </AppLayout>
    </>
  )
};

export default Home;
