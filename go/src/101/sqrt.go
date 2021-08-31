package main

import (
    "fmt"
    "math"
)

func Sqrt(x float64) float64 {
    z := 1.0
    for i := 0; i < 100; i++ {
        if d := (z * z - x) / (2 * z);
           //d < 0.0000000000001 && d > -0.0000000000001 { // d is too small
           // can't figure this shit out. So I'm going to leave it here for now
           // as what I want to do is to get use to Golang's syntax, not solving
           // mathematical problems
            z -= d
            fmt.Println(i, ": ", z, ", with a delta of: ", d)
        } else {
            break
        }
    }

    return z
}

func main() {
    fmt.Println(Sqrt(2))
    fmt.Println("from math: ", math.Sqrt(2))
    //fmt.Println(Sqrt(3))
    //fmt.Println(Sqrt(3))
    //fmt.Println(Sqrt(9))
    //fmt.Println(Sqrt(10))
}
