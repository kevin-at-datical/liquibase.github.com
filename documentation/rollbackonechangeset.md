---
layout: default
title: Docs | rollbackOneChangeSet Command 
---

# Liquibase Commands: `rollbackOneChangeSet`
The `rollbackOneChangeSet` command reverts (rolls back) one non-sequential *changeSet* made during a previous change to your database. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneChangeSet` command is typically used when you want to undo a change made to your database and revert it to a previous state without affecting the other changes made to your database. 

While the `rollback` command reverts all *changeSets* most recently deployed to your database, the `rollbackOneChangeSet` command allows you to target (cherry-pick) a specific *changeSet* without impacting the others.

<div align="center"><img src="/images/documentation/rollback_pro-targeted.jpg" width="450px" alt="Image example of targeted rollback" /></div>
<br />
The image above shows *changeSets* A through I, with *changeSet* I being the most recently deployed. As you can see, the `rollbackOneChangeSet` command allows you to target *changeSet* B and revert it to its previous state without impacting the others.

## The Impacts of `rollbackOneChangeSet`
Like any cherry-picking tool, using the `rollbackOneChangeSet` command comes with risks which may be unintended. 

**Please look for potential unintended consequences *before* using this command**. 

The `rollbackOnechangeSetSql` command **(Coming Soon)** allows you to inspect the rollback SQL and search for any potential mistakes before you executing `rollbackOneChangeset`.

Because the use of `rollbackOneChangeSet` comes with a risk of unintended consequences, it also requires a `--force` flag to indicate that you intend to run the command.

## Running the `rollbackOneChangeSet` Command
Before running the `rollbackOneChangeSet` command, gather the following information from your *changeLog* or DATABASECHANGELOGTABLE:
- The Author ID of the *changeSet you want to revert*
- The *changeSet* ID of the *changeSet you want to revert*
- The File Name (*changeSet* path) of the *changeSet you want to revert*

Then run the `rollbackOneChangeSet` command, with your information :

{% highlight text %}

liquibase --changeLogFile=postgres_lbpro_master_changelog.xml rollbackOneChangeSet --changeSetAuthor="Liquibase Pro User" --changeSetId="1::createProc-proschema" --changeSetPath=postgres_lbpro_master_changelog.xml --force

{% endhighlight %}

## Output
When successful, the `rollbackOneChangeSet` command produces the following output

{% highlight text %}

Rolling Back Changeset:third_changelog.xml::1::logicalFilePath::changeset::AuthorName (generated)
Liquibase: Rollback has been successful.

{% endhighlight %}


