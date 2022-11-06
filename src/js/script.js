let button = document.querySelector('.button')
button.addEventListener("click", () => {
    const loadData = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const artItemElem = document.querySelector('div');
        artItemElem.innerHTML = '';

        console.log(data.fact)


        const listElm = document.querySelector('.facts');
        listElm.innerHTML += `<p>${data.fact}</p>`

        //     const listElm = document.querySelector('.board__table tbody');
        //     data.forEach((row) => {
        //         listElm.innerHTML += `
        //     <tr>
        //       <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
        //       <td class="board__train">${row.train}</td>
        //       <td class="board__no">${row.no}</td>
        //       <td class="board__to">${row.to}</td>
        //       <td class="board__status">${row.status}</td>
        //       <td class="board__track">${row.track}</td>
        //     </tr>
        //   `
        //     });

    }
    // let button = document.querySelector('.button')
    // button.addEventListener("click", () => {
    //     const facts = document.querySelector('.facts')
    //     facts.innerHTML += ''
    loadData()
})