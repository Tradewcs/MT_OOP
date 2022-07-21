const CELLS_COUNT = 40

main()

function main()
{
    let MT = new TuringMachine();

    createStrip(MT.head.strip, CELLS_COUNT);
    
    
}

/**
 * @param {Strip} strip
 */
function createStrip(strip, cellsCount)
{
    let strip_1 = document.querySelector('.machine_strip')
    let head = document.querySelector('.machine_head')
    let state = document.querySelector('.machine_state')

    for (let i = 0; i < cellsCount; i++)
    {
        strip_1.innerHTML += `<td id="strip_${i}">${strip.nullSymbol}</td>`;
        head.innerHTML  += `<td id="head_${i}" class="td-invs"></td>`;
        state.innerHTML += `<td id="state_${i}" class="td-invs"></td>`;
    }
}

function GetComands(cellsCount)
{
    for (let i = 0; i < cellsCount; i++) {
        
    }
}