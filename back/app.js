const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const cors = require('cors');
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);

app.use(cors({
    origin: '*',
})); //cors문제 해결
app.use(express.json()); // json 데이터를 req에 처리
app.use(express.urlencoded({ extended: true })); // form 데이터를 req에 처리

app.get('/', (req,res) => {
    res.send('hello express');
});


app.use('/post',postRouter);
app.use('/user',userRouter);

app.listen(3065, () => {
    console.log("서버실행중");
});