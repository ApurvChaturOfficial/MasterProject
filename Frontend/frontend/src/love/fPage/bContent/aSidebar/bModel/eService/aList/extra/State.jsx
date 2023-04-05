const InitialState = {
	A: "Bro... Inside ServiceListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ServiceListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-list':
			return {...state, FormObject: action.payload}
		case 'received-object-service-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-list',
	ReceivedObject: 'received-object-service-list',
	RequiredObject: 'required-object-service-list',
}  

export default ServiceListState