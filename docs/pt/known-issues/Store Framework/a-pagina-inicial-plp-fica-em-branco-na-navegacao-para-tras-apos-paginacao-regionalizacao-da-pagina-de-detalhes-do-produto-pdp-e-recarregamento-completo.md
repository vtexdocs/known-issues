---
title: 'A página inicial (PLP) fica em branco na navegação para trás após paginação, regionalização da página de detalhes do produto (PDP) e recarregamento completo.'
slug: a-pagina-inicial-plp-fica-em-branco-na-navegacao-para-tras-apos-paginacao-regionalizacao-da-pagina-de-detalhes-do-produto-pdp-e-recarregamento-completo
status: PUBLISHED
createdAt: 2026-11-18T16:30:21.000Z
updatedAt: 2026-11-18T16:30:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-renders-blank-on-back-navigation-after-pagination-pdp-regionalization-and-full-reload
locale: pt
kiStatus: Backlog
internalReference: 1486412
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao retornar (botão "Voltar" do navegador) para uma página de listagem de produtos (PLP) paginada, o contêiner da listagem fica vazio quando o usuário navega pelas páginas além da página 1, abre uma página de detalhes do produto (PDP) e define um código postal (regionalização) antes de retornar.

## Simulação

1. Abra uma PLP e navegue até a página 2 (a página 2 deve ser acessada no lado do cliente, sem recarregar a página inteira).

2. Abra um produto da listagem (PDP).

3. Na PDP, insira um código postal para regionalizar a página. A página recarrega e regionaliza corretamente.

4. Clique no botão "Voltar" do navegador.

5. Resultado esperado: a PLP é exibida com o conteúdo da página 2. Resultado obtido: a PLP está em branco. A URL retorna sem `page=2`, nenhuma solicitação de pesquisa de documento ou produto na PLP é feita e o contêiner `div.render-container.render-route-store-search` está vazio. Nenhum erro de JavaScript aparece no console.

## Workaround

Atualize a página. Ou faça com que a paginação carregue a URL `page=2` como um documento completo, para que a página de destino do produto (PLP) não seja exibida a partir do estado do lado do cliente. Alternativas: 1. Force os cartões de produto da PLP a navegarem para a página de detalhes do produto (PDP) como um carregamento de página completa. 2. Como último recurso, detecte uma PLP em branco ao retornar e acione uma recarga automática. Isso é instável e só deve ser usado se as opções acima não forem viáveis.