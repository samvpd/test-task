import { CardAction, CardActionTypes } from '../../types/cards'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchCards = () => {
	return async (dispatch: Dispatch<CardAction>) => {
		try {
			dispatch({ type: CardActionTypes.FETCH_CARDS_INIT })

			const response = await axios.get(`https://artisant.io/api/products`)
			dispatch({
				type: CardActionTypes.FETCH_CARDS_DONE,
				payload: response.data,
			})
		} catch (e) {
			dispatch({
				type: CardActionTypes.FETCH_CARDS_FAIL,
				payload: 'Error',
			})
		}
	}
}
