import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	const [isVisible, setIsVisible] = useState(false)

	function toggleVisibility() {
		setIsVisible((prevVisibility) => !prevVisibility)
	}

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button onClick={toggleVisibility} className="btn">
					{isVisible ? `-` : `+`}
				</button>
			</header>
			{isVisible ? <p>{info}</p> : null}
		</article>
	)
}

export default Question
