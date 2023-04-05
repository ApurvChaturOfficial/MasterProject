const InitialState = {
	A: "Bro... Inside EventDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const EventDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-event-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-delete',
	ReceivedObject: 'received-object-event-delete',
	RequiredObject: 'required-object-event-delete',
}  

export default EventDeleteState