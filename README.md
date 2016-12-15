# React-Scroll-Lazyload  
// 懒加载原理
/*
  通过某种条件达到延迟图片开始加载时间

  步骤
  1、找到滚动元素，确定是HTMLElement还是全局
  2、判断需要滚动展示的元素是否显示在滚动元素中（判断方法：滚动展示元素的top是否滚动元素的top + height中）
  3、如果滚动展示的元素在滚动元素中，首先判断该元素是否已经加载过1次图片状态，如果没有那么将真实图片地址，并赋予一个className

  行为、状态表示
  根据组件划分原则，懒加载可是按交互行为进行划分成为独立的组件，
  组件一般是以图片作为载体；
  组件的内部状态：
    pending (初始化)、loading(开始加载图片)

  组件的行为：
    addListener、destroyListener、findScrollNode、inVisualNode

  组件的props：
    哪些是必要的，哪些是可以提供默认值的  
