/**
 * 菜单接口常量定义
 */
import MenuServiceImpl from "@/services/impl/system/MenuServiceImpl";
import BaseService from "@/services/inter/BaseService";

interface MenuService extends BaseService{

    listMenuTree(params: any): void;
}


// const MenuService : MenuService = new MenuServiceImpl();

export default MenuService