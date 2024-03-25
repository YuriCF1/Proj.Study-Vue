<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    props: {
        totalIngredientes: { type: Array as  PropType<string[]>, required: true }
    },
    components: { Tag },
}
</script>

<template lang="">
    <section>
            <span class="subtitulo-lg sua-lista-texto">Sua lista:</span>
            <!-- Verificando confições para exibição= v-if-->
            <ul v-if="totalIngredientes.length" class="ingredientes-sua-lista">
                <!-- <li v-for="ingrediente in totalIngredientes" v-bind:key="ingrediente" class="ingrediente"> -->
                <li v-for="ingrediente in totalIngredientes" :key="ingrediente">
                    <!-- <Tag :texto="ingrediente" :ativa="true" /> -->
                    <Tag :texto="ingrediente" ativa />
                </li>
            </ul>
            <p v-else class="paragrafo lista-vazia"> <!--v-else, deve ser colocado logo após um v-if-->>
                <img src="../assets/icones/lista-vazia.svg" alt="Ícone de pesquisa">
                Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
    </section>
</template>

<style this.$scopedSlots.default({ })>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}
</style>