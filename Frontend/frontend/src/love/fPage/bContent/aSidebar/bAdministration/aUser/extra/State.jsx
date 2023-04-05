const InitialState = {
	A: "Bro... Inside UserState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-user':
			return {...state, FormObject: action.payload}
		case 'received-object-user':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-user':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-user':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-user',
	ReceivedObject: 'received-object-user',
	RequiredObject: 'required-object-user',
	ExtraObject: 'extra-object-user',
}  

export default UserState