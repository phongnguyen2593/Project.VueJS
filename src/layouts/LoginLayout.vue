<template>
    <div class="container">
        <div class="subContainer">
            <div class="logoContainer">
                <div class="logo" style="background-color: blue">Để logo vào đây</div>
                <div class="text" style="background-color: grey">Để text vào đây</div>
                <!-- <img src="" alt="Logo" class="logo">
                <img src="" alt="Text" class="text"> -->
            </div>
            <div class="formContainer">
                <slot name="content"></slot>
            </div>
        </div>
        
    </div>
</template>>

<script>
export default {
    name: "LoginLayout",
    
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    .subContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        overflow: hidden;
        // .loadIn {
            // opacity: 1;
            // top: 0;
            // transition: 0.8s ease;
        // }
        .logoContainer {
            width: 36%;
            padding: 45px 35px;
            position: relative;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
            // transform: scale(0,0);
            z-index: 2;
            .logo {
                width: 70%;
                // margin-top: -20px;
                // opacity: 0;
            }
            .text {
                width: 70%;
                padding: 25px 0 10px 0;
                // margin-top: -70px;
                // opacity: 0;
            }
            // &:before {
            //     content: "";
            //     background-size: cover !important;
            //     position: absolute;
            //     top: -50px;
            //     left: -50px;
            //     width: 150%;
            //     height: 150%;
            //     filter: blur(10px);
            //     transform: scale(1);
            //     box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.8);
            // }
        }
        .formContainer {
            width: 60%;
            background-color: red;
            padding: 45px 30px;
            box-sizing: border-box;
            overflow: hidden;
        }
    }
}
</style>
