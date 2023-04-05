const InitialState = {
	A: "Bro... Inside BaseListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BaseListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'base-list-form-object':
			return {...state, FormObject: action.payload}
		case 'base-list-received-object':
			return {...state, ReceivedObject: action.payload}
		case 'base-list-required-object':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'base-list-form-object',
	ReceivedObject: 'base-list-received-object',
	RequiredObject: 'base-list-required-object',
}  

export default BaseListState