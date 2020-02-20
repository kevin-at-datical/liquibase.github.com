---
layout: default
title: Docs | rollbackOneUpdate Command
---

# Liquibase Commands: `rollbackOneUpdate`
The `rollbackOneUpdate` command reverts (rolls back) all *changeSets* related by a specific `deploymentId` that was made during a previous change to your database. It is only available for Liquibase Pro users.

## Uses
The `rollbackOneUpdate` command is typically used when you want to undo a series of changes made to your database during a specific deployment and revert those *changeSets* to their previous state without affecting any other changes made to your database.

The `rollbackOneUpdate` command allows you to target a specific `deploymentId` without impacting other changes or deployments that came before or after it.

<div align="center"><img src="/images/rollback_pro-target-one-update.jpg" width="450px" alt="Image example of rollbackOneUpdate" /></div>
<br />

The image above shows `deploymentIds` 1 through 5, with `deploymentId` 2 incorporating all the *changeSets* we want to roll back. As you can see, the `rollbackOneUpdate` command allows you to target `deploymentId` 2 and revert all *changeSets* associated with the same `deploymentId` to its previous state without impacting the others.

## The Impacts of `rollbackOneUpdate`
Like any cherry-picking tool, using the `rollbackOneUpdate` command comes with risks which may be unintended.

**Please look for potential unintended consequences *before* using this command**.

It is a best practice to run the [`rollbackOneUpdateSql`](/documentation/rollbackoneupdatesql.html) helper command because it allows you to inspect the `rollbackOneUpdate` SQL and search for any potential mistakes before you execute the `rollbackOneUpdate` command.

Also, the use of `rollbackOneUpdate` comes with **risk of unintended consequences**, because of this, the command requires a `--force` flag to indicate that you intend to run the command.

## Additional Impacts to the DATABASECHANGELOG Table
Running the `rollbackOneUpdate` command will remove the deployment record from the DATABASECHANGELOG table. As a user, you must decide on what to do with your *changeSet* after the `rollbackOneChangeSet` command has been run.

Depending on your desired outcome, consider doing one of the following:
- Modify the *changeSet* in the *changelog* file and re-deploy it.
- Do nothing to the *changeSet* in the *changelog* file and have it be re-deployed.
- Delete the *changeSet* in the *changelog* file.

## Running the `rollbackOneUpdate` Command
Before running the `rollbackOneUpdate` command, gather the following information from your DATABASECHANGELOG table:
- The `deploymentId` of the deployment you want to revert

>**Note:** If the `deploymentId` is not supplied, Liquibase Pro will look up the most recent `deploymentId` from the DATABASECHANGELOG table and use it for the rollback.

Then run the `rollbackOneUpdate` command, with your information:

{% highlight text %}

liquibase --changeLogFile=sql.oracle.sql rollbackOneUpdateSQL --deploymentId=068379006

{% endhighlight %}

For more command specific help, type `liquibase rollbackOneUpdate --help` into the command prompt.

### `rollbackOneUpdate` Global Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--changeLogFile` * | The root *changelog* | Required
 `--url` | The JDBC database connection URL | Required
 `--username` | The database username | Required
 `--password` | The database password | Required
 `--liquibaseProLicenseKey` | Your Liquibase Pro license key | Required

> &#42; Liquibase will check nested changelogs for definitions of the *changeSets* to rollback

### `rollbackOneUpdate` Command Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 `--deploymentId` * | Specifies the `deploymentId` of all from the DATABASECHANGELOG table related to the *changeSets* intended for rollback. | Required
 `--force` | A required parameter which indicates you intend to use this feature. | Required

> &#42; If not supplied, LiquibasePro will lookup the most recent `deploymentId` from the DATABASECHANGELOG table and use it for the rollback.

## Output
When successful, the `rollbackOneUpdate` command produces the following output:

{% highlight text %}

liquibase --changeLogFile=sql.oracle.sql rollbackOneUpdate --deploymentId=2126881174 --force
Liquibase Pro 3.8.7-DAT-3917-SNAPSHOT by Datical licensed to Liquibase Pro Customer until Tue Nov 03 19:00:00 CST 2020
Rolling Back Changeset:sql.oracle.sql::3-createTableForCC::Liquibase Pro User
Rolling Back Changeset:sql.oracle.sql::2-createTableForView::Liquibase Pro User
Rolling Back Changeset:sql.oracle.sql::1-createTableForSynonym::Liquibase Pro User
Liquibase: Rollback has been successful.

{% endhighlight %}
