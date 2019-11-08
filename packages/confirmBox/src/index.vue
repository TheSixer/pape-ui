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
* {
  box-sizing: border-box;
}
.message-box {
  position: relative;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: fade(#000000, 0%);
    z-index: 999;
  }
  .message-content {
    position: fixed;
    left: 50%;
    top: 45%;
    width: 400px;
    height: 248px;
    background: rgba(32, 33, 36, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    box-sizing: content-box;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.5),
      inset 0px 0px 0px 1.5px rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    z-index: 9999;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      z-index: 9999;
      &::before {
        position: absolute;
        left: 0;
        top: 6px;
        content: "";
        width: 15px;
        height: 2.5px;
        border-radius: 1px;
        background: #444547;
        // background: yellow;
        transform: rotate(45deg);
      }
      &::after {
        position: absolute;
        left: 0;
        top: 6px;
        content: "";
        width: 15px;
        height: 2.5px;
        border-radius: 1px;
        background: #444547;
        // background: yellow;
        transform: rotate(-45deg);
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 38px 30px;
      height: 175px;
      .logo {
        position: absolute;
        left: -40px;
        bottom: 0;
      }
      .txt {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        text-align: left;
        color: rgba(168, 171, 178, 1);
        line-height: 21px;
      }
    }
    .btn-group {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 2px;
      // width:394px;
      height: 71px;
      background: rgba(42, 43, 46, 1);
      .btn-default {
        outline: none;
        margin: 0 8px;
        width: 112px;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 2px;
        transition: background 0.4s;
      }
      .btn-primary {
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(90deg, #0065d8, #009de6);
        &:hover {
          background: linear-gradient(90deg, #0080ff, #00aeff);
        }
        &:active {
          background: linear-gradient(90deg, #0048ae, #009de6);
        }
      }
      .btn-deepBlue {
        color: rgba(0, 174, 255, 1);
        background: linear-gradient(90deg, #151922, #1e2633);
        &:hover {
          background: linear-gradient(90deg, #171c25, #212a38);
        }
        &:active {
          background: linear-gradient(90deg, #10131c, #171d2a);
        }
      }
    }
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  animation: fade-in 0.3s;
}
.slide-fade-leave-active {
  animation: fade-in 0.3s reverse;
}
@keyframes fade-in {
  0% {
    top: 40%;
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  100% {
    top: 45%;
    opacity: 1;
  }
}
</style>
