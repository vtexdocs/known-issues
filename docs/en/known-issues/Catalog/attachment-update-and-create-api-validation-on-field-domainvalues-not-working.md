---
title: 'Attachment Update and Create API validation on field DomainValues not working'
slug: attachment-update-and-create-api-validation-on-field-domainvalues-not-working
status: PUBLISHED
createdAt: 2025-11-14T17:14:34.283Z
updatedAt: 2025-11-14T17:14:34.283Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachment-update-and-create-api-validation-on-field-domainvalues-not-working
locale: en
kiStatus: Backlog
internalReference: 751091
---

## Summary


Via UI (directly on VTEX admin) is possible to create an attachment without the field **Permitted values** filled:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

However, via API there is this validation for this field:

    <Error> <Message>DomainValues in Domain at position 0 can not be null or empty value</Message></Error>


Meaning you can't create a attachment like this:

    { "Id": 6, "Name": "Test", "IsRequired": false, "IsActive": true, "Domains": [     {          "FieldName": "test",          "MaxCaracters": "20",          "DomainValues": ""      }  ]}




#### Simulation



1. Use the following API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/attachment
2. Try to leave it empty the field DomainValues
3. Check that the error message mentioned above is returned.


#### Workaround


Create the attachment via Admin.



