let jwt = require('jsonwebtoken');

module.exports = {
    isOlderDate:(date,hr = 1) => {
        let now = new Date().getMilliseconds();
        let _date = new Date(date).getMilliseconds();
        let milliSec = hr*60*60;
        let remainMilliSec = now - milliSec;
        if(_date > remainMilliSec){
            return false
        }else{
            return true
        }
    },
    generateJWTTocken: async (username) => {
        let token = jwt.sign({username: username},
            process.env.API_SECRET_KEY,
            { expiresIn: '365d' // expires in 24 hours
            });
        return token;
    }, 
}