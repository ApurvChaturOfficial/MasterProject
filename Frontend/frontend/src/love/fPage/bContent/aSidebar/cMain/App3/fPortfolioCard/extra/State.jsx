const InitialState = {
	A: "Bro... Inside PortfolioCardState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCardState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-card':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card',
	ReceivedObject: 'received-object-portfolio-card',
	RequiredObject: 'required-object-portfolio-card',
	ExtraObject: 'extra-object-portfolio-card',
}  

export default PortfolioCardState