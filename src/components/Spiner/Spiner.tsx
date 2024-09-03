const Spinner = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 100 100'
		preserveAspectRatio='xMidYMid'
		width='200'
		height='200'
		style={{
			shapeRendering: 'auto',
			display: 'block',
			background: '#fff',
			margin: '0 auto',
			alignItems: 'center',
		}}
	>
		<g>
			<circle
				strokeLinecap='round'
				fill='none'
				strokeDasharray='48.69468613064179 48.69468613064179'
				stroke='#3f292b'
				strokeWidth='8'
				r='31'
				cy='50'
				cx='50'
			>
				<animateTransform
					values='0 50 50;360 50 50'
					keyTimes='0;1'
					repeatCount='indefinite'
					dur='1s'
					type='rotate'
					attributeName='transform'
				/>
			</circle>
			<circle
				strokeLinecap='round'
				fill='none'
				strokeDashoffset='34.55751918948772'
				strokeDasharray='34.55751918948772 34.55751918948772'
				stroke='#ce9c6b'
				strokeWidth='8'
				r='22'
				cy='50'
				cx='50'
			>
				<animateTransform
					values='0 50 50;-360 50 50'
					keyTimes='0;1'
					repeatCount='indefinite'
					dur='1s'
					type='rotate'
					attributeName='transform'
				/>
			</circle>
		</g>
	</svg>
)

export default Spinner
