const InitialState = {
	A: "Bro... Inside ServiceDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ServiceDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-service-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-delete',
	ReceivedObject: 'received-object-service-delete',
	RequiredObject: 'required-object-service-delete',
}  

export default ServiceDeleteState