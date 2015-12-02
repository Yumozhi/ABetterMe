
var Vue = require("lib/vue.js");

var flow = Vue.component("layout-flow", {
    template: __inline('flow.html'),
    
    data: function() {
        return { width: 0 };
    },
    methods: {
        resize: function() {

        },
    }
});

module.exports = flow;