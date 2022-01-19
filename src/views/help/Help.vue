<template>
  <div>
    <h1>Hướng dẫn sử dụng hệ thống</h1>
    <div style="margin-top: 50px; background: #ffffff; padding: 20px">
      <el-row :gutter="70" justify="center" align="center">
        <el-col :span="12">
          <el-card shadow="always">
            <h5>Quản lý công việc</h5>
            <el-divider></el-divider>
            <div class="demo-collapse">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template #title> User (1) </template>
                  <div>
                    <router-link to="/helps/detail-work">
                      Chi tiết công việc
                    </router-link>
                  </div>
                  <div></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always">
            <h5>Quản lý KPI</h5>
            <el-divider></el-divider>
            <div class="demo-collapse">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template #title> User (1) </template>
                  <div>
                    <router-link to="/helps/kpi">
                      Khởi tạo KPI cá nhân
                    </router-link>
                  </div>
                  <div></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row
        :gutter="70"
        align="center"
        justify="center"
        style="margin-top: 30px"
      >
        <el-col :span="12">
          <el-card shadow="always">
            <h5>Quản lý tài liệu</h5>
            <el-divider></el-divider>
            <div class="demo-collapse">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template #title> User (1) </template>
                  <div>
                    <router-link to="/helps/mamager-document-person">
                      Quản lý tài liệu văn bản cá nhân
                    </router-link>
                  </div>
                  <div></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always">
            <h5>Quản lý tài sản</h5>
            <el-divider></el-divider>
            <div class="demo-collapse">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template #title> User (3) </template>
                  <div>
                    <div>
                      <router-link to="/helps/tai-san-quan-ly">
                        Tài sản quản lý
                      </router-link>
                    </div>
                    <div>
                      <router-link to="/helps/dang-ky-su-dung-thiet-bi">
                        Đăng ký sử dụng thiết bị
                      </router-link>
                    </div>
                    <div>
                      <router-link to="/helps/dang-ky-mua-sam-thiet-bi">
                        Đăng ký mua sắm thiết bị
                      </router-link>
                    </div>
                  </div>
                  <div></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { Link } from '@element-plus/icons-vue'
export default {
  components: [Link],
}
</script>
