<template>
  <el-row :span="24">
    <el-col :span="24">
      <h3>Khởi tạo KPI cá nhân</h3>
      <el-row :span="24" style="margin-top: 20px; width: 100%">
        <el-col :span="7">
          <div class="row">
            <label for="fromDate" class="col-sm-5 col-form-label">
              Chọn KPI đơn vị
            </label>
            <div class="col-sm-7">
              <el-select
                v-model="searchKPI"
                clearable
                placeholder="Chọn KPI đơn vị"
                style="width: 100%"
              >
                <el-option
                  v-for="item in kpiFrom.unitKpiList"
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
    <div style="margin-top: 20px; width: 100%" v-if="isNotNull">
      <div style="background-color: #ffffff">
        <div>
          <el-row :gutter="10">
            <el-col :span="2" style="margin-left: 10px">
              <div class="bg-purple">
                <div class="grid-content">
                  <edit style="width: 1em; height: 1em; margin-right: 8px" />
                  <span>Chỉnh sửa</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="bg-purple">
                <div class="grid-content">
                  <delete style="width: 1em; height: 1em; margin-right: 8px" />
                  <span>Xóa KPI này</span>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="bg-purple" @click="addRow">
                <div class="grid-content">
                  <circle-plus
                    style="width: 1em; height: 1em; margin-right: 8px"
                  />
                  <span>Thêm mục tiêu</span>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="bg-purple">
                <div class="grid-content">
                  <promotion
                    style="width: 1em; height: 1em; margin-right: 8px"
                  />
                  <span>Yêu cầu kích hoạt</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px; width: 100%; margin-left: 10px">
          <h5>KPI cá nhân giai đoạn 1/2022 - 3/2022</h5>
          <span style="font-size: 15px">
            <el-label> <b>Người phê duyệt:</b> </el-label>
            <span> Trần Ngọc Phiên</span>
          </span>
          <el-row style="font-size: 15px">
            <span>{{ total }} mục tiêu cá nhân</span>
            <span>-</span>
            <span>Tổng trọng số {{ score }}/100</span>
            <span>-</span>
            <span v-if="score != 100" style="color: #f56c6c">
              <b>Chưa thỏa mãn</b>
            </span>
            <span v-if="score === 100" style="color: green">
              <b>Thỏa mãn</b>
            </span>
            <span>-</span>
            <span>
              <b>{{ setup }}</b>
            </span>
          </el-row>
        </div>
        <div style="margin-top: 20px; margin-left: 10px">
          <span style="font-size: 17px; font-weight: 600">
            Danh sách mục tiêu
          </span>
          <span style="float: right; margin: 10px">
            <div style="display: flex; flex-direction: column" align="center">
              <el-button type="danger" @click="removeButton">
                Xóa mục tiêu đã chọn
              </el-button>
              <span style="font-size: 14px">
                {{ totalSelect }} mục tiêu đã chọn
              </span>
            </div>
          </span>
        </div>
        <div style="margin: 10px">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="#" width="45" />
            <el-table-column align="left" min-width="220px">
              <template #header>
                <span>Tên mục tiêu</span>
              </template>
              <template #default="scope">
                <el-input
                  size="mini"
                  style="height: auto"
                  v-model="scope.row.name"
                  :readonly="scope.row.isRead"
                />
              </template>
            </el-table-column>
            <el-table-column align="center" width="220px">
              <template #header>
                <span>Mục tiêu cha</span>
              </template>
              <template #default="scope">
                <el-select
                  v-model="scope.row.parent"
                  clearable
                  placeholder="Chọn mục tiêu cha"
                  :disabled="scope.row.isRead"
                >
                  <el-option
                    v-for="item in parentOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="left" min-width="300px">
              <template #header>
                <span>Tiêu chí đánh giá</span>
              </template>
              <template #default="scope">
                <el-input
                  size="mini"
                  style="height: auto"
                  type="textarea"
                  v-model="scope.row.criteria"
                  :readonly="scope.row.isRead"
                />
              </template>
            </el-table-column>
            <el-table-column align="center" width="80px">
              <template #header>
                <span>Trọng số</span>
              </template>
              <template #default="scope">
                <el-input
                  size="mini"
                  type="number"
                  v-model="scope.row.score"
                  :readonly="scope.row.isRead"
                />
              </template>
            </el-table-column>
            <el-table-column prop="status" label="Trạng thái" width="150px" />
            <el-table-column align="center" width="150px">
              <template #header>
                <span>Hành động</span>
              </template>
              <template #default="scope">
                <div v-if="scope.row.isNew">
                  <el-button
                    size="mini"
                    @click="saveNew(scope.row)"
                    type="success"
                    style="padding: 7px"
                  >
                    Thêm mới
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    style="padding: 7px"
                    @click="cancelAdd(scope.row)"
                  >
                    Hủy
                  </el-button>
                </div>
                <div v-else>
                  <el-button
                    size="mini"
                    @click="scope.row.isRead = false"
                    type="warning"
                    v-if="scope.row.isRead"
                  >
                    Sửa mục tiêu
                  </el-button>
                  <el-button
                    size="mini"
                    @click="calculateScore(scope.row)"
                    type="success"
                    v-else
                  >
                    Lưu thay đổi
                  </el-button>
                  <el-checkbox
                    style="margin-left: 10px"
                    size="sm"
                    v-model="scope.row.isSelect"
                    @change="countSelected"
                  />
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px; width: 100%" v-else>
      <div style="background-color: #ffffff; height: 200px">
        <div>
          <el-row :gutter="10">
            <el-col :span="2" style="margin-left: 10px">
              <div class="bg-purple" @click="addKPIDialog = true">
                <div class="grid-content">
                  <calendar
                    style="width: 1em; height: 1em; margin-right: 8px"
                  />
                  <span>Khởi tạo KPI</span>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="bg-purple">
                <div class="grid-content">
                  <copy-document
                    style="width: 1em; height: 1em; margin-right: 8px"
                  />
                  <span>Sao chép KPI đơn vị cha</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px; width: 100%; margin-left: 10px">
          <h5>KPI cá nhân giai đoạn 1/2022 - 3/2022</h5>
          <span style="font-size: 15px">
            <span> Chưa có KPI nào được khởi tạo trong giai đoạn này</span>
          </span>
        </div>
      </div>
    </div>
    <div>
      <el-dialog
        v-model="addKPIDialog"
        title="Khởi tạo KPI cá nhân"
        width="50%"
        destroy-on-close
        center
      >
        <div>
          <el-form :label-position="right" label-width="150px" :model="kpiFrom">
            <el-form-item label="Đơn vị">
              <el-input v-model="kpiFrom.unit" readonly></el-input>
            </el-form-item>
            <el-form-item label="Chọn KPI đơn vị">
              <el-select
                v-model="kpiFrom.unitKPI"
                clearable
                placeholder="Chọn KPI đơn vị"
                style="width: 100%"
              >
                <el-option
                  v-for="item in kpiFrom.unitKpiList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Người phê duyệt">
              <el-select
                v-model="kpiFrom.approve"
                clearable
                placeholder="Người phê duyệt"
                style="width: 100%"
              >
                <el-option
                  v-for="item in kpiFrom.approveList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Mục tiêu mặc định">
              <div>
                <ul>
                  <li>Hỗ trợ công việc</li>
                  <li>Phê duyệt công việc</li>
                </ul>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="addKPIDialog = false">Hủy</el-button>
            <el-button type="primary" @click="showKpiDetail">
              Tạo mới
            </el-button>
          </span>
        </template>
      </el-dialog>
      <el-dialog
        v-model="confirmDialog"
        title="Xác nhận xóa mục tiêu đã chọn"
        width="50%"
        destroy-on-close
        center
      >
        <div>
          <div align="center">
            <h5 style="color: red">
              Sau khi xóa dữ liệu sẽ không thể khôi phục
            </h5>
            <h5>Bạn có thực sự muốn xóa</h5>
          </div>
          <div>
            <span>Danh sách mục tiêu muốn xóa</span>
            <ul>
              <div v-for="(k, index) in tableData" :key="index">
                <li v-if="k.isSelect">{{ k.name }}</li>
              </div>
            </ul>
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirmDialog = false">Hủy</el-button>
            <el-button type="danger" @click="removeMucTieu"> Xóa </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </el-row>
</template>

<script>
import {
  Edit,
  CirclePlus,
  Delete,
  Promotion,
  CopyDocument,
  Calendar,
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'Khởi tạo KPI cá nhân',
  components: { Edit, CirclePlus, Delete, Promotion, CopyDocument, Calendar },
  data() {
    return {
      kpiFrom: {
        unit: 'UIUX_09',
        unitKPI: '',
        approve: '',
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
        approveList: [
          {
            value: 'Option1',
            label: 'Trân Ngọc Phiên',
          },
          {
            value: 'Option2',
            label: 'Trần Hải Trung',
          },
          {
            value: 'Option3',
            label: 'Phạm Trọng Toàn',
          },
        ],
      },
      tableData: [
        {
          name: 'Phê duyệt công việc',
          parent: 'Phê duyệt công việc',
          criteria:
            'Thực hiện tốt vai trò người phê duyệt trong các công việc. Người phê duyệt là người chịu trách nhiệm về thành công/thất bại của công việc',
          score: 20,
          status: 'Chưa kích hoạt',
          isRead: true,
          isSelect: false,
        },
        {
          name: 'Hỗ trợ công việc',
          parent: 'Hỗ trợ công việc',
          criteria:
            'Thực hiện tốt vai trò người tư vấn (consultant) trong các công việc',
          score: 20,
          status: 'Chưa kích hoạt',
          isRead: true,
          isSelect: false,
        },
        {
          name: 'Đạt doanh thu 40tr/tháng',
          parent: 'Đạt doanh thu 40 triệu / tháng',
          criteria: 'Hoàn thành 100% doanh thu',
          score: 20,
          status: 'Chưa kích hoạt',
          isRead: true,
          isSelect: false,
        },
        {
          name: 'Thống kê, báo cáo',
          parent: 'Thống kê, báo cáo',
          criteria: 'Thống kê báo cáo đúng thời gian',
          score: 20,
          status: 'Chưa kích hoạt',
          isRead: true,
          isSelect: false,
        },
      ],
      total: '0',
      score: 0,
      totalSelect: 0,
      status: 'INACTIVE',
      setup: 'Đang thiết lập',
      parentOptions: [
        {
          value: 'Option1',
          label: 'Phê duyệt công việc',
        },
        {
          value: 'Option2',
          label: 'Hỗ trợ công việc',
        },
        {
          value: 'Option3',
          label: 'Đạt doanh thu 40 triệu / tháng',
        },
        {
          value: 'Option4',
          label: 'Được khách hàng đánh giá ít nhất 90%',
        },
        {
          value: 'Option5',
          label: 'Thống kê, báo cáo',
        },
      ],
      addKPIDialog: false,
      isNotNull: false,
      searchKPI: '',
      confirmDialog: false,
    }
  },
  created() {
    this.total = this.tableData.length
    var count = 0
    for (let i = 0; i < this.total; i++) {
      count = count + parseInt(this.tableData[i].score)
    }
    this.score = count
  },
  methods: {
    calculateScore(row) {
      if (row.name === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tên mục tiêu',
          type: 'error',
        })
        return
      }
      if (row.parent === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng chọn mục tiêu cha',
          type: 'error',
        })
        return
      }
      if (row.criteria === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tiêu chí đánh giá',
          type: 'error',
        })
        return
      }
      if (row.score === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tiêu trọng số đánh giá',
          type: 'error',
        })
        return
      }
      var count = 0
      for (let i = 0; i < this.total; i++) {
        count = count + parseInt(this.tableData[i].score)
      }
      this.score = count
      if (count > 100) {
        ElMessage({
          showClose: true,
          message: 'Trọng số vượt quá 100. Vui lòng cân bằng lại trọng số.',
          type: 'error',
        })
      } else {
        ElMessage({
          showClose: true,
          message: 'Sửa mục tiêu thành công',
          type: 'success',
        })
      }
      row.isRead = true
    },
    countSelected() {
      var count = 0
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].isSelect) count = count + 1
      }
      this.totalSelect = count
    },
    addRow() {
      var newRow = {
        name: '',
        parent: '',
        criteria: '',
        score: 0,
        status: 'Chưa kích hoạt',
        isRead: false,
        isSelect: false,
        isNew: true,
      }
      this.tableData.push(newRow)
    },
    saveNew(row) {
      if (row.name === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tên mục tiêu',
          type: 'error',
        })
        return
      }
      if (row.parent === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng chọn mục tiêu cha',
          type: 'error',
        })
        return
      }
      if (row.criteria === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tiêu chí đánh giá',
          type: 'error',
        })
        return
      }
      if (row.score === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng điền tiêu trọng số đánh giá',
          type: 'error',
        })
        return
      }
      row.isRead = true
      row.isNew = false
      this.score = this.score + parseInt(row.score)
      //this.calculateScore(row)
      ElMessage({
        showClose: true,
        message: 'Thêm mục tiêu thành công',
        type: 'success',
      })
    },
    cancelAdd(row) {
      this.tableData.pop(row)
    },
    search() {
      if (this.searchKPI === 'kpi1' || this.searchKPI === 'kpi2') {
        this.isNotNull = true
      } else {
        this.isNotNull = false
      }
    },
    showKpiDetail() {
      if (this.kpiFrom.unitKPI === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng chọn KPI đơn vị',
          type: 'error',
        })
        return
      } else if (this.kpiFrom.approve === '') {
        ElMessage({
          showClose: true,
          message: 'Vui lòng chọn người phê duyệt',
          type: 'error',
        })
        return
      } else {
        this.isNotNull = true
        this.addKPIDialog = false
      }
    },
    removeButton() {
      if (this.totalSelect === 0) {
        ElMessage({
          showClose: true,
          message: 'Bạn chưa chọn mục tiêu nào',
          type: 'error',
        })
        return
      }
      this.confirmDialog = true
    },
    removeMucTieu() {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].isSelect) {
          this.tableData.pop(this.tableData[i])
        }
      }
      this.score = 0
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].isSelect = false
        this.score = this.score + parseInt(this.tableData[i].score)
      }
      ElMessage({
        showClose: true,
        message: 'Xóa mục tiêu thành công',
        type: 'success',
      })
      this.totalSelect = 0
      this.confirmDialog = false
    },
  },
}
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 3px;
}
.bg-purple-dark {
  background: #f4f4f4;
}
.bg-purple-dark :hover {
  background: #9c9c9c;
}
.bg-purple {
  background: #f4f4f4;
}
.bg-purple :hover {
  background: #707070;
  color: #ffffff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #666666;
  flex-direction: column;
  font-size: 13px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
