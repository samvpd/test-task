import React, { FC } from 'react'
import { Filter } from '../Filter'
import { Header } from '../Header'
import styles from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Header />
				<Filter />
				{children}
			</div>
		</div>
	)
}
