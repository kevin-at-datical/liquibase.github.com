---
layout: default
title: Docs | rollbackOneChangeSet Command 
---

# Liquibase Commands: `rollbackOneChangeSet`
<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/1AH5SKuSyRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br />

The `rollbackOneChangeSet` command reverts (rolls back) one non-sequential *changeSet* made during a previous change to your database. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneChangeSet` command is typically used when you want to undo a change made to your database and revert it to a previous state without affecting any other changes made to your database. 

While the `rollback` command reverts all *changeSets* deployed sequentially to a specified point by using `rollbackDate`, `rollbackCount`, or `rollback <tag_name>`, the `rollbackOneChangeSet` command allows you to target a specific *changeSet* without impacting *changeSets* that came before or after it.

<div align="center"><img src="/images/documentation/rollback_pro-targeted.jpg" width="450px" alt="Image example of targeted rollback" /></div>
<br />

The image above shows *changeSets* A through I, with *changeSet* I being the most recently deployed. As you can see, the `rollbackOneChangeSet` command allows you to target *changeSet* B and revert it to its previous state without impacting the others.

## The Impacts of `rollbackOneChangeSet`
Like any cherry-picking tool, using the `rollbackOneChangeSet` command comes with risks which may be unintended. 

**Please look for potential unintended consequences *before* using this command**. 

It is a best practice to run the [`rollbackOneChangeSetSql`](/documentation/rollbackonechangesetsql.html) helper command because it allows you to inspect the rollback SQL and search for any potential mistakes before you execute `rollbackOneChangeset`.

Also, the use of `rollbackOneChangeSet` comes with **risk of unintended consequences**, because of this, the command requires a `--force` flag to indicate that you intend to run the command.

## Running the `rollbackOneChangeSet` Command
Before running the `rollbackOneChangeSet` command, gather the following information from your DATABASECHANGELOG table:
- The Author of the *changeSet* you want to revert
- The *changeSet* ID of the *changeSet* you want to revert
- The file name (*changeSet* path) of the *changeSet* you want to revert

>**Note:** The `--rollbackScript` is only needed if the rollback is not already defined in the *changelog*, and if it is not a rollback that is automatically provided by Liquibase.

Then run the `rollbackOneChangeSet` command, with your information:

{% highlight text %}

liquibase --changeLogFile=changelog.xml rollbackOneChangeSet --changeSetAuthor="Liquibase Pro User" --changeSetId="1::createProc-proschema" --changeSetPath=changelog.xml --force

{% endhighlight %}

For more command specific help, type `liquibase rollbackonechangeset --help` into the command prompt.

### `rollbackOneChangeSet` Global Parameters

 Parameter | Definition | Requirement
 --- | --- | --- 
 `--changeLogFile` | Specifies the root *changelog*. | Required
 `--url` | Specifies the JDBC database connection URL. | Required
 `--username` | Specifies the database username. | Required
 `--password` | Specifies the database password. | Required
 `--liquibaseProLicenseKey` | Your Liquibase Pro license key | Required

### `rollbackOneChangeSet` Command Parameters

 Parameter | Definition | Requirement
 --- | --- | --- 
 `--changesetId` |The *changeSet* ID from the *changelog*. | Required
 `--changesetAuthor` | The name of the author for the *changeSet*. | Required
 `--changesetPath` | The path to the *changelog* containing the *changeSet* you want to rollback. | Required
 `--force` | A required parameter which indicates you intend to use this feature. | Required
 `--rollbackScript` | The path to the script to use to perform the rollback. | Optional *

> &#42; This option is only needed if the rollback is not already defined in the *changelog*, and if it is not a rollback that is automatically provided by Liquibase.

## Output
When successful, the `rollbackOneChangeSet` command produces the following output:

{% highlight text %}

Rolling Back Changeset: changelog.xml::1::createProc-proschema::Liquibase Pro User
Liquibase: Rollback has been successful.

{% endhighlight %}


