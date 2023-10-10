console.log( 'Hallo')
const resetButton = document.getElementById( 'reset-button');
const widthInput = document.getElementById( 'width-input');
const heightInput = document.getElementById( 'height-input');
const stepButton = document.getElementById( 'step-button');
const gridDiv= document.getElementById( 'grid-div');

resetButton.onclick= function() {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.lastChild);
      }
}

stepButton.onclick= function() {
    if( !gridDiv.firstChild) {
        const table= document.createElement( 'table');
        gridDiv.appendChild( table);
        const row= document.createElement( 'tr');
        table.appendChild( row);
        const cell= document.createElement( 'td');
        table.appendChild( cell);
        const textNode= document.createTextNode( '1');
        cell.appendChild( textNode);
    }
    else {
    }
}

