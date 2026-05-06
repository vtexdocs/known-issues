---
title: 'Ao carregar a página “Mapeamento do Catálogo” no painel de administração, a mensagem inicial não está traduzida'
slug: ao-carregar-a-pagina-mapeamento-do-catalogo-no-painel-de-administracao-a-mensagem-inicial-nao-esta-traduzida
status: PUBLISHED
createdAt: 2022-12-15T12:31:50.000Z
updatedAt: 2022-12-15T12:31:59.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: when-loading-the-catalog-maping-page-on-admin-the-initial-message-is-not-translated
locale: pt
kiStatus: Backlog
internalReference: 717066
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Este erro ocorre neste cenário específico:

Ao abrir a página “Mapeamento do Catálogo” em um painel de administração que esteja em qualquer idioma que não seja “pt-BR” e quando ainda não houver um mapeamento criado pelo cliente, a mensagem inicial aparece primeiro em português, mas, em seguida, a página recarrega muito rapidamente e a mensagem desaparece.

Dois cenários podem ocorrer nessa situação:
1- A mensagem aparece primeiro em português e, em seguida, a página fica em branco
2- A mensagem aparece primeiro em português e, em seguida, é traduzida corretamente para o idioma do painel de administração. No entanto, esse último cenário ocorre raramente.

## Simulação

1. Abra a página Mapeamento de Catálogo em uma conta que não tenha mapeamentos definidos e em um idioma diferente no painel de administração.
2. Verifique se inicialmente aparece uma mensagem em português;
3. Verifique se, quando a página terminar de carregar, ela fica em branco ou com a mensagem correta traduzida.

## Workaround

Quando o primeiro vendedor for adicionado, esse problema não ocorrerá mais.