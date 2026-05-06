---
title: 'Os usuários não conseguem acessar a interface de configuração de crédito do cliente no painel de administração devido a um erro de acesso proibido'
slug: os-usuarios-nao-conseguem-acessar-a-interface-de-configuracao-de-credito-do-cliente-no-painel-de-administracao-devido-a-um-erro-de-acesso-proibido
status: PUBLISHED
createdAt: 2021-06-11T18:57:40.000Z
updatedAt: 2023-02-24T13:28:16.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: users-are-unable-to-access-customer-credit-settings-ui-on-the-admin-due-to-a-forbidden-error
locale: pt
kiStatus: Backlog
internalReference: 380931
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os usuários não conseguem acessar a interface de configuração de crédito do cliente no Admin, e observamos o seguinte erro “Forbidden” na operação SettingQueries.

Esse comportamento se deve à forma como o aplicativo de crédito do cliente utiliza o GraphQL para recuperar essas informações. Ele realiza uma solicitação à rota `/billing/company`, que utiliza o token do usuário administrador. Essa chamada de API é usada para exibir informações de identificação básicas na página. Portanto, o usuário que estiver tentando abrir as configurações de crédito do cliente deve ter o recurso get_company habilitado no Gerenciador de Recursos de Licença.

Embora isso não deva impedir o usuário de acessar as configurações de crédito do cliente, o aplicativo deve alterar a forma como lida com esse fluxo.

## Simulação

Tente abrir a página de configurações de crédito do cliente com um usuário que não tenha o recurso `get_company` no módulo LM.

## Workaround

Certifique-se de que o usuário tenha o recurso `get_company` habilitado em sua função. Além disso, há um cache nessa operação.