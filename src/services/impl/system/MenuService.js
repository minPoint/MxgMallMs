import Utils from "../../../base/utils/BaseUtils"
import InterfaceConstants from "../../../base/utils/APIConstants";

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