# doc generator

This directory contains source code for java program that will generate all the documentation for the
various change types that liquibase supports. These are found in this github project at 
`liquibase.github.com/documentation/changes/`

To re-build the doc generator and run it, first check out and build liquibase itself by
running `mvn clean install package site` in the liquibase project.

Next, update the `pom.xml` in this directory to specify the version of liquibase to use when
generating docuemntation. 

Finally, run `generateChangeDocs.sh` in the root of this project. That shell script
runs `mvn clean package` in this directory (`_doc_generators`), which creates 
`liquibase-docgenerator-1.0.0.local-SNAPSHOT.jar` in the root of the project. It then 
switches to the root directory and runs `java -jar liquibase-docgenerator-1.0.0.local-SNAPSHOT.jar` 
to actually generate the html. 

Check the diffs before comitting the changes. 
