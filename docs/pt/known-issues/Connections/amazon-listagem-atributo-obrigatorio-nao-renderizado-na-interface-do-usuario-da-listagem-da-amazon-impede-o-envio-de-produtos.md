---
title: 'Amazon Listagem Atributo obrigatório não renderizado na interface do usuário da listagem da Amazon impede o envio de produtos'
slug: amazon-listagem-atributo-obrigatorio-nao-renderizado-na-interface-do-usuario-da-listagem-da-amazon-impede-o-envio-de-produtos
status: PUBLISHED
createdAt: 2025-10-14T14:51:44.056Z
updatedAt: 2025-10-14T14:51:44.056Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-required-attribute-not-rendered-in-amazon-listing-ui-prevents-product-submission
locale: pt
kiStatus: Backlog
internalReference: 1307340
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar enviar um produto para a Amazon por meio do administrador de listagem da Amazon, a interface do usuário mostra "Revise alguns atributos para que o cadastro seja enviado com sucesso", mas não renderiza o campo de atributo obrigatório, bloqueando o envio mesmo quando todos os campos visíveis são preenchidos. O sintoma visível é um erro de validação persistente e, em alguns casos, um erro genérico subsequente vinculado a um 500. Os usuários afetados são comerciantes que usam a interface de usuário de listagem da Amazon, onde a validação de back-end solicita um tipo de atributo que o front-end não pode renderizar (por exemplo, "cor"), de modo que o comerciante não pode concluir o mapeamento e prosseguir.
## Simulação


(exemplos citados por PS: /admin/amazon-listing/skuid


1. Tentativa de prosseguir com o envio; observe a mensagem solicitando a revisão dos atributos, embora nenhum novo campo obrigatório esteja visível na interface do usuário.
2. Em alguns casos, aparece um erro genérico da interface do usuário; as evidências indicaram um 500 relacionado à validação do esquema quando um URL de imagem ou carga útil de atributo está malformado, mas o problema principal é que a interface do usuário não está renderizando um atributo obrigatório (por exemplo, "cor").
3.

A engenharia validou que a resposta do backend inclui um tipo de campo que o frontend não sabe como renderizar, de modo que o comerciante não pode preenchê-lo, causando o bloqueio.



 ![](https://vtexhelp.zendesk.com/attachments/token/J2hAuu3IyvsJ9roGagvoaLGLT/?name=image.png
## Workaround


N/A



