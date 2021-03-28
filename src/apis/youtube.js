import Axios from 'axios';

const KEY = "AIzaSyC4gT7_9oF8qOBagu7JxhDwHRhGozx3w0k";

export default Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});