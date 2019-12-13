# typescript-learning
typescript 学习笔记

## 安装 Typescript
npm install -g typescript

## 编译代码
使用命令行，进入ts代码所在的文件夹。
然后执行：tsc ts文件名.ts,(例如tsc greeter.ts) 会自动生成一个greeter.js文件。

## 接口
ES5/6 里面没有定义接口，只有typescript里面定义了接口。
TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。

## 类
类和接口可以一起工作。
在类的构造函数参数上使用public等同于创建了同名的成员变量。

