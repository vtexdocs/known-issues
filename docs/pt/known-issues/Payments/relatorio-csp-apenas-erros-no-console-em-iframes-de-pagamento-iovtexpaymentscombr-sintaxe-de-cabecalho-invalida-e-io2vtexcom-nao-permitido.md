---
title: 'Relatório CSP - Apenas erros no console em iframes de pagamento io.vtexpayments.com.br (sintaxe de cabeçalho inválida e io2.vtex.com não permitido)'
slug: relatorio-csp-apenas-erros-no-console-em-iframes-de-pagamento-iovtexpaymentscombr-sintaxe-de-cabecalho-invalida-e-io2vtexcom-nao-permitido
status: PUBLISHED
createdAt: 2024-04-16T13:30:23.000Z
updatedAt: 2026-10-16T23:34:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: csp-reportonly-console-errors-in-iovtexpaymentscombr-payment-iframes-invalid-header-syntax-and-io2vtexcom-not-allowed
locale: pt
kiStatus: Backlog
internalReference: 1017370
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os componentes de pagamento carregados no checkout de `io.vtexpayments.com.br` (como o formulário de cartão de crédito) retornam um cabeçalho `Content-Security-Policy-Report-Only` que gera mensagens no console do navegador. A política é somente para relatórios, portanto nada é bloqueado e o fluxo de compra não é afetado.

Existem dois cenários:

1. Scripts/estilos embutidos e chamadas ao host `io2.vtex.com` não são permitidos na política, portanto, os logs do navegador exibem mensagens como:

[Somente relatório] Recusado executar script embutido porque viola a seguinte diretiva da Política de Segurança de Conteúdo: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". Para habilitar a execução inline, é necessário usar a palavra-chave 'unsafe-inline', um hash ('sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4=') ou um nonce ('nonce-...').

2. O valor do cabeçalho inclui o próprio nome do cabeçalho como prefixo (`content-security-policy-report-only: default-src ...`), portanto, o navegador registra:

O nome da diretiva Content-Security-Policy 'content-security-policy-report-only:' contém um ou mais caracteres inválidos. Somente caracteres alfanuméricos ASCII ou hífens '-' são permitidos em nomes de diretivas.

## Simulação

1. Acesse a página de finalização de compra da loja e selecione um método de pagamento com cartão de crédito;

2. Abra o console do navegador e verifique as mensagens acima;
3. Opcionalmente, abra `https://io.vtexpayments.com.br/card-ui/1.42.10/index.html`, vá para Ferramentas de Desenvolvedor > Rede > `index.html` > Cabeçalhos de Resposta e verifique se o valor de `Content-Security-Policy-Report-Only` começa com `content-security-policy-report-only:`.

## Workaround

Não existe solução alternativa no lado da loja, visto que o cabeçalho é definido pela VTEX. As mensagens não afetam o fluxo de compra. Caso apareçam em ferramentas de monitoramento (por exemplo, Microsoft Clarity), podem ser filtradas dos relatórios de erros.