const express =require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err){
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: {id: user.id},
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                }, {
                    model: User,
                    as: 'Followers',
                }]
            })
            return res.json(fullUserWithoutPassword);
        })
    })(req, res, next);
});

router.post('/', async (req, res, next) => {
    try{
        const exUser = await User.findOne({ //email 중복인지 확인
            where: {
                email: req.body.email,
            }
        });
        if(exUser) { //이메일 중복 에러.
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 11);
        await User.create({
            email: req.body.email,
            nickname: req.body.nick,
            password: hashedPassword,
        });
        //await을 쓰지 않으면 비동기가 되버려서, 밑 라인이 먼저 실행된다.
        // res.setHeader('Acces-Control-Allow-Origin', '*');
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); //next를 통해 error 보낼 수 있음 서버 에러라서 500번 에러
    }
    
});

router.post('/user/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

module.exports = router;