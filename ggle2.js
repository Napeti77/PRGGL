// JavaScript source code
const button = document.querySelector('.foo-button');
mdc.ripple.MDCRipple.attachTo(button);

Vue.component('v-autocompleter', {
    props: ["input"],
    computed: {
        results: function () {
            let pattern = new RegExp('^' + this.input, 'i');
            let results = window.animals.filter(function (word) {
                return pattern.test(word);
            });

            return results.length > 9 ? results.slice(0, 10) : results;
        }
    },
    
    methods: {
        test: function (e) {
            let el = e.target.innerHTML
            document.getElementById("fsdsdsdsdcx").value = el
            //alert('Hello! ' + el +" "+ this.input)
            //this.input = przesylany ale jak zmienic ?
        }
    },
    template:
        `<div class="autocompleter">
          <ul class ="autocomplete-results">
             <li class="autocomplete-result"
                   v-for="(result, i) in results" :key="i" @click="test($event)">{{ result }}</li>
          </ul>
        </div>`
});

new Vue({
    el: ".main",
    data: function () {
        return {
            inputContent: "",
            showAutocompleter: this.inputContent ? true : false
        }
    }
   


});