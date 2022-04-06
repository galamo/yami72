import { ReactElement } from "react"
import { Spinner } from "react-bootstrap"

export function WithLoading(props: { isLoading: boolean, children: ReactElement }) {
    console.log(props.isLoading, "inside with loading")
    return props.isLoading ? <Spinner style={{ marginLeft: "50%", color: "white" }} animation="grow" role="status"></Spinner> : props.children
}
