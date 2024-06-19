import DashboardLayout from "../../layout/DashboardLayout";
import { UserList } from "../../components/Users";
import { Breadcrumb } from "../../components/Breadcrumbs";

const UserPage = () => {
    return (
        <DashboardLayout>
            <Breadcrumb pageName='Users'/>

            <div className="flex flex-col gap-10">
                <UserList />
            </div>
        </DashboardLayout>
    );
};

export default UserPage;