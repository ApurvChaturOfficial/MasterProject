const InitialState = {
	A: "Bro... Inside EventCardListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCardListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-list':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-list',
	ReceivedObject: 'received-object-event-card-list',
	RequiredObject: 'required-object-event-card-list',
}  

export default EventCardListState