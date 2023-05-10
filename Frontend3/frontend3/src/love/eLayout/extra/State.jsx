const InitialState = {
	A: "Bro... Inside LayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const LayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-layout':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-layout',
	ReceivedObject: 'received-object-layout',
	RequiredObject: 'required-object-layout',
}  

export default LayoutState