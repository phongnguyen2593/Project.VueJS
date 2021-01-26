<template>
    <login-layout>
        <template v-slot:content>
            <el-card>
                <h3 style="text-align: center">WELLCOME BACK</h3>
                <el-input
                    style="padding: 10px 0;"
                    placeholder="Email"
                    v-model="email">
                </el-input>
                <el-input
                    type="password"
                    style="padding: 10px 0;"
                    placeholder="Mật khẩu"
                    v-model="pw">
                </el-input>
                <div style="text-align: right; margin-top: 8px; margin-bottom: 24px">
                    <el-link type="primary" style="text-align:right; color:#0080dd">Quên mật khẩu?</el-link>
                </div>
                <div style="text-align: right; margin-top: 8px; margin-bottom: 24px">
                    <el-link type="primary" style="text-align:right; color:#0080dd">
                        <router-link :to="{ path: '/register' }">Đăng ký</router-link>
                    </el-link>
                </div>
                
                <el-button type="primary" @click="login">ĐĂNG NHẬP</el-button>
            </el-card>
        </template>
    </login-layout>
</template>

<script>
import LoginLayout from "@/layouts/LoginLayout.vue"
export default {
    name: "Login",
    components: {
        LoginLayout,
    },
    data() {
        return {
            email: '',
            pw: '',
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
