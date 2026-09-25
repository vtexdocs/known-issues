---
title: 'O domínio personalizado movido entre projetos FastStore continua redirecionando para a conta anterior.'
slug: o-dominio-personalizado-movido-entre-projetos-faststore-continua-redirecionando-para-a-conta-anterior
status: PUBLISHED
createdAt: 2026-09-25T16:17:05.000Z
updatedAt: 2026-09-25T16:17:05.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: custom-domain-moved-between-faststore-projects-keeps-routing-to-the-previous-account
locale: pt
kiStatus: Backlog
internalReference: 1466415
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um domínio personalizado é adicionado a um projeto FastStore no WebOps e implantado em produção, um mapeamento de domínio para conta é criado na infraestrutura de hospedagem. Remover o domínio desse projeto no WebOps não exclui esse mapeamento. Se o mesmo domínio for adicionado a um projeto FastStore de uma conta diferente e implantado, o mapeamento existente é mantido em vez de ser reatribuído.

Como resultado, o domínio continua servindo a loja virtual do primeiro projeto, embora as configurações do WebOps, os hosts do Gerenciador de Licenças, o DNS e o arquivo `discovery.config.js` do novo projeto estejam todos configurados corretamente. Reimplementar qualquer um dos projetos e limpar o cache da CDN não resolve o problema.

## Simulação

1. Considere dois projetos FastStore no WebOps, cada um vinculado a uma conta VTEX diferente (Conta A e Conta B).

2. No projeto da Conta A, acesse **WebOps > Configurações > Domínios**, adicione um domínio personalizado (por exemplo, `store.example.com`) e implante em produção.
3. Remova `store.example.com` do projeto da Conta A.
4. Certifique-se de que `store.example.com` esteja registrado apenas como host no Gerenciador de Licenças da Conta B e, em seguida, adicione-o ao projeto da Conta B em **WebOps > Configurações > Domínios**.
5. Implante ambos os projetos em produção.
6. Acesse `https://store.example.com`.

**Comportamento esperado:** o domínio serve a loja virtual da Conta B.
**Comportamento real:** o domínio continua servindo a loja virtual da Conta A.

## Workaround

Não há solução alternativa disponível para o cliente. Entre em contato com o Suporte da VTEX para que o mapeamento de domínio seja reatribuído à conta correta.