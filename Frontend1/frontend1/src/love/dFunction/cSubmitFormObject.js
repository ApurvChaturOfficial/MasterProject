
const submitFormObject = (Redux, APICalls) => {
	if (Object.keys(Redux.state.FormObject.FormError).length === 0 && Redux.state.FormObject.FormIsValid) {
		console.log("first", APICalls, Redux.state.ExtraObject.active)
		return APICalls()
	}  
}

export default submitFormObject