async function getdata(params) {
    //fetch the data from the server
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await reponse.json(); // convert the data to JSON
    console.log(data);

    //Now we have got the data from the server , now How we can use the data in our HTML code
    //converting the innerHTML oto data.body
    document.getElementById("post").innerHTML = data.body 
}
getdata();