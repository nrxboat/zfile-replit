echo Hello World
URL=${REPL_SLUG}.${REPL_OWNER}.repl.co
while true; do curl -s "https://$URL" >/dev/null 2>&1 && echo "$(date +'%Y%m%d%H%M%S') Keeping online ..." && sleep 300; done & chmod +x $ZFILE_INSTALL_PATH/bin/*.sh    

./zfile/bin/start.sh