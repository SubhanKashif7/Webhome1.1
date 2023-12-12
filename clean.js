function imp(a,b,c,parentd)
{
    let e = document.createElement(`${a}`);
    e.textContent = b;
    e.id = c;
    let nm = document.getElementById(`${parentd}`);
    nm.appendChild(e)

}
const btn = document.getElementById("btn");
