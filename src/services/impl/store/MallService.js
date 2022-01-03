import Utils from "../../../base/utils/BaseUtils"
import InterfaceConstants from "../../../base/utils/APIConstants";


class MallService{
    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    add = (params) =>{
        return Utils.network.POST(InterfaceConstants.MallInterface.ADD, params)
    }
    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    list = (params) =>{
        return Utils.network.GET(InterfaceConstants.MallInterface.listPaging, params)
    }
}

export default MallService;