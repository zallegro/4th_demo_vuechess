var config = {
//a    db: {
//a        options: {
//a            db: {native_parser: true},
//a            server: {poolSize: 5},
//  replset: { rs_name: 'myReplicaSetName' },
//  user: 'admin',
//  pass: '123456'
//a        },
//a        uri: process.env.MONGO_URL || 'mongodb://mongo:27017/vuegustchess'
//a    },
    porthttp: process.env.WEBSITES_PORT || 3311,
    multicore: false,
    https: false,
    debug: false
}
module.exports = config;
