declare type Nullable<T> = T | null

declare interface AppState {
	cards: CardState
	filter: string
}

declare interface CardState {
	items: any[]
	loading: boolean
	error: Nullable<string>
}
