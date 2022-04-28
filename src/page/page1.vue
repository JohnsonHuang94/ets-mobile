<template>
    <div>
        <div>page1 content</div>
        <Button @click="changeMsg">修改msg</Button>
    </div>
</template>

<script>
import { Button } from "vant"
export default {
    components: {
        Button
    },
    name: 'page1',
    methods: {
        changeMsg() {
            this.$store.commit('changeMsg', 'page1')
        }
    }
}
</script>