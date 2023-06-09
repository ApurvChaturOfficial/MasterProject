const UserModel = require("../../aModel/bAdministration/aUserModel")
const ErrorHandler = require("../../../cFunction/bErrorHandler")
const generateCookie = require("../../../cFunction/cGenerateCookie")
const catchAsyncError = require("../../../cFunction/aCatchAsyncError")
const sendEmail = require("../../../cFunction/iSendEmail")
const crypto = require("crypto");
const SearchFilterPaginate = require("../../../cFunction/fSearchFilterPaginate")
const RoleModel = require("../../aModel/bAdministration/bRoleModel")
const handleImage = require("../../../cFunction/hHandleImage")
const idToObject = require("../../../cFunction/gIDToObject")


exports.userController = (Model= UserModel, Label= 'User') => {
	return {
		// List Controller
		list: catchAsyncError(async (request, response, next) => {
			// API Feature
			const searchFilterPaginate = new SearchFilterPaginate(Model.find(), request.query).search().filter().paginate(10)

			// List
			const object_list = await searchFilterPaginate.query

			// Response
			response.status(201).json({
				success: true,
				message: `${Label} Listed Successfully`,
				total_count: await Model.countDocuments(),
				page_count: object_list.length,
				list: object_list
			})
		}),

		// Create Controller
		create: catchAsyncError(async (request, response, next) => {
			// Personal Info
			request.body.personal_info = {
					created_at: new Date(Date.now()),
					created_by: request.user
			}

			// Image
			request.body.basic_info.image && (
				request.body.basic_info.image = await handleImage(
					request.body.basic_info.image, 
					Label,
					'create'
				)
			)

			// Relation Info
			request.body.relation_info.role && (
				request.body.relation_info.role = await idToObject(
					request.body.relation_info.role,
					RoleModel,
					'Role',
					next
				)
			)
			
			// Create
			const object_create = await Model.create(request.body)
	
			// Response
			response.status(201).json({
				success: true,
				message: `${Label} Created Successfully`,
				creatdase: object_create
			})
		}),

		// Retrieve Controller
		retrieve: catchAsyncError(async (request, response, next) => {
			// Retrieve
			let object_retrieve = await Model.findById(request.params.id)

			// Not Found
			if (!object_retrieve) next(new ErrorHandler(`${Label} Not Found`, 404))

			// Response
			response.status(200).json({
				success: true,
				message: `${Label} Reterived Successfully`,
				retrieve: object_retrieve
			})
		}),

		// Update Controller
		update: catchAsyncError(async (request, response, next) => {
			// Retrieve
			let object_retrieve = await Model.findById(request.params.id).select("+critical_info.password")

			// Not Found
			if (!object_retrieve) next(new ErrorHandler(`${Label} Not Found`, 404))

			// Personal Info
			request.body.personal_info = {
				updated_at: new Date(Date.now()),
				created_by: object_retrieve.personal_info.created_by,
				updated_by: request.user
			}

			// Image
			request.body.basic_info.image && (
				request.body.basic_info.image = await handleImage(
					request.body.basic_info.image, 
					Label,
					'update',
					object_retrieve.basic_info.image
				)      
			)   
			
			// Relation Info
			request.body.relation_info_info.role && (
				request.body.relation_info_info.role = await idToObject(
					request.body.relation_info.role,
					RoleModel,
					'Role',
					next
				)
			)

			// Update
			object_retrieve = await Model.findByIdAndUpdate(
				request.user.id,
				{...request.body, 
					critical_info: {
						...request.body.critical_info,
						password: object_retrieve.critical_info.password
					}
				}, {
					new: true,
					runValidators: true,
					useFindAndModify: false
				}
			)
	
			// Response
			response.status(200).json({
				success: true,
				message: `${Label} Updated Successfully`,
				update: object_retrieve
			})
		}),

		// Delete Controller
		delete: catchAsyncError(async (request, response, next) => {
			// Retrieve
			let object_retrieve = await Model.findById(request.params.id)

			// Not Found
			if (!object_retrieve) next(new ErrorHandler(`${Label} Not Found`, 404))

			// Delete
			await object_retrieve.remove()

			// Response
			response.status(200).json({
				success: true,
				message: `${Label} Deleted Successfully`,
				delete: object_retrieve
			})
		}),
		
		///////////////////////// User Authentication Controller //////////////////////////
		// Register Controller
		register: catchAsyncError(async (request, response, next) => {
			// Personal Info
			request.body.personal_info = {
				created_at: new Date(Date.now()),
				created_by: "Self"
			}

			// Image
			request.body.basic_info.image && (
				request.body.basic_info.image = await handleImage(
					request.body.basic_info.image, 
					Label,
					'create'
				)
			)

			request.body.image && (
				request.body.image = await handleImage(
					request.body.image, 
					Label,
					'create'
				)
			)

			// Relation Info
			request.body?.relation_info?.role && (
				request.body.relation_info.role = await idToObject(
					request.body.relation_info.role,
					RoleModel,
					'Role',
					next
				)
			)
			
			// Create
			const user = await Model.create(request.body)

			// Response
			generateCookie(201, `User Registered Successfully`, `user_register`, user, response)
		}),

		// Login Controller
		login: catchAsyncError(async (request, response, next) => {
			// Destructure Body
			const {email, password} = request.body

			// Check
			if (!email || !password) next(new ErrorHandler("Please enter email & password", 400))

			// Retrieve
			const user = await Model.findOne({email}).select("+password")

			// Not Found
			if (!user) next(new ErrorHandler("Invalid email or password", 401))

			// Match Password
			const isPasswordMatched = await user.comparePassword(password)

			// Not Matched
			if (!isPasswordMatched) next(new ErrorHandler("Invalid email or password", 401))

			// Response
			generateCookie(200, "User Logged In Successfully", "user_login", user, response)
		}),

		// Logout Controller
		logout: catchAsyncError(async (request, response, next) => {
			// Remove Token
			const options = {
					expires: new Date(Date.now()),
					httpOnly: true,
					secure: true,
					sameSite: "none"	
			}

			// Response
			response.status(200).cookie('token', null, options).json({ 
				success: true,
				message: "User Logged Out Successfully",
				user_logout: request.user
			})
		}),

		// Forgot Password Controller
		forgotPassword: catchAsyncError(async (request, response, next) => {
			// Destructure Body
			const {email} = request.body

			// Check
			if (!email) next(new ErrorHandler("Please enter email", 400))

			// Retrieve
			const user = await Model.findOne({"email": email});

			// Not Found
			if (!user) next(new ErrorHandler("User Not Found", 404))
		
			// Get Reset Password Token & set OTP
			const resetPasswordOTP = await user.getResetPasswordOTP();

			// Save 
			await user.save({ validateBeforeSave: false });
		
			// Message
			const textMessage = `Reset Password OTP: ${resetPasswordOTP}`;
				
			// // Send Email
			// try {
			// 	await sendEmail({
			// 		from: "imapurvchatur@gmail.com",
			// 		to: [user.email],
			// 		subject: `Password Recovery`,
			// 		text: textMessage,
			// 	});
				
			// 	// Response
			// 	response.status(200).json({
			// 		success: true,
			// 		message: `OTP sent to ${user.email} successfully`,
			// 		user_forgot_password: user,
			// 		textMessage
			// 	});
			// } catch (error) {
			// 	user.resetPasswordOTP = undefined;

			// 	await user.save({ validateBeforeSave: false });
			// 	return next(new ErrorHandler(error.message, 500));
			// }

			// Response
			response.status(200).json({
				success: true,
				message: textMessage,
				user_forgot_password: user,
				textMessage
			});

		}),

		// Validate OTP Controller
		validateOTP: catchAsyncError(async (request, response, next) => {
			// Destructure Body
			const {email, otp} = request.body

			// Check
			if (!email) next(new ErrorHandler("Please enter email", 400))

			// Hash OTP
			const resetPasswordOTP = crypto.createHash("sha256").update(otp).digest("hex");

			// Retrieve
			const user = await UserModel.findOne({email, 'reset_password_otp': resetPasswordOTP, 'reset_password_otp_expire': { $gt: Date.now() }});
			
			// Not Found
			if (!user) next(new ErrorHandler("Reset OTP is invalid or has been expired", 400));
		
			// Get Reset Password Token
			const resetPasswordToken = await user.getResetPasswordToken();

			// Save 
			await user.save({ validateBeforeSave: false });
		
			// Message
			const textMessage = `Reset Password Token: ${resetPasswordToken}`;
				
			// Response
			response.status(200).json({
				success: true,
				message: textMessage,
				user_validate_otp: user,
				textMessage,
				token: resetPasswordToken
			});

		}),

		// Reset Password
		resetPassword: catchAsyncError(async (request, response, next) => {
			// Destructure Body & Params
			const {token} = request.params
			const {new_password, confirm_password} = request.body

			// Hash Token
			const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

			// Retrieve
			const user = await UserModel.findOne({'reset_password_token': resetPasswordToken, 'reset_password_token_expire': { $gt: Date.now() }});
			
			// Not Found
			if (!user) next(new ErrorHandler("Reset password link is invalid or has been expired", 400));
			
			// Check 1
			if (!new_password, !confirm_password) next(new ErrorHandler("Please enter new password and confirm password", 400))

			// Check 2
			if (new_password !== confirm_password) next(new ErrorHandler("Please match both password", 400));
			
			// // Match Password 2
			// const isPasswordMatched = await user.comparePassword(new_password)

			// // Not Matched
			// if (isPasswordMatched) next(new ErrorHandler("New password connot be same as old password", 401))

			// Save
			user.password = new_password;
			user.reset_password_otp = undefined;
			user.reset_password_otp_expire = undefined;
			user.reset_password_token = undefined;
			user.reset_password_token_expire = undefined;
			await user.save({ validateBeforeSave: false });
			
			// Response
			generateCookie(201, `Password Recovered Successfully`, `user_reset_password`, user, response)
		}),        

		// Profile Retrieve Controller
		profileRetrieve: catchAsyncError(async (request, response, next) => {
			// Retrieve
			const user = await UserModel.findById(request.user._id);

			// Not Found
			if (!user) next(new ErrorHandler(`${Label} Not Found`, 404))
			
			response.status(200).json({
				success: true,
				message: `${Label} Profile Reterived Successfully`,
				profile_retrieve: user
			})
		}),

		// update User Profile
		profileUpdate: catchAsyncError(async (request, response, next) => {
			// Retrieve
			let object_retrieve = await Model.findById(request.user.id)

			// Not Found
			if (!object_retrieve) next(new ErrorHandler(`${Label} Not Found`, 404))

			// Personal Info
			request.body.personal_info = {
				updated_at: new Date(Date.now()),
				created_by: object_retrieve.personal_info.created_by,
				updated_by: request.user
			}

			// Image
			request.body.basic_info.image && (
				request.body.basic_info.image = await handleImage(
					request.body.basic_info.image, 
					Label,
					'update',
					object_retrieve.basic_info.image
				)      
			)   

			// Image
			request.body.image && (
				request.body.image = await handleImage(
					request.body.image, 
					Label,
					'update',
					object_retrieve.image
				)      
			)   

			// Update
			object_retrieve = await Model.findByIdAndUpdate(
				request.user.id,
				request.body, 
				{
					new: true,
					runValidators: true,
					useFindAndModify: false
				}
			)

			// Response
			response.status(200).json({
				success: true,
				message: `${Label} Profile Updated Successfully`,
				update: object_retrieve
			})
		}),

		// Profile Update Password Controller
		profileUpdatePassword: catchAsyncError(async (request, response, next) => {
			// Destructure Body
			const {old_password, new_password, confirm_password} = request.body

			// Retrieve
			const user = await Model.findById(request.user.id).select("+password");

			// Not Found
			if (!user) next(new ErrorHandler(`${Label} Not Found`, 404))

			// Check 1
			if (!old_password, !new_password, !confirm_password) next(new ErrorHandler("Please enter old password, new password and confirm password", 400))

			// Check 2
			if (old_password === new_password)  next(new ErrorHandler("New password connot be same as old password", 404));

			// Check 3
			if (new_password !== confirm_password)  next(new ErrorHandler("Please match both password", 400));

			// Match Password 1
			const isPasswordMatched1 = await user.comparePassword(old_password)

			// Not Matched
			if (!isPasswordMatched1) next(new ErrorHandler("Old password is incorrect", 401))

			// // Match Password 2
			// const isPasswordMatched2 = await user.comparePassword(new_password)

			// // Not Matched
			// if (isPasswordMatched2) next(new ErrorHandler("New password connot be same as old password", 401))

			// Save
			user.password = new_password;
			await user.save();
			
			// Response
			generateCookie(201, `Profile Password Updated Successfully`, `profile_password_update`, user, response)
		})

	}   
}
