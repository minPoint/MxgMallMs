/**
 * 基础工具类
 */

import lodash from "lodash";
import {toRaw} from "vue"

class BaseUtils {

    constructor() {
    }
    static lodash: lodash = lodash;
    static getTarget = (proxy: any) => {
        return toRaw(proxy)
    }
}

export default BaseUtils