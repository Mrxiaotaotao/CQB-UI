<template>
  <div style="height:300px">
    <div style="width:300px;height:300px;border: 1px solid gray;float: left;">
      <portal-abnormal :abnormal-flag="abnormalFlag1" />
    </div>
    <div style="width:300px;height:300px;border: 1px solid gray;float: right;">
      <portal-abnormal :abnormal-flag="abnormalFlag2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'aaa',
  data() {
    return {
      abnormalFlag1: '1',
      abnormalFlag2: '2'
    };
  }
};
</script>
<style scoped></style>
