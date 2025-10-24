---
title: 'Amazon Listing Required attribute not rendered in Amazon Listing UI prevents product submission'
slug: amazon-listing-required-attribute-not-rendered-in-amazon-listing-ui-prevents-product-submission
status: PUBLISHED
createdAt: 2025-10-14T14:51:49.523Z
updatedAt: 2025-10-14T14:51:49.523Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-required-attribute-not-rendered-in-amazon-listing-ui-prevents-product-submission
locale: en
kiStatus: Backlog
internalReference: 1307340
---

## Summary


When attempting to send a product to Amazon via the Amazon Listing admin, the UI shows “Revise alguns atributos para que o cadastro seja enviado com sucesso” but does not render the required attribute field, blocking submission even when all visible fields are filled. The visible symptom is a persistent validation error and, in some cases, a subsequent generic error tied to a 500. Affected users are merchants using the Amazon Listing UI where backend validation requests an attribute type the frontend cannot render (e.g., “color”), so the merchant cannot complete the mapping and proceed.


#### Simulation


(examples cited by PS: /admin/amazon-listing/skuid


1. Attempt to proceed with submission; observe the message asking to revise attributes even though no new required fields are visible in the UI.
2. In some cases, a generic UI error appears; evidence indicated a 500 related to schema validation when an image URL or attribute payload is malformed, but the core issue is the UI not rendering a required attribute (e.g., “color”).
3.

Engineering validated that the backend response includes a field type the frontend doesn't know how to render, so the merchant cannot fill it, causing the block.



 ![](https://vtexhelp.zendesk.com/attachments/token/J2hAuu3IyvsJ9roGagvoaLGLT/?name=image.png)


#### Workaround


N/A



