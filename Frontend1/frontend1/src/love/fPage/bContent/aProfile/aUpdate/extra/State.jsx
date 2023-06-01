const InitialState = {
	A: "Bro... Inside UpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-update':
			return {...state, FormObject: action.payload}
		case 'received-object-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-update':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-update':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-update',
	ReceivedObject: 'received-object-update',
	RequiredObject: 'required-object-update',
	ExtraObject: 'extra-object-update',
}  

export default UpdateState