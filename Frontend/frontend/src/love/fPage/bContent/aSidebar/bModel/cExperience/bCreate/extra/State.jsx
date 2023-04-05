const InitialState = {
	A: "Bro... Inside ExperienceCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ExperienceCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-create':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-create',
	ReceivedObject: 'received-object-experience-create',
	RequiredObject: 'required-object-experience-create',
}  

export default ExperienceCreateState