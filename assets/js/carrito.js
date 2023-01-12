
let productos = [
    {

        sku: "001" , 
        nombre: "Green paradise" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 89990, 
        descuento: 1500,
        imagen: "./assets/img/img glass 5 green.jpg"

    }, 

    {
        
        sku: "002" , 
        nombre: "Gold Unique" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 109990, 
        descuento: 3000,
        imagen: "./assets/img/img glass 3 gold.jpg"

    }, 

    {
        
        sku: "003" , 
        nombre: "Clear sky" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 114990, 
        descuento: 3500,
        imagen: "./assets/img/img glass 6 clear.jpg"

    }, 

    {
        
        sku: "004" , 
        nombre: "Vintage nom" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 84990,
        descuento: 1100, 
        imagen: "./assets/img/img glass 8 fashion-black.jpg"

    }, 

    {
        
        sku: "005" , 
        nombre: "Energy classy" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 122990, 
        descuento: 3800,
        imagen: "./assets/img/img glass 7 black-square.jpg"

    }, 

    {
        
        sku: "006" , 
        nombre: "Seablack briese" ,
        descripcion: "Lentes de sol con filtro UV/UVA" , 
        precio: 74990,
        descuento: 1000,
        imagen: "./assets/img/img glass 9 fashion-black.jpg"

    },  
]

let productosCarro = [];

if(localStorage.getItem("productos")){
    productosCarro = JSON.parse(localStorage.getItem("productos"))
    console.log(productosCarro)
    actualizarCarro(productosCarro); 
}


function actualizarCarro(listadoProductos){
    localStorage.setItem("productos", JSON.stringify(listadoProductos));

    const valorInicial = 0;
    const sumaProductos = listadoProductos.reduce(
       (acumulador, producto) => acumulador + producto.cantidad, 
       valorInicial

    );

    document.querySelector("#cantidad-productos").innerText = sumaProductos;
} 

cargarTablaProdutos()

function cargarTablaProdutos(){

    let acumuladorFilas = "";

    productosCarro.forEach((producto, index) => {

        let template = `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${producto.sku}</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>${producto.cantidad}</td>
                <td>@mdo</td>
            </tr>
        
        `;
     acumuladorFilas += template; 
    
    });

    document.querySelector("#productos-carrito tbody").innerHTML = acumuladorFilas;



}