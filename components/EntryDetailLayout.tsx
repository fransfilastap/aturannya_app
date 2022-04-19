import Head from "next/head"
import { OPolicy } from "../types/core"

type EntryLayoutProps = {
    policy: OPolicy
    children: React.ReactNode
}

const EntryDetailLayout: React.FC<EntryLayoutProps> = ({ policy, children }) => {
    return (
        <>
            <Head>
                <title>{policy.On}</title>
                <meta name="description" content={policy.On} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-column">
                <nav className="flex flex-row justify-between gap-1 p-0 md:h-32">
                    <div className=""></div>
                </nav>
                <main className="flex flex-1 flex-column">  
                    {children}
                </main>
                <footer></footer>
            </div>
        </>
    )
}