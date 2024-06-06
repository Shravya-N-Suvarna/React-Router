import React from 'react'
import { Link } from 'react-router-dom'
export default function File1() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to ="/">File1</Link>
                </li>
            <li>
                <Link to ="/File2">File2</Link> 
                </li>
                <li>
                    <Link to = "/File3">File3</Link>
                    </li>
                    </ul>
                    
                    </nav>
                    </>
    
    
  )
}
