import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCards } from './store/action-creators/cards'

import { Layout } from './components/Layout'
import { CardList } from './components/CardsList'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCards())
	}, [])

	return (
		<div className='App'>
			<Layout>
				<CardList />
			</Layout>
		</div>
	)
}

export default App
