import React, { useState } from "react"

export function ParentProblem() {
    const [n, setN] = useState(1)
    return <div>
        <button className="btn btn-primary"
            onClick={() => { setN(n + 1) }}>
            Increase N GGGParent! </button>
        <ChildA n={n} />
        <ChildB />
    </div>
}

function ChildA(props: { n: number }) {
    return <div>
        <GrandChildOfA n={props.n} />
    </div>
}

function GrandChildOfA(props: { n: number }) {
    return <div><Grand2ChildOfA n={props.n} /></div>
}

function Grand2ChildOfA(props: { n: number }) {
    return <h1>This number from GGGParent (Dec): {props.n} </h1>
}

function ChildB() {
    return <div> </div>
}

