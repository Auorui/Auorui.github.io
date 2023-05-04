// 导航栏
module.exports = {
  text: "语言",
  link: "/language/",
  items: [
    {
      text: "Python",
      link: "/python/",
    },
    {
      text: "CV",
      link: "/cv/",
    },
    {
      text: "前端",
      items: [
        { text: "VuePress", link: "/vuepress/" },
      ],
    },
  ],
};
