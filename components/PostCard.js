import { useState, useCallback } from 'react';
import { Card, Popover, Button, Avatar} from 'antd';
import { useSelector } from 'react-redux'
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setcommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, [])
    const onToggleComment = useCallback(() => {
        setcommentFormOpened((prev) => !prev);
    })
    const { me } =useSelector((state) => state.user);
    const id = me && me.id;
    return (
        <div style={{ marginBotton: '20px'}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                    ? <HeartTwoTone twoToneColor="#ff0000" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]} 
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentFormOpened && (
                <div>댓글부분</div>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default PostCard;