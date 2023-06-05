const InitialState = {
	A: "Bro... Inside PortfolioListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-list':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-list':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-list':
			return {...state, ExtraObject: action.payload}	
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-list',
	ReceivedObject: 'received-object-portfolio-list',
	RequiredObject: 'required-object-portfolio-list',
	ExtraObject: 'extra-object-portfolio-list',
}  

export default PortfolioListState