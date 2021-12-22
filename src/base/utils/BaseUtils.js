/**
 * 基础工具类
 */

import Network from "./Network";
import lodash from "lodash";
import {toRaw} from "vue"
const BaseUtils = {
    network: new Network(),
    lodash,
    getTarget: (proxy)=>{return toRaw(proxy)}
}

export default BaseUtils