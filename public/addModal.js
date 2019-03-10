(function(){

    var addModal ={
        bindings: {
        },
        template: `
        <manu-list manu=$ctrl.manu></manu-list> 
        <div id=addModal>
            <div class="modal-content">
                <h3>Add New Manufacturer Name <span class="close">&times;</span> </h3>
                <h4>Manufacturer Name</h4> 
                <input type="text" placeholder="Manufacturer Name" ng-model="form.add">
                <div class="buttons">
                    <button class="modalButton" id="closeBtn">Cancel</button>
                    <button class="modalButton" ng-click="$ctrl.click(form.add)">Submit</button> 
                </div>
            </div>
        
        </div>
        `,
        controller: function (){
            var $ctrl = this;
            var modal = document.getElementById('addModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("closeBtn");
            $ctrl.manu = ["AAA Manu","Mansfield","Chicago"];
            $ctrl.click=function(add){
                $ctrl.manu.push(add)
                modal.style.display = "none";
            }
            span.onclick = function() {
            modal.style.display = "none";
            }
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
            close.onclick = function() {
            modal.style.display = "none";
                }
        }
            
    }
    
    
    angular
    .module("moduleApp")
    .component("addModal",addModal)
    
    })();