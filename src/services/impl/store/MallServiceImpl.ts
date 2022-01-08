import BaseServiceImpl from "@/services/impl/BaseServiceImpl";
import Network from "@/base/utils/Network";
import {MallConstants} from "@/constants/MallConstants";
import MallService from "@/services/inter/store/MallService";


class MallServiceImpl extends BaseServiceImpl implements MallService{


    constructor() {
        super();
    }

    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    add = (params) =>{
        return Network.POST(MallConstants.ADD, params)
    }

    /**
     * 删除
     * @param params
     */
    del = (params) =>{
        return Network.POST(MallConstants.DEL, params)
    }
    /**
     * 查询 菜单 列表
     * @param params 参数
     * @return Promise
     */
    list = (params) =>{
        return Network.GET(MallConstants.LIST, params)
    }
}

export default MallServiceImpl;