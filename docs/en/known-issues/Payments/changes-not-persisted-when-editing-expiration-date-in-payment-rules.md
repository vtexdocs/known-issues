---
title: 'Changes not persisted when editing Expiration date in payment rules'
slug: changes-not-persisted-when-editing-expiration-date-in-payment-rules
status: PUBLISHED
createdAt: 2025-12-16T20:09:44.547Z
updatedAt: 2025-12-16T20:09:44.547Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: changes-not-persisted-when-editing-expiration-date-in-payment-rules
locale: en
kiStatus: Backlog
internalReference: 1338791
---

## Summary


When editing the Expiration date field (API property: endDate) of a payment rule in the Admin, the interface shows "Saved successfully," but the Ul keeps showing the previous date; the adjustment does not persist visually or functionally.


#### Simulation



Intermittent reproduction.

- ﻿﻿Navigate to Admin > PCI Gateway > Payment rules, and open the specific rule
- ﻿﻿Add a special condition: Expiration Date (internal test with 31/12/2025: GMT -3)
- ﻿﻿Click Save and confirm the Ul shows "Saved successfully."
- ﻿﻿Change the date to another one and save it again. (internal test with 31/12/2026: GMT -3)
- ﻿﻿Observe the rule details; the Expiration date doesn't show the updated value. (internal test with 31/12/2025: GMT -3)


#### Workaround



Retry saving the Expiration date: A subsequent attempt to save the Expiration date tends to reflect correctly (worked in internal tests after a failure).


