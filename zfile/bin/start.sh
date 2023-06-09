#!/bin/bash

source /etc/profile
cd `dirname $0`
BIN_DIR=`pwd`
cd ..
DEPLOY_DIR=`pwd`
CLASSES=$DEPLOY_DIR/WEB-INF/classes
echo "apm home: $APM_AGENT_HOME"
MAIN=im.zhaojun.zfile.ZfileApplication
JMX_HOST_NAME=0.0.0.0
JMX_PORT=1099

BITS=`java -version 2>&1 | grep -i 64-bit`
JAVA_MEM_OPTS=" -Djava.security.egd=file:/dev/./urandom -Dfile.encoding=utf-8 -Djava.net.preferIPv4Stack=false -Djava.net.preferIPv4Addresses=true -Djava.awt.headless=true "

SERVER_NAME="zfile-4.1.4"

if [ -z "$SERVER_NAME" ]; then
    SERVER_NAME=`hostname`
fi

PIDS=`ps aux | grep java | grep "$CLASSES" |awk '{print $2}'`
if [ -n "$PIDS" ]; then
    echo "ERROR: The $SERVER_NAME already started!"
    echo "PID: $PIDS"
    exit 1
fi

if [ -n "$SERVER_PORT" ]; then
    SERVER_PORT_COUNT=`netstat -tln | grep $SERVER_PORT | wc -l`
    if [ $SERVER_PORT_COUNT -gt 0 ]; then
        echo "ERROR: The $SERVER_NAME port $SERVER_PORT already used!"
        exit 1
    fi
fi


LIB_DIR=$DEPLOY_DIR/WEB-INF/lib
LIB_JARS=`ls $LIB_DIR|grep .jar|awk '{print "'$LIB_DIR'/"$0}'|tr "\n" ":"`

JAVA_OPTS=" -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Duser.timezone=GMT+08"

JAVA_DEBUG_OPTS=""
if [ "$1" = "debug" ]; then
    JAVA_DEBUG_OPTS=" -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n "
fi

OPTS=""
for key in "$@"
do
    OPTS="$OPTS $key"
done
echo "OPTS param: $OPTS"

if [ "$APM_AGENT_HOME" ]; then
    echo "APM plugin detected,auto enable APM plugin,apm path:$APM_AGENT_HOME"
    JAVA_OPTS=$JAVA_OPTS" -javaagent:$APM_AGENT_HOME/apm-agent-2.1.6-rc2.jar"
fi

JAVA_JMX_OPTS=""
if [ "$1" = "jmx" ]; then
    JAVA_JMX_OPTS=" -Djava.rmi.server.hostname=$JMX_HOST_NAME -Dcom.sun.management.jmxremote.port=$JMX_PORT -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false "
fi

echo -e "Starting the $SERVER_NAME ...\c"
nohup java $JAVA_OPTS $JAVA_MEM_OPTS $JAVA_DEBUG_OPTS $JAVA_JMX_OPTS -classpath $CLASSES:$LIB_JARS $MAIN $OPTS > nohup.out 2>&1 < /dev/null &

echo "OK!"
PIDS=`ps aux | grep java | grep "$DEPLOY_DIR" | awk '{print $2}'`
echo "PID: $PIDS"
