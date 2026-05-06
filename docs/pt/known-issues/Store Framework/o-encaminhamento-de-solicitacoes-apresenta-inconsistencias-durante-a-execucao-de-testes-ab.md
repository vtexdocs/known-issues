---
title: 'O encaminhamento de solicitações apresenta inconsistências durante a execução de testes A/B'
slug: o-encaminhamento-de-solicitacoes-apresenta-inconsistencias-durante-a-execucao-de-testes-ab
status: PUBLISHED
createdAt: 2023-11-07T01:31:07.000Z
updatedAt: 2025-03-13T20:47:51.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: request-routing-is-inconsistent-when-running-ab-tests
locale: pt
kiStatus: Backlog
internalReference: 931246
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As solicitações HTTP de navegação na loja não respeitam o cookie de seleção do espaço de trabalho durante a sessão. Na verdade, durante uma única sessão, um usuário pode receber respostas de todos os espaços de trabalho que estão sendo testados.

O problema ocorre quando o cookie `VtexWorkspace` expira ou é excluído durante a navegação do usuário. Quando isso acontece, um novo cookie de espaço de trabalho é gerado, que pode ser o mesmo de antes ou um diferente. Se ele mudar e o usuário não atualizar a página, o problema pode ocorrer. Se o usuário ainda estiver navegando no momento da expiração, as interações subsequentes podem permanecer associadas ao espaço de trabalho antigo, causando o problema. No entanto, esse cenário é relativamente raro, dependendo de sessões longas e da expiração do cookie sem uma atualização da página.

## Simulação

1. Crie um teste A/B em sua loja usando a CLI do VTEX IO
2. Abra a guia “Aplicativo” no Chrome DevTools (ou equivalente no seu navegador)
  1. Navegue pela loja e limpe seu cookie `VtexWorkspace` ou aguarde até que ele expire
  2. Você deverá ver os valores mudarem eventualmente, mesmo que o cookie de sessão não tenha mudado
3. Abra a guia “Rede” no Chrome DevTools (ou equivalente no seu navegador)
  1. Navegue pela loja e observe as solicitações HTTP que são feitas
  2. Você deve ver que a string de consulta `workspace` é definida com valores diferentes ao longo da sessão

## Workaround

Não há solução alternativa disponível.