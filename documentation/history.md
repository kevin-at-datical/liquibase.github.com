---
layout: default
title: Docs | history Command 
---

# Liquibase Commands: `history`
The `history` command is a helper command that lists out all your `deploymentIds` and all *changeSets* associated with each `deploymentId`.

## Uses
The `history` command is typically used when you want to inspect a particular group of changes to ensure that they have been applied to the database.

## Running the `history` Command
Before running the `history` command, make sure you specify your `url`, `username`, and `password` information in your `liquibase.properties` file or through the command line.

To run the `history` command, type the following in to your command prompt:

{% highlight text %}

liquibase --outputFile=history.txt history

{% endhighlight %}

### `history` Global Parameters

 Parameter | Definition | Requirement
 --- | --- | ---
 --url | The JDBC database connection URL | Required
 --username | The database username | Required
 --password | The database password | Required
 --outputFile | Specifies that the output should go to a file rather than to STDOUT | Optional
 
## Output
When successful, the `history` command produces the following output:

{% highlight text %}

C:\dev\DaticalDB-testing\liquibase-pro-cli-project\oracle_lbpro_master>..\liquibase history
Liquibase Pro 3.8.7 by Datical licensed to Liquibase Pro Customer until Tue Nov 03 19:00:00 CST 2020
Liquibase History for jdbc:oracle:thin:@3.219.82.47:1521/orcl - Database updated at 2/17/20 10:54 AM. Applied 3 changeSet(s) in 0.485s, DeploymentId: 1958497040
  oracle_lbpro_master_changelog.xml::1::createTableforSynonym-PROSCHEMA::Liquibase Pro User
  oracle_lbpro_master_changelog.xml::2::createTableForView-PROSCHEMA::Liquibase Pro User
  oracle_lbpro_master_changelog.xml::3::createTableForCC-PROSCHEMA::Liquibase Pro User
Liquibase command 'history' was executed successfully.

{% endhighlight %}
