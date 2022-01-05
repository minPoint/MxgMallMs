import MenuService from "@/services/inter/system/MenuService";
import MenuServiceImpl from "@/services/impl/system/MenuServiceImpl";
import MallService from "@/services/inter/store/MallService";
import MallServiceImpl from "@/services/impl/store/MallServiceImpl";

export const MenuService: MenuService = new MenuServiceImpl();
export const MallService: MallService = new MallServiceImpl();


// export default {
//     menuService,
//     mallService
// }