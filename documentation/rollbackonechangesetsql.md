---
layout: default
title: Docs | rollbackOneChangeSetSql Command 
---

# Liquibase Commands: `rollbackOneChangeSetSql`
The `rollbackOneChangeSetSql` command is a helper command that allows you to inspect the SQL Liquibase will run to revert the *changeSet* specified in the [`rollbackOneChangeSet`](/documentation/rollbackonechangeset.html) command. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneChangeSetSql` command is typically used when you want inspect the raw SQL that Liquibase uses to revert your *changeSet* when you run `rollbackOneChangeSet` command, so that you don't unintentionally make a mistake.

## Running the `rollbackOneChangeSetSql` Command
Before running the `rollbackOneChangeSetSql` command, gather the following information from your *changeLog*:
- The Author ID of the *changeSet* you want to revert
- The *changeSet* ID of the *changeSet* you want to revert
- The file name (*changeSet* path) of the *changeSet* you want to revert

Then run the `rollbackOneChangeSetSql` command, with your information:

{% highlight text %}

Waiting on Syntax Info

{% endhighlight %}

For more command specific help, type `liquibase rollbackonechangesetSQL -- help` into the command prompt.

<br />

### `rollbackOneChangeSetSql` Global & Command Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--changeLogFile` | The root *changelog* | Required
 `--url` | The JDBC database connection URL | Required
 `--username` | The database username | Required
 `--password` | The database password | Required
 `--liquibaseProLicenseKey` | Your Liquibase Pro licence key | Required
 `--outputFile` | The path to the file where the Rollback SQL will be written | Optional *
`--changesetId` |The changeset ID from the *changelog*. | Required
 `--changesetAuthor` | The name of the author for the changeset id | Required
 `--changesetPath` | The path to the *changelog* containing the *changeSet* you want to roll back | Required
 `--rollbackScript=` | The path to the script to use to perform the rollback | Optional **

> &#42; If not specified, Rollback SQL output goes to `STDOUT`.

> &#42;&#42; This option is only needed if the rollback is not already defined in the *changelog*, and if it is not a rollback that is automatically provided by Liquibase.

## Output
When successful, the `rollbackOneChangeSetSql` command produces the following output:

{% highlight text %}

Waiting on Output Info

{% endhighlight %}