---
layout: default
title: Docs | Liquibase Core Usage 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase Core Usage
## Major Concepts
### *changelog* Files
Developers store database changes in text-based files on their local development machines and apply them to their local databases. These
*changelog* files are stored in source control to enable collaboration. The *changelog* can be used to update all the different database
environments that a team uses - from local development databases, to test, staging, and production. *changelog* files can be arbitrarily nested for better management. See the [*changeLog*](/documentation/databasechangelog.html) documentation for more information.

### *changeSets*
*changeSets* are the *units of change* that Liquibase tracks execution of. Each *changeSet* is uniquely identified by the `author`, `id`, and `filename` attributes. When Liquibase runs, it queries the `DATABASECHANGELOG` table for the *changeSets* that are marked as executed and then executes all *changeSets* in the *changelog* file that have not yet been executed. See the [*changeSet*](/documentation/changeset.html) documentation for more information.


### *Change Types*
Each *changeSet* contains one or more Change Types that describe a type of change or action you want to apply to the database. Liquibase supports both descriptive Change Types that generate SQL for supported databases and raw SQL. Generally there should only be one Change Type per *changeSet* to avoid failed autocommit statements that can leave the database in an unexpected state. See the [Change Type](/documentation/changes/index.html) documentation for a list of available Change Types.


### Preconditions
Preconditions can be applied to either the *changelog* as a whole or individual *changeSets*. Preconditions control the execution of an update based on the 
state of the database, and can halt the update, skip a *changeSet*, mark a *changeSet* as run, or show a warning. See the [Preconditions](/documentation/preconditions.html) documentation for more information.

### Contexts
Contexts can be applied to *changeSets* to control whether they are run in different environments. For example, some *changeSets* can be tagged as "production" and others as "test".
If no context is specified, the *changeSet* will run regardless of the execution context. Contexts can be specified as logical expressions in the *changeSet* to
more precisely control execution. See the [Contexts](/documentation/contexts.html) documentation for more information.

### Labels
Similar to contexts, labels can also be applied to *changeSets* to control which *changeSets* are executed. In contrast to contexts that can be complex expressions, labels are a simple 
list on each *changeSet*. For labels though, complex expressions can be supplied at runtime. The combination of contexts and labels gives fine grained control over which *changeSets*
are executed. See the [Labels](/documentation/labels.html) documentation for more information.

See the [Understanding Context vs Labels](/2014/11/contexts-vs-labels.html) blog post for more details regarding their differences, similarities, and use cases.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/index.html">Return to Get Started Home ►</a></div></div>
