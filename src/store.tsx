import { useState, useCallback } from "react";
import { createContainer } from "unstated-next";

function useStore() {
  const [couter, setCouter] = useState(0)

  const [des, setDes] = useState({
    name: '',
    token: 123123,
    addres: {
      province: 'guangdong',
      city: 'guangzhou'
    }
  })
  
  const decrement = useCallback(
    () => {
      setCouter(couter - 1)
    },
    [couter],
  )
  const increment = useCallback(
    () => {
      setCouter(couter + 1)
    },
    [couter],
  )

  const setMydes = useCallback(
    (data) => {
      setDes({...des, ...data})
    },
    [des],
  )


  return {couter, decrement, increment, setMydes, des}
}

const Store = createContainer(useStore)

export default Store