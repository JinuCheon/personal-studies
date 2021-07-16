import {Card, Avatar, Button} from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        // setIsLoggedIn(false);
        dispatch(logoutAction());
    }, []);
    return(
        <Card
            actions = {[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="follower">짹짹<br/>팔로워</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="userName"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;