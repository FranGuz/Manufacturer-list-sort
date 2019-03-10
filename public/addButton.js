(function(){

    var addButton ={
        bindings: {
        },
        template: `
        <button id="addBtn">Add Now</button>
        <add-Modal></add-Modal> 
        `,
        controller: function (){
            var addBtn = document.getElementById("addBtn");

            var modal = document.getElementById('addModal');

            addBtn.onclick = function() {
                modal.style.display = "block";
                }

        }
    }
    
    
    angular
    .module("moduleApp")
    .component("addButton",addButton)
    
    })();