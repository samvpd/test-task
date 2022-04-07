import { CardActionTypes, CardAction } from '../../types/cards'

const initialState: AppState['cards'] = {
	items: [],
	loading: false,
	error: null,
}

export const cardsReducer = (
	state = initialState,
	action: CardAction
): CardState => {
	switch (action.type) {
		case CardActionTypes.FETCH_CARDS_INIT:
			return {
				...state,
				loading: true,
			}
		case CardActionTypes.FETCH_CARDS_DONE:
			return {
				...state,
				loading: false,
				error: null,
				items: [...state.items, ...action.payload.data.products],
			}
		case CardActionTypes.FETCH_CARDS_FAIL:
			return { ...state, loading: false, error: action.payload }

		default:
			return state
	}
}
