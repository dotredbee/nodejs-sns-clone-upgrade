const mongoose = require('mongoose');

// const { DB_SERVER_IPADDR, MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const { db : { mongo } } = require('../config')

const MONGO_URL = `mongodb://${mongo.id}:${mongo.password}@${mongo.addr}:27017/admin`;
console.log(MONGO_URL);
const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(MONGO_URL, {
    dbName: 'gifchat',
    useNewUrlParser: true,
    useCreateIndex: true,
  }, (error) => {
    if (error) {
      console.log('몽고디비 연결 에러', error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
