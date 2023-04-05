const InitialState = {
	A: "Bro... Inside PortfolioCardRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCardRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-retrieve',
	ReceivedObject: 'received-object-portfolio-card-retrieve',
	RequiredObject: 'required-object-portfolio-card-retrieve',
}  

export default PortfolioCardRetrieveState