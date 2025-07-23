---
title: "Ao carregar a página 'Mapeamento do Catálogo' em admin a mensagem inicial não é traduzida"
id: 4WszmRZ5jpeSDNTEuFIdwF
status: PUBLISHED
createdAt: 2022-12-15T12:32:17.741Z
updatedAt: 2024-02-16T20:23:22.033Z
publishedAt: 2024-02-16T20:23:22.033Z
firstPublishedAt: 2022-12-15T12:32:18.420Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: when-loading-the-catalog-maping-page-on-admin-the-initial-message-is-not-translated
locale: pt
kiStatus: No Fix
internalReference: 717066
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Este erro acontece neste cenário muito específico:

Ao abrir a página "Mapeamento de Catálogo" em um administrador que está em qualquer idioma, exceto "pt-BR" e quando ainda não há nenhum mapa feito pelo cliente, a mensagem inicial aparece primeiro em português, mas depois a página é recarregada muito rapidamente e desaparece.

Dois cenários podem acontecer nesta situação:
1- A mensagem aparece primeiro em português e depois a página está em branco
2- A mensagem aparece primeiro em português e depois a mensagem é traduzida corretamente para o idioma administrativo. No entanto, este último cenário acontece raramente.


##

## Simulação




1. Abra a página de Mapeamento de Catálogos em uma conta que não tenha mapeamentos feitos e em uma linguagem diferente na administração.
2. Verifique se inicialmente aparece uma mensagem em português;
3. 3. Verifique se quando a página terminar de carregar está em branco ou com a mensagem correta traduzida.


##

## Workaround



Quando o primeiro vendedor for adicionado, este problema não acontecerá mais.

