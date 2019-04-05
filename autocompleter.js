// JavaScript source code


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
        }
    },
    template:
        `<div class="autocompleter">
          <ul class ="autocomplete-results">
             <li class="autocomplete-result"
                   v-for="(result, i) in results" :key="i" @click="test($event)">{{ result }}</li>
          </ul>
          <div class=atbuttons>
          <div class ="buttonMD12">
                    <button class ="foo-button mdc-button"  onclick="window.location.href = 'wyniki.html';">Szukaj w Google</button>
                </div>
                <div class ="buttonMD22">
                    <button class ="foo-button mdc-button"  onclick="window.location.href = 'wyniki.html';">Szczesliwy traf</button>
                </div>
           </div>
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