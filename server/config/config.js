var env = process.env.NODE_ENV || 'development';

var db = {
    dev: 'mongodb://localhost:27017/TodoApp',
    test: 'mongodb://localhost:27017/TodoAppTest',
    mlab: 'mongodb://andmoraho:todoapp123@ds121982.mlab.com:21982/andmorahotodoapp'
};

if (env === 'development') {
    process.env.PORT = 3000;
    MONGODB_URI = db.dev;
} else if (env === 'test') {
    process.env.PORT = 3000;
    MONGODB_URI = db.test;
} else {
    MONGODB_URI = db.mlab;
}