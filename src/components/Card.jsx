
const Card = ({img, title, desc, planIcon, planName, planPrice}) => {
  return (
    <div className="bg-cyan-600 max-w-xs rounded-2xl shadow-lg">
        <img src={img} className="rounded-t-2xl" alt={title} />
        <div className="flex flex-col items-center p-6 pt-4 text-center">
          <h2 className="text-cyan-50 font-bold text-3xl">{title}</h2>
          <p className="text-cyan-50 my-3">{desc}</p>
          <div className="flex items-center px-6 py-2 rounded-md gap-5 bg-cyan-100 w-56">
            <img src={planIcon} className="bg-cyan-500 rounded-full p-2 h-8" alt={planName} />
            <div>
              <h3 className="text-cyan-800 font-bold">{planName}</h3>
              <p className="text-cyan-600">${planPrice}/year</p>
            </div>
          </div>
          <button className=" mt-10 shadow-2xl bg-cyan-50 rounded-md py-2 px-10 text-cyan-600 font-semibold">Proceed to Payment</button>
          <button className="mt-6 text-cyan-50 font-semibold">Cancel Order</button>
        </div>
    </div>
  )
}

export default Card