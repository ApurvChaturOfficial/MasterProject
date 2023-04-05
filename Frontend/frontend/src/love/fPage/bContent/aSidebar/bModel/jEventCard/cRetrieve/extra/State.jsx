const InitialState = {
	A: "Bro... Inside EventCardRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventCardRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-retrieve',
	ReceivedObject: 'received-object-event-card-retrieve',
	RequiredObject: 'required-object-event-card-retrieve',
}  

export default EventCardRetrieveState