<template>
    <div>
        <div>page2 content</div>
        <Button @click="changeMsg">修改msg</Button>
    </div>
</template>

<script>
import { Button } from "vant"
export default {
    components: {
        Button,
    },
    name: 'page2',
    methods: {
        changeMsg() {
            this.$store.commit('changeMsg', 'page2')
        }
    }
}
</script>