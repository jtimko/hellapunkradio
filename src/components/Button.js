const Button = (props) => {
    return (
        <div className={props.iconStyle} onClick={props.func}>
            <props.icon style={{height: 35, width: 35, color: props.color}} />
        </div>
    )
}

export default Button
