---
layout: default
title: Docs | rollbackOneChangeSetSql Command 
---

# Liquibase Commands: `rollbackOneChangeSetSql`
<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/1AH5SKuSyRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br />

The `rollbackOneChangeSetSql` command is a helper command that allows you to inspect the SQL Liquibase will run to revert the *changeSet* specified in the [`rollbackOneChangeSet`](/documentation/rollbackonechangeset.html) command. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneChangeSetSql` command is typically used when you want inspect the raw SQL that Liquibase uses to revert your *changeSet* when you run the `rollbackOneChangeSet` command, so that you don't unintentionally make a mistake.

## Running the `rollbackOneChangeSetSql` Command
Before running the `rollbackOneChangeSetSql` command, gather the following information from your DATABASECHANGELOG table:
- The Author of the *changeSet* you want to revert
- The *changeSet* ID of the *changeSet* you want to revert
- The file name (*changeSet* path) of the *changeSet* you want to revert

Then run the `rollbackOneChangeSetSql` command, with your information:

{% highlight text %}

liquibase --changeLogFile=changelog.xml rollbackOneChangeSetSql --changeSetAuthor="Liquibase Pro User" --changeSetId="1::createProc-proschema" --changeSetPath=changelog.xml --force

{% endhighlight %}

For more command specific help, type `liquibase rollbackonechangesetSQL --help` into the command prompt.

### `rollbackOneChangeSetSql` Global Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--changeLogFile` | The root *changelog* | Required
 `--url` | The JDBC database connection URL | Required
 `--username` | The database username | Required
 `--password`| The database password | Required
 `--liquibaseProLicenseKey` | Your Liquibase Pro license key | Required
 `--outputFile` | The path to the file where the Rollback SQL will be written | Optional *

> &#42; If not specified, Rollback SQL output goes to `STDOUT`.

### `rollbackOneChangeSetSql` Command Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--changesetId` |The *changeSet* ID from the *changelog*. | Required
 `--changesetAuthor` | The name of the author for the *changeSet* | Required
 `--changesetPath` | The path to the *changelog* containing the *changeSet* you want to roll back | Required
 `--rollbackScript` | The path to the script to use to perform the rollback | Optional **

> &#42;&#42; This option is only needed if the rollback is not already defined in the *changelog*, and if it is not a rollback that is automatically provided by Liquibase.

## Output
When successful, the `rollbackOneChangeSetSql` command produces the following output:

{% highlight sql %}

-- Lock Database
UPDATE databasechangeloglock SET LOCKED = TRUE, LOCKEDBY = '2605:a601:ab18:0:205:1bff:feb1:45b2%eth1 (2605:a601:ab18:0:205:1bff:feb1:45b2%eth1)', LOCKGRANTED = '2020-02-05 18:37:18.034' WHERE ID = 1 AND LOCKED = FALSE;
-- *********************************************************************
-- Rollback changeset 'postgres_lbpro_master_changelog.xml::4::functionForTrigger::Liquibase Pro User'
-- *********************************************************************
-- Change Log: postgres_lbpro_master_changelog.xml
-- Ran at: 2/5/20 6:37 PM
-- Against: intuser@jdbc:postgresql://localhost:5432/intuserdb?currentSchema=PROSCHEMA
-- Liquibase version: 3.8.6-local-SNAPSHOT
-- *********************************************************************
-- Rolling Back ChangeSet: postgres_lbpro_master_changelog.xml::4::functionForTrigger::Liquibase Pro User
DELETE FROM "databasechangelog" WHERE ID = '4::functionForTrigger' AND AUTHOR = 'Liquibase Pro User' AND FILENAME = 'postgres_lbpro_master_changelog.xml';
-- Release Database Lock
UPDATE databasechangeloglock SET LOCKED = FALSE, LOCKEDBY = NULL, LOCKGRANTED = NULL WHERE ID = 1;

{% endhighlight %}
