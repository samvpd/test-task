import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div>
					<h1 className={styles.header__title}>Explore</h1>
					<p className={styles.header__subtitle}>
						Buy and sell digital fashion NFT art
					</p>
				</div>
			</div>
		</div>
	)
}
