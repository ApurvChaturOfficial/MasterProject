const InitialState = {
	A: "Bro... Inside ForgotPasswordState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ForgotPasswordState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-forgot-password':
			return {...state, FormObject: action.payload}
		case 'received-object-forgot-password':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-forgot-password':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-forgot-password':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-forgot-password',
	ReceivedObject: 'received-object-forgot-password',
	RequiredObject: 'required-object-forgot-password',
	ExtraObject: 'extra-object-forgot-password',
}  

export default ForgotPasswordState