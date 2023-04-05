
const validateFormObject = (event, Redux, validateFormValues) => {
	event.preventDefault();

	return (
		Redux.dispatch({ type: Redux.action.FormObject, payload: {
			...Redux.state.FormObject,
			FormError: validateFormValues(Redux.state.FormObject.FormValue),
			FormIsValid: true
		} })
	)
}

export default validateFormObject