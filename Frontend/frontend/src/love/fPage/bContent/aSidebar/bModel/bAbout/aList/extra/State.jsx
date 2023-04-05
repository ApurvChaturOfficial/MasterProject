const InitialState = {
	A: "Bro... Inside AboutListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AboutListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-list':
			return {...state, FormObject: action.payload}
		case 'received-object-about-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-list',
	ReceivedObject: 'received-object-about-list',
	RequiredObject: 'required-object-about-list',
}  

export default AboutListState