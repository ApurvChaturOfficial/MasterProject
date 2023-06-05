const InitialState = {
	A: "Bro... Inside EventRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-event-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-retrieve':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-retrieve':
			return {...state, ExtraObject: action.payload}	
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-retrieve',
	ReceivedObject: 'received-object-event-retrieve',
	RequiredObject: 'required-object-event-retrieve',
	ExtraObject: 'extra-object-event-retrieve',
}  

export default EventRetrieveState