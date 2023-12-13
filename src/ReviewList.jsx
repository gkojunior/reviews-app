import React from 'react'
import Person from './Person'

const ReviewList = ({people, index}) => {
    const { id, name, title, text, image } = people[index]

	return (
		<div>
			<h2 className='title'>reviews app</h2>
			{people.map((person) => {
				return (
                    <Person {...person}  />
				)
			})}
		</div>
	)
}

export default ReviewList

