<template>
  <div class="message-box">
    <div class="mask" @click="close" v-show="isShowMessageBox"></div>
    <transition name="slide-fade">
      <div class="message-content" v-show="isShowMessageBox">
        <div class="close" @click="close"></div>
        <div class="content">
          <p class="txt">{{ content }}</p>
        </div>
        <div class="btn-group">
          <button
            class="btn-default btn-primary"
            @click="confirm"
            v-show="isShowConfimrBtn"
          >
            {{ confirmBtnText }}
          </button>
          <button
            class="btn-default btn-deepBlue"
            @click="cancel"
            v-show="isShowCancelBtn"
          >
            {{ cancelBtnText }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "confirmBox",
  props: {
    type: {
      type: String,
      default: "success"
    },
    content: {
      type: String,
      default: "这是弹框内容"
    },
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    confirmBtnText: {
      type: String,
      default: "确定"
    },
    canClose: {
      type: Boolean,
      default: true
    },
    callback: Function
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: "",
      reject: "",
      promise: ""
    };
  },
  methods: {
    close() {
      if (this.canClose) {
        this.cancel();
      }
    },
    // 确定,将promise断定为resolve状态
    confirm() {
      this.isShowMessageBox = false;
      this.callback("confirm");
      // this.resolve("confirm");
      // this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel() {
      this.isShowMessageBox = false;
      this.callback("cancel");
      // this.reject("cancel");
      // this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showConfirmBox() {
      this.isShowMessageBox = true;
      // this.promise = new Promise((resolve, reject) => {
      //   this.resolve = resolve;
      //   this.reject = reject;
      // });
      // // 返回promise对象
      // return this.promise;
    },
    remove() {
      setTimeout(() => {
        this.destroy();
      }, 300);
    },
    destroy() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./assets/css/index.less";
</style>
