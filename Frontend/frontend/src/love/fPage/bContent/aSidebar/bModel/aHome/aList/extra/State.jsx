const InitialState = {
	A: "Bro... Inside HomeListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const HomeListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-list':
			return {...state, FormObject: action.payload}
		case 'received-object-home-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-list',
	ReceivedObject: 'received-object-home-list',
	RequiredObject: 'required-object-home-list',
}  

export default HomeListState