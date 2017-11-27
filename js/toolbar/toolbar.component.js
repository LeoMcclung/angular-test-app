angular.module('inboxTest')
.component('toolBar', {
    templateUrl: '/js/toolbar/toolbar.template.html',
    bindings: {
        mail: "="
    }
})