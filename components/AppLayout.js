import PropTypes from 'prop-types';//props의 타입을 검사해준다. ts 를 쓴다면 안써도 된다고 한다.
import Link from 'next/link'; //react-router 대체 해준다.

//children에는 AppLayout태그 사이에 있던 것이 들어있다.
const AppLayout = ({children}) => {
    return(
        <div>
            <div>
                <Link href="/">노드버드</Link>
                <Link href="/profile">프로필</Link>
                <Link href="/signup">회원가입</Link>
            </div>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    //node 타입은 render로 반환 가능한 것이라고 한다.
};

export default AppLayout;