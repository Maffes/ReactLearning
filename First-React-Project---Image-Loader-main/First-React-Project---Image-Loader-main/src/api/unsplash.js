import axios from "axios";

//used to pre-programt he API instead of having it all in the get method
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YFsz_1REGrlLBLHQ1_3363w-KZP709eNkedIys6o0mU'
  }
})


