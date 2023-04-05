const InitialState = {
	A: "Bro... Inside ProfileUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProfileUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-profile-update':
			return {...state, FormObject: action.payload}
		case 'received-object-profile-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-profile-update':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-profile-update':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-profile-update',
	ReceivedObject: 'received-object-profile-update',
	RequiredObject: 'required-object-profile-update',
	ExtraObject: 'extra-object-profile-update',
}  

export default ProfileUpdateState