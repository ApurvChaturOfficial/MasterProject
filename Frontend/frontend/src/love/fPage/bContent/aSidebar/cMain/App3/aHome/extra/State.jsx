const InitialState = {
	A: "Bro... Inside HomeState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HomeState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home':
			return {...state, FormObject: action.payload}
		case 'received-object-home':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-home':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home',
	ReceivedObject: 'received-object-home',
	RequiredObject: 'required-object-home',
	ExtraObject: 'extra-object-home',
}  

export default HomeState