fis.hook('commonjs', {
  // 配置项
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})

fis.match("components/**", {
    isMod: true,
});

fis.match("lib/**", {
    isMod: true,
});