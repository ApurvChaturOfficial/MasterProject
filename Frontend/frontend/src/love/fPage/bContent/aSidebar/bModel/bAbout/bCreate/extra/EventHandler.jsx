const EventHandler = {
	Cards: {
		Add: Redux => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						cards: [
							...Redux.state.FormObject.FormValue.cards, {
							title: "",
							sub_title: "",
							icon: ""
						}]
					}
				} })                        
			)
		},
		Remove: (Redux, index) => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						cards: [
							...Redux.state.FormObject.FormValue.cards.slice(0, index),
							...Redux.state.FormObject.FormValue.cards.slice(index + 1)
						]
					}
				} })                        
			)
		},
		Change: (event, Redux, index) => {
			let {name, value} = event.target


			let cards1 = Redux.state.FormObject.FormValue.cards
			cards1[index] = {
				...cards1[index],
				[name]: value
			}

			return (
				Redux.dispatch({
					type: Redux.action.FormObject,
					payload: {
						...Redux.state.FormObject,
						FormValue: {
							...Redux.state.FormObject.FormValue,
							cards: cards1
						},
					},
				})
			)
		}
	}
}

export default EventHandler