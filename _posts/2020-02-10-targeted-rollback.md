---
layout: default
subnav: subnav_blog.md
title: Introducing Targeted Rollback
---
# Introducing Targeted Rollback

In our most [recent Liquibase community survey](https://www.liquibase.org/2020/01/top-10-findings-liquibase-survey.html), we learned that many Liquibase users are interested in a feature that allows them to rollback a specific change. Well, we have good news.

While it’s true that it is almost always a superior life choice to roll forward, sometimes life throws curveballs and it’s super handy to have a way to target a changeset that you would like to roll back and forget ever happened. And hey, you did your homework and know that this particular rollback won’t hurt anything else. The case may be rare, but when you need it, you need it. And that is why we are introducing Targeted Rollback, a powerful new feature that allows you to cherry-pick one changeset to undo.

With Liquibase 3.8.6, Community users can still undo changes in reverse order starting from the most recently deployed changeset while users with a Liquibase Pro license can target any specific changeset to roll back, leaving all the changesets that followed it untouched.

## How Rollbacks work in Liquibase Community
Below is a group of changesets labeled a through x, with x being the most recently deployed change. Let’s assume I want to roll back changeset b.

<img src="/blog/images/rollback_community_first.jpg" style="max-width:100%; height:auto;">

<img src="/blog/images/rollback_community_second.jpg" style="max-width:100%; height:auto;">

In order to undo **changeset b**, I have to roll back changesets x through c in reverse order. It’s a domino effect. 

<img src="/blog/images/rollback_community_last.jpg" style="max-width:100%; height:auto;">

## How Targeted Rollbacks work in Liquibase Pro

With Targeted Rollback, you can select the changeset you’d like to remove without rolling back any other changes that were deployed. It’s like a surgical strike. 

<img src="/blog/images/rollback_targeted_explosion.jpg" style="max-width:100%; height:auto;">

**Rollback** is the only official technique for altering your `DATABASECHANGELOG` table (the master table of changeset deployments which tracks which changesets have already been applied). If you need to make changes to this table, **Targeted Rollback** is an official and precise way to do it (and way better than manipulating that table by hand).

## Why Use Targeted Rollback?

Here’s an example of when a **Targeted Rollback** is extremely useful. It’s common for many developers to work on a lot of different tables and parts of a database schema that relate to different elements or areas of the business. If you need to rollback one Localization table schema change but have since deployed dozens of additional changesets to the Products and Users tables, it’s quite handy to target the bad change in the Localization table and just roll it back. **Targeted Rollback** leaves the unrelated changes to the Products and Users tables in place and removes the changeset record from the `DATABASECHANGELOG` table, too.

## RollbackOneChangeset Workflow

Here’s a general workflow a Liquibase Pro user would take to target a change to rollback:
1. Dave determines he needs to rollback a specific changeset, which was not the most recently deployed changeset.
2. Dave inspects the changelog to collect the id and author params from the specific changeset, as well as the file path of the changelog.
3. Dave considers the impact of the rollback, maybe chats with a fellow dev or two, or a DBA if there is one, and decides he understands and is comfortable with impacts of the rollback.
4. Dave enters the following in the command line:
``` liquibase <global parameters> rollbackOneChangesetSQL <command parameters>``` 
5. Dave inspects the rollback SQL presented in STDOUT and acknowledges this is where life has led, and that's fine.
6. Dave enters the following in the command line:
``` liquibase <global parameters> rollbackOneChangeset <command parameters> --force``` 
7. Dave inspects the STDOUT info and then performs whatever dev/test/UAT tasks he has planned to prove to himself and his team that Targeted Rollback was good and useful and well worth paying for.
8. Next, Dave has to account for the newly rolled back changes in downstream environments.
9. Dave needs to decide whether or not he wants to remove the changeset from the changelog file. 

## Be careful out there!

Much like git cherry-pick or git rebase, targeted rollback is powerful. Remember that with great rollback power comes great database responsibility. **Targeted Rollback** is a powerfully easy way to really mess up objects in your database, so it is important to look for potential unintended consequences, which is why it is a great idea to always execute `rollbackOneChangesetSQL` before `rollbackOneChangeset`. 

### Some guardrails
Since targeted rollbacks, like all rollbacks, can be detrimental when misused, we added some guardrails. 
The `--force` flag is required to execute the `rollbackOneChangeset` command, serving as a clear indicator that you wish to proceed. Think of this as a safety on a firearm. Just pulling the trigger isn't enough, you have to disable the safety and then pull the trigger.

The helper command, `rollbackonechangesetSQL` allows you to inspect the rollback SQL before you execute rollbackOneChangeset. We’ve documented this in the suggested workflow so that it’s easier to remember to use this helper command.

## FAQs

**What if I want to roll back three specific changesets that aren’t grouped by a tag?** 
You would need to run rollbackOneChangeset three times. You could not pass a file of three specially formatted changeset identifiers or three sets of changeset params, etc.

**Can I delete or comment out the changeset that I specify with the targeted rollback feature?**
No. We are not yet offering the capability to automatically delete or comment out changesets in this release. If you would like these removed so they never deploy again, or to hand-edit them to make changes for their next deployment, you can do so manually in the changelog file. 


## Try Targeted Rollbacks Out for Yourself!

[Download the latest version of Liquibase (3.8.6)](https://download.liquibase.org/download-community/) and [sign up for a free license key](https://download.liquibase.org/liquibase-pro-trial-request-form/). Once you sign up, you’ll get a Pro license key immediately. Once you’ve set up the key, [check out our documentation](/documentation/rollbackonechangeset.html) for details on how the new targeted rollbacks work. Let us know if you run into any unexpected issues.
