var Table = document.getElementById("table")


runFirst(0)
document.getElementById("clickHere").addEventListener("click", destroyNode)


function runFirst(y)
{
    let x = 1
    Table.innerHTML = ''
    for(let a = 0; a < 10; a++) {
    var TR = document.createElement("tr")
    for(let b = 0; b < 10; b++){
        var TD = document.createElement("td")
            if(y == 0){
                TD.append(x)
            }
            else if(x % y == 0){
                TD.append("**")
            }
            else{
                TD.append(x)
            }
    TR.append(TD)
    x++
    }
    Table.appendChild(TR)
    }
}

function destroyNode(e){
    e.preventDefault()
    var y = document.getElementById("input_form").value
    console.log(y)
    if(y > 0){
        runFirst(y)
    }
    else {
        runFirst(0)
    }
}