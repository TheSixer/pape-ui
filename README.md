## Install
```
npm install pape-ui --save
```

## Usage
```
import Vue from 'vue'
import PapeUI from 'pape-ui'

import "pape-ui/lib/pape-ui.css";

Vue.use(PapeUI)
```

```
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
```
