<script lang="ts">
import Tag from "./Tag.vue"

export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    components: { Tag },
    //Criando um estado = data()
    data() {
        return {
            selecionado: false
        }

    }
}
</script>

<template lang="">
    <!-- v-on:click="selecionado = !selecionado" -->
    <button
    class="ingrediente"
    @click="selecionado = !selecionado"
    :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>