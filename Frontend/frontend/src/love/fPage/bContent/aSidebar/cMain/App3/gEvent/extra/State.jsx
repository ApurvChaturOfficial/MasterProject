const InitialState = {
	A: "Bro... Inside EventState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event':
			return {...state, FormObject: action.payload}
		case 'received-object-event':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event',
	ReceivedObject: 'received-object-event',
	RequiredObject: 'required-object-event',
	ExtraObject: 'extra-object-event',
}  

export default EventState