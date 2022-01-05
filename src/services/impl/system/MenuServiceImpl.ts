import MenuService from "@/services/inter/system/MenuService";
import {MenuConstants} from "@/constants/MenuConstants";
import Network from "@/base/utils/Network";
import BaseServiceImpl from "@/services/impl/BaseServiceImpl";

class MenuServiceImpl extends BaseServiceImpl implements MenuService {


    constructor() {
        super();
    }
    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    list = (params) =>{
        return Network.GET(MenuConstants.LIST, params)
    }

    /**
     * 查询 菜单Tree 列表
     * @param params 参数
     * @return Promise
     */
    listMenuTree = (params) =>{
        return Network.GET(MenuConstants.LIST_TREE, params)
    }
}
export default MenuServiceImpl;