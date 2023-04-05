const InitialState = {
	A: "Bro... Inside ExperienceDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ExperienceDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-home-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-delete',
	ReceivedObject: 'received-object-home-delete',
	RequiredObject: 'required-object-home-delete',
}  

export default ExperienceDeleteState