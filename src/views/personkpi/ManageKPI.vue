<template>
  <div>
    <el-col style="width: 100%">
      <h3>Quản lý KPI cá nhân</h3>
      <el-row style="margin-top: 20px; width: 100%">
        <el-form
          ref="formRef"
          :model="formFilter"
          label-width="100px"
          label-position="left"
          style="width: 100%"
        >
          <el-form-item label="Từ tháng">
            <el-col :span="10">
              <el-date-picker
                v-model="formFilter.fromDate"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col style="width: 10%" class="text-center">
              <span class="text-gray-500"> đến tháng</span>
            </el-col>
            <el-col :span="10">
              <el-date-picker
                v-model="formFilter.toDate"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col :span="4" style="width: 15%" align="center">
              <el-button type="success" style="width: 100px" @click="search">
                Xem
              </el-button>
            </el-col>
          </el-form-item>
          <el-form-item label="Trạng thái">
            <el-col style="width: 50%">
              <el-select
                v-model="formFilter.status"
                placeholder="Chọn trạng thái"
              >
                <el-option label="Đang thiết lập" value="0"></el-option>
                <el-option label="Chờ phê duyệt" value="1"></el-option>
                <el-option label="Đã kích hoạt" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col style="width: 50%; text-align: right">
              <el-button
                type="primary"
                style="width: 150px"
                @click="exportReport()"
                plain
                :icon="Document"
              >
                Xuất báo cáo
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-row>
    </el-col>
    <div style="text-align: center">
      <el-table
        ref="tableRef"
        row-key="date"
        :data="dataKpis"
        style="width: 100%"
      >
        <el-table-column label="STT" width="60" align="center" type="index">
        </el-table-column>
        <el-table-column
          prop="time"
          label="Thời gian"
          sortable
          width="150"
          column-key="date"
          :filter-method="filterHandler"
        />

        <el-table-column
          prop="status"
          label="Trạng thái"
          width="150"
          align="center"
          filter-placement="bottom-end"
        >
          <template #default="scope">
            <el-tag
              :type="
                scope.row.status === 'ACTIVE'
                  ? 'success'
                  : scope.row.status === 'INACTIVE'
                  ? 'primary'
                  : 'info'
              "
              style="width: 100px"
              align="center"
              disable-transitions
              >{{
                scope.row.status === 'ACTIVE'
                  ? 'Đã kích hoạt'
                  : scope.row.status === 'INACTIVE'
                  ? 'Chờ phê duyệt'
                  : 'Đang thiết lập'
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="targetTotal"
          label="Số mục tiêu"
          width="180"
          align="center"
        />
        <el-table-column
          #default="scope"
          label="Đánh giá tháng"
          min-width="250"
        >
          <span>
            {{ scope.row.reviewMonth.autoScore }}
            - {{ scope.row.reviewMonth.autoScore }} -
            {{ scope.row.reviewMonth.autoScore }}
          </span>
        </el-table-column>
        <el-table-column label="Đánh giá tuần" width="180" align="center">
          <el-button
            type="primary"
            size="small"
            @click="dialogDetailWeek = true"
            >Chi tiết</el-button
          >
        </el-table-column>
        <el-table-column label="Hành động" width="180">
          <el-button
            size="small"
            @click="dialogDetailKPI = true"
            type="primary"
            plain
            >Chi tiết KPI</el-button
          >
          <el-button
            size="small"
            :icon="CopyDocument"
            @click="dialogCoppyKPI = true"
            type="success"
          >
          </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="demo-pagination-block">
      <span class="demonstration">Chọn kích thước trang</span>
      <el-pagination
        v-model:currentPage="currentPage2"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total="5"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div>
      <el-dialog
        v-model="dialogDetailWeek"
        title="Kết quả KPI tuần"
        width="30%"
        :before-close="handleClose"
      >
        <span>Chi tiếu đánh giá tuần</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogDetailWeek = false"
              >Đóng</el-button
            >
          </span>
        </template>
      </el-dialog>
      <el-dialog
        v-model="dialogDetailKPI"
        title="Chi tiết KPI"
        width="30%"
        :before-close="handleClose"
      >
        <span>Chi tiết KPI</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogDetailKPI = false"
              >Đóng</el-button
            >
          </span>
        </template>
      </el-dialog>
      <el-dialog
        v-model="dialogCoppyKPI"
        title="Thông tin KPI "
        width="30%"
        :before-close="handleClose"
      >
        <span>Sao chép KPI hiện tại cho tháng</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="danger" @click="dialogCoppyKPI = false">
              Đóng
            </el-button>
            <el-button type="success" @click="dialogCoppyKPI = false"
              >Lưu</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { Document, CopyDocument } from '@element-plus/icons-vue'
</script>

<script>
import { ElNotification } from 'element-plus'

export default {
  name: 'ManageKPI',
  data() {
    return {
      formFilter: {
        fromDate: '',
        toDate: '',
        status: '',
      },
      dataKpis: dataKPI,
      randomExport: true,
      dialogCoppyKPI: false,
      dialogDetailKPI: false,
      dialogDetailWeek: false,
    }
  },
  methods: {
    exportReport() {
      if (this.randomExport) {
        ElNotification({
          title: 'Thành công',
          message: 'Bạn đã xuất báo cáo thành công',
          type: 'success',
        })
        this.randomExport = false
      } else {
        ElNotification({
          title: 'Lỗi',
          message: 'Xuất báo cáo thất bại. Hãy thử lại',
          type: 'error',
        })
        this.randomExport = true
      }
    },
    search() {
      this.$message.success('Bạn đã tìm kiếm thành công')
    },
  },
}

const dataKPI = [
  {
    time: '11-2021',
    status: 'ACTIVE',
    targetTotal: '7',
    reviewMonth: {
      autoScore: 90,
      selfScore: 90,
      managerScore: 80,
    },
    reviewWeek: [
      {
        week1: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
      },
      {
        week2: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
      },
    ],
    targets: [
      {
        tagetName: 'Đánh giá tính dùng được',
        numWork: '1',
        reviewMonth: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek1: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Hỗ trợ công việc',
        numWork: '1',
        reviewMonth: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek1: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 5,
      },
      {
        tagetName: 'Xây dựng kịch bản thử nghiệm',
        numWork: '2',
        reviewMonth: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek1: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek2: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek3: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek4: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        score: 20,
      },
      {
        tagetName: 'Tìm hiểu công công nghệ',
        numWork: '3',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: {
          autoScore: 90,
          selfScore: 90,
          managerScore: 80,
        },
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Phê duyệt công việc',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
    ],
  },
  {
    time: '12/2022',
    status: 'INACTIVE',
    targetTotal: '4',
    reviewMonth: {
      autoScore: 'Chưa đánh giá',
      selfScore: 'Chưa đánh giá',
      managerScore: 'Chưa đánh giá',
    },
    reviewWeek: [
      {
        week1: '',
      },
      {
        week2: '',
      },
    ],
    targets: [
      {
        tagetName: 'Hỗ trợ công việc',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Phê duyệt công việc',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Doanh thu tối thiểu 1000 USD/tháng',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Báo cáo đúng hạn',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
    ],
  },
  {
    time: '01/2022',
    status: 'SETTING',
    targetTotal: '2',
    reviewMonth: {
      autoScore: 'Chưa đánh giá',
      selfScore: 'Chưa đánh giá',
      managerScore: 'Chưa đánh giá',
    },
    reviewWeek: [
      {
        week1: '',
      },
      {
        week2: '',
      },
    ],
    targets: [
      {
        tagetName: 'Phê duyệt công việc',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
      {
        tagetName: 'Hỗ trợ công việc',
        numWork: '0',
        reviewMonth: {
          autoScore: 'Chưa đánh giá',
          selfScore: 'Chưa đánh giá',
          managerScore: 'Chưa đánh giá',
        },
        reviewWeek1: '',
        reviewWeek2: '',
        reviewWeek3: '',
        reviewWeek4: '',
        score: 20,
      },
    ],
  },
]
</script>
