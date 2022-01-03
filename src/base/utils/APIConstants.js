import MenuInterface from '@/services/inter/system/MenuInterface'
import MallInterface from '@/services/inter/store/MallInterface'
import network from "./Network";

const APIConstants = {
    MenuInterface: new MenuInterface(),
    MallInterface: new MallInterface(),
}
export default APIConstants