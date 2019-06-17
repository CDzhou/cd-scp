# cd-scp
用于webpack打包后scp到服务器的plugin（基于sftp传输，请确认服务器是否支持）
# installation

```
npm i -D cd-scp
```
# usage
请在webpack配置中的plugins中使用
```
new cdScp({
      path: resolve(__dirname, "../dist/"), //需上传路径（可以和output保持一致）
      ssh: {
        host: "xxxxx",
        port:'xxx',
        username: "xxx",
        password: "xxxx",
        path: "~"
      }
    })

```
通过私钥连接

```
new cdScp({
      path: resolve(__dirname, "../dist/"), //需上传路径（可以和output保持一致）
      ssh: {
        host: "xxx",
        port:'xxx',
        username: "xxx",
        privateKey: fs.readFileSync('私钥地址'),
        passphrase: "私钥密码",
        path: "~"}
    })

```


