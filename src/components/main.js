require('flow');
var Vue = require('../lib/vue');

window.app = new Vue({
    el: 'html',
    ready: function() {
        console.log('app on');
    }
});