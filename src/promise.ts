export async function a(){
    await new Promise(rel => rel('1')).then(d => {
        console.log(d)
    })
        .then(d => {
            console.log(2);
        })
        .then(d => {
            console.log(3)
        })
        .then(d => {
            console.log(4)
        }).then(d => {
            console.log(4)
        }).then(d => {
            console.log(4)
        }).then(d => {
            console.log(4)
        })
    var t = Date.now();
    await new Promise(rel => {
        rel('22')
    }).then(d => {
        while (Date.now() - t < 1000) { };
        console.log(d)
    })
        .then(d => {
            return new Promise(rel => setTimeout(() => {
                rel('222-b')
            }, 1000))
        }).then(d => console.log(d))
}