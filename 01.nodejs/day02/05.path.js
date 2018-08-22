/*
  path： 环境变量
    - 系统环境使用变量
    - 能让我们在cmd命令行工具中任意位置访问指定文件
    - 分类
      用户环境变量
        只能当前用户使用（一般配置这个）
      系统环境变量
        所有用户都能使用
    - 查找规则
      - 首先在当前目录下查找，如果找到就运行
      - 如果没找到了，去系统环境变量下查找（遍历每一个路径和路径下所有的文件），如果找到就运行
      - 如果没找到，去用户环境变量下查找，如果找到运行
      - 如果没找到，就会报错 （'xxx' 不是内部或外部命令，也不是可运行的程序或批处理文件。）
 */
