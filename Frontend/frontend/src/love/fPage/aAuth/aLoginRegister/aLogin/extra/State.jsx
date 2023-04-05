const InitialState = {
	A: "Bro... Inside LoginState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const LoginState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-login':
			return {...state, FormObject: action.payload}
		case 'received-object-login':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-login':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-login':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-login',
	ReceivedObject: 'received-object-login',
	RequiredObject: 'required-object-login',
	ExtraObject: 'extra-object-login',
}  

export default LoginState