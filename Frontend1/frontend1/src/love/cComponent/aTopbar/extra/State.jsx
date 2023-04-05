const InitialState = {
	A: "Bro... Inside TopbarState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const TopbarState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-topbar':
			return {...state, FormObject: action.payload}
		case 'received-object-topbar':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-topbar':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-topbar',
	ReceivedObject: 'received-object-topbar',
	RequiredObject: 'required-object-topbar',
}  

export default TopbarState