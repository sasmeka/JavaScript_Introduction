function getName(id_kunci = null) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {

            data.forEach((value) => {
                let { id, name } = value

                if (id_kunci != null) {
                    if (id == id_kunci) {
                        console.log(`id : ${id}, nama : ${name}`)
                    }
                } else {
                    console.log(`id : ${id}, nama : ${name}`)
                }

            })

        })
        .catch((err) => console.log(err))
}
getName(5)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach((value) => {
//             let { id, name } = value
//                     console.log(`id : ${id}, nama : ${name}`)
//         })
//     })
//     .catch((err) => console.log(err))