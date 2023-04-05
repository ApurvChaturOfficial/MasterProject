const InitialState = {
	A: "Bro... Inside BaseCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BaseCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'base-create-form-object':
			return {...state, FormObject: action.payload}
		case 'base-create-received-object':
			return {...state, ReceivedObject: action.payload}
		case 'base-create-required-object':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'base-create-form-object',
	ReceivedObject: 'base-create-received-object',
	RequiredObject: 'base-create-required-object',
}  

export default BaseCreateState