import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { FILTER_CONSTANTS } from '../../constants'
import { setFilter } from '../../store/action-creators/filter'

import styles from './Filter.module.scss'

export const Filter = () => {
	const [activeTab, setActiveTab] = useState<string>(FILTER_CONSTANTS.ALL)
	const dispatch = useDispatch()

	const onClick = (filterBy: string) => {
		dispatch(setFilter(filterBy))
		setActiveTab(filterBy)
	}

	return (
		<div className={styles.filter}>
			<div className={styles.filter__buttons}>
				<div
					className={classnames(styles.button__item, {
						[styles.active]: activeTab === FILTER_CONSTANTS.ALL,
					})}
					onClick={() => onClick(FILTER_CONSTANTS.ALL)}
				>
					All
				</div>
				<div
					className={classnames(styles.button__item, {
						[styles.active]:
							activeTab === FILTER_CONSTANTS.AVAILABLE,
					})}
					onClick={() => onClick(FILTER_CONSTANTS.AVAILABLE)}
				>
					Available
				</div>
				<div
					className={classnames(styles.button__item, {
						[styles.active]:
							activeTab === FILTER_CONSTANTS.NOT_AVAILABLE,
					})}
					onClick={() => onClick(FILTER_CONSTANTS.NOT_AVAILABLE)}
				>
					Not available
				</div>
			</div>
		</div>
	)
}
