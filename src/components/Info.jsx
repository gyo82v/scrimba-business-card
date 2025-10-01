import avatar from "../images/man.png"
import {FaLinkedin, FaEnvelope} from "react-icons/fa";


export default function Info(){
    const container = `flex flex-col items-center text-zinc-200 rounded-t-lg`
    const img = `h-86 w-full mb-4 rounded-t-lg`
    const h1 = `text-2xl font-bold`
    const section1 = `flex flex-col items-center`
    const section2 = `flex gap-2 mt-6 w-10/12`
    const p1 = `text-orange-200 text-sm`
    const p2 = `text-xs mt-1`
    const a = `py-1 px-4 rounded-lg flex-1 flex items-center justify-center gap-2 shadow-lg
               transition-transform transition-colors transition-shadow duration-300 ease-in-out 
               hover:scale-105 active:scale-95 hover:shadow-xl `

    return(
        <section className={container}>
            <img src={avatar} alt="avatar" className={img}/>
            <section className={section1}>
                <h1 className={h1}>Giorgio valle</h1>
                <p className={p1}>Frontend Developer</p>
                <p className={p2}>example.website</p>
            </section>
            <section className={section2}>
                <a className={`${a} bg-zinc-200 text-zinc-700 hover:bg-zinc-300 shadow-zinc-200/10`} href="#"><span><FaEnvelope /></span>Email</a>
                <a className={`${a} bg-sky-500 hover:bg-sky-600 shadow-sky-500/10`} href="#"><span><FaLinkedin /></span>LinkedIn</a>
            </section>
        </section>
    )
}