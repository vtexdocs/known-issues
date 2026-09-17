---
title: 'A configuração de vtex (CLI) retorna 403 mesmo para administradores de conta — nenhum recurso do Gerenciador de Licenças concede a permissão necessária.'
slug: a-configuracao-de-vtex-cli-retorna-403-mesmo-para-administradores-de-conta-nenhum-recurso-do-gerenciador-de-licencas-concede-a-permissao-necessaria
status: PUBLISHED
createdAt: 2026-09-17T20:57:07.000Z
updatedAt: 2026-09-17T20:57:07.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: vtex-settings-set-cli-returns-403-even-for-account-admins-no-license-manager-resource-grants-the-required-permission
locale: pt
kiStatus: Backlog
internalReference: 1462810
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A execução do comando `vtex settings set <app> <field> <value>` falha com um erro 403 Forbidden (`Role User:<user> in <account>/ cannot perform action PUT on resource vrn:apps:...:/apps/<app>/settings`), mesmo quando o usuário possui a função mais alta disponível na conta no Gerenciador de Licenças (incluindo a opção "Permitir configuração de aplicativo"). A interface administrativa, utilizada pelo mesmo usuário na mesma conta/espaço de trabalho, salva as configurações com sucesso. Não se trata de uma função mal configurada — nenhum recurso atualmente exposto no Gerenciador de Licenças concede a permissão necessária para o caminho de gravação direta da CLI.

## Simulação

- Como usuário com a função mais alta configurada na conta (incluindo a opção "Permitir configuração de aplicativo" marcada em Recursos de infraestrutura), execute: `vtex settings set vtex.store <field> <value>`.

- - Observe uma resposta 403: `Role User:<user> in <account>/ cannot perform action PUT on resource vrn:apps:...:/apps/vtex.store/settings`.

- Confirme se o mesmo campo pode ser salvo com sucesso via `/admin/cms/store` ou `/admin/apps/vtex.store@.../setup` pelo mesmo usuário, mesma conta/espaço de trabalho.

## Workaround

Configure as configurações do aplicativo pela interface de administração (`/admin/cms/store` ou `/admin/apps/{app}@{version}/setup`) em vez da CLI.