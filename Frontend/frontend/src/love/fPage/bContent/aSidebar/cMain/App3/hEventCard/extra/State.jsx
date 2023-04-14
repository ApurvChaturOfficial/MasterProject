const InitialState = {
	A: "Bro... Inside EventCardState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card',
	ReceivedObject: 'received-object-event-card',
	RequiredObject: 'required-object-event-card',
	ExtraObject: 'extra-object-event-card',
}  

export default EventCardState