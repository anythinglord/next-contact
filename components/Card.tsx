interface Props {
  id: number,
  title: string,
  phone: string
  age: number,
}

const Card = ({ id, title, phone, age }: Props) => {
  return (
    <div 
      onClick={() => console.log('nimu me lo pela', title, id)} 
      className="cursor-pointer p-5 bg-white shadow rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Phone number
          </label>
          <p className="font-normal text-gray-700 dark:text-gray-400">{phone}</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Age
          </label>
          <p className="font-normal text-gray-700 dark:text-gray-400">{age}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;