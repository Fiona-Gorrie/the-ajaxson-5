var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: 'Jackson 5',
            errorMessage: null,
            loading: false,
            imgSrc: null,
            riddle: null,
            searchQuery: '',
        };
    },
    methods: {
        fetchGif: function() {
            if (this.riddle !== "5"){
                this.imgSrc = null;
                this.errorMessage = "No gifs for you"
            } else {
            // get the user's input text from the DOM
            // TODO should be e.g. "dance"

            // configure a few parameters to attach to our request
            var api_key = "";
            // TODO should be e.g. "jackson 5 dance"
            var tag = this.tagValue + ' ' + this.searchQuery
        
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
		        .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
		        .then((response) => {
                    
                    // if the response comes back successfully, the code in here will execute.

                    console.log("we received a response!");
                    console.log(response);
                    // TODO
                    // 1. set the imgSrc value in our data to the GIF's image_url inside results
                    
                    this.imgSrc = response.data.image_url;
                    // 2. clear the error message and loading state (since our request just succeede)
                    this.errorMessage = null;
                    this.loading = null;
                })
                .catch(err => {
                    // if something went wrong, the code in here will execute instead of the success function

                    this.loading = false;
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';
                });
            // TODO We've just made a request, so this is a good time to
            // set "loading = true"
                this.loading = true;
            }        
        },
    },
});
