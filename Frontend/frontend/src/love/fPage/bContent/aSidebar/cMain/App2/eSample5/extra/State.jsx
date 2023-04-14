const InitialState = {
	A: "Bro... Inside Sample5State",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Sample5State = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sample5':
			return {...state, FormObject: action.payload}
		case 'received-object-sample5':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sample5':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sample5':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sample5',
	ReceivedObject: 'received-object-sample5',
	RequiredObject: 'required-object-sample5',
	ExtraObject: 'extra-object-sample5',
}  

export default Sample5State