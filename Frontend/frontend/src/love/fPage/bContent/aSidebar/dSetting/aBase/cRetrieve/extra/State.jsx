const InitialState = {
	A: "Bro... Inside BaseRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BaseRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'base-retrieve-form-object':
			return {...state, FormObject: action.payload}
		case 'base-retrieve-received-object':
			return {...state, ReceivedObject: action.payload}
		case 'base-retrieve-required-object':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'base-retrieve-form-object',
	ReceivedObject: 'base-retrieve-received-object',
	RequiredObject: 'base-retrieve-required-object',
}  

export default BaseRetrieveState