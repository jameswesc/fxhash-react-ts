import { useState } from 'react'

export function App() {
    const r1 = useState(() => fxrand())
    const r2 = useState(() => fxrand())
    const r3 = useState(() => fxrand())

    console.log('HELLO WORLD')

    return (
        <h1 style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            {fxhash}
        </h1>
    )
}
