const InitialState = {
	A: "Bro... Inside ResetPasswordState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ResetPasswordState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-reset-password':
			return {...state, FormObject: action.payload}
		case 'received-object-reset-password':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-reset-password':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-reset-password':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-reset-password',
	ReceivedObject: 'received-object-reset-password',
	RequiredObject: 'required-object-reset-password',
	ExtraObject: 'extra-object-reset-password',
}  

export default ResetPasswordState