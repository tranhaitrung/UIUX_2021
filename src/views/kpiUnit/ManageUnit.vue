<template>
  <CColumn>
    <div
      style="display: flex; justify-content: space-between"
      class="space-between"
    >
      <h4>Quản lý KPI đơn vị</h4>
      <el-button type="info" style="width: 120px" @click="exportBaocao">
        Xuất báo cáo
      </el-button>
    </div>
    <div
      style="display: flex; justify-content: space-between"
      class="align-items-center"
    >
      <div style="width: 80px">Đơn vị</div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">UIUX_09</option>
          <option value="2">Ban kiểm soát</option>
        </CFormSelect>
      </CRow>
      <div style="width: 80px">Trạng thái</div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">Tất cả trạng thái</option>
          <option value="2">Đang thiết lập</option>
          <option value="3">Đã kích hoạt</option>
        </CFormSelect>
      </CRow>
      <div style="width: 80px">Từ tháng</div>
      <CRow class="align-items-center select">
        <el-input type="month" />
      </CRow>
      <div style="width: 80px">Đến tháng</div>
      <CRow class="align-items-center select">
        <el-input type="month" />
      </CRow>
      <div style="width: 110px"></div>
      <el-button type="success" style="width: 100px">Tìm kiếm</el-button>
    </div>
    <CRow class="space_between">
      <CButton
        color="info"
        style="width: 150px"
        @click="
          () => {
            visibleScrollableDemo = true
          }
        "
        >Sao chép KPI</CButton
      >
    </CRow>
    <div style="height: 8px"></div>
    <div style="background-color: white; padding: 8 px">
      <CTable class="align-items-center">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Thời gian</CTableHeaderCell>
            <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
            <CTableHeaderCell scope="col">Điểm tự động</CTableHeaderCell>
            <CTableHeaderCell scope="col">Điểm tự đánh giá</CTableHeaderCell>
            <CTableHeaderCell scope="col"
              >Điểm người phê duyệt</CTableHeaderCell
            >
            <CTableHeaderCell scope="col">Xem chi tiết</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell scope="row">T9-2021</CTableDataCell>
            <CTableDataCell
              ><CButton color="success" shape="rounded-10" class="width_100"
                >Đã kích hoạt</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
          <CTableRow>
            <CTableDataCell scope="row">T10-2021</CTableDataCell>
            <CTableDataCell
              ><CButton color="success" shape="rounded-10" class="width_100"
                >Đã kích hoạt</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
          <CTableRow>
            <CTableDataCell scope="row">T11-2021</CTableDataCell>
            <CTableDataCell
              ><CButton color="warning" shape="rounded-10" class="width_100"
                >Đang thiết lập</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
          <CTableRow align="center">
            <CTableDataCell scope="row">T12-2021</CTableDataCell>
            <CTableDataCell
              ><CButton color="warning" shape="rounded-10" class="width_100"
                >Đang thiết lập</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
          <CTableRow>
            <CTableDataCell scope="row">T1-2022</CTableDataCell>
            <CTableDataCell
              ><CButton color="warning" shape="rounded-10" class="width_100"
                >Đang thiết lập</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
          <CTableRow v-if="visibleDataDemo">
            <CTableDataCell scope="row">T2-2022</CTableDataCell>
            <CTableDataCell
              ><CButton color="warning" shape="rounded-10" class="width_100"
                >Đang thiết lập</CButton
              >
            </CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell>90</CTableDataCell>
            <CTableDataCell
              ><CButton color="info" shape="rounded-10"
                >Xem chi tiết</CButton
              ></CTableDataCell
            >
          </CTableRow>
        </CTableBody>
      </CTable>
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
    </div>

    <CModal
      size="lg"
      scrollable
      :visible="visibleScrollableDemo"
      @close="
        () => {
          visibleScrollableDemo = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Sao chép KPI</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow class="mb-3">
            <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label"
              >Đơn vị</CFormLabel
            >
            <CCol sm="10">
              <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label"
                >UIUX_09</CFormLabel
              >
            </CCol>
          </CRow>
          <CRow class="mb-3">
            <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label"
              >Tháng</CFormLabel
            >
            <CCol sm="10">
              <input type="month" id="inputEmail3" />
            </CCol>
          </CRow>
          <CRow class="mb-3">
            <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label"
              >Từ tháng</CFormLabel
            >
            <CCol sm="10">
              <input type="month" id="inputPassword3" />
            </CCol>
          </CRow>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">
              Danh sách mục tiêu
            </legend>
            <CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Phê duyệt công việc"
                  checked
                />
              </div>
            </CRow>
            <CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Hỗ trợ thực hiện công việc"
                  checked
                />
              </div> </CRow
            ><CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Sử dụng hệ thống"
                  checked
                />
              </div> </CRow
            ><CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Tìm hiểu lý thuyết"
                  checked
                />
              </div> </CRow
            ><CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Thiết kế"
                  checked
                />
              </div> </CRow
            ><CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Đánh giá tính dùng được"
                  checked
                />
              </div> </CRow
            ><CRow class="mb-3">
              <div class="col-sm-10 offset-sm-2">
                <CFormCheck
                  type="checkbox"
                  id="gridCheck1"
                  label="Xây dựng kịch bản thử nghiệm"
                  checked
                />
              </div>
            </CRow>
          </fieldset>

          <CButton
            color="success"
            @click="
              () => {
                visibleScrollableDemo = false
                visibleDataDemo = true
              }
            "
            >Lưu</CButton
          >
        </CForm>
      </CModalBody>
    </CModal>
  </CColumn>
</template>

<script>
import { ElNotification } from 'element-plus'
export default {
  name: 'Dashboard KPI đơn vị',
  data() {
    return {
      visibleScrollableDemo: false,
      visibleDataDemo: false,
      randomExport: true,
    }
  },
  methods: {
    exportBaocao() {
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
  },
}
</script>
<style scoped>
.select {
  height: 50px;
  width: 160px;
}
.margin-2 {
  margin: 1px;
}
.flex {
  display: flex;
}
.space_between {
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
}
.width_100 {
  width: 140px;
}
</style>
