angular.module('inboxTest')
.controller('toolbarController', toolbar);

function toolbar() {
    const vm = this;

    vm.selectAll = function(mail) {
        console.log(mail)
        for (var i = 0; i < mail.length; i++) {
            mail[i].selected = true;
        }
    }

    vm.totalSelected = function(mail) {
        var count = 0
        for (var i = 0; i < mail.length; i++) {
            if(mail[i].selected == true){
                count++
            }
        }
        return count
    }
}