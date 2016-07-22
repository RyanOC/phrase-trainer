import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
      
    return (
        <li className="list-group-item col-md-4" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>    
            </div>
        </li>              
    );
    
    
};

export default VideoListItem;