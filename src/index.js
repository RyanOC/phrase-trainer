import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

//prototype example: http://jsfiddle.net/ryanoc/sq2dV/288/

// Create a new component. This component should produce some html
class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null,
            list: null,
            has_results:false
         };
        
        this.videoSearch('raspberry pi');
    }
    
    videoSearch(term){      
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             })
        });
        
    }
    
    render(){
        //const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 900);
        
        
        return (
            <div>

                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos } />
            </div>
        );
    }









    componentWillMount() {
        let url = 'api/videolist',
            self = this;

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('GET', url, true);

            request.onload = function() {
                //console.log(request.response);
                let response = JSON.parse(request.response);
                console.log(response);

                if(response.data.length > 0){
                    
                    console.log(response.data);

                    self.setState({
                        list: response.data,
                        has_results: true
                    });
                }
            };

            request.onerror = function() {
                reject(Error("Network Error"));
            };

            request.send();
        });
    }


}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));