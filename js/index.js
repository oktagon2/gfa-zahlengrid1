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
        row.appendChild( cell);
        const textNode= document.createTextNode( '1');
        cell.appendChild( textNode);
    }
    else {
        const table= gridDiv.firstChild;
        const lastRow= table.lastChild;
        const lastCell= lastRow.lastChild;
        if(lastRow.childNodes.length< widthInput.value) {
            const cell= document.createElement( 'td');
            row.appendChild( cell);
            const textNode= document.createTextNode( lastCell.value+ 1);
            cell.appendChild( textNode);
        }
        else {

        }
    }
}

