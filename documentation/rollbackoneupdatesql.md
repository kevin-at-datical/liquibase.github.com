---
layout: default
title: Docs | rollbackOneUpdateSQL Command 
---

# Liquibase Commands: `rollbackOneUpdateSQL`
The `rollbackOneUpdateSQL` command is a helper command that allows you to inspect the SQL Liquibase will run to revert all *changeSets* associated with the `deploymentID` specified in the [`rollbackOneUpdate`](/documentation/rollbackoneupdate.html) command. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneUpdateSQL` command is typically used when you want inspect the raw SQL that Liquibase uses to revert all *changeSets* associated with a specified `deploymentId` when you run the `rollbackOneUpdate` command, so you don't unintentionally make a mistake.

## Running the `rollbackOneUpdateSQL` Command
Before running the rollbackOneUpdateSQL command, you can get the optional deploymentId by running the [history](/documentation/history.html) command:
- The `deploymentId` of the *changeSet* group you want to revert

Then run the `rollbackOneUpdateSQL` command, with your information:

{% highlight text %}

liquibase rollbackOneUpdateSQL --deploymentId=2068379006

{% endhighlight %}

>**Note:** Unlike the [rollbackOneUpdate](/documentation/rollbackoneupdate.html) command, there is NO impact to the DATABASECHANGELOG table. See the [rollbackOneUpdate](/documentation/rollbackoneupdate.html) topic for more information.

For more command specific help, type `liquibase rollbackOneUpdateSQL --help` into the command prompt.

### `rollbackOneUpdateSQL` Global Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--changeLogFile` * | Specifies the root *changelog*. | Required
 `--url` | Specifies the JDBC database connection URL. | Required
 `--username` | Specifies the database username. | Required
 `--password` | Specifies the database password. | Required
 `--liquibaseProLicenseKey` | Your Liquibase Pro license key. | Required
 `--outputFile` ** | Specifies the file path to where the Rollback SQL will be written. | Optional

> &#42; Liquibase checks the *changelog* and any nested *changelogs* for the definitions of the *changeSets* to roll back.

> &#42;&#42; If not specified, Rollback SQL output goes to `STDOUT`.

### `rollbackOneUpdateSQL` Command Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--deploymentId` * | Specifies the `deploymentId` in the DATABASECHANGELOG table for all *changeSets* you want to rollback. | Required
 
> &#42; If the `deploymentId` is not specified, Liquibase Pro will use the most recently deployed `deploymentId` from the DATABASECHANGELOG table and use it to generate the rollback SQL.

## Output
When successful, the `rollbackOneUpdateSQL` command produces the following output:

{% highlight sql %}

-- *********************************************************************
-- Rollback deployment ID '2068379006'
-- *********************************************************************
-- Change Log: sql.oracle.sql
-- Ran at: 2/18/20 5:27 PM
-- Against: PROSCHEMA@jdbc:oracle:thin:@3.219.82.47:1521/orcl
-- Liquibase version: 3.8.7-DAT-3917-SNAPSHOT
-- *********************************************************************

-- Lock Database
UPDATE PROSCHEMA.DATABASECHANGELOGLOCK SET LOCKED = 1, LOCKEDBY = 'gemfire-PC (10.8.8.200)', LOCKGRANTED = TO_TIMESTAMP('2020-02-18 17:27:20.364', 'YY
YY-MM-DD HH24:MI:SS.FF') WHERE ID = 1 AND LOCKED = 0;

-- Rolling Back ChangeSet: sql.oracle.sql::2-createPackageBody::Liquibase Pro User
DROP PACKAGE BODY PROSCHEMA.PKG1;

DELETE FROM PROSCHEMA.DATABASECHANGELOG WHERE ID = '2-createPackageBody' AND AUTHOR = 'Liquibase Pro User' AND FILENAME = 'sql.oracle.sql';

-- Rolling Back ChangeSet: sql.oracle.sql::1-createPackage::Liquibase Pro User
DROP PACKAGE PROSCHEMA.PKG1;

DELETE FROM PROSCHEMA.DATABASECHANGELOG WHERE ID = '1-createPackage' AND AUTHOR = 'Liquibase Pro User' AND FILENAME = 'sql.oracle.sql';

{% endhighlight %}
