const InitialState = {
	A: "Bro... Inside ServiceUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ServiceUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-update':
			return {...state, FormObject: action.payload}
		case 'received-object-service-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-update',
	ReceivedObject: 'received-object-service-update',
	RequiredObject: 'required-object-service-update',
}  

export default ServiceUpdateState