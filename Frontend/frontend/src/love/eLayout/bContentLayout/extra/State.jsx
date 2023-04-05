const InitialState = {
	A: "Bro... Inside ContentLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ContentLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-content-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-content-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-content-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-content-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-content-layout',
	ReceivedObject: 'received-object-content-layout',
	RequiredObject: 'required-object-content-layout',
	ExtraObject: 'extra-object-content-layout',
}  

export default ContentLayoutState