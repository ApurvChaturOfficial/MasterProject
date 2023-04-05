const InitialState = {
	A: "Bro... Inside Sample1State",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Sample1State = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sample1':
			return {...state, FormObject: action.payload}
		case 'received-object-sample1':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sample1':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sample1':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sample1',
	ReceivedObject: 'received-object-sample1',
	RequiredObject: 'required-object-sample1',
	ExtraObject: 'extra-object-sample1',
}  

export default Sample1State