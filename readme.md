## zfile on replit（附一键管理脚本）

### 特点
1. 预置已安装好的zfile，运行main.sh即可使用（数据库位于./.zfile-v4/db)
2. 可开启自动保活（来自github@jzjbyq）
3. 后续升级简单
4. 修复了zfile在replit部署中的问题
5. 没了...大概？

### demo
https://zfile.isriro.icu

### 如何使用

#### 
1. 复制本项目地址，在replit上注册/登录，点击Create Repl
2. 点击 Import from Github,填入刚才复制的项目地址
3. 修改Languages为Bash,点击蓝色的Import from Github
4. 等到Import完成后，在console中输入bash zfile.sh然后回车

#### 教育版
未测试，之后再补

### 注意事项
1. 默认使用sqlite数据库，如有需求请运行zfile.sh切换数据库
2. 自动保活默认为关闭状态，自行决定是否启用（谨慎，滥用可能导致项目被ban）
3. 鉴于replit免费项目性能较差，点击运行后可能需要等一会才能见到webview
4. 创建repl后请不要修改项目名称，否则可能会出现问题





（花两个小时现学bash做出来的脚本，做的比较烂，请见谅）