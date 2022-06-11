fetch('https://reqres.in/api/users',{
    method:'POST',
    body: JSON.stringify(
        {
            name: 'user 1'
        }
    ),
    headers:{
        'content-type':'application/json'
    }

})
.then(res=> res.json() )
.then(data=>console.log(data))