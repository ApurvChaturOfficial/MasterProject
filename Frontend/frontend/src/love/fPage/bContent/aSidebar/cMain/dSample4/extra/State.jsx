const InitialState = {
	A: "Bro... Inside Sample4State",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Sample4State = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sample4':
			return {...state, FormObject: action.payload}
		case 'received-object-sample4':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sample4':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sample4':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sample4',
	ReceivedObject: 'received-object-sample4',
	RequiredObject: 'required-object-sample4',
	ExtraObject: 'extra-object-sample4',
}  

export default Sample4State