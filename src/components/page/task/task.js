// 任务
// 
// 标题
// 截止日期
// 分数

var Vue = require('/lib/vue');

var list = Vue.component('task-list', {
    data: function() {
        return {
            type: 'task',
            title: '',
            deadline: '',
            reward: 0,
            priority: 0
        };
    },
        
});