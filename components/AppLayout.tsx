import Head from "next/head";
import Link from "next/link";
import React from "react";

const APP_DESCRIPTION = "A simple blog built with Next.js"

type LayoutProps = {
    title: string;
    className?: string;
    children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> =({title,className,children}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={APP_DESCRIPTION} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="flex flex-col w-full">
            <svg className="absolute right-0 h-auto -top-8 w-96 -z-20 md:-top-4 md:right-0" viewBox="0 0 939 1091" fill="none">
                <g filter="url(#filter0_f_3_2)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M477.435 268.179C527.895 250.222 576.188 180.199 623.441 205.416C672.816 231.765 642.67 314.464 662.346 366.857C674.695 399.741 716.605 420.287 717.325 455.407C718.087 492.591 662.718 516.157 666.166 553.188C670.843 603.412 739.413 633.715 738.624 684.149C737.944 727.557 691.514 755.774 662.49 788.058C628.789 825.546 603.583 893.91 553.304 890.289C494.903 886.084 470.584 810.083 426.901 771.094C402.011 748.878 375.011 730.838 349.966 708.798C326.737 688.355 305.893 666.807 283.79 645.153C255.547 617.484 193.331 601.317 200.583 562.45C209.262 515.936 310.588 527.573 314.527 480.42C320.126 413.415 202.497 367.833 222.215 303.551C236.979 255.417 321.497 302.031 371.367 295.119C407.899 290.056 442.688 280.544 477.435 268.179Z" fill="url(#paint0_linear_3_2)"/>
                </g>
                <defs>
                    <filter id="filter0_f_3_2" x="0" y="0" width="938.631" height="1090.43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_3_2"/>
                    </filter>
                    <linearGradient id="paint0_linear_3_2" x1="200" y1="890.427" x2="836.964" y2="684.778" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6CACE4"/>
                        <stop offset="0.0666667" stopColor="#6CACE4"/>
                        <stop offset="0.133333" stopColor="#6DADE4"/>
                        <stop offset="0.2" stopColor="#6FAEE5"/>
                        <stop offset="0.266667" stopColor="#72B0E5"/>
                        <stop offset="0.333333" stopColor="#75B3E6"/>
                        <stop offset="0.4" stopColor="#79B6E7"/>
                        <stop offset="0.466667" stopColor="#7DB9E8"/>
                        <stop offset="0.533333" stopColor="#82BDEA"/>
                        <stop offset="0.6" stopColor="#86C0EB"/>
                        <stop offset="0.666667" stopColor="#8AC3EC"/>
                        <stop offset="0.733333" stopColor="#8DC6ED"/>
                        <stop offset="0.8" stopColor="#90C8ED"/>
                        <stop offset="0.866667" stopColor="#92C9EE"/>
                        <stop offset="0.933333" stopColor="#93CAEE"/>
                        <stop offset="1" stopColor="#93CAEE"/>
                    </linearGradient>
                </defs>
            </svg>

          <nav className="fixed w-full z-10 bg-white backdrop-blur-lg bg-opacity-30 flex flex-row items-center justify-between gap-1 px-10 border-b h-[4rem] border-b-gray-100">
                <div className="font-sans">
                    <Link href={'/'}><span className="text-blue-500">aturannya.app</span></Link>
                    </div>
                    <ul>
                        <li>en/id</li>
                    </ul>
          </nav>
          <main className="flex flex-col min-h-screen mt-24">
              {children}
          </main>
          <footer className="h-36"></footer>
        </div>
    </>
    )
}

export default AppLayout;