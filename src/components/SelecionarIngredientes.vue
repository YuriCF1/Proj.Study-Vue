<script lang="ts">
import { obterCategorias } from '@/http';
import type ICategoria from '@/interfaces/ICategoria';

import CardCategoria from "./CardCategoria.vue";
import BotaoPrincipal from "./BotaoPrincipal.vue"

export default {
    name: 'SelecionarIngredientes',
    // Para saber mais sobre as hooks: https://www.alura.com.br/artigos/vuejs-ciclo-vida-componentes?_gl=1*1ufue0v*_ga*MzE4ODAyMjUyLjE3MDA3NzY3Nzg.*_ga_1EPWSW3PCS*MTcxMDYyMTM1My40NDIuMS4xNzEwNjIxNDUwLjAuMC4w*_fplc*TkUlMkJ2Nnp3NktkWW1hTGdpVTFETnZPWmsxeXJvT1RFYzZ1SUlMd3VUYiUyQmhBQ3NYZVZCaXhKaVpKUEtTbzJ2Wjk3eWxyNXlPWjRvZCUyQlE2WVdabk5rdGdrWiUyRmZRekNNYTlNTiUyQnglMkZoTzNoUjczbXlSc2EwWEV5TUd6UlppNyUyQlElM0QlM0Q.
    data() {
        return {
            //Proprieadades no data são reativas por padrão
            categoriasGerais: [] as ICategoria[]
            // categoriasGerais: obterCategorias()
        }
    },
    async created() { //Executado apenas quando as propriedades de data foram definidaszz
        // Categorias inicia vazia, e depois fço uma reatribuição
        this.categoriasGerais = await obterCategorias()
    },
    components: { CardCategoria, BotaoPrincipal },
    emits: ['adicionarIngredienteSelecionar', 'removerIngredienteSelecionar', 'buscarReceitas']
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>
        <p class="paragrafo-lg intrucoes">
            Selecione abaixo os ingredientes que você quer usar nessa receita
        </p>
        <ul class="categorias">
            <li v-for="categoria in categoriasGerais" :key="categoria.nome">
                <CardCategoria :categoria="categoria"
                    @adicionar-ingrediente-card="$emit('adicionarIngredienteSelecionar', $event)"
                    @remover-ingrediente-card="$emit('removerIngredienteSelecionar', $event)" />
            </li>
        </ul>
        <p class="paragrafo dica">
            *Atenção, consideramos que você tem em casa: sal, pimenta e água
        </p>
        <BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')" />
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>