const InitialState = {
	A: "Bro... Inside ExperienceUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ExperienceUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-update':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-update',
	ReceivedObject: 'received-object-experience-update',
	RequiredObject: 'required-object-experience-update',
}  

export default ExperienceUpdateState