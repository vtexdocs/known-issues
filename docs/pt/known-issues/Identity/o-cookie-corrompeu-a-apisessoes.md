---
title: 'O cookie corrompeu a API/Sessões'
slug: o-cookie-corrompeu-a-apisessoes
status: PUBLISHED
createdAt: 2023-03-27T19:54:28.000Z
updatedAt: 2024-03-20T20:34:23.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: cookie-broken-the-apisessions
locale: pt
kiStatus: Backlog
internalReference: 779014
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando existe um script que gera um cookie para rastrear os usuários e esse cookie apresenta falha na chamada para /api/sessions, por exemplo, por conter um caractere especial no valor do cookie. Nesse caso, precisamos descartar esses cookies malformados do nosso lado e manter todos os demais, para que isso não afete o comportamento do sistema.

## Simulação

O cenário foi reproduzido no Facebook:

Quando você acessa a página a partir de um anúncio do Facebook, ela é carregada automaticamente no navegador META nativo e, ao chegar à página de checkout, não carrega corretamente, portanto, não é possível finalizar a compra.

O Facebook costumava redirecionar para navegadores, mas não faz mais isso porque integrou seu navegador ao aplicativo.

## Workaround

N/A