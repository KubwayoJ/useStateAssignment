

    const CounterFunc = () => {
  
        const [counter, seCounter] =useState(50)
        const handeleDecrement = () =>{
          seCounter(counter-1)
        }
        const handeleIncrement = () =>{
          seCounter(counter+1)
        }
        return (
          <div className="flex justify-center items-center h-screen space-x-4">
            <button className="px-4 py-2 p-4 bg-gray-950 text-white rounded-lg"onClick={handeleDecrement}>-</button>
            <p>{counter}</p>
            <button className="px-4 py-2 p-4 bg-green-950 text-white rounded-lg" onClick={handeleIncrement}>+</button>
            </div>
          
        )
      }

export default CounterFunc