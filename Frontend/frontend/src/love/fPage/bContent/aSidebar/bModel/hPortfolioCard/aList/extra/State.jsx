const InitialState = {
	A: "Bro... Inside PortfolioCardListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCardListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-list':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-list',
	ReceivedObject: 'received-object-portfolio-card-list',
	RequiredObject: 'required-object-portfolio-card-list',
}  

export default PortfolioCardListState