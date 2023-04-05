const InitialState = {
	A: "Bro... Inside BaseUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BaseUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-update':
			return {...state, FormObject: action.payload}
		case 'received-object-base-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-update',
	ReceivedObject: 'received-object-base-update',
	RequiredObject: 'required-object-base-update',
}  

export default BaseUpdateState