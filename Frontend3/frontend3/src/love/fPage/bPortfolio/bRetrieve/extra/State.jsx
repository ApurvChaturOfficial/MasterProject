const InitialState = {
	A: "Bro... Inside PortfolioRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-retrieve':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-retrieve':
			return {...state, ExtraObject: action.payload}	
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-retrieve',
	ReceivedObject: 'received-object-portfolio-retrieve',
	RequiredObject: 'required-object-portfolio-retrieve',
	ExtraObject: 'extra-object-portfolio-retrieve',
}  

export default PortfolioRetrieveState