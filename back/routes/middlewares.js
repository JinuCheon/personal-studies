exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); //파라미터에 아무것도 안넣으면 에러처리가 아니라 다음 미들웨어로 넘어간다.
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next(); //파라미터에 아무것도 안넣으면 에러처리가 아니라 다음 미들웨어로 넘어간다.
  } else {
    res.status(401).send('로그인한 사람만 접근이 가능합니다.');
  }
}
