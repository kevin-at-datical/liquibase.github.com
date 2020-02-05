---
layout: side-search
title: Docs | Using the Liquibase Installer 
subnav: subnav_workflows.md
includeDaticalBox: true
---
# Using the Liquibase Installer
In this tutorial, you will learn how to get up and running with the Liquibase Liquibase installer. 

By using the installer, you already have all the dependencies, directories, config and properties files to get started exploring the Liquibase examples provided, which is a great way to understand the core concepts with a direct command-line introductory experience.

## What was Downloaded?
The Liquibase Installed comes with a ton of features to help new users learn the Liquibase Developer Workflow as quickly as possible **without** practicing on your own databases. The following was installed on your computer:

- An Examples directory containing SQL and XML projects with:
    - Pre-Written *changelogs*
    - Pre-Written `liquibase.properties` files
> **Note:** Both projects utilize the same setup & examples, and only differ in *changelog* type.

- An Example H2 database
- AdoptOpenJDK Binaries

## Step One: Getting Started
To get started, download your database's JDBC driver to the lib directory, then run the `liquibase` script in the root of this directory.

### Setting your Path Variable on Windows OS

To set the Path System Variable:
1. In your Windows Start Menu Search, type `env` and select the **Edit the System Environment** option in the Control Panel.
2. In the System Properties Advanced tab, select **Environment Variables**.
3. In the System Variables section, highlight the Path variable and click **Edit**.
4. In the Edit environment variable window, select **New**, then add the path to the `Liquibase-Version#-bin` folder.
    - Example: `C:/apps/liquibase-3.8.6-bin`
5. Click **OK** on all windows to close them.


### Setting your Path Variable on Mac/Linux/Unix OS

To add the directory to your PATH:

   1. Open the Terminal or Linux Command Line.
   2. Run the following command: `export PATH=$PATH:/path/to/where/you/installed/liquibase`

>**Note:** This command will not permanently update your PATH after the termination of your session. 

To update your PATH permanently:
1. Run the following command: `source ~/.profile or source ~/.bashrc`.
2. Restart your MacOS Terminal app or Linux command line.

#### Note for MacOS users only: 
There is an even more permanent way to set path using the Terminal app. To permanently set your PATH:
   1. Open your Terminal app and run: `sudo nano /etc/paths`. 
   2. append the path `/path/to/where/you/installed/liquibase` at the end of the file. 
   3. Hit `ctrl+x`, then `y` for yes to save the file.
   4. You must restart your Terminal for changes to take affect.

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/documentation/workflows/setup-workspace-installer.html">Installer: Setting Up Your Workspace ►</a></div></div>