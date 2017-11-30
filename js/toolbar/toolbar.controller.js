angular.module('inboxTest')
    .controller('toolbarController', toolbar);

function toolbar($http) {
    const vm = this;


    vm.selectAll = function (mail) {
        for (var i = 0; i < mail.length; i++) {
            mail[i].selected = true;
        }
    }

    vm.totalSelected = function (mail) {
        var count = 0
        for (var i = 0; i < mail.length; i++) {
            if (mail[i].selected == true) {
                console.log(mail[i].selected)
                count++
            }
        }
        return count
    }

    vm.selectNone = function (mail) {
        for (var i = mail.length - 1; i >= 0; i--) {
            mail[i].selected = false;
        }
    }

    vm.totalUnread = function (mail) {
        var count = 0
        for (var i = 0; i < mail.length; i++) {
            if (mail[i].read == false) {
                count++
            }
        }
        return count
    }

    vm.totalRead = function (mail) {
        var count = 0
        for (var i = 0; i < mail.length; i++) {
            if (mail[i].read == true) {
                count++
            }
        }
        return count
    }


    vm.readMessage = function (mail, selectedMail, ifRead) {
        // console.log(mail)
        let allMail = mail
        for (var i = 0; i < allMail.length; i++) {
            // console.log(allMail.selected)
            if (allMail[i].selected == undefined) {
                
                console.log('da fuq happened bruh')
            } else {
                console.log(allMail.id)
                let selectedMail = allMail[i].id
                let data = {
                    "messageIds": [selectedMail],
                    "command": "read",
                    "read": ifRead
                }
                $http.patch('https://crappy-inbox-app.herokuapp.com/api/messages', data).then(() => {
                    console.log('patched bitch')
                    $http.get('https://crappy-inbox-app.herokuapp.com/api/messages').then(function (response) {
                        // console.log(response)
                        vm.mail = response.data['_embedded'].messages;

                    })
                })

            }
        }
    }


    // vm.markRead = function(mail) {
    //     for(var i=0; i < mail.length; i++) {
    //         if(mail[i].selected == true){
    //             mail[i].read = true;
    //         }
    //     }
    // }

    // vm.markUnread = function(mail) {
    //     for(var i= mail.length -1; i>= 0; i--){
    //         if(mail[i].selected == true){
    //             mail[i].read = false;
    //         }
    //     }
    // }

    vm.removeMessages = function (mail) {

        for (var i = mail.length - 1; i >= 0; i--) {

            if (mail[i].selected == true) {
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

    vm.changeLabels = function (selected, mail) {
        console.log(selected);

        for (var i = 0; i < mail.length; i++) {
            var arr = mail[i].labels
            console.log(arr)

            if (mail[i].selected == true) {
                if (arr.includes(selected) == false) {
                    arr.push(selected)
                }

            }

        }
    }

    vm.removeLabels = function (selected, mail) {
        console.log(selected);

        for (var i = 0; i < mail.length; i++) {
            var arr = mail[i].labels
            console.log(arr)

            if (mail[i].selected == true) {
                if (arr.includes(selected) == true) {
                    var labelIndex = arr.indexOf(selected)
                    arr.splice(labelIndex, 1)
                }

            }

        }
    }
}