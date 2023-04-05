const jsonwebtoken = require('jsonwebtoken');
const UserModel1 = require('../aMCR1/aModel/bAdministration/aUserModel') 
const UserModel2 = require('../aMCR2/aModel/bAdministration/aUserModel')
const catchAsyncError = require('./aCatchAsyncError');
const ErrorHandler = require('./bErrorHandler');

const authenticateUser = catchAsyncError( async (request, response, next) => {
    // Retrieve
    const { token } = request.cookies

    console.log(token)

    // Not Found
    if (!token || token === "j:null") {
        return next(new ErrorHandler("Please login to access this resource", 401))
    }

    // Found
    // Decode Token 
    const decodedData = jsonwebtoken.verify(
        token,
        process.env.JWT_SECRET
    )

    // Save User in Request
    const user = process.env.ACTIVE_APP == 'AuthenticationApp' ? await UserModel1.findById(decodedData.id) :
                 process.env.ACTIVE_APP == 'AdministrationApp' ? await UserModel2.findById(decodedData.id) :
                 await UserModel2.findById(decodedData.id)

    request.user = user
    next()
} )

module.exports = authenticateUser;
