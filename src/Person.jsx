import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Person = ({ image, name, title, text }) => {
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
			</article>
		</main>
	)
}

export default Person
