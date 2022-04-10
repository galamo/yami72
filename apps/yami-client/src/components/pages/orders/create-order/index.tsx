import React, { useEffect, useState } from "react"
import axios from "axios"

import moment from "moment"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { orderAction } from "../../../../store/asyncFunctions/orders";
const DATE_FORMAT = "yyyy-MM-dd"
const NEWS_API_URL = `https://newsapi.org/v2/everything`

export function CreateOrder() {
    const [owner, setOwner] = useState("")
    const [numberOfSeats, setNumberOfSeats] = useState(0)
    const [reservationDate, setReservationDate] = useState(new Date())
    const [insideOrOutside, setInsideOrOutside] = useState("inside")


    function orderHandler() {
        orderAction({ owner, numberOfSeats, reservationDate, insideOrOutside })
    }
    return <div className="container">
        <div className="row">
            <h1> Order Now! </h1>

            <div className="col-lg-4 offset-4 mt-5">
                <span>to</span> <DatePicker showTimeInput showTimeSelect dateFormat={DATE_FORMAT}
                    selected={reservationDate} onChange={(date: Date) => { setReservationDate(date) }} />
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <span> Owner </span>
                <input value={owner} onChange={(e) => { setOwner(e.target.value) }} className="form-control" type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <span> Number of Seats </span>
                <input value={numberOfSeats} onChange={(e) => { setNumberOfSeats(Number(e.target.value)) }} className="form-control" type="number" name="name" placeholder="Number Of Seats" required />
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <span> Inside Or Outside: {insideOrOutside} </span>
                <select onChange={(e) => { setInsideOrOutside(e.target.value) }}>
                    <option value="inside">Inside</option>
                    <option value="outside">Outside</option>
                </select>
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <button className="btn btn-primary" onClick={() => { orderHandler() }}> Order </button>
            </div>

        </div>
    </div>
}


function Loader() {
    return <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
    </div>

}