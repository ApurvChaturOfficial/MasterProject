
const stopLoading = Redux => {
    return (
        Redux.dispatch({ 
            type: Redux.action.ExtraObject, 
            payload: {
                Loading: false
            } 
        })
    )
}

export default stopLoading