# VTEX Known Issues

Each time someone from VTEX Product Support creates or updates a public Known Issue on Zendesk, this triggers an integration that automatically translates the content to Spanish and Portuguese and then publishes or updates it on Help Center. Check the diagram below for an overview of how the integration flow works.

![ki-flow](https://github.com/vtexdocs/known-issues/blob/main/public/images/ki-flow.png)

For each change saved on Zendesk, a Slack thread is created on `#known-issues-feed`. There, you can keep track of the publication status. For more details on this process, check the **Dos & Don'ts** section.

## Creating a Known Issue

When the Product Support team identifies an issue, you can create a Known Issue attached to it. To do so, click on **Product > KI > Register a New Known Issue**.

![register ki](https://github.com/vtexdocs/known-issues/blob/main/public/images/register-ki.png)

For public Known Issues that should be available on Help Center, select `Yes` on the **Is public?** field, as illustrated below. This will automatically add the `is_public_yes` tag to the Known Issue.

![known-issue-type](https://github.com/vtexdocs/known-issues/blob/main/public/images/known-issue-type.png)

Tickets linked to the Known Issue must have its **Type** set as an `Incident`. You must also select the Known Issue ID in the **Linked problem** field and the **Incident Type** as `Regular`.

![ki-is-public](https://github.com/vtexdocs/known-issues/blob/main/public/images/ki-is-public.png)

### Template

Once you create a Known Issue on Zendesk, the following template will appear:

``` md
[KI] Insert title 

## Summary
Describe the bug concisely.


## Simulation
Describe here what steps are needed to reproduce this behavior.


## Workaround
Is there a workaround for this bug? If yes, describe it here.


PS.: Add images and attachments to reinforce your description

------------------------------------------------------------------------------

## Internal Notes

Include any additional information that should not be public but could be relevant for VTEX staff.
Add here images and attachments to reinforce your description, as this block is internal, enjoy!
```

You must fill it in with information about the Known Issue, replacing the placeholder text in each section.

>❌ Don’t change or remove the template's titles and formatting. If this happens, the integration won’t recognize the pattern properly, so the Known Issue might be published with errors or not be published at all.

## ✅ Dos

- Always write the Known Issue in English. If possible, run your text through a spell checking tool before publication, such as [Grammarly](https://www.grammarly.com/).
- Always follow [markdown syntax](https://www.markdownguide.org/cheat-sheet/). You can use tools like [Markdown Live Preview](https://markdownlivepreview.com/) to test the final result.
- Write detailed descriptions to the Known Issue fields. That way, the Known Issue will be more understandable for the users.
- Check #known-issues-feed on Slack each time you create or update a public Known Issue, to see if the publication worked properly.
- Add internal comments in the Internal Notes section, if necessary. The content in this section (more specifically, below the horizontal bar) will not be published on Help Center.
- Whenever possible, make the Known Issue public. Make sure it doesn’t have sensitive information.

## ❌ Don'ts

- Don’t change or remove the template's section titles and formatting. When writing a Known Issue, just edit the text below each section title with the Known Issue information.
- Don't leave a Known Issue field blank, even when there is no Simulation or Workaround. 
- Don’t remove the horizontal bar before the Internal Notes section.
- Don’t write internal comments outside the Internal Notes section.
- Don’t use confidential information or screenshots from VTEX clients’ stores on your Known Issue. You can only include sensitive data from our clients on the Internal Notes section.
- Don’t delete **[KI]** from the title.
