"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { useEffect, useState } from "react"

export default function Page() {
    const [date, setDate] = useState(() => new Date())
    useEffect(()=>{
        const intervalId = setInterval(() => {
        setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
    })
    
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <div className="my-10 flex flex-col items-center">
            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader className="justify-center items-center">
                    <CardTitle className="text-3xl font-sans">Clock</CardTitle>
                </CardHeader>
                <CardContent className="">

                    <span>
                        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-2xl h-8 w-8">
                            {hour}
                        </Badge>:

                          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-2xl h-8 w-8">
                            {minutes}
                        </Badge>:

                         <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-2xl h-8 w-8">
                            {seconds}
                        </Badge>
                    
                    </span>
                </CardContent>
                <CardFooter>

                    <h2 className="text-sm">{date.toDateString()}</h2>

                </CardFooter>
            </Card>
        </div>
    )
}