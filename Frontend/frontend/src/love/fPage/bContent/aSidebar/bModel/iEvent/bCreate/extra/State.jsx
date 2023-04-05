const InitialState = {
	A: "Bro... Inside EventCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-create':
			return {...state, FormObject: action.payload}
		case 'received-object-event-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-create',
	ReceivedObject: 'received-object-event-create',
	RequiredObject: 'required-object-event-create',
}  

export default EventCreateState