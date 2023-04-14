const EventHandler = {
	Card: {
		Add: (Redux, index) => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						cards: [
							...Redux.state.FormObject.FormValue.cards, {
								title: "",
								sub_title: "",
								points: [{
									title: "",
								}]
							}
						]
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
			let cards = Redux.state.FormObject.FormValue.cards

			cards[index] = {
				...cards[index],
				[name]: value
			}

			return (
				Redux.dispatch({
					type: Redux.action.FormObject,
					payload: {
						...Redux.state.FormObject,
						FormValue: {
							...Redux.state.FormObject.FormValue,
							cards
						},
					},
				})
			)
		}
	},

	Points: {
		Add: (Redux, index) => {
			let cards = Redux.state.FormObject.FormValue.cards

			cards[index] = {
				...cards[index],
				points: [
					...cards[index].points, {
						title: "",
					}
				]
			}

			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						cards
					}
				} })                        
			)
		},

		Remove: (Redux, index, index1) => {
			let cards = Redux.state.FormObject.FormValue.cards

			cards[index] = {
				...cards[index],
				points: [
					...cards[index].points.slice(0, index1),
					...cards[index].points.slice(index1 + 1)
				]	
			}

			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						cards
					}
				} })                        
			)
		},

		Change: (event, Redux, index, index1) => {
			let {name, value} = event.target
			let cards = Redux.state.FormObject.FormValue.cards
			let points = Redux.state.FormObject.FormValue.cards[index].points

			points[index1] = {
				...points[index1],
				[name]: value
			}

			cards[index] = {
				...cards[index],
				points
			}

			console.log(index, index1)
			return (
				Redux.dispatch({
					type: Redux.action.FormObject,
					payload: {
						...Redux.state.FormObject,
						FormValue: {
							...Redux.state.FormObject.FormValue,
							cards
						},
					},
				})
			)
		}
	},

}

export default EventHandler