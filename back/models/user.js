module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { //모델명은 자동으로 소문자로 변경되서 user 로 들어감.
    // attribute를 설정한다.
    // id: {} 는 자동으로 sql에서 넣어준다. 1, 2, 3, 4, 5 이런식으로 ~
    email: {
      type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME ...
      allowNull: false, //필수
      unique: true, //고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, //필수
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false, //필수
    },
  }, {
    // user model에 대한 setting 값을 넣어준다.
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {
    // relation을 설정해준다.
    db.User.hasMany(db.Post); //1 대 n 관계
    // 한 명이 여러개의 게시글을 작성 가능.
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Likers' }); //좋아요. //중간매핑테이블 이름을 두번째 파라미터로 정해줄수있음.
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' }); //팔로잉,팔로워
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' }); //팔로잉,팔로워
    // follow에만 foreignkey를 적어주는 이유는,
    // UserId 와 UserId 가 합쳐져서 테이블이 만들어질 수 없으니,
    // table(followingId, followerId) 이런식으로 테이블이 만들어질 수 있도록  이름을 정해주는 것이다.
    // through 는 테이블 이름 변경 , foreignKey 는 컬럼 명을 변경
  };
  return User;
};
