import cartImage from '../assets/icons/cart-shopping-solid-full.svg'
import moneyImage from '../assets/icons/money-bill-solid-full.svg'
import barcodeImage from '../assets/icons/barcode-solid-full.svg'
import userImage from '../assets/icons/user-solid-full.svg'
import listImage from '../assets/icons/list-solid-full.svg'

const navBarContent = [
    {title: "Venda" , img: cartImage, keyName: "venda"},
    {title: "Produtos", img: barcodeImage, keyName: "produtos"},
    {title: "Cadastro de Fiados", img: userImage, keyName: "cadastroFiado"},
    {title: "Financeiro", img: moneyImage, keyName:  "financeiro"},
    {title: "Fiados", img: listImage, keyName:  "fiados"},
]

export default navBarContent;