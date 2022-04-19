import { OPolicy } from "../types/core";
import TrendingItem from "./TrendingItem";

type TrendingListProps = {
    policies: OPolicy[];
}



export const TrendingList: React.FC<TrendingListProps> = ({ policies }) => {

    return (
        <div className='flex flex-col justify-between'>
            <ul className='flex flex-col gap-y-2'>
                {policies.map((policy) => (
                    <TrendingItem policy={policy} key={policy.On} />
                ))}
            </ul>
        </div>
    )
}