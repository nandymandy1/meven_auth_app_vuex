if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://nandymandy123:nandymandy123@ds129906.mlab.com:29906/mevn_auth",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
}