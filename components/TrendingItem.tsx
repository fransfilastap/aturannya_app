import { OPolicy } from "../types/core";
import { usePolicyDisplay } from "../hooks/usePolicyDisplay";
import Link from "next/link";

type TrendingProps = {
    policy: OPolicy;
}

const TrendingItem: React.FC<TrendingProps> = ({ policy }) => {

    const {policyName, policyEnactment, policyUploadTime} = usePolicyDisplay(policy);

    return (
        <li className='flex flex-col shadow-sm cursor-pointer'>
            <Link href={`/policy/${policy.Id}`}>
                <div className="flex flex-col px-3 py-3 bg-gray-100 rounded gap-y-2">
                <h5 className='font-sans font-semibold text-gray-600 hover:text-blue-400'>{ policyName() }<span></span></h5>
                <div className='flex flex-row text-xs gap-x-2'>
                    <p className="text-gray-400">{ policyEnactment() }</p>
                </div>
            </div>
            </Link>
        </li>
    )
}

export default TrendingItem;