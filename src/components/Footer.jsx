import {FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa";

export default function Footer(){
    const container = `bg-zinc-950 text-zinc-400 py-6 rounded-b-lg
                       flex items-center justify-center`
    const ol = `flex gap-7`
    const li = `hover:cursor-pointer 
                transition-transform transition-colors duration-300 ease-in-out 
                hover:scale-120 `
    const icon = `h-6 w-6`
    return(
        <footer className={container}>
            <ol className={ol}>
                <li className={`${li} hover:text-blue-500`}><FaFacebook className={icon}/></li>
                <li className={`${li} hover:text-zinc-500`}><FaGithub className={icon} /></li>
                <li className={`${li} hover:text-purple-400`}><FaInstagram className={icon} /></li>
                <li className={`${li} hover:text-sky-400`}><FaTwitter className={icon} /></li>
            </ol>
        </footer>
    )
}