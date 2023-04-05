const InitialState = {
	A: "Bro... Inside RoleState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role':
			return {...state, FormObject: action.payload}
		case 'received-object-role':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role',
	ReceivedObject: 'received-object-role',
	RequiredObject: 'required-object-role',
	ExtraObject: 'extra-object-role',
}  

export default RoleState