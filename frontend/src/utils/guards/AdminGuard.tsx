import WaitingComponent from "../../modules/shared/WaitingComponent";
import {getAdminAuth} from "../../store/selectors";
import {useSelector} from "react-redux";
import {lazy} from "react";

const Admin = lazy(() => import("../../modules/admin/Admin/Admin"));
const AdminLogin = lazy(() => import("../../modules/admin/AdminLogin/AdminLogin"));


export const AdminGuard = () => {
    console.log('admin guard')
    const isLogged: boolean = useSelector(getAdminAuth);
    if (isLogged) {
        return WaitingComponent(Admin);
    } else {
        return WaitingComponent(AdminLogin);
    }
};
