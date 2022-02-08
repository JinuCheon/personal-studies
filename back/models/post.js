module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    //게시글 같은 경우에는 이모티콘을 사용할 수 있기 때문에, utf8mb4 를 사용한다. 
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    // 게시글은 작성자가 꼭 있기 때문에, 유저 누군가에게 속해있다.
    // belongsTo 를 작성해주면, Post에 UserId 컬럼이 생성된다. (왜래키 자동생성)
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // n 대 n관계 => 중간 매핑 테이블이 생성된다.
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    // 좋아요. //중간매핑테이블 이름을 through값으로 정해줄수있음.
    // 그리고 as를 통해서 별칭을 붙여줘서 다른 dbUser랑 구별 가능
    db.Post.belongsTo(db.Post, { as: 'Retweet'}); //리트윗(공유?)
  };
  return Post;
};
