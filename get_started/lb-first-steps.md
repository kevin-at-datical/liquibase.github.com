---
layout: default
title: Docs | Liquibase First Steps 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase First Steps
In this tutorial, you will learn how to get up and running with Liquibase.

## Install Liquibase
<div class="tile-container">
  <div class="tile-item" align="center">
    <img src="/images/quickstart/download_icon.png" width="90px" alt="Download Icon">
  </div>

<div class="tile-item" markdown="1">

If you are brand new to Liquibase, we recommend you begin by downloading the <a href="https://download.liquibase.org/download/?frm=n" target="_blank">Liquibase Installer</a>. You can then skip ahead to the <a href="/documentation/workflows/using-the-lb-installer.html">Using the Liquibase Installer</a> topic to learn more about the Liquibase Developer Workflow.

### What if I would rather manually install Liquibase?
There are many ways to download and install Liquibase manually depending on how you choose to use it. If you decide not to use the Liquibase installer (which comes with tons of example files to help you learn the Liquibase Develop workflow **before** using your own database), then you can view the [Liquibase Installation Documentation](/documentation/installation/index.html) for more information on other ways to download and install Liquibase.
</div>
</div>

## Configure Liquibase
<div class="tile-container">
<div class="tile-item" markdown="1">

Liquibase allows you to specify options on the command line which means the Liquibase CLI does not require configuration. 

However, creating a `liquibase.properties` file allows you to save default values so you don't have to specify them in the CLI unless you want to. 
Liquibase will always override a `liquibase.properties` file in favor of a value specified on the command line.

If you used the installer, your Liquibase download includes example `liquibase.properties` files for both XML and SQL formats in your Liquibase directory. 
We recommend that you move on to the <a href="/documentation/workflows/using-the-lb-installer.html">Using the Liquibase Installer</a> topic next.

### What if I installed manually?

The manual installation method does not contain a `liquibase.properties` file. You can view the [Creating and Configuring a liquibase.properties file](/documentation/config_properties.html) topic for more information on how to do this.
</div>

<div class="tile-item">
  <img src="/images/quickstart/configure.png" width="100px" alt="Configure Icon">
  </div>
</div>

## Choose your Path
Before moving on to the next lesson, you must select your path. If you used the Liquibase Installer, you will learn how to move through the Liquibase Developer Workflow using example files that were included with your install. 

If you installed manually, there are two paths to choose from based on how you want to define your changes.

### **I used the Liquibase Installer**
If you used the Liquibase Installer, the download includes an example H2 database, an XML *changelog* & `liquibase.properties` file, an SQL *changelog* & `liquibase.properties` file, and an AdoptOpenJDK binary.

The purpose of these files is to walk you through the Liquibase Developer workflow while using tons of examples.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 325px; height: 50px">
<div class="cta cta--block"><a href="/documentation/workflows/using-the-lb-installer.html">Your First Migration using Sample Liquibase Files ►</a></div></div>

### **I installed Liquibase Manually**
If you installed Liquibase using a manual method, there are two ways Liquibase allows you to define changes to the database:

#### Liquibase Change Types

<div class="tile-container">
  <div class="tile-item" align="center">
    <img src="/images/quickstart/xml-icon.png" width="100px" alt="XML Icon">
  </div>

<div class="tile-item" markdown="1">

Choosing this path means that your changes are defined in XML, JSON, or YAML formats. Liquibase will create XML formatted *changelogs* that define your *changeSets*, then generate and deploy SQL to your database based on those *changeSets*. Liquibase will also track all database migrations in your *changelog*. 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/quickstart_lb.html">Your First Migration: Liquibase Change Types ►</a></div></div>
</div>
</div>
<div class="tile-container">
<div class="tile-item" markdown="1">

#### SQL Format
Choosing this path means that you can define your own changes in SQL format. Liquibase will create SQL formatted *changelogs* that define your *changeSets*, then generate and deploy those changes to your database automatically. Liquibase supports plain SQL scripts designed to be custom or specific to your database and can even reference multiple script files in your *changelogs*.  
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/quickstart_sql.html">Your First Migration: SQL Format ►</a>
</div></div></div>

<div class="tile-item" align="center">
    <img src="/images/quickstart/sql-icon.png" width="100px" alt="SQL Icon">
  </div>
</div>

## Summary
In this tutorial we covered:
-   Downloading & Installing Liquibase
-   How to Configure Liquibase
-   Choosing your Path
