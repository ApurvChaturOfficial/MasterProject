const InitialState = {
	A: "Bro... Inside ServiceCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ServiceCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-create':
			return {...state, FormObject: action.payload}
		case 'received-object-service-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-create',
	ReceivedObject: 'received-object-service-create',
	RequiredObject: 'required-object-service-create',
}  

export default ServiceCreateState