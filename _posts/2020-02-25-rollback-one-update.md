---
layout: default
subnav: subnav_blog.md
title: Targeted Rollback - One Update
---
# Targeted Rollback One Update

We recently rolled out [Targeted Rollback](/2020/02/targeted-rollback.html) in Liquibase 3.8.6 for rolling back one specific changeSet. Now, we’re very happy to announce Liquibase 3.8.7 for rolling back a specific update. 

Our most recent [Liquibase community survey](/2020/01/top-10-findings-liquibase-survey.html) revealed that many Liquibase users are interested in advanced rollback features that allow greater control over selecting the updates that they would like to roll back. The latest command, `rollbackOneUpdate` makes Liquibase Pro’s rollback powers even greater. 

It’s important to state that it’s almost always a better idea to roll forward. But sometimes you need to roll back and it’s extremely handy to be able to target the exact update you need to remove without rolling back everything that came after it. That’s why we are adding on to our **Targeted Rollback** powers, allowing users to cherry-pick a whole set of changes to undo with `rollbackOneUpdate` in addition to our previous release that introduced the ability to `rollbackOnechangeSet`. 

With Liquibase 3.8.7, Community users can still undo changes in reverse order starting from the most recently deployed changeset while users with a Liquibase Pro license can target any specific changeset or update to roll back, leaving all the changesets and updates that followed it untouched.

## How Targeted Rollbacks work in Liquibase Pro
With Targeted Rollback, you can select either the changeset or update you’d like to remove without rolling back any other changes that were deployed. 

Here's how rollbackOnechangeSet works:
<img src="/blog/images/rollback_pro-targeted-small.jpg" style="max-width:100%; height:auto;">

Here's how rollbackOneUpdate works:
<img src="/blog/images/rollback_pro-target-one-update.jpg" style="max-width:100%; height:auto;">

Rollback is also the only official technique for altering your DATABASECHANGELOG table (the master table of changeset deployments which tracks which changesets have already been applied). If you need to make changes to this table, Targeted Rollback is an official and precise way to do it (and way better than manipulating that table by hand).

## RollbackOneUpdate Workflow
Here’s a general workflow a Liquibase Pro user would take to target a set of changes in an update they would like to rollback:
1. Danielle determines she needs to rollback all of the changesets in the Dev environment from a previous deployment. 
2. Danielle inspects the changelog table using the [history command](/documentation/history.html) to look up the deploymentID of the changesets she wants to roll back.
3. Danielle checks to make sure all of the changesets have rollback SQL associated with them by running the following command on the command line:
``` liquibase <global parameters> rollbackOneUpdateSQL --deploymentID=deploymentID``` 
5. Danielle inspects the rollback SQL presented in STDOUT and sees that the rollback SQL looks correct.
6. Danielle enters the following in the command line:
``` liquibase <global parameters> rollbackOneUpdate --deploymentID=deploymentID --force``` 
7. Danielle inspects the STDOUT info and then performs whatever dev/test/UAT tasks she has planned to prove to herself and her team that Targeted Rollback was good and useful and worth every penny.
8. Next, Danielle has to account for the newly rolled back changes in downstream environments.

### Be careful out there!
Targeted Rollback is powerful. Remember that with great rollback power comes great database responsibility. Targeted Rollback is a powerfully easy way to really mess up objects in your database, so it is important to look for potential unintended consequences, which is why it is a great idea to always execute `rollbackOneUpdateSQL` before `rollbackOneUpdate`. 

### Some guardrails
Since targeted rollbacks, like all rollbacks, can be detrimental when misused, we added some guardrails. 
The `--force` flag is required to execute the `rollbackOneUpdate` command, serving as a clear indicator that you wish to proceed. Think of this as a safety on a firearm. Just pulling the trigger isn't enough, you have to disable the safety and then pull the trigger.

The helper command, `rollbackOneUpdateSQL` allows you to preview and inspect the rollback SQL before you execute `rollbackOneUpdate`. We’ve documented this in the suggested workflow so that it’s easier to remember to use this helper command.

## Try Targeted Rollback Out for Yourself!
Download the latest version of Liquibase (3.8.7) and [sign up for a free license key](https://download.liquibase.org/liquibase-pro-trial-request-form/). A Pro license key sent to you immediately. Once you’ve set up the key, check out our documentation for details on how the new targeted rollbacks work. Let us know if you run into any unexpected issues.
