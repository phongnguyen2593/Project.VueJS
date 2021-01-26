<template>
    <!-- <div id="container"> -->
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="23"><p>Chỗ để logo, bla bla</p></el-col>
                    <el-col :span="1" class="avatar">
                        <el-dropdown >
                            <el-avatar icon="el-icon-user-solid"></el-avatar>
                            <el-dropdown-menu slot="dropdown" style="margin: 0; top: 70px !important">
                                <el-dropdown-item>
                                    <el-link>
                                        <router-link :to="{ path: '/user/123' }">Thông tin tài khoản</router-link>
                                    </el-link>
                                </el-dropdown-item>
                                <el-dropdown-item style="border-top: 1px solid #F1F3F8" @click="logout">Đăng xuất</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <slot name="content"></slot>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    <!-- </div> -->
</template>
<script>
export default {
    name: "AdminLayout",
    methods: {
        logout: function () {
            this.$emit("authenticated", false);
            this.$router.replace({ name: "Login" });
        }
    }
}
</script>
<style lang="scss" scoped>
.el-container {
    background-color: blue;
    height: 100vh;
    text-align: center;
    .el-header {
        background-color: red;
        box-sizing: border-box;
        .el-row {
            //
        }
    }
    .el-footer {
        background-color: green;
    }
}
</style>>
