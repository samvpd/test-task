import { combineReducers } from 'redux'
import { cardsReducer } from './cardsReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers<AppState>({
	cards: cardsReducer,
	filter: filterReducer,
})
