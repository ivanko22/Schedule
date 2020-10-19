
fetch("/class", {
    method: "get"
})
    .then(response => response.json())
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    });