echo "修改中..."

bash ./zfile/bin/stop.sh

sed -i '17c spring.datasource.driver-class-name=org.sqlite.JDBC ' ./zfile/WEB-INF/classes/application.properties
sed -i '18c spring.datasource.url=jdbc:sqlite:${zfile.db.path}' ./zfile/WEB-INF/classes/application.properties
#sqlite部分

sed -i '21c #spring.datasource.driver-class-name=' ./zfile/WEB-INF/classes/application.properties
sed -i '22c #spring.datasource.url=' ./zfile/WEB-INF/classes/application.properties
sed -i '23c #spring.datasource.username=' ./zfile/WEB-INF/classes/application.properties
sed -i '24c #spring.datasource.password=' ./zfile/WEB-INF/classes/application.properties
#mysql部分

echo "修改完成"