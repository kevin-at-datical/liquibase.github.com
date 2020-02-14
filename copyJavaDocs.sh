#! /bin/bash
# copyJavaDocs.sh
# copies generated javadocs from `liquibase/liquibase-core/target/apidocs` to `liquibase.github.com/javadoc`

SOURCE_DIR=../liquibase/liquibase-core/target/apidocs
TARGET_DIR=javadoc

cp -r $SOURCE_DIR/* $TARGET_DIR

# use a sed script to remove the "-local-SNAPSHOT" from the version numbers
# that may be included in the different pages. 

for file in $TARGET_DIR/*.html
do
  sed -i 's/-local-SNAPSHOT//g' $file
done

echo "Copied generated javadocs from $SOURCE_DIR to $TARGET_DIR"
