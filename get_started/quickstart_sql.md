---
layout: default
title: Docs | Using SQL Scripts Tutorial 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Your First Migration with SQL

<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/HdXcf9E8ZVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Prerequisites
Before performing any of these steps, you must be able to connect to a local or remote database, accessible via command line or IDE/GUI. View the [Supported Databases](/databases.html) topic for more information on which databases we support. 

You can also view the [Database Tutorials](/documentation/tutorials/index.html) topic for more information on running each database with Liquibase.

## Step 1: Create a Formatted SQL *changelog*

To complete your first migration, you must create a formatted SQL *changelog* in your Liquibase project directory so Liquibase can track, version, and deploy changes to your database.

**<u>To Create your changelog</u>**
1. Create a file in your Liquibase project directory called `changelog.sql`.
2. For this example, enter the following information into the `changelog.sql` file.

{% highlight sql %}

--liquibase formatted sql

{% endhighlight %}

## Step 2: Add a *changeSet*
*changeSets* are units of change that Liquibase can execute on a database. When adding a *changeSet*, your change must be defined by both an `id` attribute and an `author` attibute. It is best practice to only include one change in each changeset.

**<u>To Add your changeSet</u>**
1. Locate and open the `changelog.sql` file.
2. For this example, enter the following information into the `changelog.sql` file, then save it. 

See the [Formatted SQL changelogs](/documentation/sql_format.html) topic for more information about SQL Syntax.

{% highlight sql %}
--liquibase formatted sql

--changeset bob:1
create table test1 (
id int primary key,
name varchar(255)
);

{% endhighlight %}

## Step 3: Deploy your *changelog*

To deploy the *changelog* and your new *changeSet*, you run the `update` command. When running this command, Liquibase reads your list of *changeSets* in order and checks the `DATABASECHANGELOG` table for anything that was previously run. Any *changSets* that have *not* already been applied to the database will get applied, and Liquibase will track that information.

**<u>To Apply the changeSet</u>**
1. Open your command prompt or terminal.
2. Run the following command: `liquibase --changeLogFile=changelog.sql update`

Your database now contains a table called **test1**.

## Step 4: Check Your Database
To check your database, open your database IDE to find the change that you made.

Notice that two tables were created along with test1: 
- `DATABASECHANGELOG`
- `DATABASECHANGELOGLOCK`

The `DATABASECHANGELOG` table contains a list of all the changes that 
have been run against the database. The `DATABASECHANGELOGLOCK` table is used to make sure two machines don't attempt to modify the database at the same time.

View [DATABASECHANGELOG Table](/documentation/databasechangelog_table.html) and [DATABASECHANGELOGLOCK Table](/documentation/databasechangeloglock_table.html) topics for more information.

### Additional Information
This topic is great when you only have a handful of SQL scripts. However, if your list of scripts becomes too large to maintain in a formatted SQL changelog, you may want to break up your scripts into smaller more manageable chunks. 

See the [Database Migrations with Multiple SQL Files](/documentation/multiple-sql-migration.html) topic for more information on how to Migrate with Multiple SQL files.

You can also learn how to create your [First Migrations with Liquibase Functions](/get_started/quickstart_lb.html).

### Summary
In this tutorial we covered:
- Creating Formatted SQL *changelogs*
- Adding Changesets to your *changelog*
- Running your *changelog*
- Checking your Database

## **Next Up:** 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/documentation/index.html">Liquibase Documentation ►</a></div>
<br>
<div class="cta cta--block"><a href="/quickstart.html">Return to Getting Started ►</a></div>
</div>
