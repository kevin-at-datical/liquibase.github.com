---
layout: default
title: Docs | Generating changelogs 
---

# Liquibase Commands: `generateChangeLog`

<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/8AdiGIb2SY4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

The `generateChangeLog` command creates a *changelog* file that has a sequence of *changeSets* which describes how to re-create the current state of the database.

## Uses
The `generateChangeLog` command is typically used when you want to capture the current state of a database, then apply those changes to any number of databases.

> **Note:** When using the [update command](update.html) to apply the changes in the *changelog*, Liquibase will not create a new database or schema. You must create them ***before*** applying the *changelog* to it.

## Running the `generateChangeLog` command
To generate a *changelog*:
1. Configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for the database you want to capture.

> **Note:** For information on how to configure your `liquibase.properties` file, view the [Creating & Configuring your liquibase.properties File](config_properties.html) topic in the knowledge base. Instead of using a `liquibase.properties` file, you can also pass the necessary information on the command line.

2. Open your command prompt or Linux terminal and run the following command:

{% highlight bash %}

liquibase --changeLogFile=dbchangelog.xml generateChangeLog

{% endhighlight %}

<!--
### `generateChangeLog` Global Parameters

Parameter | Definition | Requirement
 --- | --- | --- 
 --changeLogFile | Specifies the root *changelog*. | Required
 --url | Specifies the JDBC database connection URL. | Required
 --username | Specifies the database username. | Required
 --password | Specifies the database password. | Required
 --liquibaseProLicenseKey | Your Liquibase Pro license key | Required 
 -->
<br />

### `generateChangeLog` Command Parameters

Parameter | Definition | Requirement
 --- | --- | --- 
 --includeTablespace=[boolean] | Includes a tablespace *changeSet* in your generated *changelog* | Optional *
 
> **Note:** The default value of `--includeTablespace` is **False**. `--includeTablespace` only captures the tablespace if it was specified in the create table statement.

## Output

The `generateChangeLog` command generates a *changelog* that contains all of your *Objects* (represented as *changeSets*) and places the file in the same directory where the command was ran. 

The extension provided determines the format of the *changelog*, so if you specify the filename as `changelog.xml` you will get an XML formatted *changelog*. However, if you specify the filename as `changelog.yaml` or `changelog.json` or `changelog.postgresql.sql` you will get *changelogs* formatted in YAML or JSON or SQL, respectively.

>**Note:** When generating an SQL formatted *changelog*, you must specify the short name of the targeted database type as part of the filename (as shown above).

### Example
<details>
<summary style="font-size:125%;color:blue;">Liquibase Community <i>changelog</i></summary>
<br>
{% highlight xml %}

<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd
      http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd">
    <changeSet author="diff-generated" id="1185214997195-1">
        <createTable name="BONUS">
            <column name="ENAME" type="VARCHAR2(10,0)"/>
            <column name="JOB" type="VARCHAR2(9,0)"/>
            <column name="SAL" type="NUMBER(22,0)"/>
            <column name="COMM" type="NUMBER(22,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-2">
        <createTable name="DEPT">
            <column name="DEPTNO" type="NUMBER(2,0)"/>
            <column name="DNAME" type="VARCHAR2(14,0)"/>
            <column name="LOC" type="VARCHAR2(13,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-3">
        <createTable name="EMP">
            <column name="EMPNO" type="NUMBER(4,0)"/>
            <column name="ENAME" type="VARCHAR2(10,0)"/>
            <column name="JOB" type="VARCHAR2(9,0)"/>
            <column name="MGR" type="NUMBER(4,0)"/>
            <column name="HIREDATE" type="DATE(7,0)"/>
            <column name="SAL" type="NUMBER(7,2)"/>
            <column name="COMM" type="NUMBER(7,2)"/>
            <column name="DEPTNO" type="NUMBER(2,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-4">
        <createTable name="SALGRADE">
            <column name="GRADE" type="NUMBER(22,0)"/>
            <column name="LOSAL" type="NUMBER(22,0)"/>
            <column name="HISAL" type="NUMBER(22,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-5">
        <addForeignKeyConstraint baseColumnNames="DEPTNO"
            baseTableName="DEPT" constraintName="FK_NAME"
            referencedColumnNames="DEPTNO" referencedTableName="EMP"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-6">
        <createIndex indexName="PK_DEPT" tableName="DEPT">
            <column name="DEPTNO"/>
        </createIndex>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-7">
        <createIndex indexName="PK_EMP" tableName="EMP">
            <column name="EMPNO"/>
        </createIndex>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-8">
        <addPrimaryKey columnNames="DEPTNO" tableName="DEPT"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-9">
        <addPrimaryKey columnNames="EMPNO" tableName="EMP"/>
    </changeSet>
</databaseChangeLog>

{% endhighlight %}
</details>
<br>

## Additional Functionality with Liquibase Pro
While Liquibase Community stores all *changeSets* in a *changelog*, Liquibase Pro creates a directory called *Objects* and places the directory at the same level as your *changelog*. The *Objects* directory contains a subdirectory for each of the following stored logic types. 
- package
- packagebody
- function
- storedprocedure
- trigger
- view

>**Note:** Not all database platforms support all of these types.

### Example 

<details>
<summary style="font-size:125%;color:blue;">Liquibase Pro <i>changelog</i></summary>

<br>
{% highlight xml %}

<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
    <changeSet author="Administrator (generated)" id="1571345362466-8">
           <pro:createTrigger disabled="false" path="objects/trigger/TS_T_EXEMPLAR_SEQEXEMPLAR.sql" relativeToChangelogFile="true" tableName="T_EXEMPLAR" triggerName="TS_T_EXEMPLAR_SEQEXEMPLAR"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-12">
           <createView fullDefinition="true" path="objects/view/OREDERS_VIEW.sql" relativeToChangelogFile="true" viewName="OREDERS_VIEW"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-14">
           <createProcedure path="objects/storedprocedure/P_CUSTOMER_HAS_NUM_FILM.sql" procedureName="P_CUSTOMER_HAS_NUM_FILM" relativeToChangelogFile="true"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-20">
           <pro:createFunction functionName="F_CUSTOMER_HAS_NUM_FILM" path="objects/function/F_CUSTOMER_HAS_NUM_FILM.sql" relativeToChangelogFile="true"/>
       </changeSet>
</databaseChangeLog>
{% endhighlight %}
</details>
