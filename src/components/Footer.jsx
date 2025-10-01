import {FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa";

export default function Footer(){
    const li = `transition-transform transition-colors duration-300 ease-in-out 
                hover:scale-120 hover:cursor-pointer `
    return(
        <footer className="bg-zinc-950 text-zinc-400 py-6 rounded-b-lg flex items-center justify-center">
            <ol className="flex gap-7">
                <li className={`${li} hover:text-blue-500`}><FaFacebook className="h-6 w-6"/></li>
                <li className={`${li} hover:text-zinc-500`}><FaGithub className="h-6 w-6" /></li>
                <li className={`${li} hover:text-purple-400`}><FaInstagram className="h-6 w-6" /></li>
                <li className={`${li} hover:text-sky-400`}><FaTwitter className="h-6 w-6" /></li>
            </ol>
        </footer>
    )
}