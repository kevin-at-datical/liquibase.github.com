---
layout: side-search
title: Docs | Installer Workspace Setup 
subnav: subnav_workflows.md
includeDaticalBox: true
---
# Installer: Setting Up your Workspace
Before setting up your Liquibase Installer Example Workspace, you must copy the `examples` directory to another location on your machine.

There are two projects under the examples directory: 
- `examples/sql` directory shows how to use a SQL formatted *changelog*.
- `examples/xml` directory shows how to use an XML formatted *changelog*.

Both projects utilize the same setup & examples, and only differ in the *changelog* type.

## Starting the Example H2 Database
H2 is a standard SQL database and can be used to simulate anything you are required to do in your own database.

- To Start the example database, run `examples/start-h2`. 
- To Stop the example database, use `ctrl-c`.

Running `examples/start-h2` starts a local H2 database that listends on port 9090 and opens a browser to the database console on the same port.

> **Note:** The Example H2 database does not store data and will reset to its starting state when the start-h2 process ends.

### About the Console

The start-h2 script starts two databases: 
- **A Developer Database:** Corresponds to what you may use as a local database.
- **An Integration Database:** Corresponds to another database in your pipeline.

The web-based console allows you to see all objects in your database in the left navigation and run SQL statements on the right side.

Along the top is a toolbar which includes a **Refresh** button which can be used to reload the left-side object view if changes are made to your database ouside of the console (like with Liquibase).

The Integration database can be viewed with the link provided to you from the Developer database browser. You can also see which database you are connected to by looking at the URL at the top of the object view.

### Perform a Test Run
As a test, try entering `create table test_table (id int)` in the text area and hit `Run`.

You should see `TEST_TABLE` appear in the object view.

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/documentation/workflows/running-first-update-installer.html">Installer: Running your First Update ►</a></div>
<div align="center" style="font-size:30px">or</div>
<div class="cta cta--block"><a href="/documentation/workflows/using-the-lb-installer.html">◄ Return to: Using the Liquibase Installer</a></div>
</div>