chmod +x ./bash/*.sh
echo "欢迎使用zfile一键脚本"
echo "1.启动zfile"
echo "2.停止zfile"
echo "3.更新zfile"
echo "4.切换数据库为sqlite"
echo "5.切换数据库为mysql"
echo "6.开启保活"
echo "7.关闭保活"
echo "0.退出脚本"
read -e -p " 请输入数字 [0-7]:" choose
    if [[ ${choose} == "1" ]]; then
        bash main.sh
    elif [[ ${choose} == "2" ]]; then
        bash ./zfile/bin/stop.sh
    elif [[ ${choose} == "3" ]]; then
        bash ./bash/update.sh
    elif [[ ${choose} == "4" ]]; then
        bash ./bash/switchdbsqlite.sh
    elif [[ ${choose} == "5" ]]; then
        bash ./bash/switchdbmysql.sh
    elif [[ ${choose} == "6" ]]; then
        bash ./bash/stayalive.sh
    elif [[ ${choose} == "7" ]]; then
        bash ./bash/stayalivecancel.sh
    elif [[ ${choose} == "0" ]]; then
        exit 1
    else
        echo -e " ${Error} 请输入正确的数字"
        exit 1
    fi
