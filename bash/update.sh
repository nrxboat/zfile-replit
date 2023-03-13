bash ./zfile/bin/stop.sh     #停止          
cp /home/runner/zfile-replit/zfile/WEB-INF/classes/allplcation.propperties   /home/runner/zfile-replit #备份配置文件

rm -rf ./zfile   #删除运行目录

export ZFILE_INSTALL_PATH=/home/runner/zfile-replit/zfile     #设置安装目录                        

mkdir -p $ZFILE_INSTALL_PATH && cd $ZFILE_INSTALL_PATH   #创建安装目录并进入   

wget --no-check-certificate https://c.jun6.net/ZFILE/zfile-release.war      #下载最新版本  

unzip zfile-release.war && rm -rf zfile-release.war   #解压        

mv /home/runner/zfile-replit/application.propperties /home/runner/zfile-replit/zfile/WEB-INF/classes/     #恢复配置文件

chmod +x $ZFILE_INSTALL_PATH/bin/*.sh   #授权启动停止脚本  

#bash /home/runner/zfile-replit/main.sh #启动脚本