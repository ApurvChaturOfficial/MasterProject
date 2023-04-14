const InitialState = {
	A: "Bro... Inside PoerfolioState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PoerfolioState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio',
	ReceivedObject: 'received-object-portfolio',
	RequiredObject: 'required-object-portfolio',
	ExtraObject: 'extra-object-portfolio',
}  

export default PoerfolioState