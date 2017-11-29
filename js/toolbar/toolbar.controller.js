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
            // console.log(mail[i].selected)
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

    vm.totalUnread = function(mail){
        var count =0
        for(var i=0; i< mail.length; i++){
            if(mail[i].read == false){
                count++
            }
        }
        return count
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

    vm.removeMessages = function(mail) {
        
        for(var i=mail.length -1; i>= 0; i--){
            
            if(mail[i].selected == true){
                console.log(mail[i])
                mail.splice(i, 1)
            }
        }
    }

    // vm.removeMessages = function(mail) {
        
    //     for(var i=0; i< mail.length; i++){
            
    //         if(mail[i].selected == true){
    //             console.log(mail[i])
    //             mail.splice(i, 1)
    //             return vm.removeMessages(mail)
    //         }
    //     }
    // }

    vm.allLabels = [
        {
            "id": 1,
            "label": "dev"
        },
        {
            "id": 2,
            "label": "gschool"
        },
        {
            "id": 3,
            "label": "personal"
        }
    ]

    vm.changeLabels = function(selected, mail){
        console.log(selected);
        
        for(var i=0; i< mail.length; i++){
            var arr = mail[i].labels
            console.log(arr)

            if(mail[i].selected == true){
                if(arr.includes(selected) == false){
                    arr.push(selected)                   
                }

            }
            
        }
    }

    vm.removeLabels = function(selected, mail){
        console.log(selected);
        
        for(var i=0; i< mail.length; i++){
            var arr = mail[i].labels
            console.log(arr)

            if(mail[i].selected == true){
                if(arr.includes(selected) == true){
                    var labelIndex = arr.indexOf(selected)
                    arr.splice(labelIndex, 1)             
                }

            }
            
        }
    }
}