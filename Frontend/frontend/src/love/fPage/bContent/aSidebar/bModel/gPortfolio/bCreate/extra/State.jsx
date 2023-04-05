const InitialState = {
	A: "Bro... Inside PortfolioCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-create':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-create',
	ReceivedObject: 'received-object-portfolio-create',
	RequiredObject: 'required-object-portfolio-create',
}  

export default PortfolioCreateState