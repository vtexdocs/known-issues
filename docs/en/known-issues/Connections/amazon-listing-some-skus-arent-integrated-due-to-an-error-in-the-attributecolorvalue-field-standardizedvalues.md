---
title: "Amazon Listing Some SKUs aren't integrated due to an error in the attribute.\"color#?.value\" field 'standardized_values'"
slug: amazon-listing-some-skus-arent-integrated-due-to-an-error-in-the-attributecolorvalue-field-standardizedvalues
status: PUBLISHED
createdAt: 2026-02-06T16:51:01.389Z
updatedAt: 2026-02-06T16:51:01.389Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-some-skus-arent-integrated-due-to-an-error-in-the-attributecolorvalue-field-standardizedvalues
locale: en
kiStatus: Backlog
internalReference: 1361514
---

## Summary


Cannot list some SKUs via VTEX Amazon Listing because Amazon rejects the payload when the required attribute “Cor” (Color) is not populated with a valid standardized value. The visible symptom is the Amazon error: “With the data in '[color#?.value]', the 'standardized_values' field for the 'Cor' attribute does not have enough values. The minimum required is '1' value(s). Provide a valid value.” This affects SKUs using an Amazon category template where the “Cor” field is required but not exposed/mapped, blocking item publication and sales on Amazon.


#### Simulation



- Amazon Listing app configured; Amazon category template applied to the affected catalog where Color is required; account Electrolux (example).
-

Steps: 1) Open VTEX Admin > Amazon Listing and select one of the affected SKUs (e.g., 310122598).



2) Attempt to publish/send the SKU to Amazon.

3) Observe the error returned by Amazon indicating the standardized_values for attribute “Cor” (Color) is missing at least one valid value.

4) Even after trying to adjust the SKU by mapping “Branco” to “White”, the same error persists, suggesting the Color field is not being correctly exposed or sent by the applied category template



    "Com base nos dados em '[color#?.value]', o campo 'standardized_values' para o atributo 'Cor' não tem valores suficientes. O mínimo necessário é de '1' valor(es). Forneça um valor válido."
 ![](https://vtexhelp.zendesk.com/attachments/token/3OwHN97s1AjZfEdOA4Jyy1jlC/?name=image.png)


#### Workaround



- Ensure the Amazon category template in VTEX exposes the “Cor/Color” attribute for the selected category and that it is editable in the Listing UI.
- Map VTEX catalog color values to one of Amazon’s accepted standardized color values (e.g., “Branco” → “White”) and republish the SKU.
- Try changing categories and see if the error persists.
- If the error persists after correctly mapping, escalate to Marketplace to verify the category template exposure and payload mapping for the Color attribute. Include SKU IDs and the Amazon category template in use.


