import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Person = ({ people }) => {
	const [index, setIndex] = useState(0)
	const { name, title, text, image } = people[index]

	const nextPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1
			if (newIndex > people.length - 1) {
				return 0
			}
			return newIndex
		})
	}
	const prevPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex - 1
			if (newIndex < 0) {
				return people.length - 1
			}
			return newIndex
		})
	}
	const randomPerson = () => {
		let randomPerson = Math.floor(Math.random() * people.length)
		if (randomPerson === index) {
			randomPerson = index + 1
		}
		setIndex(randomPerson)
	}

	return (
		<main>
			<article className='review'>
				<div className='img-container'>
					<img src={image} alt={name} className='person-img' />
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>

				<h4 className='author'>{name}</h4>
				<p className='job'>{title}</p>
				<p className='info'>{text}</p>
				<div className='btn-container'>
					<button className='prev-btn' onClick={prevPerson}>
						<FaChevronLeft />
					</button>
					<button className='next-btn' onClick={nextPerson}>
						<FaChevronRight />
					</button>
					<div>
						<button className='btn btn-hipster' onClick={randomPerson}>
							surprise me
						</button>
					</div>
				</div>
			</article>
		</main>
	)
}

export default Person
