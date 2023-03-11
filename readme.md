## zfile on replit（未完成）

### 特点
1. 预置已安装好的zfile，运行main.sh即可使用（数据库位于/.zfile-v4/db)
2. 开启自动保活（来自github@jzjbyq）
3. 后续升级简单
4. 没了

### 如何使用
1. 复制本项目地址，在replit上注册/登录，点击Create Repl
2. 点击 Import from Github,填入刚才复制的项目地址
3. 修改Languages为Bash,点击蓝色的Import from Github
4. 等到Import完成后，点击绿色按钮直接运行即可

### 升级
在console处输入：
 ./update.sh

### 数据库
 默认使用sqlite，如需切换请：
 ./switch.sh