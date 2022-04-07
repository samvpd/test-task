import React, { FC } from 'react'
import styles from './CardItem.module.scss'

interface Props {
	item: any
}

export const CardItem: FC<Props> = ({ item }) => {
	return (
		<div className={styles.card__item}>
			<div className={styles.card__preview}>
				<div className={styles.preview__container}>
					<div className={styles.item__author}>
						<p className={styles.author__subtitle}>created by</p>
						<h2 className={styles.author__title}>
							{item.created_by.display_name}
						</h2>
					</div>
					<div className={styles.item__name}>
						<h2 className={styles.name__title}>{item.name}</h2>
					</div>
				</div>
			</div>
			<div className={styles.card__info}>
				<div className={styles.info__container}>
					<div className={styles.info__available}>
						<p className={styles.available__subtitle}>available</p>
						<h2 className={styles.available__title}>
							{item.quantity_available} of 50
						</h2>
					</div>
					<div className={styles.info__price}>
						<p className={styles.price__subtitle}>price</p>
						<h2 className={styles.price__title}>
							{item.initial_price} ETH
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
