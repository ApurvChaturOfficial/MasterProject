const InitialState = {
	A: "Bro... Inside EventCardCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCardCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-create':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-create',
	ReceivedObject: 'received-object-event-card-create',
	RequiredObject: 'required-object-event-card-create',
}  

export default EventCardCreateState