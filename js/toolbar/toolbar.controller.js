angular.module('inboxTest')
.controller('toolbarController', toolbar);

function toolbar() {
    const vm = this;

    vm.selectAll = function(mail) {
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

    vm.selectNone = function(mail) {
        for(var i = mail.length -1; i >= 0; i--){
            mail[i].selected = false;          
        }
    }

    vm.totalRead = function(mail) {
        var count = 0
        for(var i=0; i< mail.length; i++){
            if(mail[i].read == true){
                count++
            }
        }
        return count
    }

    vm.markRead = function(mail) {
        for(var i=0; i < mail.length; i++) {
            if(mail[i].selected == true){
                mail[i].read = true;
            }
        }
    }

    vm.markUnread = function(mail) {
        for(var i= mail.length -1; i>= 0; i--){
            if(mail[i].selected == true){
                mail[i].read = false;
            }
        }
    }
}