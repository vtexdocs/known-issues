---
title: 'Erro ao aprovar SKUs que foram rejeitados ou analisados pela equipe de Qualidade de Ofertas'
slug: erro-ao-aprovar-skus-que-foram-rejeitados-ou-analisados-pela-equipe-de-qualidade-de-ofertas
status: PUBLISHED
createdAt: 2023-11-23T13:46:17.000Z
updatedAt: 2024-03-25T12:22:28.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: error-approving-skus-that-were-rejected-or-reviewed-by-offer-quality
locale: pt
kiStatus: Fixed
internalReference: 940998
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um SKU não cumpre as regras de qualidade de oferta criadas pelo Marketplace, ele vai diretamente para a "Guia de Revisão" ou "Guia de Rejeitados" dos SKUs recebidos.

No entanto, ao tentar aprovar o SKU, é exibida uma mensagem de erro: "Desculpe, ocorreu um erro no Catálogo. Tente novamente ou entre em contato com a VTEX se o problema persistir."

Isso ocorre porque o módulo Matcher não conseguiu preencher as informações do produto e do SKU após enviar o SKU para essas abas (você pode verificar isso usando as APIs):
 ![](https://vtexhelp.zendesk.com/attachments/token/0Dti3ak7twOpuVzvzntmPCGit/?name=image.png)

## Simulação

1. Crie uma regra opcional ou obrigatória na Qualidade da Oferta;
2. Aguarde até que um SKU seja reprovado pela regra e vá para a guia Revisão/Rejeitados;
3. Tente aprovar o SKU e receba uma mensagem de erro;
4. Verifique via API se o objeto de correspondências está preenchido como na imagem acima.

## Workaround

Aprove o SKU via API, passando manualmente as informações corretas do produto e do SKU.