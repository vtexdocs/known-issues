---
title: Tempo limite ao editar especificações
slug: tempo-limite-ao-editar-especificacoes
status: PUBLISHED
createdAt: 2025-10-02T19:54:37.704Z
updatedAt: 2025-10-02T19:54:37.704Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-when-editing-specifications
locale: pt
kiStatus: Fixed
internalReference: 1192667
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Espera-se que o usuário possa editar especificações pela API e pelo administrador sem erros. No entanto, ao editar uma especificação de produto na estrutura da categoria, uma conta com um grande volume de produtos no catálogo pode sofrer eventos de tempo limite durante o processo de edição, impossibilitando a alteração dessas informações.
## Simulação



1. Acesse as especificações em uma categoria específica;
2. Tentativa de salvar uma alteração (por meio da interface do usuário ou da API);
3. Ver um erro de tempo limite na resposta (UI ou API
## Workaround


Entre em contato com o suporte da VTEX para editar as informações.



