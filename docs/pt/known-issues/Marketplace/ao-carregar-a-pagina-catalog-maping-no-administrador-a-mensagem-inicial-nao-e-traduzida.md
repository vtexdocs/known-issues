---
title: 'Ao carregar a página "Catalog Maping" no administrador, a mensagem inicial não é traduzida'
slug: ao-carregar-a-pagina-catalog-maping-no-administrador-a-mensagem-inicial-nao-e-traduzida
status: PUBLISHED
createdAt: 2025-11-14T19:25:11.808Z
updatedAt: 2025-11-14T19:25:11.808Z
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



Esse erro ocorre em um cenário muito específico:

Ao abrir a página "Catalog Mapping" em um administrador que está em qualquer idioma, exceto "pt-BR", e quando ainda não há nenhum mapa feito pelo cliente, a mensagem inicial aparece primeiro em português, mas depois a página é recarregada rapidamente e desaparece.

Dois cenários podem ocorrer nessa situação:
1- A mensagem aparece primeiro em português e depois a página fica em branco
2- A mensagem aparece primeiro em português e depois é traduzida corretamente para o idioma do administrador. Entretanto, esse último cenário ocorre raramente.
## Simulação




1. Abra a página Catalog Mapping em uma conta que não tenha mapeamentos feitos e em um idioma diferente no admin.
2. Verifique se inicialmente aparece uma mensagem em português;
3. Verifique se, quando a página termina de carregar, ela está em branco ou com a mensagem correta traduzida
## Workaround



Quando o primeiro vendedor for adicionado, esse problema não ocorrerá mais.