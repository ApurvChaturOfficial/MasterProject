const InitialState = {
	A: "Bro... Inside PortfolioDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const PortfolioDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-delete',
	ReceivedObject: 'received-object-portfolio-delete',
	RequiredObject: 'required-object-portfolio-delete',
}  

export default PortfolioDeleteState