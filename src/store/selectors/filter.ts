import { FILTER_CONSTANTS } from '../../constants'

export const getFilteredCards = (cards: any[], filterBy: string) => {
	switch (filterBy) {
		case FILTER_CONSTANTS.AVAILABLE:
			return cards.filter((item: any) => item.quantity_available > 0)
		case FILTER_CONSTANTS.NOT_AVAILABLE:
			return cards.filter((item: any) => item.quantity_available === 0)
		default:
			return cards
	}
}
