const InitialState = {
	A: "Bro... Inside BaseState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BaseState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base':
			return {...state, FormObject: action.payload}
		case 'received-object-base':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base',
	ReceivedObject: 'received-object-base',
	RequiredObject: 'required-object-base',
	ExtraObject: 'extra-object-base',
}  

export default BaseState