import React, { useEffect, useState } from 'react'
import noticiasData from '../data/noticias.json'

export default function NewsList(){
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    // simulamos carga dinámica desde JSON (se importa arriba)
    setNoticias(noticiasData)
  }, [])

  return (
    <div id="news" className="mt-4">
      <h3 className="mb-3">Noticias</h3>
      <div className="row g-3">
        {noticias.map(n => (
          <div className="col-md-6" key={n.id}>
            <div className="card card-custom p-3">
              <div style={{fontSize:14, color:'#7a4b64', fontWeight:600}}>{n.title}</div>
              <div style={{fontSize:12,color:'#9b6b80',marginBottom:8}}>{n.date}</div>
              <div style={{fontSize:14}}>{n.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
