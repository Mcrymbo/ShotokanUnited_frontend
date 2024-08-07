import DashboardLayout from "../../layout/DashboardLayout";
import { Dashboad } from "../../components/Dashboad";
import { Breadcrumb } from "../../components/Breadcrumbs";

const DashboardPage = () => {

    return (
        <DashboardLayout>
            <Breadcrumb pageName='Dashboard'/>

            <div className="flex flex-col gap-10">
                <Dashboad />
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;