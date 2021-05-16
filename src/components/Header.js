const Header = (props) => {
    let style = "mx-4 h-8 w-8 hover:shadow hover:text-gray-500"
    return (
        <header className="flex text-white absolute top-4 right-16">
            <props.chat className={style} onClick={props.toggleChat} />
            <props.info className={style} />
            <props.shows className={style} onClick={props.toggleShows} />
            <props.mail className={style} />
        </header>
    )
}

export default Header
