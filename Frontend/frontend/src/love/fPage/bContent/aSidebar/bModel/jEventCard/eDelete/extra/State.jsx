const InitialState = {
	A: "Bro... Inside EventCardDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCardDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-delete',
	ReceivedObject: 'received-object-event-card-delete',
	RequiredObject: 'required-object-event-card-delete',
}  

export default EventCardDeleteState