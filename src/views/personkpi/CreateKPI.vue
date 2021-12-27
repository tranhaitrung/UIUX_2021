<template>
  <CRow>
    <CCol :xs="12">
      <h3>Khởi tạo KPI cá nhân</h3>
      <el-row class="mb-12 row">
        <el-col class="col-3">
          <div class="row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Từ ngày
            </label>
            <div class="col-sm-8">
              <input type="date" class="form-control" id="inputPassword" />
            </div>
          </div>
        </el-col>
        <el-col class="col-3">
          <div class="row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              tới ngày
            </label>
            <div class="col-sm-8">
              <input type="date" class="form-control" id="inputPassword" />
            </div>
          </div>
        </el-col>
        <el-col class="col-3"></el-col>
      </el-row>
    </CCol>
    <CCol :xs="12">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Khởi tạo KPI cá nhân',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    }
  },
}
</script>
