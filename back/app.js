const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const cors = require('cors');
const app = express();
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
dotenv.config();
db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);

passportConfig();
app.use(cors({
    origin: '*',
})); //cors문제 해결
app.use(express.json()); // json 데이터를 req에 처리
app.use(express.urlencoded({ extended: true })); // form 데이터를 req에 처리
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(cookieParser(process.env.COOKIESECRET));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req,res) => {
    res.send('hello express');
});


app.use('/post',postRouter);
app.use('/user',userRouter);

app.listen(3065, () => {
    console.log("서버실행중");
});