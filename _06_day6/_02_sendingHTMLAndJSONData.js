//res.write(), res.send() etc can be directly passed by HTML file or JSON objects

/*
app.get('/', (req,res) => {
    res.send('<h1>hi</h1>');
    // instead oh this html code we can also write JSON object and it will se send as a response
    //or we can write array which will be converted to JSON and then will be passed


    the methods are identical when an object and array are passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON to JSON.
})


*/