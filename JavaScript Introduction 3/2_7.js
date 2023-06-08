function devideAndSort(bilangan) {

    let bilangan_string = bilangan.toString() + '0'
    let array = []
    let result_string = ''

    for (let i = 0; i < bilangan_string.length; i++) {
        if (bilangan_string[i] == '0') {
            result_string = result_string + array.sort((a, b) => { return a - b }).join('')
            array = []
        } else {
            array.push(bilangan_string[i])
        }
    }

    console.log(parseInt(result_string))
}


devideAndSort(5956560159466056)