package main

import (
    "fmt"
    "math"
    "runtime"
    "time"
)

func squrt(x float64) string {
    if x < 0 {
        return squrt(-x) + "i"
    }

    return fmt.Sprint(math.Sqrt(x))
}

func pow(x, n, lim float64) float64 {
    if v := math.Pow(x, n); v < lim {
        return v
    } else {
        fmt.Printf("%g >= %g\n", v, lim)
    }

    // can't use v here, though
    return lim
}


func main() {
    sum := 0
    // for loop
    for i:= 0; i < 10; i++ {
        sum += i
    }
    fmt.Println(sum)

    // while loop
    //for ; sum < 1000; {
    for sum < 1000 {
        sum += sum
    }
    fmt.Println(sum)


    fmt.Println(squrt(2), squrt(-4))

    fmt.Println(
        pow(3, 2, 10),
        pow(3, 3, 20),
    )

    // switch statement in Golang doens't require a `break` as it only
    // executes 1 matched case only --> that's nice.
    fmt.Print("Go runs on ")
    switch os := runtime.GOOS; os {
    case "darwin":
        fmt.Println("OS X.")
    case "linux":
        fmt.Println("Linux.")
    default:
        // freebsd, opendsb
        // plan9, windows...
        fmt.Printf("%s.\n", os)

    }


    // however, Go does evaluate from order from top to bottom
    // stop when reaching
    fmt.Println("When's Saturday?")
    today := time.Now().Weekday()
    switch time.Saturday {
    case today + 0:
        fmt.Print("Today.")
    case today + 1:
        fmt.Print("Tomorrow.")
    case today + 2:
        fmt.Print("In tow days.")
    default:
        fmt.Print("Too far away.")
    }
    fmt.Print("\n")

    // using swicth with no cnotidion is the same as switch true
    // this ll be used to be a clean way to write long if-then-else chains
    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Print("Good morning")
    case t.Hour() < 17:
        fmt.Print("Good afternoon")
    default:
        fmt.Print("Good evening")
    }
    fmt.Print("\n")

}
