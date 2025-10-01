import avatar from "../images/man.png"
import {FaLinkedin, FaEnvelope} from "react-icons/fa";


export default function Info(){
    const flex = `flex flex-col items-center`
    const a = `py-1 px-4 rounded-lg flex-1 flex items-center justify-center gap-2 shadow-lg
               transition-transform transition-colors transition-shadow duration-300 ease-in-out 
               hover:scale-105 active:scale-95 hover:shadow-xl `

    return(
        <section className={`${flex} text-zinc-200 rounded-t-lg`}>
            <img src={avatar} alt="avatar" className="h-86 w-full mb-4 rounded-t-lg"/>
            <section className={flex}>
                <h1 className="text-2xl font-bold">Giorgio valle</h1>
                <p className="text-orange-200 text-sm">Frontend Developer</p>
                <p className="text-xs mt-1">example.website</p>
            </section>
            <section className="flex gap-2 mt-6 w-10/12">
                <a className={`${a} bg-zinc-200 text-zinc-700 hover:bg-zinc-300 shadow-zinc-200/10`} href="#">
                  <span><FaEnvelope /></span>Email
                </a>
                <a className={`${a} bg-sky-500 hover:bg-sky-600 shadow-sky-500/10`} href="#">
                  <span><FaLinkedin /></span>LinkedIn
                </a>
            </section>
        </section>
    )
}