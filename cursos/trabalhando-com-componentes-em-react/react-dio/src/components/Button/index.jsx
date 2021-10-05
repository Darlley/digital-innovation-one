const Button = ({children, className, onClick}) => {

    return <a onClick={onClick} href="#" className={className}>{children}</a>;
}

export default Button;