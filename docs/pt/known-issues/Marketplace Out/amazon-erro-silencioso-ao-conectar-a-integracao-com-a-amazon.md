---
title: 'Amazon Erro silencioso ao conectar a integração com a Amazon'
slug: amazon-erro-silencioso-ao-conectar-a-integracao-com-a-amazon
status: PUBLISHED
createdAt: 2026-08-31T18:41:28.000Z
updatedAt: 2026-08-31T18:41:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-silent-error-when-connecting-amazon-integration
locale: pt
kiStatus: Backlog
internalReference: 1454182
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um vendedor tenta configurar a integração nativa da Amazon, mas não preenche os campos de dados obrigatórios do FBA Classic, ocorre um erro silencioso. Nenhuma mensagem de erro é exibida ao usuário. Após clicar em "Conectar", a página carrega indefinidamente sem nenhuma solicitação de rede, impedindo o acesso à autorização do Amazon Seller Central.

## Simulação

1. Acesse o Painel de Administração da VTEX → Marketplace → Integrações Amazon
2. Abra o formulário de configuração da integração nativa (componente `NativeMkpConfig`)
3. Preencha os campos de configuração básicos
4. Ative a opção `Usar FBA Classic`
5. Deixe o campo `Dock ID` vazio (os outros campos de dados do FBA Classic permanecem vazios)
6. Clique em "Conectar"

**Resultado:** A página carrega indefinidamente sem mensagem de erro. Falha silenciosa — nenhuma solicitação de rede é acionada.

## Workaround

Preencha todos os campos de dados de acordo com os recursos habilitados na Amazon:
Se o erro persistir após preencher todos os dados corretamente de acordo com sua configuração da Amazon, abra um chamado de suporte.