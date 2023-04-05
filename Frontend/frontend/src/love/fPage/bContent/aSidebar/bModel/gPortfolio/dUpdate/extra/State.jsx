const InitialState = {
	A: "Bro... Inside PortfolioUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-update':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-update',
	ReceivedObject: 'received-object-portfolio-update',
	RequiredObject: 'required-object-portfolio-update',
}  

export default PortfolioUpdateState