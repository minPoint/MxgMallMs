import Utils from "../utils/BaseUtils"
import InterfaceConstants from "../utils/APIConstants";
class MenuService{

    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    listMenuTree = (params) =>{
        console.log(InterfaceConstants.MenuInterface.listMenu);
        return Utils.network.GET(InterfaceConstants.MenuInterface.listMenu)
    }
}

export default MenuService;