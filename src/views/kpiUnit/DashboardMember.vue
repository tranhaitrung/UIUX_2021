<template>
  <CColumn>
    <div>Dashboard KPI nhân viên</div>
    <CRow class="align-items-center margin-2">
      Đơn vị
      <div style="width: 10px"></div>
      <CRow class="align-items-center select">
        <CFormSelect aria-label="Default select example">
          <option value="1">UIUX_09</option>
          <option value="2">Ban kiểm soát</option>
        </CFormSelect>
      </CRow>
      <div style="width: 10px"></div>
      <el-button type="success" style="width: 100px">Phân tích</el-button>
    </CRow>
    <div class="select"></div>
    <CAccordion :active-item-key="0" always-open>
      <CAccordionItem :item-key="1">
        <CAccordionHeader> Nhân viên xuất sắc nhất </CAccordionHeader>
        <CAccordionBody>
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
                <span class="text-gray-500"> Số lượng</span>
              </el-col>
              <el-col :span="10">
                <el-input-number
                  v-model="formFilter.totalMember"
                  :min="1"
                  :max="memberGood.length"
                  controls-position="right"
                />
              </el-col>
              <el-col :span="4" style="width: 15%" align="center">
                <el-button
                  type="success"
                  style="width: 100px"
                  @click="filterMemberSuccess"
                >
                  Xem
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
          <div>
            <div
              class="demo-image"
              style="display: flex; margin-top: 50px; margin-bottom: 50px"
            >
              <div
                v-for="i in totalMem"
                :key="i"
                class="block"
                style="display: grid; margin-right: 30px"
                align="center"
              >
                <span class="demonstration">{{ memberGood[i - 1].name }}</span>
                <el-image
                  style="
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 0.1px solid #666666;
                  "
                  :src="memberGood[i - 1].avatar"
                  fit="contain"
                ></el-image>
              </div>
            </div>
          </div>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="2">
        <CAccordionHeader> Thống kê kết quả KPI nhân viên </CAccordionHeader>
        <CAccordionBody>
          <el-form
            ref="formRef"
            :model="formFilter1"
            label-width="100px"
            label-position="left"
            style="width: 100%"
          >
            <el-form-item label="Từ tháng">
              <el-col :span="10">
                <el-date-picker
                  v-model="formFilter1.fromDate"
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
                  v-model="formFilter1.toDate"
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
            <el-form-item label="Nhân viên">
              <el-col style="width: 50%">
                <el-select
                  v-model="formFilter1.member"
                  placeholder="Chọn nhân viên"
                  multiple
                >
                  <el-option label="Trần Ngọc Phiên" value="1"></el-option>
                  <el-option label="Trần Hải Trung" value="2"></el-option>
                  <el-option label="Phạm Trọng Toàn" value="3"></el-option>
                  <el-option label="Đỗ Văn Thông" value="4"></el-option>
                </el-select>
              </el-col>
              <el-col style="width: 50%; text-align: right">
                <el-button
                  type="primary"
                  style="width: 150px"
                  @click="exportBaocao"
                  plain
                  :icon="Document"
                >
                  Xuất báo cáo
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
          <div>Chưa có dữ liệu</div>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="3">
        <CAccordionHeader> So sánh KPI nhân viên </CAccordionHeader>
        <CAccordionBody>
          <el-form
            ref="formRef"
            :model="formFilter2"
            label-width="100px"
            label-position="left"
            style="width: 100%"
          >
            <el-form-item label="Từ tháng">
              <el-col :span="10">
                <el-date-picker
                  v-model="formFilter2.fromDate"
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
                  v-model="formFilter2.toDate"
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
            <el-form-item label="Nhân viên">
              <el-col style="width: 50%">
                <el-select
                  v-model="formFilter1.member"
                  placeholder="Chọn nhân viên"
                  multiple
                >
                  <el-option label="Trần Ngọc Phiên" value="1"></el-option>
                  <el-option label="Trần Hải Trung" value="2"></el-option>
                  <el-option label="Phạm Trọng Toàn" value="3"></el-option>
                  <el-option label="Đỗ Văn Thông" value="4"></el-option>
                </el-select>
              </el-col>
              <el-col style="width: 50%; text-align: right">
                <el-button
                  type="primary"
                  style="width: 150px"
                  @click="exportBaocao"
                  plain
                  :icon="Document"
                >
                  Xuất báo cáo
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
          <div>Chưa có dữ liệu</div>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem :item-key="4">
        <CAccordionHeader>
          Kết quả KPI tất cả các nhân viên UIUX_09
        </CAccordionHeader>
        <CAccordionBody>
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
                  v-model="formFilter1.member"
                  placeholder="Chọn nhân viên"
                  multiple
                >
                  <el-option label="Trần Ngọc Phiên" value="1"></el-option>
                  <el-option label="Trần Hải Trung" value="2"></el-option>
                  <el-option label="Phạm Trọng Toàn" value="3"></el-option>
                  <el-option label="Đỗ Văn Thông" value="4"></el-option>
                </el-select>
              </el-col>
              <el-col style="width: 50%; text-align: right">
                <el-button
                  type="primary"
                  style="width: 150px"
                  @click="exportBaocao"
                  plain
                  :icon="Document"
                >
                  Xuất báo cáo
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
          <div>Chưa có dữ liệu</div>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  </CColumn>
</template>

<script>
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
export default {
  name: 'Dashboard KPI nhân viên',
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
  data() {
    return {
      randomExport: true,
      formFilter: {
        fromDate: '',
        toDate: '',
        status: '',
        totalMember: 4,
      },
      formFilter1: {
        fromDate: '',
        toDate: '',
        member: '',
      },
      formFilter2: {
        fromDate: '',
        toDate: '',
        member: '',
      },
      formFilter3: {
        fromDate: '',
        toDate: '',
        member: '',
      },
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://res.cloudinary.com/litchitech/image/upload/v1640450646/PROJECT3/lgnvgnz9mawqv5b4llkr.jpg',
      totalMem: 4,
      memberGood: [
        {
          name: 'Trần Ngọc Phiên',
          avatar:
            'https://res.cloudinary.com/litchitech/image/upload/v1640450646/PROJECT3/lgnvgnz9mawqv5b4llkr.jpg',
        },
        {
          name: 'Trần Hải Trung',
          avatar:
            'https://res.cloudinary.com/litchitech/image/upload/v1640885283/PROJECT3/wuugb8cr1vtym2o8zhh8.gif',
        },
        {
          name: 'Phạm Trọng Toàn',
          avatar:
            'https://res.cloudinary.com/litchitech/image/upload/v1641024174/PROJECT3/at692ynozt8lghv2yups.jpg',
        },
        {
          name: 'Đỗ Văn Thông',
          avatar:
            'https://res.cloudinary.com/litchitech/image/upload/v1641702304/PROJECT3/nfksobu3eiiz5uhrbdoj.jpg',
        },
        {
          name: 'Người Thứ Năm',
          avatar:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        },
        {
          name: 'Người Thứ Sáu',
          avatar:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        },
      ],
    }
  },
  methods: {
    filterMemberSuccess() {
      this.totalMem = this.formFilter.totalMember
    },
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
  width: 200px;
}
.margin-2 {
  margin: 1px;
}
</style>
