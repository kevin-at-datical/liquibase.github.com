---
layout: default
subnav: subnav_blog.md
title: Diffs - The Good, the Bad, and the Ugly of Comparing Databases
---

# Diffs - The Good, the Bad, and the Ugly of Comparing Databases

Database diffs are a great tool to have in your toolbox. They can provide a super easy way to begin <a href="https://www.liquibase.org/documentation/existing_project.html" target="_blank">using Liquibase on existing projects</a>. You can simply run the generateChangeLog command, which is basically just a diff of your existing database against an empty database, and you’re ready to go. 

Since that workflow is so easy, it’s understandable that you might want to use this same workflow for everything, but you really shouldn’t. In this blog, we’ll explain why it’s a great idea to use a diff workflow (read: state-based approach) for some things and we’ll explain why it’s a really bad idea to use database comparisons for everything. 

## What types of Diff-based commands are available in Liquibase?

There are a few different commands that allow you to compare databases in Liquibase. In this post, we’ll focus on their use in the command-line interface, but the ideas also apply to other ways of running Liquibase. 
- <a href="https://www.liquibase.org/documentation/diff.html" target="_blank">Diff command</a>
- <a href="https://www.liquibase.org/documentation/generating_changelogs.html" target="_blank">generateChangeLog command</a>
- <a href="https://www.liquibase.org/documentation/diffChangeLog.html" target="_blank">diffChangeLog command</a> 

For each of these commands, Liquibase will first gather information about either one or two databases, querying them to discover all the different database objects that exist on each database. The databases can be ‘live’ online databases, snapshots of a database created using the snapshot command, or even something like a Hibernate entity model. 

After gathering the objects, each command does a comparison to find the differences, and then does something different with that information. 

**Diff Command**
The simplest example is the <a href="https://www.liquibase.org/documentation/diff.html" target="_blank">Diff command</a>. This command always compares two databases, and simply prints a human-readable summary of the differences to the console. It groups the differences by object type, and for each object type lists specific objects that are Missing, Unexpected, or Changed.  

**generateChangeLog Command**
The next diff-based command is the <a href="https://www.liquibase.org/documentation/generating_changelogs.html" target="_blank">generateChangeLog command</a>. It is not immediately apparent from the name that this is a diff-based command, but internally what this command does is first gather information about a database and then use the difference logic to compare it to a completely ‘empty’ database. Then, rather than showing the differences in a human readable text format, it creates a changelog containing changes to add all the objects that are ‘missing’ from the empty database. As mentioned earlier, this is a great way to introduce Liquibase into an existing project. There are some caveats though, which we’ll discuss later.

**diffChangeLog Command**
The final diff-based command is the <a href="https://www.liquibase.org/documentation/diffChangeLog.html" target="_blank">diffChangeLog command</a>, and while it can be very useful, this one has even more caveats than generateChangeLog. As with the diff command, this compares two databases, which can be live, or snapshots, or a Hibernate entity model. But rather than a human readable diff, this takes the results of the comparison and writes the output to a changelog like the generateChangeLog command.  

## When Diffs are useful
**(The Good)**

**Starting to use Liquibase with an existing project**
Liquibase diffs are great as a quick start so you can use Liquibase on an existing project. Run the generateChangeLog command to create a changelog file with a sequence of changeSets that describe how to recreate the current state of the database.

**Identify a change you don’t have control over (or that a developer changes directly)**
Using the diffChangeLog command can be very helpful in identifying a change to a database that you might not have complete control over or one that developers are changing directly. Keep in mind that diffChangeLog is perfect for finding change and generating a changelog update. But, ideally, your developers should be creating the changelog themselves. 

**Documenting changes**
Another aspect of the database diff technique that some users love is that you don’t have to  rely on developers to remember to document the changes they make. You simply have everyone make whatever changes they want to the dev database and let the diff tool sort it out. Sound too good to be true? It is.

## When Diffs are a bottomless hole of complexity and disappointment 
**(The Bad and The Ugly)**

Diffs should absolutely not be the only tool in your toolbox, especially when it comes to evolving your database. You’re probably familiar with the old adage “when you have a hammer, everything is a nail”? The same applies for handling database schema changes. 

**Diff flaw #1**
While diffs do a good job of showing syntactical differences, they don’t understand the semantics of the changes. 

**Example**
A developer renames a column. She changes the name from “fname” to “firstname”. 
A diff will show you that there is a “fname” column that needs to be dropped and a “firstname” column that needs to be added. Follow these suggestions and you will end up with a database that is structured correctly, but you will lose valuable data when the changes are applied to an existing production system. 

As you can see, it’s super important to understand why the structural differences are happening, not just what they are.

**Diff flaw #2**
It is impossible to effectively diff the data.

Since you can’t diff the data, you find inserts, updates, and deletes that must be applied for the system to work correctly. These data changes can range from additional lookup table values to copying data in a de-normalizing process and can be just as important as the structural changes. 

Theoretically, a diff tool could also check for new, updated, and missing data between database, but in practice this cannot work for a few reasons:

- **Performance.** As your data set grows, the amount of information to compare grows until it is totally unmanageable.
- **Data changes.** During development, test data is often added to the development database that shouldn’t be copied into other databases. Also, new data may be added to testing and production databases that should not be deleted just because it doesn’t exist in the development database.
- **Diff tools don’t handle expected differences.** For example, let’s say you are using 50 states, but they get inserted in different orders or with different sequence start values. Their IDs will be different but they would still be okay. 

## Summing it up
**Database migrations are the best way forward.** If you track your data changes along with your structural changes during development, you can be certain that they will be applied correctly down the road.

Developers need to know exactly what has changed in the application code and database code. Change is hard and Liquibase diffs can certainly help bridge the gap from no database CI/CD for the database to complete database CI/CD. However, you must move to a process where developers are authors and owners of all code changes, and that includes that database. 

Diff-based workflows feel like something that makes sense, but you often don't see the consequences of the tradeoffs until much later in the development cycle when you are over-committed and have no exit strategy. (Taking a page from our friends at <a href="https://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/" target="_blank">Coding Horror</a>, diff-based workflows are the Vietnam of database schema management.) In the end, diffs have great value as a “did all the changes get stored in the change log correctly?” sanity check. They should not be relied upon as your primary means of tracking database changes.

Liquibase lets you use both migration-based database change and state-based diffs as you need them. [Download Liquibase for free and give it a try](https://download.liquibase.org/). 