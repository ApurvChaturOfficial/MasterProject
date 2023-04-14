const InitialState = {
	A: "Bro... Inside ServiceState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service':
			return {...state, FormObject: action.payload}
		case 'received-object-service':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service',
	ReceivedObject: 'received-object-service',
	RequiredObject: 'required-object-service',
	ExtraObject: 'extra-object-service',
}  

export default ServiceState