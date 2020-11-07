


var getLooser = new getLooser;
function getLooser(){
    // console.log('HI');
    this.applicants = ['sabbir'];
    this.init = function(){
        this.addApplicant();
    };
    this.showList = function(){
        var parent = document.querySelector('.applicant_list_wraper');
        var template = '';

        for (var i = 0; i < this.applicants.length; i++) {
            template += '<span class="name-tag" data-id="'+i+'">'+this.applicants[i]+'</span>';   
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
    };

    this.addApplicant = function(){
        var $this = this;//alies
        function generateList(input){
            var value = input.value;
            if ($this.checkValid(value.toLowerCase())) {
                $this.applicants.push(value.toLowerCase());
                input.value = '';
                $this.showList();

            } else {
                alert('Not valid');
            }
        };

        var addBtn = document.querySelector('#add_applicant');
        addBtn.addEventListener('click', function(){
            
            var input = document.querySelector('#applicant_value');
            generateList(input);
        });
    };

    
    this.checkValid = function (value){
        if (this.applicants.indexOf(value) < 0 && value !='') {
            return true;
        }
        return false;
    };



    
    this.init();

    
};
