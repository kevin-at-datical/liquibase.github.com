---
layout: default
subnav: subnav_blog.md
title: Liquibase Installer - An Easier Way to Get Started with Liquibase
---
# Liquibase Installer: An Easier Way to Get Started with Liquibase

Our team has been working on making Liquibase easier for new users to install and to get up and running quickly with all-in-one Windows and MacOs installers.

## Watch the MacOS Installer demo
<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/mgRBLLWCSBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br>

### Windows and MacOS Installers for Liquibase
Starting with [Liquibase 3.8.6](https://www.liquibase.org/2020/02/liquibase-3.8.6-released.html), there are graphical installers that give you everything you need to play around with Liquibase, including OpenJDK Java and an in-memory database H2, example changelogs and properties files, and a concise Getting Started tutorial to walk you through your first updates.

Even if you choose not to use the installer, users who download Liquibase 3.8.6 via the zip and tar formats also receive the updated Getting Started text doc and example directory.

Here’s what’s included in the new installers:
- **README.txt**
  This file lists all the software, directories and files dropped onto your machine.
- **GETTING_STARTED.txt**
  This text file offers a Liquibase step-by-step, walking you through SQL and XML samples delivered in the Examples folder. 
- **OpenJDK 13**
  Liquibase uses Java to run. This installs a local version of Java in case you aren’t a Java developer that already has this on your system.
- **H2 in-memory database**
  Saving you the need for any external database infrastructure or setup, we included the H2 database and it’s convenient web-browser GUI. With it, you can run the included examples and see database changes from running Liquibase commands. 
- **examples/sql and examples/xml**
  This folder contains subfolders for SQL and XML projects. You can choose one or do both to see how easily Liquibase works with both types of changelog files. Each folder has a Liquibase properties file already set up along with an example changelog. 

<div align="center"><img src="/blog/images/expanded-liquibase-3.8.6-files.jpg" width="400px" alt="Liquibase Installer Files Expanded" /></div>
<br />

The installer will detect if you have previously used the installer and will ask if you’d like to upgrade or install separately the next time you use it, making upgrades easier.

You can [download the installer](https://download.liquibase.org/download-community/) from the Liquibase website.  

We’re looking forward to hearing what you think! 
