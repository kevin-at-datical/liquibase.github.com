---
layout: default
subnav: subnav_blog.md
title: Recent Liquibase Articles, April 2020
author: Steve Donie
---
# Recent Liquibase Articles, April 2020

Here are some articles and other interesting things written by the many people around
the world that are using Liquibase.

* [Evolving Your Database Using Spring Boot and Liquibase](https://medium.com/@harittweets/evolving-your-database-using-spring-boot-and-liquibase-844fcd7931da)

  Another nice tutorial with source code available on GitHub. Describes the benefits of using Liquibase with
  Spring Boot.
  
* [Video : SQLcl and Liquibase : Automating Your SQL and PL/SQL Deployments](https://oracle-base.com/blog/2020/03/02/video-sqlcl-and-liquibase-automating-your-sql-and-pl-sql-deployments/)

  Tim Hall at the oracle-base blog shares a video demonstrating the use of Oracle's SQLcl, which uses Liquibase internally. 
  
* [A Tool to Compare PostgreSQL Database Schema Versions](https://www.endpoint.com/blog/2020/02/11/compare-postgresql-schema-versions)

  End Point is a custom software development consultancy (they also make a really nice [immersive display system](https://liquidgalaxy.endpoint.com/)). 
  This blog post describes how they used Liquibase to help them detect differences in two Postgres schemas for a data migration project. 

* [SQL Server deployment options for Octopus Deploy](https://octopus.com/blog/sql-server-deployment-options-for-octopus-deploy)

  When deploying your application, you need to deploy your database too! This article discusses the why of that, why you should not
  be writing your own tool, touches on the difference between state-based and migration-based solutions, and then talks about what
  tools are most popular with the Octopus Deploy community. Sadly, Liquibase is not in that list. The tendency of Microsoft shops
  to use all Microsoft tooling seems to be a strong factor.
  
* [Critiquing two different approaches to delivering databases: Migrations vs state](http://workingwithdevs.com/delivering-databases-migrations-vs-state/)

  An article linked from the previous article that I wanted to call out separately. Goes into more details on the
  state-based vs migration-based decision, and how each has benefits and drawbacks. Some good discussion in the comments also.
  
* [DevOps Chats: Liquibase, Open Source and Databases, with Datical](https://devops.com/devops-chats-liquibase-open-source-and-databases-with-datical/)

  Alan Shimel at DevOps.com interviews Datical president Dion Cornett about Datical, Liquibase, and open source software. Listen or read the transcript!

* [Integrate Java Database Versioning with Liquibase using MySQL - A Step by Step Guide](https://hackernoon.com/integrate-java-database-versioning-with-liquibase-using-mysql-a-step-by-step-guide-n8b23aw5)

  By [Tiago Melo](https://hackernoon.com/@tiago-melo)
  
  Folks really seem to like writing up really good introductory articles on using Liquibase! This one has source code and shows how
  to integrate Liquibase with Spring Boot to evolve the database schema of a Java application using MySQL. He likes using Liquibase over MySQL
  because of its database agnosticicism, and the flexibility to specify the changes in different formats. He used YAML.

* [autodiff - Automatic changelog generation for Liquibase with Spring Boot & Hibernate](https://github.com/erikhofer/autodiff)

  By [Erik Hofer](https://github.com/erikhofer)
  
  This is a utility Gradle script for generating Liquibase changelogs for your Spring Boot / Hibernate JPA projects. As with any diff-based workflow,
  you will need to carefully review the changes generated!
