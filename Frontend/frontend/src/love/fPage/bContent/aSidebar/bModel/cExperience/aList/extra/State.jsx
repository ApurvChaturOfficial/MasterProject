const InitialState = {
	A: "Bro... Inside ExperienceListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const ExperienceListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-list':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-list',
	ReceivedObject: 'received-object-experience-list',
	RequiredObject: 'required-object-experience-list',
}  

export default ExperienceListState