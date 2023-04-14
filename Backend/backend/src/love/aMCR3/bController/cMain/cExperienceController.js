const cloudinary = require("cloudinary")
const catchAsyncError = require("../../../cFunction/aCatchAsyncError")
const ErrorHandler = require("../../../cFunction/bErrorHandler")
const SearchFilterPaginate = require("../../../cFunction/fSearchFilterPaginate")
const handleImage = require("../../../cFunction/hHandleImage")
const BaseModel = require("../../aModel/aSetting/aBaseModel")
const ExperienceModel = require("../../aModel/cMain/cExperienceModel")


exports.experienceController = (Model= ExperienceModel, Label= 'Experience') => {
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
			let object_retrieve = await Model.findById(request.params.id)

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

			// Update
			object_retrieve = await Model.findByIdAndUpdate(
				request.params.id,
				request.body, {
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
	}
}
