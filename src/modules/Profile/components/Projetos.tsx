import { Card } from "@/shared/components/molecules/card"
import type { ReactNode } from "react"


type TProps = {
    titulo: string,
    children:ReactNode
}


const Projetos = ({titulo, children}:TProps) => {
  return (
    <div>
        <Card title={titulo} children={children}/>
            
        
    </div>
  )
}

export default Projetos