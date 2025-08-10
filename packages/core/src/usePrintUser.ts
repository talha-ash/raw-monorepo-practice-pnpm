import { useEffect } from 'react'

export interface User {
  id: number
  name: string
}
export const usePrintUser = (user: User) => {
  useEffect(() => {
    console.log(user)
    console.log(user)
  }, [])
}
