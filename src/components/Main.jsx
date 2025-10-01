export default function Main(){
    const container = `text-zinc-200 w-10/12 mx-auto flex flex-col items-center  
                       my-6`
    const section1 = `flex flex-col mb-2`
    const section2 = ``
    const h2 = `text-lg font-semibold`
    const p = `text-xs text-zinc-300`
    return(
        <main className={container}>
            <section className={section1}>
                <h2 className={h2}>About</h2>
                <p className={p}>
                    I am a frontend developer with a particular interest in making things simple
                    and building projects with React, Next.js, and Tailwind. I try to keep up with
                    modern tools and best practices.   
                </p>
            </section>
            <section className={section2}>
                <h2 className={h2}>Interests</h2>
                <p className={p}>
                    Food lover. Music passionate. Reader. Internet fanatic. Gamer.
                    Entrepreneur. Travel geek. Rock culture lover. Coffee fanatic.
                </p>
            </section>
        </main>
    )
}