
const startLoading = Redux => {
    return (
        Redux.dispatch({ 
            type: Redux.action.ExtraObject, 
            payload: {
                Loading: true
            } 
        })
    )
}

export default startLoading