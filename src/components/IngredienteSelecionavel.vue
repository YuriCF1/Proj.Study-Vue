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
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado

            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente)
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente'] //Boa prática para o typescript ajudar. Se eu passar um this.$emit com um nome estranho, o TS vai reclamar
}
</script>

<template lang="">
    <!-- v-on:click="selecionado = !selecionado" -->
    <!-- @click="selecionado = !selecionado" -->
    <!-- Vue também aceita passar função sem parenteses -->
    <button
    class="ingrediente"
    @click="aoClicar()"
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