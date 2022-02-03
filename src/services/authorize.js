const jwt = require('jsonwebtoken');
const authorize = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json({auth:false,message:'No token provide'});

    jwt.verify(token, process.env.SECRET, function(err,decode){
        if(err) return res.status(500).json({auth:false, message: 'Failed to authenticate token.'});
        req.body = decode;
        next();
    });
}


module.exports = authorize;