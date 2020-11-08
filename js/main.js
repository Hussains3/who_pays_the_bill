


var getLooser = new getLooser;
function getLooser(){
    // console.log('HI');
    this.applicants = ['sabbir'];
    this.init = function(){
        this.addApplicant();
        this.getRendomLooser();
        this.runAgain();
        this.startAgain();
    };
    this.showList = function(){
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';

        for (var i = 0; i < this.applicants.length; i++) {
            template += '<span class="name-tag" data-id="'+i+'">'+this.applicants[i]+'</span>';   
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
        this.deleteOne();
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
    // Get random looser
    this.getRendomLooser = function(){
        var $this =this;
        var show_results = document.querySelector('#show_results');

        function showLooser(){
            var applicantContainer = document.querySelector('.applicant_container');
            var resultsContainer = document.querySelector('.results_container');

            applicantContainer.className += ' hidden';
            resultsContainer.className = 'results_container';

            $this.showRandomUser();



        };
        show_results.addEventListener('click',function(e) {
            if ($this.applicants.length > 1) {
                showLooser();
            } else {
                alert('Need more participents');
            }
        });
    };

    this.showRandomUser = function(){
        var result = document.querySelector('.result');
        var rand = this.applicants[Math.floor(Math.random()*this.applicants.length)];
        result.innerHTML = '';
        result.insertAdjacentHTML('afterbegin','<h3>'+rand+'</h3>');

    };

    // run again
    this.runAgain = function() {
        var $this = this;
        var run_again = document.querySelector('.run_again');
        run_again.addEventListener('click',function(e){
            $this.showRandomUser();
        });

        
    };
    // start again
    this.startAgain =function() {
        var $this = this;
        var start_again = document.querySelector('.start_again');
        start_again.addEventListener('click',function(e){
            var applicantContainer = document.querySelector('.applicant_container');
            var resultsContainer = document.querySelector('.results_container');
            var appliWraper = document.querySelector('.applicant_list_wrapper');

            applicantContainer.className = 'applicant_container';
            resultsContainer.className = 'results_container hidden';
            appliWraper.innerHTML = '';

            $this.applicants = [];
        });
        
    };

    // delete
    this.deleteOne = function(){
        var $this = this;
        var item = document.querySelectorAll('.name-tag');
        function removeIt(element) {
            var attr = parseInt(element.getAttribute('data-id'));
            $this.applicants.splice(attr,1);
            $this.showList();
        };

        for (var i = 0; i < item.length; i++) {
            item[i].addEventListener('click',function(e){
                removeIt(this);
            });
            
        }
    };



    
    this.init();

    
};
