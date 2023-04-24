<template><div><h1 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h1>
<nav class="table-of-contents"><ul><li><router-link to="#hello-vuepress">Hello VuePress</router-link></li><li><router-link to="#testcontents">TestContents</router-link></li><li><router-link to="#this-is-a-second-title">This is a second title</router-link><ul><li><router-link to="#代码块">代码块</router-link></li><li><router-link to="#v-pre">v-pre</router-link></li><li><router-link to="#markdown中使用组件">markdown中使用组件</router-link></li><li><router-link to="#静态资源">静态资源</router-link></li></ul></li></ul></nav>
<h2 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h2>
<h2 id="testcontents" tabindex="-1"><a class="header-anchor" href="#testcontents" aria-hidden="true">#</a> TestContents</h2>
<ul>
<li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a> 🌸</li>
<li>VuePress 2 已经发布 🎉</li>
<li>List item 3</li>
<li><RouterLink to="/advanced%20math/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0.html">三角函数</RouterLink></li>
<li><RouterLink to="/advanced%20math/%E5%87%BD%E6%95%B0%E5%A5%87%E5%81%B6%E6%80%A7%E5%88%A4%E6%96%AD.html">函数奇偶性判断</RouterLink></li>
</ul>
<h2 id="this-is-a-second-title" tabindex="-1"><a class="header-anchor" href="#this-is-a-second-title" aria-hidden="true">#</a> This is a second title</h2>
<blockquote>
<p>This is a quote</p>
</blockquote>
<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3>
<div class="language-java" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello,World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div></div><h3 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h3>
<blockquote>
<p>v-pre​ <br/>
跳过该元素及其所有子元素的编译</p>
</blockquote>
<p><code v-pre>代码块中默认开启</code></p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>1 + 2 + 3 = {{1+2+3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>使用no-v-pre</code></p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1 + 2 + 3 = {{1+2+3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="markdown中使用组件" tabindex="-1"><a class="header-anchor" href="#markdown中使用组件" aria-hidden="true">#</a> markdown中使用组件</h3>
<blockquote>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件
<code v-pre>&lt;Badge text=&quot;演示&quot; /&gt;</code> :</p>
<Badge text="演示" /></blockquote>
<h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3>
<h4 id="一幅图片" tabindex="-1"><a class="header-anchor" href="#一幅图片" aria-hidden="true">#</a> 一幅图片</h4>
<p><img src="@source/.vuepress/public/images/飘雪.png" alt="飘雪"></p>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
</div></template>


