import { FILTER_CONSTANTS } from '../../constants'

export const setFilter = (payload: string) => ({
	type: FILTER_CONSTANTS.SET_FILTER,
	payload,
})
