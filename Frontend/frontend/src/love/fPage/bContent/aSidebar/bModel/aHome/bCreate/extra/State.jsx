const InitialState = {
	A: "Bro... Inside HomeCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const HomeCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-create':
			return {...state, FormObject: action.payload}
		case 'received-object-home-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-create',
	ReceivedObject: 'received-object-home-create',
	RequiredObject: 'required-object-home-create',
}  

export default HomeCreateState