const InitialState = {
	A: "Bro... Inside ServiceRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ServiceRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-service-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-retrieve',
	ReceivedObject: 'received-object-service-retrieve',
	RequiredObject: 'required-object-service-retrieve',
}  

export default ServiceRetrieveState