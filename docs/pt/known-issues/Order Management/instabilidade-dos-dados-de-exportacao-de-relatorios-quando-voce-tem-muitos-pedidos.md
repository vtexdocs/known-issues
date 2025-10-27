---
title: 'Instabilidade dos dados de exportação de relatórios quando você tem muitos pedidos!'
slug: instabilidade-dos-dados-de-exportacao-de-relatorios-quando-voce-tem-muitos-pedidos
status: PUBLISHED
createdAt: 2025-08-25T14:05:17.154Z
updatedAt: 2025-08-25T14:05:17.154Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: report-export-data-instability-when-you-have-many-orders
locale: pt
kiStatus: Backlog
internalReference: 1280864
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Este KI descreve um cenário em que a exportação de relatórios por meio da interface do usuário do administrador pode resultar em dados de relatório instáveis quando a conta tem muitos pedidos.
Esse problema é intermitente; às vezes o relatório é bem-sucedido, às vezes retorna linhas vazias ou pode conter linhas com erros.
Geralmente, o relatório é bem-sucedido após a terceira tentativa.
No entanto, esse número de tentativas pode gerar um código de status de 429 no SOLRs (banco de dados), o que pode levar a mais inconsistências!
## Simulação


Como o cenário é intermitente, não podemos simulá-lo!
No entanto, sugerimos reduzir os filtros para melhorar e reduzir o número na lista.


## Workaround


Para esse cenário, a solução alternativa é esperar antes de tentar novamente. Isso evita que o sistema apresente o código de status 429.



