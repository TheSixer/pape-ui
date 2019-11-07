import Vue from "vue";
import confirmBox from "./src/index.vue";

const ConfirmBoxInstance = Vue.extend(confirmBox);
let instance;
const initInstance = () => {
  // 实例化vue实例
  instance = new ConfirmBoxInstance();
  let msgBoxEl = instance.$mount().$el;
  document.body.appendChild(msgBoxEl);
};
// 定义插件对象
const ConfirmBox = {};
ConfirmBox.confirm = options => {
  if (!instance) {
    initInstance();
  }
  if (typeof options === "string") {
    instance.content = options;
  } else if (typeof options === "object") {
    Object.assign(instance, options);
  }
  return instance.showConfirmBox();
};

export default ConfirmBox;
export { ConfirmBox };
