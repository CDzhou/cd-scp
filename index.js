const client = require("./scp.js");
const fs = require("fs");
const { resolve } = require("path");
const zlib = require("zlib");
const compressing = require("compressing");
class cdScp {
  constructor(option) {
    this.path = option.path;
    this.sshOption = option.ssh;
  }
  apply(compiler) {
    compiler.plugin("afterEmit", async (compilation, callback) => {
      let output = resolve(this.path, "../dist.zip");
      try {
        let stat = fs.lstatSync(this.path);
        if (!stat.isFile()) {
          //如果是文件夹
          await compressing.zip.compressDir(this.path, output);
          client.scp(output, this.sshOption, function(err) {
            console.log(err || "上传成功");
          });
        } else {
          client.scp(this.path, this.sshOption, function(err) {
            console.log(err || "上传成功");
          });
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
}

module.exports = cdScp;
