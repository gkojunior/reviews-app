import { useState } from 'react'
import './App.css'
import people from './data'
import ReviewList from './ReviewList'

function App() {
	const [index, setIndex] = useState(0)

	return <ReviewList people={people} index={index} />
}

export default App

