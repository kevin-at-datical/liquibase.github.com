---
layout: default
title: Docs | rollbackOneUpdateSql Command 
---

# Liquibase Commands: `rollbackOneUpdateSql`
The `rollbackOneUpdateSql` command is a helper command that allows you to inspect the SQL Liquibase will run to revert all *changeSets* associated with the deploymentID specified in the [`rollbackOneUpdate`](/documentation/rollbackoneupdate.html) command. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneUpdateSql` command is typically used when you want inspect the raw SQL that Liquibase uses to revert all *changeSets* associated with a specified deploymentID when you run the `rollbackOneUpdateSql` command, so you don't unintentionally make a mistake.

## Running the `rollbackOneUpdateSql` Command
Before running the `rollbackOneUpdateSql` command, gather the following information from your DATABASECHANGELOG table:
- The Author of the *changeSet* you want to revert
- The *changeSet* ID of the *changeSet* you want to revert
- The file name (*changeSet* path) of the *changeSet* you want to revert

Then run the `rollbackOneUpdateSql` command, with your information:

{% highlight text %}

WAITING ON SYNTAX FROM ERZSEBET

{% endhighlight %}

>**Note:** Unlike the [rollbackOneChangeSet](/documentation/rollbackonechangeset.html) command, there is NO impact to the DATABASECHANGELOG table. See the [rollbackOneUpdate](/documentation/rollbackoneupdate.html) topic for more information.

For more command specific help, type `liquibase rollbackOneUpdateSql --help` into the command prompt.

### `rollbackOneUpdateSql` Global Parameters

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

### `rollbackOneUpdateSql` Command Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--listDeploymentIds` | Lists all available deploymentIDs in the target environment. | Required
 `--deploymentId` * | Specifies the deploymentId in the DATABASECHANGELOG table for all *changeSets* you want to rollback. | Required
 
> &#42; If the `deploymentId` is not specified, Liquibase Pro will use the most recently deployed `deploymentId` from the DATABASECHANGELOG table and use it for the rollback.

## Output
When successful, the `rollbackOneUpdateSql` command produces the following output:

{% highlight sql %}

Waiting on Output Info

{% endhighlight %}
