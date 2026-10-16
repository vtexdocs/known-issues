---
title: 'CSP Report-Only console errors in io.vtexpayments.com.br payment iframes (invalid header syntax and io2.vtex.com not allowed)'
slug: csp-reportonly-console-errors-in-iovtexpaymentscombr-payment-iframes-invalid-header-syntax-and-io2vtexcom-not-allowed
status: PUBLISHED
createdAt: 2024-04-16T13:30:23.000Z
updatedAt: 2026-10-16T23:34:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: csp-reportonly-console-errors-in-iovtexpaymentscombr-payment-iframes-invalid-header-syntax-and-io2vtexcom-not-allowed
locale: en
kiStatus: Backlog
internalReference: 1017370
---

## Summary

The payment components loaded in checkout from `io.vtexpayments.com.br` (such as the credit card form) return a `Content-Security-Policy-Report-Only` header that generates messages in the browser console. The policy is report-only, so nothing is blocked and the purchase flow is not affected.
There are two scenarios:

1. Inline scripts/styles and calls to the host `io2.vtex.com` are not allowed in the policy, so the browser logs report messages such as:

```
[Report Only] Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". Either the 'unsafe-inline' keyword, a hash ('sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4='), or a nonce ('nonce-...') is required to enable inline execution.
```



  2. The header value includes the header name itself as a prefix (`content-security-policy-report-only: default-src ...`), so the browser logs:

```
The Content-Security-Policy directive name 'content-security-policy-report-only:' contains one or more invalid characters. Only ASCII alphanumeric characters or dashes '-' are allowed in directive names.
```

## Simulation

1. Go to the store checkout and select a credit card payment method;
2. Open the browser console and check the messages above;
3. Optionally, open `https://io.vtexpayments.com.br/card-ui/1.42.10/index.html`, go to DevTools > Network > `index.html` > Response Headers, and check that the `Content-Security-Policy-Report-Only` value starts with `content-security-policy-report-only:`.

## Workaround

There is no workaround on the store side, since the header is set by VTEX. The messages do not affect the purchase flow. If they appear in monitoring tools (e.g., Microsoft Clarity), they can be filtered out of the error reports.