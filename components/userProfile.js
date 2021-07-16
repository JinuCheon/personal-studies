import {Card, Avatar, Button} from 'antd';
import { useCallback } from 'react';

const UserProfile = ({setIsLoggedIn}) => {
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false);
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