<template>
    <user-layout>
        <router-view></router-view>
    </user-layout>
</template>

<script>
import UserLayout from '@/layouts/UserLayout.vue'
export default {
    name: "User",
    components: {
        UserLayout
    }
}
</script>