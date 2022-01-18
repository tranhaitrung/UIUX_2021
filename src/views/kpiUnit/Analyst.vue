<template>
  <CColumn>
    <h4>Phân tích tính hợp lý trong thiết lập KPI đơn vị</h4>
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
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      <el-button type="success" style="width: 100px">Tìm kiếm</el-button>
    </CRow>
    <div class="select"></div>
    <CAccordion always-open>
      <CAccordionItem :item-key="1">
        <CAccordionHeader> Cây KPI đơn vị tháng 12-2021 </CAccordionHeader>
        <CAccordionBody>
          <CRow style="display: flex">
            <div style="flex: 1">
              <CListGroup flush>
                <CListGroupItem>UIUX_09 - Phê duyệt công việc</CListGroupItem>
                <CListGroupItem
                  >UIUX_09 - Hỗ trợ thực hiện công việc</CListGroupItem
                >
                <CListGroupItem>UIUX_09 - Sử dụng hệ thống</CListGroupItem>
                <CListGroupItem
                  >UIUX_09 - Tìm hiểu lý thuyết, tìm hiểu công
                  nghệ</CListGroupItem
                >
                <CListGroupItem>UIUX_09 - Thiết kế</CListGroupItem>
                <CListGroupItem
                  >UIUX_09 - Xây dựng kịch bản, dữ liệu thử nghiệm hệ tương
                  tác</CListGroupItem
                >
                <CListGroupItem
                  >UIUX_09 - Đánh giá tính dùng được</CListGroupItem
                >
              </CListGroup>
            </div>
            <div style="flex: 1">
              <h5>Thông tin chi tiết</h5>
              <div><strong>Tên:</strong> Phê duyệt công việc</div>
              <div><strong>Trọng số:</strong> 20</div>
              <div><strong>Số KPI nhân viên:</strong> 3</div>
              <div><strong>Số công việc:</strong> 3</div>
              <div><strong>Trọng số:</strong> 20</div>
            </div>
          </CRow>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="2">
        <CAccordionHeader>
          Tính hợp lý khi phân bố mục tiêu (KPI) đơn vị cho các nhân viên trong
          đơn vị, tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody>
          <CChartBar :data="bar" />
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </CColumn>
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'

export default {
  name: 'Dashboard KPI đơn vị',
  components: { CChartBar },
  computed: {
    bar() {
      return {
        labels: [
          'Hỗ trợ thực hiện công việc',
          'Phê duyệt công việc',
          'Sử dụng hệ thống',
          'Tìm hiểu lý thuyết, tìm hiểu công nghệ',
          'Thiết kế',
          'Xây dựng kịch bản thử nghiệm',
          'Đánh giá tính dùng được',
        ],
        datasets: [
          {
            label: 'Trọng số KPI đang thiết lập',
            backgroundColor: '#442bff',
            data: [10, 10, 10, 20, 20, 20, 10],
          },
          {
            label: 'Trọng số KPI theo phân tích trọng số nhân viên',
            backgroundColor: '#ff2b2b',
            data: [10, 10, 20, 10, 25, 15, 10],
          },
        ],
      }
    },
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
