const InitialState = {
	A: "Bro... Inside EventUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-update':
			return {...state, FormObject: action.payload}
		case 'received-object-event-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-update',
	ReceivedObject: 'received-object-event-update',
	RequiredObject: 'required-object-event-update',
}  

export default EventUpdateState