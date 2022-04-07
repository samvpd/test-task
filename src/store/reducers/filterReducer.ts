import { FILTER_CONSTANTS } from '../../constants'

interface FilterAction {
	type: string
	payload: string
}

const initialState: AppState['filter'] = 'all'

export const filterReducer = (
	state = initialState,
	action: FilterAction
): string => {
	switch (action.type) {
		case FILTER_CONSTANTS.SET_FILTER:
			return action.payload
		default:
			return state
	}
}
