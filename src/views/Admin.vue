<template>
  <admin-layout>
    <template v-slot:content>
      <el-row>
        <el-col :span="3" style="background-color: yellow; height: 100px">
            Job 1
        </el-col>
        <el-col :span="3" style="background-color: #818134; height: 100px">
            Job 2
        </el-col>
        <el-col :span="3" style="background-color: #475062; height: 100px">
            Job 3
        </el-col>
        <el-col :span="3" style="background-color: #57f00c; height: 100px">
            Job 4
        </el-col>
      </el-row>
    </template>
  </admin-layout>
</template>

<script>
// @ is an alias to /src
import AdminLayout from '@/layouts/AdminLayout.vue'

export default {
  name: 'Admin',
  components: {
    AdminLayout
  }
}
</script>
