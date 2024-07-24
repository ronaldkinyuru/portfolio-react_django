import { useState } from "react"
import { useEffect } from "react"

function FetchData() {
    const { avatarSrc, setAvatarSrc, name, setName } = useAvatar();
    useEffect(() => { 
   fetch()
   .then(Response => Response.json())
   .then(data => setName(data))
   .catch(err => console.log(err))
    }, [])
 
  return (
    <div></div>
  )
}

export default FetchData;