const InitialState = {
	A: "Bro... Inside PortfolioCardCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCardCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-create':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-create',
	ReceivedObject: 'received-object-portfolio-card-create',
	RequiredObject: 'required-object-portfolio-card-create',
}  

export default PortfolioCardCreateState