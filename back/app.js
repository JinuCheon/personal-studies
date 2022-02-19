const express = require('express');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const cors = require('cors');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const morgan = require('morgan'); //rest API 요청 콘솔에 로깅
const app = express();

dotenv.config();

app.use(express.json()); // json 형식의 데이터를 rest API로 받기 위한 미들웨어
app.use(express.urlencoded({ extended: true})); //form submit
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(cors({
  origin: true,
  //브라우저에서 차단하는 cors 문제 해결 - 허용하는 헤더값을 넣어준다. 실무에서는 웹페이지 host만 적어주면 된다.
  credentials: true,
  optionsSuccessStatus: 200,
  // 마찬가지로 쿠키도 허용 - saga의 axios 에서도 처리를 해줘야함.
})); 
// 코드는 위에서부터 밑으로 실행되니, 맨 상단부에 필요한 미들웨어를 넣어주자.

db.sequelize.sync()
  .then(()=> {
    console.log('db 연결 성공');
  })
  .catch(console.error); 

passportConfig();

app.get('/', (req, res) => {
  res.send('hello express');
})

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.listen(3065, () => {
  console.log('서버실행중');
});
