import { componentInstall } from "../../utils/install";
import Button from "./index.vue";
// 提供按需加载的方式
export const AButton = componentInstall(Button);
// 到处组件
export default AButton;
