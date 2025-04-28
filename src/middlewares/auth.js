const adminAuth = (req,res,next) => {

    const token = "xyza"

    const isAdminAuthorized = (token ==="xyz")

    if(!isAdminAuthorized){
        res.send("Unauthorized Admin")
    }
    else{
        next();
    }
}

const userAuth = (req,res,next) => {

    const token = "xyza"

    const isAdminAuthorized = (token ==="xyz")

    if(!isAdminAuthorized){
        res.send("Unauthorized User")
    }
    else{
        next();
    }
}



module.exports = {adminAuth,userAuth};