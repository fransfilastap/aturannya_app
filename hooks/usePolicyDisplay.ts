import moment from "moment";
import { OPolicy } from "../types/core"

const constructName = (...args:string[]) => {
    return args.join(' ');
}

const i18n = {
    en: {
        uploadTime: 'Uploaded ',
    },
    id: {
        uploadTime: 'Diunggah ',
    }
}

export const usePolicyDisplay = (policy: OPolicy) => {
    
    const policyName = () => {
        return constructName(policy.PolicyType.Name, "Nomor", policy.Number, 'Tahun', policy.Year, "tentang", policy.On)
    }

    const policyEnactment = () => {
        return constructName(policy.EnactedAt, "di", policy.EnactedIn)
    }

    const policyIssuance = () => {
        return constructName(policy.IssuedAt, "di", policy.IssuedIn)
    }

    const policyUploadTime = () => {
        if (policy.CreatedAt && policy.UpdatedAt) {
            return constructName(i18n.id.uploadTime, moment(policy.CreatedAt).startOf('day').fromNow())
        }

        return ''
    }

    return {
        policyName,
        policyEnactment,
        policyIssuance,
        policyUploadTime
    }
}