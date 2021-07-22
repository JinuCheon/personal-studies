const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async(email, password, done) => {
        try{
            const User = await User.findeOne({
                where: {email}
            });
            if(!user){
                return done(null, false, { reason: '존재하지 않는 계정입니다.' });
            }
            const result = await bcrypt.compare(password, user.password); 
            if(result) {
                return res.status(200).done(null, user); //성공이면 사용자 정보 넘기기
            }
            return done(null, false, {reason: '비밀번호 틀림'});
        } catch (error) {
            console.error(error);
            return done(error);
        }
    })); 
}