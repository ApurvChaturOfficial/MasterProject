const InitialState = {
	A: "Bro... Inside AboutDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AboutDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-about-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-delete',
	ReceivedObject: 'received-object-about-delete',
	RequiredObject: 'required-object-about-delete',
}  

export default AboutDeleteState