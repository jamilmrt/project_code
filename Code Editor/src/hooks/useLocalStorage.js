import {useEffect, useState } from `react`



const PREFIX = `codepen-clone-`
export default function  useLocalStorage(key, initialvalue){
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)


        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialvalue === 'function'){
            return initialvalue()
        }else{
            return initialvalue()
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value ))
    }, [prefixKey, value])
    return [value, setValue]

}
