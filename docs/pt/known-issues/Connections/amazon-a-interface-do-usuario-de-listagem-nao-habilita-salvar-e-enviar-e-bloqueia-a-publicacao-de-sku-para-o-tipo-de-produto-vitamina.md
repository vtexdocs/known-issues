---
title: 'Amazon A interface do usuário de listagem não habilita "Salvar e enviar" e bloqueia a publicação de SKU para o tipo de produto VITAMINA'
slug: amazon-a-interface-do-usuario-de-listagem-nao-habilita-salvar-e-enviar-e-bloqueia-a-publicacao-de-sku-para-o-tipo-de-produto-vitamina
status: PUBLISHED
createdAt: 2026-01-06T19:09:58.221Z
updatedAt: 2026-01-06T19:09:58.221Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-ui-doesnt-enable-save-and-send-and-blocks-sku-publication-for-vitamin-producttype
locale: pt
kiStatus: Backlog
internalReference: 1347282
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Na interface do usuário de listagem da Amazon, as listagens aparecem como "incompletas" e a ação "Salvar e enviar" não publica a SKU, mesmo quando todos os campos parecem estar preenchidos. O sintoma visível é que o botão não está ativado ou, quando clicado, nada é enviado, sem que nenhum erro de validação seja mostrado. O problema foi identificado ao publicar produtos com productType "VITAMIN", em que o front-end não está enviando alguns atributos dentro de nutritional_info corretamente para o back-end/Amazon, o que impede a criação/publicação do feed.
## Simulação


Pré-requisitos:

- Conta com integração com a Amazon ativada
- Um produto mapeado para a Amazon com productType definido como VITAMIN e atributos nutricionais preenchidos.

Etapas:
1) Acesse Admin > Amazon Listing e abra a listagem (exemplo: /admin/amazon-listing/2564).
2) Preencha todos os campos obrigatórios na interface do usuário, incluindo os campos nutricionais aplicáveis à VITAMINA.
3) Tente clicar em "Save and Send" (Salvar e enviar).
4) Observe que:

- A interface do usuário pode manter o status como "Cadastro incompleto" (incompleto), e/ou
- O botão "Save and Send" (Salvar e enviar) não está habilitado ou, se habilitado e clicado, nenhuma publicação ocorre e nenhum erro explícito é mostrado.
5) A análise de engenharia indica que o front-end não está enviando alguns atributos nutritional_info corretamente (observado apenas com productType VITAMIN), o que bloqueia a publicação no envio.

 ![](https://vtexhelp.zendesk.com/attachments/token/LoTVimTHn1TdZjtptWXaBAjE4/?name=image.png
## Workaround


N/A


