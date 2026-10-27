---
title: 'A disponibilidade do produto não é atualizada após uma alteração do CEP ao retornar a uma página visitada anteriormente usando o botão "Voltar" do navegador.'
slug: a-disponibilidade-do-produto-nao-e-atualizada-apos-uma-alteracao-do-cep-ao-retornar-a-uma-pagina-visitada-anteriormente-usando-o-botao-voltar-do-navegador
status: PUBLISHED
createdAt: 2026-10-27T18:28:12.000Z
updatedAt: 2026-10-27T18:30:06.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-availability-is-not-updated-after-a-zip-code-change-when-returning-to-a-previously-visited-page-using-the-browsers-back-button
locale: pt
kiStatus: Backlog
internalReference: 1477964
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas Store Framework que utilizam o Delivery Promise, quando o cliente altera o CEP através do "shopper-location-setter" e retorna a uma página visitada anteriormente usando o botão "voltar" do navegador, a página continua exibindo a disponibilidade do produto para o CEP anterior. A disponibilidade só é atualizada após a página ser recarregada (F5).

O problema ocorre apenas na mesma aba do navegador, quando a página é revisitada sem recarregamento. Abrir a página em uma nova aba ou visitar a página pela primeira vez após a alteração do CEP exibe a disponibilidade correta. A alteração do CEP em si é aplicada corretamente, mas os dados do produto já carregados para a página visitada anteriormente não são solicitados novamente.

## Simulação

1. Em uma loja Store Framework com o Delivery Promise ativado, abra uma página com uma prateleira de produtos (por exemplo, a página inicial) usando um CEP que não possui cobertura para alguns produtos, portanto, eles são exibidos como indisponíveis.

2. Navegue para outra página (por exemplo, uma página de pesquisa) e altere o CEP usando o seletor de localização do comprador no cabeçalho, para um CEP atendido por esses produtos.
3. Clique no botão Voltar do navegador para retornar à página visitada anteriormente, sem recarregá-la.

**Comportamento esperado:** A prateleira é atualizada e mostra a disponibilidade para o novo CEP.

**Comportamento real:** A prateleira continua mostrando a disponibilidade do CEP anterior até que a página seja recarregada.

## Workaround

N/A