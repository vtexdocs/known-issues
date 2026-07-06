---
title: 'Remover uma atualização de uma versão pode criar um rascunho com conteúdo incompleto.'
slug: remover-uma-atualizacao-de-uma-versao-pode-criar-um-rascunho-com-conteudo-incompleto
status: PUBLISHED
createdAt: 2026-07-06T15:30:21.000Z
updatedAt: 2026-07-06T15:30:21.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: removing-an-update-from-a-release-can-create-a-draft-with-incomplete-content
locale: pt
kiStatus: Backlog
internalReference: 1430344
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário remove uma atualização de uma versão agendada no Planejador, o sistema cria automaticamente um rascunho para a página afetada. Em alguns cenários, esse rascunho pode ser criado com conteúdo desatualizado ou incompleto. Isso não acontece sempre — depende do histórico da página afetada. Se o usuário publicar esse rascunho sem perceber, a página publicada ficará sem seções ou campos adicionados após um determinado momento.

## Simulação

1. Abra o Planejador Administrativo e navegue até uma versão agendada.
2. Na tabela de atualizações, encontre uma atualização de página do tipo "publicar".
3. Clique no menu de três pontos na linha da atualização e selecione ****Excluir****.
4. Confirme a remoção na janela modal.
5. Navegue até o Headless CMS e abra o rascunho criado para essa página.
6. O conteúdo do rascunho estará faltando seções em comparação com a versão publicada atual.

## Workaround

Após remover uma atualização de uma versão, não publique o rascunho criado automaticamente imediatamente. Em vez disso, abra o arquivo no editor do CMS e verifique se todo o conteúdo está completo e correto antes de publicar. Se o rascunho estiver incompleto, descarte-o e crie-o manualmente com o conteúdo correto.