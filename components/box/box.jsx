
// this is the box component which display items inline and wrap them if they exceed the width of the container
export const flexWrapBox = (prop) => {
  return (
    <div className='box'>
      <h1 className="text-lg md:text-xl font-semibold">{prop.title}</h1>
      <ul className='flex flex-wrap gap-2'>
        {
          prop.items.map((item, index) => (
            <li key={index} className='px-4 py-1 bg-blue-500/10 w-fit text-xs md:text-sm rounded-full'>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

// this is the box component which display items in a column
export const flexColumnBox = (prop) => {
  return (
    <div className='box'>
      <h1 className="text-lg md:text-xl font-semibold">{prop.title}</h1>
      <ul className='flex gap-2 flex-col'>
        {
          prop.items.map((item, index) => (
            <li key={index} className='px-4 py-1 bg-blue-500/10 w-fit text-xs md:text-sm rounded-full list-disc list-inside'>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
