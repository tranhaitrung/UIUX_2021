<template>
  <CColumn>
    <div>Dashboard KPI nhân viên</div>
    <CRow class="align-items-center margin-2">
      Đơn vị
      <div style="width: 10px"></div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">UIUX_09</option>
          <option value="2">Ban kiểm soát</option>
        </CFormSelect>
      </CRow>
      <div style="width: 50px"></div>
      Tháng
      <div style="width: 10px"></div>
      <CRow class="select">
        <CFormSelect aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      <el-button type="success" style="width: 100px">Phân tích</el-button>
    </CRow>
    <div class="select"></div>
    <CAccordion :active-item-key="0" always-open>
      <CAccordionItem :item-key="1">
        <CAccordionHeader> Nhân viên xuất sắc nhất </CAccordionHeader>
        <CAccordionBody> </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="2">
        <CAccordionHeader> Thống kê kết quả KPI nhân viên </CAccordionHeader>
        <CAccordionBody> </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="3">
        <CAccordionHeader> So sánh KPI nhân viên </CAccordionHeader>
        <CAccordionBody> </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="4">
        <CAccordionHeader>
          Kết quả KPI tất cả các nhân viên UIUX_09
        </CAccordionHeader>
        <CAccordionBody> </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </CColumn>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Dashboard KPI nhân viên',
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
}
</script>
<style scoped>
.select {
  height: 50px;
  width: 200px;
}
.margin-2 {
  margin: 1px;
}
</style>
