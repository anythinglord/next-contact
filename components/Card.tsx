interface Props {
  id: number,
  title: string,
  content: string
}

const Card = ({ id, title, content }: Props) => {
  return (
    <div 
      onClick={() => console.log('nimu me lo pela', title, id)} 
      className="cursor-pointer p-5 bg-white shadow rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </div>
  )
}

export default Card;