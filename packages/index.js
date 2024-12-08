// 按需加載
export * from "./components/index";

// 全局註冊
import components from "./components";
// 全局安裝
export const install = function (app) {
  if (install.installed) return;
  components.forEach((c) => {
    app.use(c);
  });
};

export default install;
