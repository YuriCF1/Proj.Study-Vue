export default function intensDalistaGeralEstaListaAPI(
    listaAPI: unknown[], listaSelecionada: unknown[]
) {
    return listaAPI.every((ingredienteDaAPI) => //Arrow function com chave/colchete *por via de confusão em futura pesquisa* NÃO DÁ RETORNO
        listaSelecionada.includes(ingredienteDaAPI)
    )
}