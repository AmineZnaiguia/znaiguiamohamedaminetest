import React from 'react'

export default function listpost({post}) {
    return (
        <div>
           <p className=" crd " >{post.title}</p>
           <p className="crd">{post.body}</p>
 
        </div>
    )
}

