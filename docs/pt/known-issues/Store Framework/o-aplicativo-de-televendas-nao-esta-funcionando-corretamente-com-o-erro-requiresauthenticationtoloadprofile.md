---
title: 'O aplicativo de televendas não está funcionando corretamente com o erro "RequiresAuthenticationToLoadProfile"'
slug: o-aplicativo-de-televendas-nao-esta-funcionando-corretamente-com-o-erro-requiresauthenticationtoloadprofile
status: PUBLISHED
createdAt: 2023-04-26T17:20:41.000Z
updatedAt: 2023-04-26T17:32:27.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: telesales-app-not-working-properly-with-requiresauthenticationtoloadprofile
locale: pt
kiStatus: Backlog
internalReference: 797651
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o sinalizador `RequiresAuthenticationToLoadProfile` nas APIs de checkout com um aplicativo de televendas para assumir a identidade de usuários, não é exibida nenhuma notificação ao usuário indicando se a suplantação de identidade foi bem-sucedida, o que causa algumas inconsistências no fluxo

## Simulação

Para a simulação, é necessário ter o RequiresAuthenticationToLoadProfile ativado, o que significa que você deve usar um token autorizado para acessar algumas APIs

Você também deve implementar a funcionalidade de televendas: https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R

https://developers.vtex.com/docs/guides/vtex-telemarketing

Depois disso, tente se passar por um usuário com um operador de call center; você verá algumas inconsistências na plataforma

## Workaround

Para algumas partes do fluxo, uma atualização pode resolver o problema; outras funcionalidades não estão preparadas para funcionar com RequiresAuthenticationToLoadProfile; portanto, se uma atualização não resolver o problema, a única solução possível é desativar o sinalizador