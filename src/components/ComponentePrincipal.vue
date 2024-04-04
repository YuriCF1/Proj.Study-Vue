<!-- CASO O COMPONENTE NÃO ESTEJA SENDO IMPORTADO AUTOMATICAMENTE: DIGIE O COMPONENT, ESC, ALT ENTER-->

<script lang="ts">
import Banner from './Banner.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';

import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

//@ts-ignore
import MostrarReceitas from './MostrarReceitas.vue'

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas' //Definindo os opções possíveis

export default {
    data() { //Disponibilizando dados
        return {
            totalIngredientes: [] as string[],

            conteudo: 'SelecionarIngredientes' as Pagina
        }
    },
    components: { SelecionarIngredientes, Banner, Tag, SuaLista, MostrarReceitas },
    methods: {
        adicionarIngrediente(ingredienteEvent: string) {
            this.totalIngredientes.push(ingredienteEvent);
        },
        removerIngrediente(ingredienteRemovido: string) {
            this.totalIngredientes = this.totalIngredientes.filter(ingredient => {
                return ingredient !== ingredienteRemovido;
            })
        }, navegadar(estado: Pagina) {
            this.conteudo = estado
        }
    }
}

</script>

<template>
    <main class="conteudo-principal">
        <SuaLista :totalIngredientes="totalIngredientes" />
        <!-- <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" -->
        <keep-alive include="SelecionarIngredientes">
            <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
                @adicionarIngredienteSelecionar="adicionarIngrediente($event)"
                @remover-ingrediente-selecionar="removerIngrediente($event)"
                @buscar-receitas="conteudo = 'MostrarReceitas'" />
            <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"
                @editar-receitas="navegadar('SelecionarIngredientes')" />
        </keep-alive>
    </main>
</template>

<style scoped>
/* .conteudo-principal {
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
} */

/*
.ingrediente {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
*/

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>