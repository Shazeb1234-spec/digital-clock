"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function Page() {
    const [date, setDate] = useState(() => new Date())
    setInterval(() => {
        setDate(new Date())
    }, 1000)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <div>
            <Card className="">
                <CardHeader className="justify-center items-center">
                    <CardTitle className="text-3xl font-sans">Clock</CardTitle>
                </CardHeader>
                    <div className="justify-center items-center">
                        <h1 className="text-2xl"> {hour}:{minutes}:{seconds} </h1>
                        <h2 className="text-sm">{date.toDateString()}</h2>
                    </div>
            </Card>
        </div>
    )
}