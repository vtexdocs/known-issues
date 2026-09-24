---
title: 'APP FBE O aplicativo Checkout Pixel apresenta um erro de "Tamanho máximo da pilha de chamadas excedido" no checkout.'
slug: app-fbe-o-aplicativo-checkout-pixel-apresenta-um-erro-de-tamanho-maximo-da-pilha-de-chamadas-excedido-no-checkout
status: PUBLISHED
createdAt: 2026-09-24T16:27:43.000Z
updatedAt: 2026-09-24T16:27:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-checkout-pixel-app-throws-a-maximum-call-stack-size-exceeded-error-in-the-checkout
locale: pt
kiStatus: Backlog
internalReference: 1465789
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas que utilizam a integração Meta (Facebook Business Extension), o console do navegador pode exibir o erro "Tamanho máximo da pilha de chamadas excedido" nas páginas de finalização da compra. O erro é originado pelo aplicativo Facebook Checkout Pixel, que é carregado na página de finalização da compra como parte da integração.

Ocorre de forma intermitente, pois depende do tempo de carregamento dos scripts da página no navegador, algo que a loja não pode controlar. É mais comum em dispositivos ou conexões mais lentas. Quando isso acontece, os scripts da página que tentam enviar eventos do Meta Pixel durante o carregamento da página podem falhar.

A integração do catálogo e o fluxo de finalização da compra não são afetados. Os eventos de compra enviados pelo servidor (API de Conversões) também não dependem deste aplicativo.

Referências:

- Integração: Extensão de Negócios do Facebook (FBE) / Extensão de Negócios Meta
- Função do Pixel Meta afetada: `fbq` (`window.fbq`, `fbq.push`)
- Script Meta: `connect.facebook.net/en_US/fbevents.js`
- Mensagem no console: `RangeError: Tamanho máximo da pilha de chamadas excedido`

## Simulação

- Use uma loja com a integração da Extensão de Negócios Meta instalada e configurada.

- Adicione um produto ao carrinho e vá para o checkout, idealmente para a etapa de pagamento com os dados do cliente já preenchidos.
- Abra as ferramentas de desenvolvedor do navegador e observe o console.

- Recarregue a página algumas vezes, de preferência em um dispositivo móvel ou com uma conexão mais lenta.

- Em alguns carregamentos, o console exibe um erro "Tamanho máximo da pilha de chamadas excedido" proveniente do aplicativo Pixel de Checkout do Facebook.

## Workaround

Não há solução alternativa disponível que mantenha o aplicativo ativo. Desativar a opção "Habilitar configuração de pixel?" nas configurações de integração do Meta não resolve o erro. Alterar a ordem de carregamento dos scripts da loja também não resolve o problema.

Se o erro causar problemas para a loja, desinstalar o aplicativo Facebook Checkout Pixel resolve o problema sem afetar a integração com o catálogo. Os eventos de finalização de compra enviados por este aplicativo não serão mais enviados.