---
layout: default
title: Docs | rollbackOneChangeSet Command 
---

# Liquibase Commands: `rollbackOneChangeSet`
The `rollbackOneChangeSet` command reverts (rolls back) one non-sequential *changeSet* made during a previous commit to your database. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneChangeSet` command is typically used when you want to undo a change made to your database and revert it to a previous state without affecting the other changes made in the same commit. 

While the `rollback` command reverts all changes made in a previous commit, The `rollbackOneChangeSet` command allows you to target (cherry-pick) a specific *changeSet* without impacting the rest of changes made in the same commit.

## The Impacts of `rollbackOneChangeSet`
Like any cherry-picking tool, using the `rollbackOneChangeSet` command comes with risks which may be unintended. 

**Please look for potential unintended consequences *before* using this command**. 

The `rollbackOnechangeSetSql` command **(Coming Soon)** allows you to inspect the rollback SQL and search for any potential mistakes before you executing `rollbackOneChangeset`.

`rollbackOneChangeSet` also requires the use of a `--force` flag. To indicate that you intend to use this command.

## Running the `rollbackOneChangeSet` Command
Before running the `rollbackOneChangeSet` command, gather the following information from your DATABASECHANGELOGTABLE:
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


