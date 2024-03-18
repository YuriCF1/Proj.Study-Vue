<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

export default {
    props: {
        categoria: Object as PropType<ICategoria>
        // categoria: { type:  Object as PropType<ICategoria>, required: true } //Caso o TS reclamasse que talvez categoria fosse indefinida
    }
}
</script>
<template lang="">
    {{categoria.nome}}
    {{categoria.imagem}}
    </template>
<style scoped></style>