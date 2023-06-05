const loading = {
  start: Redux => {
    return (
      Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
        ...Redux.state.ExtraObject,
        loading: true
      } })
    )
   },
  
  stop: Redux => {
    return (
      Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
        ...Redux.state.ExtraObject,
        loading: false
      } })
    )
  },

   
};

export default loading
