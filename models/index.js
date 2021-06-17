const User = require('./user');
const Post = require('./post');
const Comment = require('./Comment');

//create associations
user.hasMany(post, {
    foreignKey: 'user_id'
});

post.belongsTo(user, {
    foreignKey: 'user_id',
});

Comment.belongsTo(user, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(post, {
    foreignKey: 'post_id'
});
  
user.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {user, post, Comment};