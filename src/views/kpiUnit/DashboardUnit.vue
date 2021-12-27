<template>
  <CColumn>
    <div>Dashboard KPI đơn vị</div>
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
      <CButton color="success" style="width: 100px">Phân tích</CButton>
    </CRow>
    <div class="select"></div>
    <CAccordion :active-item-key="2" always-open>
      <CAccordionItem :item-key="1">
        <CAccordionHeader>
          Biểu đồ thống kê điểm KPI giữa các đơn vị tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody>
          <CChartLine :data="defaultData" />
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="2">
        <CAccordionHeader>
          Xu hướng thực hiện mục tiêu của nhân viên UIUX_09 tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody>
          <CChart
            type="bar"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'GitHub Commits',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
              ],
            }"
            labels="months"
          ></CChart>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="3">
        <CAccordionHeader>
          Phân phối KPI UIUX_09 tháng 12-2021
        </CAccordionHeader>
        <CAccordionBody>
          <CChart
            type="line"
            :wrapper="false"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: [40, 20, 12, 39, 10, 40, 39],
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: [50, 12, 28, 29, 7, 25, 12],
                },
              ],
            }"
          />
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="4">
        <CAccordionHeader> Kết quả KPI UIUX_09 </CAccordionHeader>
        <CAccordionBody>
          <CChart
            type="line"
            :wrapper="false"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: [40, 20, 12, 39, 10, 40, 39],
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: [50, 12, 28, 29, 7, 25, 12],
                },
              ],
            }"
          />
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </CColumn>
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'
export default {
  name: 'Dashboard KPI đơn vị',
  components: { CChartLine },
  computed: {
    defaultData() {
      return {
        labels: ['months', 'a', 'b', 'c', 'd'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgb(228,102,81,0.9)',
            data: [30, 39, 10, 50, 30, 70, 35],
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgb(0,216,255,0.9)',
            data: [39, 80, 40, 35, 40, 20, 45],
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
