//If we get array of JSON file then we will use Array to fetch all the data and show
function getData(){
    //It will fetch the data, Axios is bit similar to fetch(), in Axiox() we gave to not convert the data to jSon is done bydefault
    const response = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    const arr = response.data;
    for(let i = 0 ; i < arr.length ; i++){
    document.getElementById("post").innerHTML = arr[i].body;
    }
    
}
getData();