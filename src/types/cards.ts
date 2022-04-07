export enum CardActionTypes {
	FETCH_CARDS_INIT = 'FETCH_CARDS_INIT',
	FETCH_CARDS_DONE = 'FETCH_CARDS_DONE',
	FETCH_CARDS_FAIL = 'FETCH_CARDS_FAIL',
}

interface FetchCardsActionInit {
	type: CardActionTypes.FETCH_CARDS_INIT
}

interface FetchCardsActionDone {
	type: CardActionTypes.FETCH_CARDS_DONE
	payload: any
}

interface FetchCardsActionError {
	type: CardActionTypes.FETCH_CARDS_FAIL
	payload: string
}

export type CardAction =
	| FetchCardsActionInit
	| FetchCardsActionDone
	| FetchCardsActionError
