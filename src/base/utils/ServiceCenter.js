/**
 * 中心服务
 */
import MenuService from '@/services/impl/system/MenuService'
import MallService from '@/services/impl/store/MallService'

const ServiceCenter = {
    MenuService: new MenuService(),
    MallService: new MallService(),
}

export default ServiceCenter;