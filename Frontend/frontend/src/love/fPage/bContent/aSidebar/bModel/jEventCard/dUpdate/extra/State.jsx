const InitialState = {
	A: "Bro... Inside EventCardUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCardUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-update':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-update',
	ReceivedObject: 'received-object-event-card-update',
	RequiredObject: 'required-object-event-card-update',
}  

export default EventCardUpdateState