import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: 'AAA'}, { nickname: 'BBB'}, { nickname: 'CCC'}]
  const followingList = [{ nickname: 'DD'}, { nickname: 'EEE'}, { nickname: 'FFF'}]

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )
};

export default Profile;
