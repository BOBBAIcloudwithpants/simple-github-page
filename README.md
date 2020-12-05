# Simple Github Profile Page

## 个人信息
- 姓名: 白家栋
- 学号: 18342001
- 邮箱: baijd@mail2.sysu.edu.cn

## 运行方法

```bash
npm install

npm run dev
```

如果您的 3000 端口没有被占用的话，此时前端程序已经启动，您可以访问 `http://localhost:3000/users/:username` 来查看效果. 

## 使用与效果展示

由于我前端的技术有限，一些个人主页上的模块，如: 搜索框，近期活跃度，没有能够实现。这里主要用到了获取用户信息的 api 以及获取用户 repository 的 api。使用的前端框架是 `React`.     

通过修改 url 中的用户名，您可以查看任何您想知道的用户的个人简单主页，如:
- http://localhost:3000/users/bobbaicloudwithpants
![](https://tva1.sinaimg.cn/large/0081Kckwgy1gldbq33yskj325g0u07ez.jpg)    

- http://localhost:3000/users/pmlpml
![](https://tva1.sinaimg.cn/large/0081Kckwgy1gldbsbndjzj324j0u0ajj.jpg)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
