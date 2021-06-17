const User = require('./user');
const Post = require('./post');
const Comment = require('./Comment');

//create associations
User.hasMany(post, {
    foreignKey: 'user_id'
});

Post.belongsTo(user, {
    foreignKey: 'user_id',
});

Comment.belongsTo(user, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {user, post, Comment};