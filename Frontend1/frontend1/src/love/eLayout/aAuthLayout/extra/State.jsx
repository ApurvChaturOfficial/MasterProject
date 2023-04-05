const InitialState = {
	A: "Bro... Inside AuthLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AuthLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-auth-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-auth-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-auth-layout':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-auth-layout',
	ReceivedObject: 'received-object-auth-layout',
	RequiredObject: 'required-object-auth-layout',
}  

export default AuthLayoutState