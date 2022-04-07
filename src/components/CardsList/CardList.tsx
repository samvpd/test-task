import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getFilteredCards } from '../../store/selectors'
import { CardItem } from '../CardItem'
import styles from './CardList.module.scss'

export const CardList = () => {
	const { cards, loading, filterBy } = useTypedSelector((state) => ({
		cards: state.cards.items,
		loading: state.cards.loading,
		filterBy: state.filter,
	}))

	const filteredCards = getFilteredCards(cards, filterBy)

	return (
		<div className={styles.card__list}>
			{loading && <p>Loading...</p>}
			{filteredCards &&
				filteredCards.map((item: any) => (
					<CardItem key={item.product_id} item={item} />
				))}
		</div>
	)
}
