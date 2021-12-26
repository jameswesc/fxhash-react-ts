import { useState } from 'react'

export function App() {
    const r1 = useState(() => fxrand())
    const r2 = useState(() => fxrand())
    const r3 = useState(() => fxrand())

    console.log({ r1, r2, r3 })

    return (
        <h1 style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            {fxhash} <br />
            {r1} <br />
            {r2} <br />
            {r3}
        </h1>
    )
}
