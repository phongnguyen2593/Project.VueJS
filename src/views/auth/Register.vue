<template>
    <login-layout>
        <template v-slot:content>
            <el-card>
                <h3 style="text-align: center">Register</h3>
                <el-input
                    style="padding: 10px 0;"
                    placeholder="Email"
                    v-model="email"></el-input>
                <el-input
                    type="password"
                    style="padding: 10px 0;"
                    placeholder="Mật khẩu"
                    v-model="pw"></el-input>
                <el-input
                    type="password"
                    style="padding: 10px 0;"
                    placeholder="Xác nhận mật khẩu"
                    v-model="pwConfirm"></el-input>
                <div style="text-align: right; margin-top: 8px; margin-bottom: 24px">
                    <el-link type="primary" style="text-align:right; color:#0080dd">
                        <router-link :to="{ path: '/login' }">Đăng nhập</router-link>
                    </el-link>
                </div>
                <el-button type="primary" @click="login">ĐĂNG KÝ</el-button>
            </el-card>
        </template>
    </login-layout>
</template>

<script>
import LoginLayout from "@/layouts/LoginLayout.vue"
export default {
    name: "Register",
    components: {
        LoginLayout,
    },
    data() {
        return {
            email: '',
            pw: '',
            pwConfirm: ''
        }
    },
    methods: {
        login() {
            if (this.email != '' && this.pw != '') {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "Admin" });
            }else {
                this.$emit("authenticated", false);
            }
        }
    }
}
</script>
