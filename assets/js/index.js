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
 
}else{
    productosCarro = []; 
}



cargarProductos(productos);

//FUNCION ENCARGADA DE CARGAR PRODUCTOS 
function cargarProductos(listadoProductos){

    let acumulador = "";

    listadoProductos.forEach(producto => {

        
        let template = `
        
            <div class="col-12 col-md-6 col-lg-4 my-2">
                <div class="card m-auto my-3" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <p class="card-text text-success">Descuento: - $ ${producto.descuento}</p>
                    <p class="card-text text-warning">Precio final: $ ${producto.precio - producto.descuento}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <a href="" class="btn btn-outline-primary" target="_blank">Ver más</a>
                    <a href="" class="btn btn-outline-success" data sku="${producto.sku}" onclick="addToCart('${producto.sku}')">Comprar</a>
                  </div>
              </div>
            </div>
         </div>
           
        `
        acumulador += template; 

    });

    document.querySelector("#productos .row").innerHTML = acumulador; 

}


function addToCart(sku) {
    let objProducto = {
        sku, 
        cantidad: 1

    }

    let productoEncontrado = productosCarro.find(producto => producto.sku == sku);
    
    if(productoEncontrado){
        productoEncontrado.cantidad = productoEncontrado.cantidad + 1

    }else{

        productosCarro.push(objProducto)

    }

    
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

cargarProductos();



