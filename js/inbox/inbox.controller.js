angular.module('inboxTest').controller('inboxController', inboxController);

function inboxController($http) {
    const vm = this;

    $http.get('http://localhost:8082/api/messages').then(function(response){
        console.log(response)
        vm.mail = response.data['_embedded'].messages;

    })
    

    
    vm.starMessage = function(mail){
        console.log(mail)
        mail.starred = true;
    }

    vm.unStar = function(mail){
        mail.starred = false;
    }
}





// vm.mail = [
    // {
    //     "id": 1,
    //     "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    //     "read": false,
    //     "starred": true,
    //     "selected": false,
    //     "labels": ["dev", "personal"]
    // },
    // {
    //     "id": 2,
    //     "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    //     "read": false,
    //     "starred": false,
    //     "selected": true,
    //     "labels": []
    // },
    // {
    //     "id": 3,
    //     "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    //     "read": false,
    //     "starred": true,
    //     "selected": false,
    //     "labels": ["dev"]
    // },
    // {
    //     "id": 4,
    //     "subject": "We need to program the primary TCP hard drive!",
    //     "read": true,
    //     "starred": false,
    //     "selected": true,
    //     "labels": []
    // },
    // {
    //     "id": 5,
    //     "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    //     "read": false,
    //     "starred": false,
    //     "selected": false,
    //     "labels": ["personal"]
    // },
    // {
    //     "id": 6,
    //     "subject": "We need to back up the wireless GB driver!",
    //     "read": true,
    //     "starred": true,
    //     "selected": false,
    //     "labels": []
    // },
    // {
    //     "id": 7,
    //     "subject": "We need to index the mobile PCI bus!",
    //     "read": true,
    //     "starred": false,
    //     "selected": false,
    //     "labels": ["dev", "personal"]
    // },
    // {
    //     "id": 8,
    //     "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    //     "read": true,
    //     "starred": true,
    //     "selected": false,
    //     "labels": []
    // }
    // ]