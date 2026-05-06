---
title: 'A etapa de envio com código postal não funciona para alguns países (Emirados Árabes Unidos)'
slug: a-etapa-de-envio-com-codigo-postal-nao-funciona-para-alguns-paises-emirados-arabes-unidos
status: PUBLISHED
createdAt: 2020-12-02T16:45:46.000Z
updatedAt: 2024-07-16T13:09:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates
locale: pt
kiStatus: Fixed
internalReference: 312132
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os Emirados Árabes Unidos não possuem códigos postais, e a interface de checkout aceita apenas dois tipos de entrada: código postal ou coordenadas geográficas.

Se a loja configurar a entrada de código postal, ao chegar à etapa de envio no checkout, a opção de país “Emirados Árabes Unidos” não funcionará corretamente – e possivelmente outras opções também.

Não é possível adicionar nada ao componente.

 ![](https://vtexhelp.zendesk.com/attachments/token/EZeQLV41SRmxv7v9e0eUlzFqA/?name=inline358044226.png)

## Simulação

- Vá para a etapa de envio;
- Nenhum campo para adicionar o código postal é exibido;

## Workaround

Adicione qualquer código postal fictício via API; os campos serão exibidos então, por exemplo, via console:

 vtexjs.checkout.sendAttachment('shippingData', { "selectedAddresses": [{ addressType: "residential", country: "ARE", postalCode: "0" }]}).done(r=>{ console.log(r)})

Resultado:
 ![](https://vtexhelp.zendesk.com/attachments/token/cqRElEMi1ukYyP7WR8UjRilyn/?name=image.png)


## **Solução alternativa**
Para coordenadas geográficas, é possível fazer a transferência junto com a compra:
 ![](https://vtexhelp.zendesk.com/attachments/token/fGQtJOaturVNnARJIm9erMyEa/?name=image.png)