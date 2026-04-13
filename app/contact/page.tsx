import Link from "next/link";

export default function Contact() {
    return (
        <div className="bg-black/60 w-4/5 mx-auto p-4 text-white">  
            <Link href="https://instagram.com/soloxdead" target="_blank"><p className="text-2xl">instagram: @soloxdead</p></Link>
            <a href="mailto:justin@whisperfront.com"><p className="text-2xl">email: justin @ whisperfront (.) com</p></a>
        </div>
    );
}