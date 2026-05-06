---
title: 'SKUs recebidos: a função de exportação não está funcionando para administradores em outros idiomas (apenas PT, EN, ES)'
slug: skus-recebidos-a-funcao-de-exportacao-nao-esta-funcionando-para-administradores-em-outros-idiomas-apenas-pt-en-es
status: PUBLISHED
createdAt: 2022-09-29T14:22:30.000Z
updatedAt: 2023-04-28T12:18:16.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-export-function-not-working-for-admins-in-other-languages-only-pt-en-es
locale: pt
kiStatus: Fixed
internalReference: 668122
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A função de exportação para gerar uma planilha com os SKUs pendentes, aprovados ou rejeitados por vendedor não está funcionando quando o idioma do administrador está definido para qualquer outro idioma que não seja PT, EN ou ES.

A mensagem de erro exibida é genérica. Um exemplo de mensagem em francês é:
`Une erreur s’est produite lors de l’exportation de la feuille, veuillez réessayer.`

## Simulação

1. Defina o idioma do administrador para um idioma diferente de PT, EN ou ES;
2. Acesse o módulo “SKUs recebidos”;
3. Selecione um vendedor e exporte os SKUs na área de pendentes, aprovados ou rejeitados;
4. Verifique se uma mensagem de erro genérica é exibida.

## Workaround

Altere o idioma do administrador para PT, EN ou ES e exporte a planilha.