// render on the client side
"use client" 

import React from 'react'

const error = ({error, reset}:any) => {
	return (
		<div>
			This is not loading up: {error.message}
			<button onClick={() => reset()}>Reload</button>
		</div>
	)
}

export default error