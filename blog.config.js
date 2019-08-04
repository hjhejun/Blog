module.exports =  {
  // 首页 logo 展示数据
  github: 'https://github.com/',
  email: 'aa@gmail.com',
  qq: '2345678',
  // 输入框默认值
  title: 'June | Blog',
  // 是否其他作者发布的文章是否展示, 更具 user.name 做对比
  author: true,
  // 背景图数组，随机展示
  bg_img: [
    require('./src/assets/index_bg2.jpg'),
    require('./src/assets/index_bg.jpg'),
    require('./src/assets/index_bg4.jpg'),
    require('./src/assets/index_bg3.jpg'),
    require('./src/assets/index_bg5.png'),
    require('./src/assets/index_bg6.jpg')
  ],
  // 登陆 github 相关信息
  user: {
    name: "imhejun",
    repo: "Blog",
    client_id: 'd0f2632f522fcaf07e67',
    client_secret: 'a559b074d090407ef8c6a6b25f0b690c4ad5374e'
  },
}
