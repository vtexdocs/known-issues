---
title: 'A opção "Selecionar um bloco" não funciona corretamente quando as extensões de página são carregadas de forma diferida no Editor do site'
slug: a-opcao-selecionar-um-bloco-nao-funciona-corretamente-quando-as-extensoes-de-pagina-sao-carregadas-de-forma-diferida-no-editor-do-site
status: PUBLISHED
createdAt: 2026-05-07T17:22:03.000Z
updatedAt: 2026-05-07T17:26:54.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: select-a-block-does-not-work-correctly-when-page-extensions-load-lazily-in-site-editor
locale: pt
kiStatus: Backlog
internalReference: 1403234
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso "Selecionar um bloco" no Editor do Site não funciona corretamente em páginas nas quais as extensões terminam de carregar após a renderização inicial. Após clicar no botão "Selecionar um bloco", passar o mouse sobre os blocos na vitrine da loja não destaca nenhum deles, e clicar nos blocos não abre o editor de blocos. É mais provável que o problema ocorra em páginas com um grande número de blocos ou com sinalizadores de otimização de desempenho ativados (como “Ativar execução diferida”).

## Simulação

1. Acesse o Editor do Site de uma loja com uma página que tenha um grande número de blocos ou com o sinalizador “Ativar execução diferida” ativo.
2. Navegue até a página afetada por meio da URL do Editor do Site.
3. Clique no botão “Selecionar um bloco” na barra superior.
4. Passe o mouse sobre os elementos no iframe da vitrine.
5. Observe que nenhum bloco é destacado e que clicar nos elementos não tem efeito.

Para confirmar se o problema está relacionado ao carregamento diferido de extensões, verifique se o problema persiste ao recarregar a página e se ocorre com mais frequência em páginas mais pesadas.

## Workaround

Não há solução alternativa disponível.