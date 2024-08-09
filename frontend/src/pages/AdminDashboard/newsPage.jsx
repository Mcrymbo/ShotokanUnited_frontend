import DashboardLayout from "../../layout/DashboardLayout";
import { ListNews } from "../../components/News";
import { Breadcrumb } from "../../components/Breadcrumbs";

const NewsPage = () => {
    return (
        <DashboardLayout>
            <Breadcrumb pageName='Users'/>

            <div className="flex flex-col gap-10">
                <ListNews />
            </div>
        </DashboardLayout>
    );
};

export default NewsPage;