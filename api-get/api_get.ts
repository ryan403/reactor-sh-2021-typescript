declare function require(name:string):any;
var axios = require('axios');

interface Post{
    userId:number;
    id:number;
    title:string;
    body:string
}

var axios_config = {
    method:'get',
    url:'https://jsonplaceholder.typicode.com/posts'
}

axios(axios_config)
.then(function(response:any){
    let result = response.data as Post[];
    console.log(result[0].title);
})
.catch(function(error:any){
    console.log(error);
})


