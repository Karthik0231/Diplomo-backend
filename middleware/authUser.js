import jwt from 'jsonwebtoken'
const SECRETKEY= 'MysecretKey'

const authUser = async(req, res, next) =>{
    try {
        const token = req.header("auth-token")  //access token from api request
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Token required"
            })
        }

        const decoded = await jwt.verify(token,SECRETKEY) // decoding the token and verifying it with secret key
        req.user = decoded   // attaching the decoded user data to the request object for further use
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message:"Token needed"
        })
    }
}

export default authUser