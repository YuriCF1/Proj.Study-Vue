import type ICategoria from "@/interfaces/ICategoria";
import type { IReceita } from "@/interfaces/IReceita";

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

  const categoriasGerais: ICategoria[] = await resposta.json()

  console.log('Categorias HTTP', categoriasGerais);
  console.log('Categorias HTTP', typeof (categoriasGerais));

  return categoriasGerais;

  // return [
  //     {
  //         "nome": "Laticínios e Ovos",
  //         "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
  //         "rotulo": "laticinios_e_ovos"
  //     },
  //     {
  //         "nome": "Farinhas e Fermentos",
  //         "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
  //         "rotulo": "farinhas_e_fermentos"
  //     }
  // ]

}

export async function obterReceitas() {
  // return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');

  const repostasObtidas: IReceita[] = await resposta.json()

  console.log('Categorias HTTP', repostasObtidas);
  console.log('Categorias HTTP', typeof (repostasObtidas));

  return repostasObtidas;

}

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}