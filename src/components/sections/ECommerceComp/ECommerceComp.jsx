import kacamata from "../../../assets/ECommerce/kacamata.png"
import lilin from "../../../assets/ECommerce/lilin.png"
import Button from "../../ui/Button"

const cart=[
    {
        id :1,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :2,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :3,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :4,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :5,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :6,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :7,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :8,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
]

const ECommerceComp = ()=>{
    return <section className="">
    <div className="grid grid-cols-4 w-430 gap- p-5 ">
    {cart.map((item)=>{
        return <div className="w-80 h-115 bg-white shadow rounded-xl mb-10 mx-auto">
                <div className="flex flex-col gap-5 justify-center items-center" key={item.id}>
                    <img src={item.photo} alt={item.label} className="w-full"/>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[14px] text-abu font-normal">{item.category}</h2>
                        <h1 className="text-[18px] font-medium">{item.label}</h1>
                    </div>
                    <span className="font-semibold text-[20px]">{item.quantity}</span>
                    <Button className="w-48.25 h-11 text-[14px]">+ Keranjang</Button>
                </div>
        </div>
      
    })}
      </div> 
       
    </section>
}

export default ECommerceComp