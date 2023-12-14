import './App.css'
import people from './data'
import ReviewList from './ReviewList'

function App() {
	return (
		<div>
			<h2 className='title'>reviews app</h2>
			<ReviewList people={people} />
		</div>
	)
}

export default App
