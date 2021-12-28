<template>
  <CColumn>
    <h4>Đánh giá KPI nhân viên</h4>
    <CRow class="align-items-center margin-2">
      <div style="width: 100px">Đơn vị</div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">UIUX_09</option>
          <option value="2">Ban kiểm soát</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      <div style="width: 100px">Trạng thái</div>
      <CRow class="select">
        <CFormSelect aria-label="Default select example">
          <option value="1">Tất cả trạng thái</option>
          <option value="2">Đang thiết lập</option>
          <option value="3">Đã kích hoạt</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      Người phê duyệt
      <div style="width: 10px"></div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">Trần Ngọc Phiên</option>
          <option value="2">Trần Hải Trung</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      Nhân viên
      <div style="width: 10px"></div>
      <CRow class="select">
        <CFormSelect aria-label="Default select example">
          <option value="1">Trần Ngọc Phiên</option>
          <option value="2">Trần Hải Trung</option>
          <option value="3">Phạm Trọng Toàn</option>
          <option value="4">Đỗ Văn Thông</option>
        </CFormSelect>
      </CRow>
    </CRow>
    <div style="height: 10px"></div>
    <CRow class="align-items-center margin-2">
      <div style="width: 100px">Từ tháng</div>
      <CRow class="select">
        <input type="month" />
      </CRow>
      <div style="width: 10px"></div>
      <div style="width: 100px">Đến tháng</div>
      <CRow class="select">
        <input type="month" />
      </CRow>
      <div style="width: 10px"></div>
      <CButton color="success" style="width: 150px">Tìm kiếm</CButton>
    </CRow>
    <div style="height: 20px"></div>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
          <CTableHeaderCell scope="col">Thời gian</CTableHeaderCell>
          <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
          <CTableHeaderCell scope="col">Đánh giá tháng</CTableHeaderCell>
          <CTableHeaderCell scope="col">Đánh giá tuần</CTableHeaderCell>
          <CTableHeaderCell scope="col">Phê duyệt</CTableHeaderCell>
          <CTableHeaderCell scope="col">Đánh giá</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableDataCell>Trần Ngọc Phiên</CTableDataCell>
          <CTableDataCell scope="row">T9-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Ngọc Phiên</CTableDataCell>
          <CTableDataCell scope="row">T10-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Ngọc Phiên</CTableDataCell>
          <CTableDataCell scope="row">T11-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="warning" shape="rounded-10"
              >Đang thiết lập</CButton
            >
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Hải Trung</CTableDataCell>
          <CTableDataCell scope="row">T9-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Hải Trung</CTableDataCell>
          <CTableDataCell scope="row">T10-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Hải Trung</CTableDataCell>
          <CTableDataCell scope="row">T10-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Trần Hải Trung</CTableDataCell>
          <CTableDataCell scope="row">T11-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="warning" shape="rounded-10"
              >Đang thiết lập</CButton
            >
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Phạm Trọng Toàn</CTableDataCell>
          <CTableDataCell scope="row">T9-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Phạm Trọng Toàn</CTableDataCell>
          <CTableDataCell scope="row">T9-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Phạm Trọng Toàn</CTableDataCell>
          <CTableDataCell scope="row">T10-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Phạm Trọng Toàn</CTableDataCell>
          <CTableDataCell scope="row">T11-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="warning" shape="rounded-10"
              >Đang thiết lập</CButton
            >
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell>Đỗ Văn Thông</CTableDataCell>
          <CTableDataCell scope="row">T9-2021</CTableDataCell>
          <CTableDataCell
            ><CButton color="success" shape="rounded-10">Đã kích hoạt</CButton>
          </CTableDataCell>
          <CTableDataCell>90-90-90</CTableDataCell>
          <CTableDataCell>80-100-80</CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilShieldAlt" size="xl" /></CButton
          ></CTableDataCell>
          <CTableDataCell
            ><CButton color="info" shape="rounded-10"
              ><CIcon :icon="cilList" size="xl" /></CButton
          ></CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

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
import { CIcon } from '@coreui/icons-vue'
import { cilList, cilShieldAlt } from '@coreui/icons'
export default {
  name: 'Dashboard KPI đơn vị',
  components: {
    CIcon,
  },
  data() {
    return {
      cilList,
      cilShieldAlt,
      visibleScrollableDemo: false,
      visibleDataDemo: false,
    }
  },
}
</script>
<style scoped>
.select {
  height: 40px;
  width: 180px;
}
.margin-2 {
  margin: 1px;
}
.space_between {
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
}
</style>
