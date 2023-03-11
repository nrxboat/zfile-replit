echo -n "请输入mysql数据库表名：" 
read dbclassname
sed -i '21c spring.datasource.driver-class-name='"$dbclassname" test.txt