echo "停止zfile..."
./zfile/bin/stop.sh  #停止zfile

sed -i '17c #spring.datasource.driver-class-name=org.sqlite.JDBC ' ./zfile/WEB-INF/classed/application.properties
sed -i '18c #spring.datasource.url=jdbc:sqlite:${zfile.db.path}' ./zfile/WEB-INF/classed/application.properties
sed -i '21c spring.datasource.driver-class-name=' ./zfile/WEB-INF/classed/application.properties
sed -i '22c spring.datasource.url=' ./zfile/WEB-INF/classed/application.properties
sed -i '23c spring.datasource.username=' ./zfile/WEB-INF/classed/application.properties
sed -i '24c spring.datasource.password=' ./zfile/WEB-INF/classed/application.properties
#为什么是整行替换？别问，问就是我不会

echo "切换完成，现在请输入数据库信息"
echo -n "请输入mysql数据库表名：" 
read dbclassname #read命令获取用户输入
sed -i '21c spring.datasource.driver-class-name='"$dbclassname" ./zfile/WEB-INF/classed/application.properties  #原来sed可以这么添加内容？反正我看sed使用方法的时候没看到，自己整出来的


echo -n "请输入mysql数据库地址："
read dburl
sed -i '22c spring.datasource.url='"$dburl" ./zfile/WEB-INF/classed/application.properties


echo -n "请输入mysql数据库用户名："
read dbusername
sed -i '23c spring.datasource.driver-class-name='"$dbusername" ./zfile/WEB-INF/classed/application.properties


echo -n "请输入mysql数据库密码："
read dbpassword
sed -i '24c spring.datasource.dbpassword='"$dbpassword" ./zfile/WEB-INF/classed/application.properties


echo "修改完成,请重新运行main.sh"



