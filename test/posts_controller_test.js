
const assert = require('assert');
const request = require('supertest');
const mongoose= require('mongoose');
const app = require('../app');

const Post = mongoose.model('post');

describe('Posts controller test', () => {

  it.only('creates a post to /postForm', (done) => {
    request(app)
      .post('/posts')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: 'New Post',
        content: 'New Content',
        tag: 'Random'
      })
      .end(() => {
        Post.findOne({ title: 'New Post' })
          .then((post) => {
            assert(post.content === 'New Content');
            done();
          });
      });
  });

});
