const InitialState = {
	A: "Bro... Inside DirectHomeState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const DirectHomeState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-direct-home':
			return {...state, FormObject: action.payload}
		case 'received-object-direct-home':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-direct-home':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-direct-home':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-direct-home',
	ReceivedObject: 'received-object-direct-home',
	RequiredObject: 'required-object-direct-home',
	ExtraObject: 'extra-object-direct-home',
}  

export default DirectHomeState