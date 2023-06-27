

module.exports = { 
    port : 8805,
    
    cookie : {
        secret : process.env.COOKIE_SECRET
    },
    
    db : { 
        mongo : { 
            addr : process.env.DB_SERVER_IPADDR,
            id : process.env.MONGO_ID,
            password : process.env.MONGO_PASSWORD
        }
    }
}