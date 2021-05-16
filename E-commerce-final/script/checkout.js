document.addEventListener("DOMContentLoaded", () => {
  updateTotal();
});

//selectores
const form = document.getElementById("form");
const listItems = document.getElementById("list-items");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const passwordElement = document.getElementById("password");
const city = document.getElementById("city");
const province = document.getElementById("provincia-select");
const cp = document.getElementById("codigo-postal");
const validTool = document.querySelector(".valid-tooltip");
const invalidTool = document.querySelector(".invalid-tooltip");
const total = document.getElementById("total");
const confirmButton = document.getElementById("confirm-btn");
const payForm = document.getElementById("pay-form");
const closeBtn = document.getElementById("close-btn");
const understoodBtn = document.getElementById("understood-btn");
const modal = document.querySelector(".modal");
const localStore = JSON.parse(localStorage.getItem("cart"));

let newCart = { ...localStore };

const obtenerLocalstore = (producto) => {
  Object.values(newCart).map((producto) => {
    const ContainerListItems = document.getElementById("list-items");
    ContainerListItems.innerHTML += `
                        <li class="row  list-group-item d-flex justify-content-between lh-condensed">
                            <div class=" card d-flex justify-content-center align-items-center  col-md p-4 my-2">
                                <h6 class="card-header mb-2 bg-light" >${producto.titulo}</h6>
                                <div class="card-body>
                                  <small class="card-text  description">${producto.descripcion}</small>
                                  <div class="bg-light p-2 my-2"><span class="product-price"> <strong>Precio : ${producto.precio}</strong></span></div>
                                  <div class="bg-light p-2"><span class="product-quantity"> <strong>Cantidad : ${producto.cantidad}</strong></span></div>
                                </div>
                            </div>
                        </li>
    `;
  });
};

//calcula el total
const nPrecio = Object.values(newCart).reduce(
  (acc, { cantidad, precio }) => acc + cantidad * precio,
  0
);

//dibuja el total
const updateTotal = () => {
  total.innerText = nPrecio;
  obtenerLocalstore();
};

//calcula el descuento
const calcularDescuento = (e) => {
  e.preventDefault();
  const discountCupon = document.getElementById("discount-cupon").value;
  if (discountCupon === "DESCUENTO") {
    let aplicarDescuento = Math.floor(nPrecio * 10) / 100;
    let total2 = nPrecio - aplicarDescuento;
    total.innerHTML = total2;
    return total;
  }
};

const showModal = () => {
  const staticBackdrop = document.getElementById("staticBackdrop");

  modal.style.display = "block";
  modal.style.opacity = "1";
};

const closeModal = (e) => {
  e.preventDefault();
  modal.style.display = "none";
};

function confirmarCompra(e) {
  e.preventDefault();
  showModal(e);
}

form.addEventListener("submit", (e) => calcularDescuento(e));
payForm.addEventListener("submit", (e) => confirmarCompra(e));
closeBtn.addEventListener("click", (e) => closeModal(e));
understoodBtn.addEventListener("click", (e) => closeModal(e));
