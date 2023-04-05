const InitialState = {
	A: "Bro... Inside BaseDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BaseDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-base-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-delete',
	ReceivedObject: 'received-object-base-delete',
	RequiredObject: 'required-object-base-delete',
}  

export default BaseDeleteState