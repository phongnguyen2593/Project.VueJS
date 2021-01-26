<template>
    <el-container>
        <el-aside>
            <el-menu>
                <el-menu-item>
                    <template>
                        <i class="el-icon-menu"></i>
                        <router-link to="/admin">Trang chủ</router-link>
                    </template>
                </el-menu-item>
                <el-menu-item class="productControl">
                    <template >
                        <i class="el-icon-s-shop"></i>
                        <router-link to="/user/123">Quản lý thông tin</router-link>
                        
                    </template>
                </el-menu-item>
                <el-menu-item @click="changePassword">
                    <template ><i class="el-icon-document" ></i>
                    Đổi mật khẩu
                    </template>
                </el-menu-item>
                <el-menu-item>
                    <template><i class="el-icon-s-data"></i>Đăng xuất</template>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header>
                Quản lý thông tin
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'UserLayout',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            console.log(`current page: ${val}`);
        },
        changePassword () {
            console.log(213123)
            this.$router.push({ path: '/user/123/change-password' })
        }
    },
}
</script>
<style lang="scss" scoped>
    .el-container {
        height: 700px;
        .el-header {
            background-color: #dae6f6;
            line-height: 60px;

            .el-row {
                .title {
                    text-align: left;
                    font-weight: bold;
                }
                .avatar {
                    text-align: right;

                    .el-dropdown {
                        margin-top: 10px;
                    }
                    i {
                        position: relative;
                        right:30px;
                        bottom: 10px;
                        font-size: 18px;
                        font-weight: bold;
                        div {
                            position: absolute;
                            font-size: 12px;
                            background-color: #F56C6C;
                            padding: 3px 5px;
                            color: #fff;
                            border-radius: 20px;
                            bottom:12px;
                            left: 11px;
                        }
                    }
                }
            }
        }
        
        .el-aside {
            width: 200px;
            background-color: #001529;
            text-align: left;

            .el-menu-item {
                background-color: #001529;
                color: #fff;
            }
            .productControl {
                color: #FFD04B !important;
                i {
                    color: #FFD04B !important;
                }
            }

            .el-submenu {
                color: #fff;
                background-color: #001529;
                
                .titleSubmenu {
                    color: #fff;
                }

                .el-menu-item-group {
                    background-color: #001529;
                }
            .el-menu-item:hover {
                background-color: #001529 !important;
            }

            .el-submenu:hover {
                background-color: #001529 !important;
            }
        }
    }
}

</style>