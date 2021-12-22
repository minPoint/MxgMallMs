import Utils from "../utils/BaseUtils"
import InterfaceConstants from "../utils/APIConstants";

class MenuService{
    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    list = (params) =>{
        return Utils.network.GET(InterfaceConstants.MenuInterface.listPaging, params)
    }

    /**
     * 查询 菜单Tree 列表
     * @param params 参数
     * @return Promise
     */
    listMenuTree = (params) =>{
        return Utils.network.GET(InterfaceConstants.MenuInterface.listTree, params)
    }
}

export default MenuService;