import { NextPage } from "next";
import AppLayout from "../../components/AppLayout";
import { OPolicy } from "../../types/core";

const Policy: NextPage<OPolicy> = () => {
    
    return (
        <AppLayout title="Policy Detail">
            <div>
            <h1>Policy</h1>
            </div>
        </AppLayout>
    );
}

export default Policy;