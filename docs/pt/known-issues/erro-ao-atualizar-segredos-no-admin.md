---
title: Erro ao atualizar segredos no Admin
slug: erro-ao-atualizar-segredos-no-admin
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: error-when-updating-secrets-on-the-admin
locale: pt
kiStatus: Fixed
internalReference: 1233661
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar o Webops e tentar editar um segredo que você já adicionou ao recurso da interface do usuário, você pode receber o erro:

    "message": "Falha ao atualizar o segredo no Vercel. Atualização do AWS bloqueada. Erro: Ocorreu um erro ao atualizar o segredo na Vercel. Mais informações: Variável de ambiente com a chave \"\" não encontrada"

## Simulação



- Se estiver usando Webops, tente adicionar um novo segredo na interface do usuário;
- Clique para atualizar o segredo;
- Você receberá um erro interno do servidor 500 com a mensagem acima
## Workaround


N/A



