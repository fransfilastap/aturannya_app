type QueryProps = {
    placeholder: string
}
const Query: React.FC<QueryProps> = ({ placeholder }) => {
    return (
        <div className="relative ">
            <input type={'text'} placeholder={placeholder} className={'text-gray-500  font-normal border px-12 py-2.5 border-gray-500 rounded-md font-sans w-full h-full bg-white bg-opacity-10 backdrop-blur-2xl'} />
            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300 absolute w-5 h-5 top-2.5 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    )
}

export default Query;