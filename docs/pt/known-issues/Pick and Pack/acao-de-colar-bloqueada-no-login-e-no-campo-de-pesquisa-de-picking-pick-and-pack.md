---
title: 'Ação de colar bloqueada no login e no campo de pesquisa de picking Pick and Pack'
slug: acao-de-colar-bloqueada-no-login-e-no-campo-de-pesquisa-de-picking-pick-and-pack
status: PUBLISHED
createdAt: 2025-12-22T19:09:07.569Z
updatedAt: 2025-12-22T19:09:07.569Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: paste-action-blocked-on-login-and-on-the-pick-and-pack-picking-search-field
locale: pt
kiStatus: Backlog
internalReference: 1343368
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os usuários não conseguem colar texto em campos específicos do fluxo de picking e embalagem: os campos de login (nome de usuário/senha) e o campo de pesquisa no painel de picking.

Ao tentar colar usando atalhos de teclado (Ctrl+C / Ctrl+V) ou a opção de colar do menu de contexto, nada é inserido nesses campos.

O comportamento foi relatado na conta **gruporamos**; no entanto, ele ocorre em todas as contas que usam Pick and Pack ao acessar o aplicativo de seleção e indica que a ação de colar está sendo bloqueada ou interceptada nessas entradas.
## Simulação


**Pré-requisito:** Ter acesso ao aplicativo de picking Pick and Pack.
**Etapas:**

1. Copie qualquer texto (por exemplo: `129318231838`).
2. Acesse a página de picking em `/tasks/picking` (relatado em https://picking.pick-and-pack.com/tasks/picking).
3. Tente colar o texto copiado nos seguintes campos:
  - Campos de login (nome de usuário e senha).
  - Campo de pesquisa no painel de picking.
4. Observe que a ação de colar não é aceita nessas entradas (nenhum texto é inserido).


## Workaround


Digite os dados diretamente no campo.



