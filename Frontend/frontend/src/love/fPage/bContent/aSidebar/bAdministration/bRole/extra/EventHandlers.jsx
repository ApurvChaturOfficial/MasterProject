import React from 'react'
import clearFormObject from '../../../../../../dFunction/aClearFormObject';

const EventHandlers = {
	HandleInput: (event, Redux, index) => {
		const { name, checked } = event.target;
		const menus = Redux.state.FormObject.FormValue.menus

		menus[index] = {
			...menus[index],
			access: {
				...menus[index].access,
				[name]: checked
			}
		}

		return (
			Redux.dispatch({
        type: Redux.action.FormObject,
        payload: {
          ...Redux.state.FormObject,
          FormValue: {
            ...Redux.state.FormObject?.FormValue,
            menus: menus
          },
        },
      })
		)
	},

	SetForm: Redux => {
		clearFormObject(Redux);

    const menus = []

    Redux.state.RequiredObject?.MenuList?.map(each => {
      menus.push({
        menu: {
					_id: each.id
				},
        access: {
          list: false,
          create: false,
          retrieve: false,
          update: false,
          delete: false
        }
      })
    })

    Redux.dispatch({
      type: Redux.action.FormObject,
      payload: {
        ...Redux.state.FormObject,
        FormValue: {
          menus: menus
        },
      },
    })
	}
}

export default EventHandlers