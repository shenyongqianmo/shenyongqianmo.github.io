---
lang: zh-CN
# title为网页标题
title: 首页
description: 首页
---

# Contents
[[toc]]


## Hello VuePress
## TestContents
- [GitHub](https://github.com) :cherry_blossom: 
- VuePress 2 已经发布 :tada:
- List item 3
- [三角函数](advanced%20math/三角函数.md)
- [函数奇偶性判断](./advanced%20math/函数奇偶性判断.md)

## This is a second title

> This is a quote

### 代码块

```java{1,3-4}:no-line-numbers
public class Test{
    public static void main(){
        System.out.println("Hello,World");
    }
}
```

### v-pre
> v-pre​ <br/>
> 跳过该元素及其所有子元素的编译

`代码块中默认开启`
```md:
1 + 2 + 3 = {{1+2+3}}
```

`使用no-v-pre`
```md:no-v-pre
1 + 2 + 3 = {{1+2+3}}
```

### markdown中使用组件
> 这是默认主题内置的 `<Badge />` 组件
> `<Badge text="演示" />` : 
> <Badge text="演示" />

### 静态资源
#### 一幅图片
![飘雪](./.vuepress/public/images/飘雪.png)
#### 

