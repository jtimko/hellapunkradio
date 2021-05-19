
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi"
const Contact = () => {
    const style = "h-8 w-8 mx-2 text-white hover:text-red-600";
    return (
        <div className="absolute top-16 right-20">
            <div className="flex flex-row">
                <a href="https://github.com/jtimko" target="_blank" rel="noreferrer"><FiGithub className={style} /></a>
                <a href="https://instagram.com/soloxdead" target="_blank" rel="noreferrer"><FiInstagram className={style} /></a>
                <a href="https://twitter.com/soloxdead" target="_blank" rel="noreferrer"><FiTwitter className={style} /></a>
            </div>
        </div>
    )
}

export default Contact
