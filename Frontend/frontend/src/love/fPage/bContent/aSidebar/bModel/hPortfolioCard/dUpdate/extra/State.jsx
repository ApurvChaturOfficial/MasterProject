const InitialState = {
	A: "Bro... Inside PortfolioCardUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCardUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-update':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-update',
	ReceivedObject: 'received-object-portfolio-card-update',
	RequiredObject: 'required-object-portfolio-card-update',
}  

export default PortfolioCardUpdateState