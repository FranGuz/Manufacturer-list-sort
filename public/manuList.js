(function(){

    var manuList ={
        bindings: {
            manu: "<"
        },
        template: ` 
        <input type="text" placeholder="Manufacturer Name" ng-model="filter">
        <h4> Manufacturer Name </h4>
        <ul>
                <li ng-repeat="thing in $ctrl.manu | orderBy | filter: filter track by $index">
                {{thing}} 
                <a ng-click=$ctrl.removeManu($index)>&times;</a>
                </li>
        </ul>`,
        controller: function () {
            var $ctrl=this
            $ctrl.removeManu=function(index){
                $ctrl.manu.splice(index,1);
            }
    }
    }
    
    
    angular
    .module("moduleApp")
    .component("manuList",manuList)
    
    })();