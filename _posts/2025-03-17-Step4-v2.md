---
title: 'Step4 / Quarrel with Daddy'
date: 2025-03-02
permalink: /posts_2025_03_blog-1/
tags:
  - nonsense
  - Experiment Memo
  - unhappy
---


---



**Step4**   
======   
- [x] 可以大幅度提升的是分开的 也就是proposal的合并效果更明显优先级更高
- [ ] superpoint的自适应？
- [x] 角度变化小的2D mask可以舍弃，本质上是重复，没有意义
- [x] 带入每一个mask_m3的clip标签可以随机查看有没有label理解错误，速速整理代码OK？
- [x] mask_m3如果重合很高比如超过90%删除，保留大的mask或者中间的 704的water_cooler是一个很好的例子
- [x] 选择时候角度的旋转，保证视角多样性
- [x] 考完试尝试一下spt的选择 和 单点的边界问题合不合适 



<div class="blog_image_container">
<img src="../images/blog/2025_03/01-01.png" alt="Visualization">
</div>

<div class="blog_image_container">
<img src="../images/blog/2025_03/01-02.png" alt="Visualization">
</div>

是在mask下的覆盖点数还是IoU？如何追溯呢？看像素坐标来追溯，
<div class="blog_image_container">
<img src="../images/blog/2025_03/01-03.png" alt="Visualization">
</div>

---
**Quarrel with Daddy**   
======  
一言难尽实际上不是Quarrel啦，过几天搜点资料展开写一写然后写给以后成熟的我看一看