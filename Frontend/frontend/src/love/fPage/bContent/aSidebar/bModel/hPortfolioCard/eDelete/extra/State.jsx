const InitialState = {
	A: "Bro... Inside PortfolioCardDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioCardDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-delete',
	ReceivedObject: 'received-object-portfolio-card-delete',
	RequiredObject: 'required-object-portfolio-card-delete',
}  

export default PortfolioCardDeleteState