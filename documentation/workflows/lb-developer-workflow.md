---
layout: side-search
title: Docs | Liquibase Developer Workflow 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase Developer Workflow
Let's go through the standard workflow from beginning to end!

## Step One
On your local development machine, add new *changeSet(s)* to your *changelog*. The changes are your choice to make.

## Step Two
Run `liquibase update` to apply the changes to the developer database. Iterate until you are happy with the final state.

## Step Three
Run `liquibase --url=jdbc:h2:tcp://localhost:9090/mem:integration status --verbose`

Running the command in step 3 allows you to see that the integration database has *changeSets* that were not applied. 

It is *always* best practice to know what changes are going to take place **BEFORE** saving and applying the *changelog*... especially if someone else edited or created the *changelog*.

## Step Four
Run `liquibase --url=jdbc:h2:tcp://localhost:9090/mem:integration updateSQL`

Running the command in step 4 allows you to see exactly what SQL would run when running the `update` command. You can also run a `diff` command to compare the changes before saving and applying them. 

To run the `diff` command, run: `liquibase --referenceUrl=jdbc:h2:tcp://localhost:9090/mem:integration --referenceUsername dbuser --referencePassword letmein diff`

## Step Five
Save your *changelog* to source control, when you are happy with the changes that will be applied.

## Step Six
Run, `liquibase --url=jdbc:h2:tcp://localhost:9090/mem:integration update` to apply the new *changeSets*.

You can re-run the `status`, `updateSql`, and `diff` commands as way to see that all the changes have now been applied to integration.

## DONE!
That's the whole workflow! Now, start back at step 1 to continue iterating through the entire cycle until you have a good feel for how Liquibase works.

## What Now?
Now that you have a feel for Liquibase against your sample database, you can try it against your standard databases.

Just add your database's jdbc drivers to the `lib` directory in the Liquibase install directory and update the `url`, `username`, and `password` fields in the `liquibase.properties` file.

Also, check the documentation associated with your specific database to locate the correct url format and download the driver jar. Then use the Liquibase Developer Workflow to make changes against your own database.

## **Next Up:** 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/documentation/index.html">Liquibase Documentation ►</a></div>
<br>
<div class="cta cta--block"><a href="/quickstart.html">Return to Getting Started ►</a></div>
</div>