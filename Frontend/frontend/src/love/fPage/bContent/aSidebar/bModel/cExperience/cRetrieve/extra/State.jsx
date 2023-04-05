const InitialState = {
	A: "Bro... Inside ExperienceRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ExperienceRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-retrieve',
	ReceivedObject: 'received-object-experience-retrieve',
	RequiredObject: 'required-object-experience-retrieve',
}  

export default ExperienceRetrieveState