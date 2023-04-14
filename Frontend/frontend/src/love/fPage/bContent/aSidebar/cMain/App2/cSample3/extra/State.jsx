const InitialState = {
	A: "Bro... Inside Sample3State",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Sample3State = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sample3':
			return {...state, FormObject: action.payload}
		case 'received-object-sample3':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sample3':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sample3':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sample3',
	ReceivedObject: 'received-object-sample3',
	RequiredObject: 'required-object-sample3',
	ExtraObject: 'extra-object-sample3',
}  

export default Sample3State