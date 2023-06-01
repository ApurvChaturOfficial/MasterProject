const cloudinary = require("cloudinary")
const catchAsyncError = require("../../../cFunction/aCatchAsyncError")
const ErrorHandler = require("../../../cFunction/bErrorHandler")
const SearchFilterPaginate = require("../../../cFunction/fSearchFilterPaginate")
const handleImage = require("../../../cFunction/hHandleImage")
const BaseModel = require("../../aModel/aSetting/aBaseModel")
const RoleModel = require("../../aModel/bAdministration/bRoleModel")
const MenuModel = require("../../aModel/bAdministration/cMenuModel")


exports.roleController = (Model= RoleModel, Label= 'Role') => {
	return {
		// List Controller
		list: catchAsyncError(async (request, response, next) => {
			// API Feature
			const searchFilterPaginate = new SearchFilterPaginate(Model.find(), request.query).search().filter().paginate(50)

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

			// Assign Menu
			async function idToObject() {
				const ids = request.body.relation_info?.menus;
				const objects = [];

				for (const id of ids) {
					const object_retrieve = await new Promise(async resolve => {
						resolve(await MenuModel.findById(id.menu._id))
					});

					// Not Found
					if (!object_retrieve) next(new ErrorHandler(`Menu Not Found`, 404))

					objects.push({
						...id,
						menu: object_retrieve
					});
				}
				return objects
			}

			const mahBody = {
				...request.body,
				relation_info: {
					...request.body.relation_info,
					menus: request.body.relation_info?.menus ? await idToObject() : []
				}
			}
			
			// Create
			const object_create = await Model.create(mahBody)
			// const object_create = await Model.create(request.body)
	
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
			
			// Assign Menu
			async function idToObject() {
				const ids = request.body.relation_info?.menus;
				const objects = [];

				for (const id of ids) {
					const object_retrieve = await new Promise(async resolve => {
						resolve(await MenuModel.findById(id.menu._id))
					});

					// Not Found
					if (!object_retrieve) next(new ErrorHandler(`Menu Not Found`, 404))

					objects.push({
						...id,
						menu: object_retrieve
					});
				}
				return objects
			}

			const mahBody = {
				...request.body,
				relation_info: {
					...request.body.relation_info,
					menus: request.body.relation_info?.menus ? await idToObject() : []
				}
			}

			// Update
			object_retrieve = await Model.findByIdAndUpdate(
				request.params.id,
				mahBody, {
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
