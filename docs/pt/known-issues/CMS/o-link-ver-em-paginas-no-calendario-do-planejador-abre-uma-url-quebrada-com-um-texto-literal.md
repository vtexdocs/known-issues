---
title: 'O link "Ver em Páginas" no Calendário do Planejador abre uma URL quebrada com um texto literal.'
slug: o-link-ver-em-paginas-no-calendario-do-planejador-abre-uma-url-quebrada-com-um-texto-literal
status: PUBLISHED
createdAt: 2026-09-29T22:10:20.000Z
updatedAt: 2026-09-29T22:10:20.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: view-in-pages-link-in-planner-calendar-opens-a-broken-url-with-literal
locale: pt
kiStatus: Backlog
internalReference: 1468037
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao abrir o menu de opções de um item de atualização de conteúdo dentro de uma publicação no Calendário do Planner (`/admin/planner/calendar`) e clicar em "Visualizar em Páginas", o usuário é redirecionado para uma URL onde o marcador `` não foi substituído, resultando em um link quebrado (por exemplo, `https://.myvtex.com/admin/new-cms//plp/edit/<id>`). O problema afeta qualquer tipo de conteúdo listado na publicação (PLP, Página Inicial, coleções etc.), não apenas um tipo específico.

## Simulação

1. Acesse o Calendário do Planner (`/admin/planner/calendar`) em uma conta com Headless CMS.

2. Navegue até um dia que tenha uma publicação com pelo menos uma atualização de conteúdo (por exemplo, um item da Página Inicial ou PLP).

3. Na lista de atualizações da publicação, clique no menu de opções (ícone de três pontos) de qualquer item.
4. Clique em "Visualizar em Páginas" (para itens já publicados) ou "Editar".
5. Observe que a guia aberta exibe um URL com um caractere `` literal em vez do nome real da conta, resultando em uma página não encontrada.

## Workaround

Não há solução alternativa pela interface do usuário. Como alternativa manual, o usuário pode editar o URL quebrado diretamente na barra de endereços do navegador, substituindo o caractere `` literal pelo nome real da conta (e, se estiver em um espaço de trabalho diferente de `master`, prefixando-o como `{workspace}--{account}`), e então recarregar a página. Como alternativa, o usuário pode navegar manualmente até o item de conteúdo correto pelo menu Loja > CMS Headless, usando o nome/tipo do item exibido na publicação como referência, em vez de usar o link gerado pelo Planejador.