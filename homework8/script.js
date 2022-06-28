hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = destination.concat(native.concat(hero));

rainbow.reverse();
rainbow.shift();
rainbow.unshift('Richard');
rainbow.pop();
rainbow.push('Vain');
rainbow.splice(3, 0, 'Gave','Battle');

circleColors = ['red','orange','yellow','green','lightblue','blue','violet'];

document.write(`<div class='wrapp' style='
    width: 600px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    height: 100px;
    align-content: space-between;'
    </div>`);

for(i = 0; i < circleColors.length; i++) {
    document.write(`
    <div>
        <div class='circle' style='
            background-color: ${circleColors[i]}; 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            margin: 0 auto;'>
        </div>
        <p class='text' style='font-family: "Quicksand", sans-serif; 
            font-size: 20px; text-align: 
            center;'>${rainbow[i]}
        </p>
    </div>`)
}

document.write(`</div>`);