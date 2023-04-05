const InitialState = {
	A: "Bro... Inside MenuState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-menu':
			return {...state, FormObject: action.payload}
		case 'received-object-menu':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-menu':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-menu':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-menu',
	ReceivedObject: 'received-object-menu',
	RequiredObject: 'required-object-menu',
	ExtraObject: 'extra-object-menu',
}  

export default MenuState