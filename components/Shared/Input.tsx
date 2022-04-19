type InputProps = React.ComponentProps<"input"> & {
    label: string;
}

const Input: React.FC<InputProps> = ({label}) => {
    return (
        <div className="relative flex flex-col gap-2 ">
            <label>{ label }</label>
            <input type={'text'} placeholder={'Search'} className={'text-gray-500 outline-1 focus:outline-blue-400 font-normal border px-12 py-2.5 border-gray-200 rounded-md font-sans w-full h-full'} />
        </div>
    )
}

export default Input;