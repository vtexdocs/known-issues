---
title: 'Erro ao publicar a versão agendada antes do previsto no Admin ("Você não pode publicar uma versão vazia")'
slug: erro-ao-publicar-a-versao-agendada-antes-do-previsto-no-admin-voce-nao-pode-publicar-uma-versao-vazia
status: PUBLISHED
createdAt: 2026-01-05T19:44:22.105Z
updatedAt: 2026-01-05T19:44:22.105Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-publishing-scheduled-release-ahead-of-schedule-in-admin-you-cant-publish-an-empty-release
locale: pt
kiStatus: Backlog
internalReference: 1346648
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar publicar manualmente uma **Lançamento programado** antes da data programada por meio do painel do administrador, o sistema bloqueia a ação e exibe a mensagem de erro: **"Não é possível publicar uma versão vazia. Adicione atualizações e tente novamente. "**

Foi verificado por meio da API que a versão **não está vazia** e, na verdade, contém eventos/atualizações associados. Isso indica um falso positivo na validação da interface de administração que impede a publicação manual antes do horário programado.
## Simulação



- Crie uma nova versão no módulo **CMS/Lançamentos**.
- Adicione atualizações/eventos a essa versão (certifique-se de que ela não esteja vazia).
- Agende essa versão para uma data futura.
- Antes da data programada, tente publicar a versão manualmente usando o botão de publicação no Admin.
- O sistema exibirá o erro: _"Não é possível publicar uma versão vazia. Adicione atualizações e tente novamente."_


## Workaround


N/A


