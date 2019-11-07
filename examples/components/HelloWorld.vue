<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button type="button" name="button" @click="showConfirmBox">confirm</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    showConfirmBox() {
      this.$confirm({
        type: "empty",
        content: "test confirm",
        canClose: false,
        isShowCancelBtn: true,
        confirmBtnText: "confirm",
        callback: res => {
          console.log(res);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
