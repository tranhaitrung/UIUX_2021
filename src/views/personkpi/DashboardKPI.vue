<template>
  <CRow>
    <el-col :span="24">
      <h3>Dashboard KPI cá nhân</h3>
      <el-row :span="24" style="margin-top: 20px; width: 100%">
        <el-col :span="7">
          <div class="row">
            <label for="fromDate" class="col-sm-5 col-form-label">
              Chọn thời gian KPI
            </label>
            <div class="col-sm-7">
              <el-select
                v-model="searchKPI"
                clearable
                placeholder="Thời gian KPI"
                style="width: 100%"
              >
                <el-option
                  v-for="item in unitKpiList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="3" align="center">
          <el-button type="success" style="width: 100px" @click="search">
            Xem
          </el-button>
        </el-col>
      </el-row>
    </el-col>
    <div style="margin-top: 20px">
      <CAccordion :active-item-key="0" always-open>
        <CAccordionItem :item-key="1">
          <CAccordionHeader> Kết quả KPI cá nhân </CAccordionHeader>
          <CAccordionBody align="center">
            <CChartLine
              :data="lineData"
              style="
                height: 400px;
                max-height: 400px;
                margin-top: 30px;
                width: 700px;
              "
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem :item-key="2">
          <CAccordionHeader> Đóng góp KPI </CAccordionHeader>
          <CAccordionBody align="center">
            <CChartPie
              :data="pieData"
              style="
                height: 400px;
                max-height: 400px;
                margin-top: 30px;
                width: 400px;
              "
            />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  </CRow>
</template>

<script>
import { CChartLine, CChartPie } from '@coreui/vue-chartjs'
export default {
  name: 'DashboardKPI',
  components: { CChartLine, CChartPie },
  data() {
    return {
      lineData: {
        labels: ['10-2021', '11-2021', '12-2021', '01-2022'],
        datasets: [
          {
            label: 'Điểm hệ thống',
            backgroundColor: 'rgb(228,102,81,0.9)',
            data: [80, 70, 70, 0],
          },
          {
            label: 'Điểm tự đánh giá',
            backgroundColor: 'rgb(0,216,255,0.9)',
            data: [90, 90, 80, 0],
          },
          {
            label: 'Điểm phê duyệt',
            backgroundColor: '#006600',
            data: [50, 60, 60, 0],
          },
        ],
      },
      pieData: {
        labels: [
          'Phê duyệt công việc',
          'Hỗ trợ công việc',
          'Đạt doanh thu 40 triệu/tháng',
          'Sử dụng hệ thống',
          'Khách hàng phản hồi trên 7 điểm chiếm >= 70%',
          'Thống kê báo cáo',
        ],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
              '#CC6600',
              '#666666',
            ],
            data: [10, 10, 30, 10, 30, 10],
          },
        ],
      },
      unitKpiList: [
        {
          value: 'kpi1',
          label: 'Từ 06/2021 đến 09/2021 (Tiêu thụ hàng tồn đọng trong kho)',
        },
        {
          value: 'kpi2',
          label:
            'Từ 01/10/2021 đến 31/10/2021 (Khảo sát thị trường để chuẩn bị nhập hàng tiêu thụ dịp tết)',
        },
        {
          value: 'kpi3',
          label: 'Từ 01/11/2021 đến 31/02/2022 (Tiệu thụ hàng tồn đọng)',
        },
      ],
      searchKPI: '',
      activeName: '',
    }
  },
}
</script>
