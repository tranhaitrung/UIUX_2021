<template>
  <CColumn>
    <h4>Dashboard KPI đơn vị</h4>
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
        <el-input type="month"></el-input>
      </CRow>
      <div style="width: 10px"></div>
      <el-button type="success" style="width: 100px">Phân tích</el-button>
    </CRow>
    <div class="select"></div>
    <CAccordion :active-item-key="2" always-open>
      <CAccordionItem :item-key="1">
        <CAccordionHeader>
          Biểu đồ thống kê điểm KPI giữa các đơn vị tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody>
          <CChartBar :data="bar" />
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="2">
        <CAccordionHeader>
          Xu hướng thực hiện mục tiêu của nhân viên UIUX_09 tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody align="center">
          <CChartLine
            :data="line"
            style="
              height: 400px;
              max-height: 400px;
              margin-top: 30px;
              width: 700px;
            "
          />
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="3">
        <CAccordionHeader>
          Phân phối KPI UIUX_09 tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody align="center">
          <div style="width: 500px; height: 500px">
            <CChartPie :data="pie" />
          </div>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="4">
        <CAccordionHeader> Kết quả KPI UIUX_09 </CAccordionHeader>
        <CAccordionBody>
          <CChartBar :data="bar2" />
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </CColumn>
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
import { CChartPie } from '@coreui/vue-chartjs'
import { CChartLine } from '@coreui/vue-chartjs'

export default {
  name: 'Dashboard KPI đơn vị',
  components: { CChartBar, CChartPie, CChartLine },
  computed: {
    bar() {
      return {
        labels: [
          'UIUX_09',
          'UIUX_09_01',
          'UIUX_09_02',
          'UIUX_09_03',
          'UIUX_09_04',
        ],
        datasets: [
          {
            label: 'Điểm',
            backgroundColor: '#f87979',
            data: [75, 70, 70, 65, 70],
          },
        ],
      }
    },
    bar2() {
      return {
        labels: ['T9-2021', 'T10-2021', 'T11-2021', 'T12-2021'],
        datasets: [
          {
            label: 'Điểm',
            backgroundColor: '#f87979',
            data: [75, 70, 70, 85],
          },
        ],
      }
    },
    pie() {
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
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
              '#E512E3',
              '#3412EE',
              '#DBE2D1',
            ],
            data: [10, 10, 20, 20, 20, 10, 10],
          },
        ],
      }
    },
    line() {
      return {
        labels: [
          'Phê duyệt công việc',
          'Hỗ trợ thực hiện công việc',
          'Sử dụng hệ thống',
          'Tìm hiểu lý thuyết, tìm hiểu công nghệ',
          'Thiết kế',
        ],
        datasets: [
          {
            label: 'Số công việc',
            backgroundColor: 'rgb(228,102,81,0.9)',
            data: [3, 2, 3, 3, 4],
          },
          {
            label: 'Thời gian thực hiện',
            backgroundColor: 'rgb(0,216,255,0.9)',
            data: [5, 4, 6, 6, 6],
          },
          {
            label: 'Số người tham gia',
            backgroundColor: '#006600',
            data: [4, 4, 2, 3, 2],
          },
          {
            label: 'Số KPI nhân viên',
            backgroundColor: '#666600',
            data: [5, 6, 4, 3, 4],
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
