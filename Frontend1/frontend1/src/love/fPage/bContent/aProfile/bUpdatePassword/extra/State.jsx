const InitialState = {
	A: "Bro... Inside UpdatePasswordState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UpdatePasswordState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-update-password':
			return {...state, FormObject: action.payload}
		case 'received-object-update-password':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-update-password':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-update-password':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-update-password',
	ReceivedObject: 'received-object-update-password',
	RequiredObject: 'required-object-update-password',
	ExtraObject: 'extra-object-update-password',
}  

export default UpdatePasswordState