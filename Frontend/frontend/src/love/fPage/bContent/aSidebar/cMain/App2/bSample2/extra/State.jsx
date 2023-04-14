const InitialState = {
	A: "Bro... Inside Sample2State",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Sample2State = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sample2':
			return {...state, FormObject: action.payload}
		case 'received-object-sample2':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sample2':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sample2':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sample2',
	ReceivedObject: 'received-object-sample2',
	RequiredObject: 'required-object-sample2',
	ExtraObject: 'extra-object-sample2',
}  

export default Sample2State