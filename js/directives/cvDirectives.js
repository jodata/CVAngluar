'use strict';

angular.module('angular-cv', []);

/*
    Directive to list your education
 */

angular.module('angular-cv').directive('formations', function() {
    return {
        restrict: 'AE',
        scope: {
            datas: '=datasTimeline'
        },
        templateUrl: 'templates/formations.html'
    };
});

/*
    Directive to list your experiences
 */

angular.module('angular-cv').directive('experiences', function() {
    return {
        restrict: 'AE',
        scope: {
            datas: '=datasTimeline'
        },
        templateUrl: 'templates/experiences.html'
    };
});
/*
    Directive to show your personal informations
 */
angular.module('angular-cv').directive('infos', function() {
    return {
        restrict: 'AE',
        scope: {
            datas: '=datasInfos'
        },
        template:   '<p> ' +
                      '<a href="mailto:{{datas.email}}">{{datas.email}}</a> <br />'+ //need some modifications to protect your email address on the web
                      '{{datas.phone}} <br />'+
                      '{{datas.naissance}} <br />'+
                      '{{datas.transport}} <br /> ' +
                    '</p>'+
                    '<p>'+
                        '{{datas.adresse.rue}}<br />'+
                        '{{datas.adresse.CP}}<br />'+
                        '{{datas.adresse.ville}}<br />'+
                    '</p>'

    };
});
