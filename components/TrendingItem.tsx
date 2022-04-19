import { OPolicy } from "../types/core";

type TrendingProps = {
    policy: OPolicy;
}

const TrendingItem: React.FC<TrendingProps> = ({ policy }) => {
    return (
        <li className='flex flex-col gap-y-2'>
            <div className='px-3 py-3 font-mono font-semibold text-green-800 bg-gray-100'>{policy.On}<span></span></div>
        </li>
    )
}

export default TrendingItem;