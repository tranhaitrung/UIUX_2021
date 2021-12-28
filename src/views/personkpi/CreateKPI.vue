<template>
  <el-row :span="24">
    <el-col :span="24">
      <h3>Khởi tạo KPI cá nhân</h3>
      <el-row :span="24" style="margin-top: 20px; width: 100%">
        <el-col :span="5">
          <div class="row">
            <label for="fromDate" class="col-sm-3 col-form-label"> Từ </label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="toDate" />
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="row">
            <label align="center" for="toDate" class="col-sm-3 col-form-label">
              tới
            </label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="toDate" />
            </div>
          </div>
        </el-col>
        <el-col :span="3" align="center">
          <el-button type="success" style="width: 100px">Xem</el-button>
        </el-col>
      </el-row>
    </el-col>
    <div style="margin-top: 20px; width: 100%">
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
              <el-button type="danger"> Xóa mục tiêu đã chọn </el-button>
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
                    @click="countSelected"
                  />
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { Edit, CirclePlus, Delete, Promotion } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'Khởi tạo KPI cá nhân',
  components: { Edit, CirclePlus, Delete, Promotion },
  data() {
    return {
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
    calculateScore(object) {
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
      object.isRead = true
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
      row.isRead = true
      row.isNew = false
      ElMessage({
        showClose: true,
        message: 'Thêm mục tiêu thành công',
        type: 'success',
      })
    },
    cancelAdd(row) {
      this.tableData.pop(row)
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
