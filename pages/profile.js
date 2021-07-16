import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [{nickname: '천진우'}, {nickname: '바보'}, {nickname: '노드버드'}];
    const followingList = [{nickname: '천진우'}, {nickname: '바보'}, {nickname: '노드버드'}];
    return (
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로워 목록" data={followerList}/>
            <FollowList header="팔로잉 목록" data={followingList}/>
        </AppLayout>
    );
}

export default Profile;