const InitialState = {
	A: "Bro... Inside AboutCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AboutCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-create':
			return {...state, FormObject: action.payload}
		case 'received-object-about-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-create',
	ReceivedObject: 'received-object-about-create',
	RequiredObject: 'required-object-about-create',
}  

export default AboutCreateState