const InitialState = {
	A: "Bro... Inside DashboardState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const DashboardState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-dashboard':
			return {...state, FormObject: action.payload}
		case 'received-object-dashboard':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-dashboard':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-dashboard',
	ReceivedObject: 'received-object-dashboard',
	RequiredObject: 'required-object-dashboard',
}  

export default DashboardState