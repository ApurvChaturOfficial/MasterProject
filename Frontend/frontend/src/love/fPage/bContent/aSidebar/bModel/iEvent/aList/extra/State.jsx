const InitialState = {
	A: "Bro... Inside EventListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-list':
			return {...state, FormObject: action.payload}
		case 'received-object-event-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-list',
	ReceivedObject: 'received-object-event-list',
	RequiredObject: 'required-object-event-list',
}  

export default EventListState