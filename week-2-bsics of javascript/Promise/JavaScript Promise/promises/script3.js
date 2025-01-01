//////////////////// PROMISE API ///////////////////

//1st Promise API : 
// [' Promise.all(array of promises) '] : it is used to handle multiple Promises together/parellel, if there are multiple API's or promise call, it will handle that
//*******  CASE 1: when all the promise is resolved  *********
// Promise.all([p1,p2,p3]) // this way we will call mutiple Promise parallely 
// the output that the Promise will return will also be an array eg: [val1, val2, val3]
//suppose there are three promise passed , p1,p2,p3 & p1-takes 3sec, p2- takes 1sec & p3-takes 2sec to finish, but here the catch is, since 
//promise makes all the API call parallel so the final output will comes after 3sec, which means that it will wait for all of them to finish

//*******  CASE 2: when one of the promise gets rejected  *********
// Promise.all([p1,p2,p3]) : suppose p1-takes 3sec , p2-takes 1s & p3-takes 2s to finish, but after 1sec 'p2' throws an error, therefore the finial output will be ERROR ,
// it will be the same error which is return by 'p2' , after 1sec it will not wait fro the other promises to be successfull or reject 
// saf saf bat itni hai ki 1sec k bad jase promise reject howa uske bad chahe jitne v promises hai chahe wo successful ho ya reject ho usse koi mtlb hi nai hai , agr ERROR throw
// ho gaya hai to final out me ERROR hi return ho ga , or wo wahi error ho ga jo 'p2' return kiya hai

//Note: If all the promises is successfull it will give u the collective result , BUT if any one of the promise get's rejeted it will thrown an ERROR
//saf saf bat itni hai agr sare promise successful hai fir to thk hai, but ek v gaad maraya to fir sare mara jayege, 
//According to me overall output Error isliye a raha hai kyu ki, sare promise ka result ek sath ata hai, agr p1-2s, p2-3s & p3-5s le raha hai 
//to final out to 5sec k bad hi ayega or is 5sec k beach me ek v promise reject ho ja raha hai to imidialty final out ERROR reurn ho raha ga.

// 2nd Promise API 
// [' Promise.allSetteled(array of promises) '] : If we have promise p1,p2,p3,p4,p5 & suppose the promise p2 fail, but we still wants the output of our successfull promise then we will use this promise API
// Promise.allSetteled([p1,p2,p3]) : suppose p1-takes 3sec , p2-takes 1s & p3-takes 2s to finish, but after 1sec 'p2' gets rejected, therefore in this case it will wait till 3sec to execute all the promise
// the final output will be [val1, error2, val3], the output will be in the form of Object which contains filed like 'status' and 'value'


// 3rd Promise API 
// [' Promise.race(array of promises) '] : it's like a Race the person which finish 1st will be the winner
// Promise.race([p1,p2,p3]) : suppose p1-takes 3sec , p2-takes 1s & p3-takes 2s to finish, So in this as soon as the first promise get resolve
// it will give the result, in this case p2-takes 1sec to resolve, So the final Output will be val2 (it will return the value of the 1st 'settled' promise).
// If suppose promise 'p2' after 1s get's rejected, then in this case ERROR will be thrown.
// Saf saf bat itna hai ki jo first a raha hai race me bas uski value return ho ge, ab chahe wo 1st promise success ho ya fir reject ho, agr success ho 
// ge to value return ho ge or agr reject to fir Error return ho ge, or jo remaning promise hai usko koi puche ga v nai, mtlb baki promise gaad maraye hmko 
// bas first wale se mtlb hai, ab chahe wo success ho ya reject 


// 4th Promise API 
// [' Promise.any(array of promises) '] : the only difference b/w the above promise(3rd promise) and this promise is that it wait for thr 1st promise to get resolve mtlb
// agr 1st promise reject ho gaya to fir next promise check kre ga ki kya wo resolve ho raha hai ya reject, agr resolve ho raha hai to value return kre ga
// Saf Saf bat itne hai ki tb tk wait kre ga jb tk isko ek successfull promise na mil jaye   
// promise.any([p1,p2,p3]) : suppose p1-takes 3sec , p2-takes 1s & p3-takes 2s to finish, & after 1sec the promise p2 gets rejected then it will wait and check for the next 
// promise which is p3, if it get resolve then it will return the value of primise p3 & if not then it will check for the next promise
// Suppose all the promise get's rejected then in that case the return result will be an AGGRESGATED ERROR & this AGGRESGATED ERROR is array of all the three Error [err1,err2,err3];
