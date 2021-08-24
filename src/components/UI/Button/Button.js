const Button = ({type, className, onClick, children}) => {
	return (
		<button type={type ? type : 'button'} className={className} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button