---
layout: side-search
title: Docs | LB Installer Run First Update 
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Installer: Running Your First Update
The main Liquibase command you will use is `update`, which applies any unrun changes in your *changelog* to your database.

## Step One: Run `Update`
To run your first update: 
1. Open a command-line or Terminal app.
2. Navigate to your `...examples/sql directory` (or xml).
3. In your command prompt run `liquibase update`.

You should see a message saying `Update has been successful`.

## Step Two: Check your Developer Console Page
Next, refresh your developer database console page.

You should now see the following tables added to the object view:
- COMPANY
- DATABASECHANGELOG
- DATABASECHANGELOGLOCK
- PERSON

By running `liquibase update`, your database now matches the desired database state as defined by the *changelog* script.

The DATABASECHANGELOG and DATABASECHANGELOGLOCK tables are liquibase-metadata tables, the COMPANY and PERSON tables were created by the *changelog*.

## Step Three: Open your *changelog* File
Now, open the `com/example/sample.changelog.xml` or `com/example/sample.changelog.sql` file in your favorite text editor.

In each file you can see how changes were defined as a series of *changeSets*. Each *changeSet* is uniquely identified by the `id` and `author` fields. Liquibase uses these fields to track what changes have been run and what has not.

When you ran the `update` command, Liquibase evaluated which *changeSets* had not been run against your target database, then ran them. 

## Step Four: Add New *changeSets*
Running the update command allowed your developer database to match the defined state. Now that they match, you can start adding additional changes you need. 

If you have not run your first update, please follow the instructions in the previous sections before completing this section.

In this example, we will add a new *changeSet* to create a `works for` column in the PERSONS table.

To add this *changeSet*, open the sample *changelog* file in your existing editor, and one of the following to then END of the file:

### XML *changelog* example code

{% highlight xml %}
<changeSet id="3" author="your.name">
    <addColumn tableName="person">
        <column name="worksfor_company_id" type="int"/>
    </addColumn>
</changeSet>

<changeSet id="4" author="your.name">
    <addForeignKeyConstraint constraintName="fk_person_worksfor"
         baseTableName="person" baseColumnNames="worksfor_company_id" referencedTableName="company" referencedColumnNames="id"/>
</changeSet>
{% endhighlight %}

### SQL *changelog* example code
{% highlight sql %}
    TODO:
    	--changeSet
    	ALTER TABLE PUBLIC.person ADD worksfor_company_id INT;
{% endhighlight %}

> **Note:** It's best practice to wrap every statement in its own *changeSet* block.

Now, run `liquibase update` again & refresh your database console. You will see the new column on the PERSON table.


## Step Five: Promoting Changes
Now that we added a new *changeSet* and the database structure is what we want, we are ready to apply those changes to our integration database.

At this time in the workflow, you should commit your *changelog* to version control and/or build an artifact containing it, however, for this tutorial we will run it directly against our other database.

To apply the changes to the integration database run: `liquibase --url=jdbc:h2:tcp://localhost:9090/mem:integration update`

By passing along the `--url` parameter, you override the url value specified in the `liquibase.properties` file, but still use all the other parameters in the file.

After running update against the integration database, you should now see the COMPANY and PERSON tables in your integration web console.

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 350px; height: 50px">
<div class="cta cta--block"><a href="/documentation/workflows/lb-developer-workflow.html">Liquibase Developer Workflow ►</a></div>
<div align="center" style="font-size:30px">or</div>
<div class="cta cta--block"><a href="/documentation/workflows/setup-workspace-installer.html">◄ Return to: Installer-Setting Up Your Workspace</a></div>
</div>