const Button = (props) => {
    return (
        <div className={props.iconStyle} onClick={props.func}>
            <props.icon style={{height: 65, width: 65, color: props.color}} />
        </div>
    )
}

export default Button
