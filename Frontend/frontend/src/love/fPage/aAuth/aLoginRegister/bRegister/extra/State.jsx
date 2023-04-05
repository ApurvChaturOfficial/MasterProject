const InitialState = {
	A: "Bro... Inside RegisterState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RegisterState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-register':
			return {...state, FormObject: action.payload}
		case 'received-object-register':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-register':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-register':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-register',
	ReceivedObject: 'received-object-register',
	RequiredObject: 'required-object-register',
	ExtraObject: 'extra-object-register',
}  

export default RegisterState