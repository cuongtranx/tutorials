package main

import (
    "fmt"
    "math"
    "math/rand"
    "math/cmplx"
)

func add(x, y int) int {
    return x + y
}

func swap(x, y string) (string, string) {
    return y, x
}

func split(sum int) (x , y int) {
    x = sum * 4 / 9
    y = sum - x
    return
    // this is implicitly returning (x & y) as
    // x, y are declared in the beginning of the function
    // this shouldn't be used in a longer function
}

var c, python, java = true, false, "no!" // initializers without
var (
    ToBe    bool        = false
    MaxInt  uint64      = 1 << 64 - 1
    z       complex128  = cmplx.Sqrt(-5 + 12i)
)

func main() {
    fmt.Println("My favourite constant is ", rand.Intn(100))
    fmt.Println("Now you have %g problems", math.Sqrt(7))
    fmt.Println(math.Pi)
    fmt.Println(add(42, 13))

    a, b := swap("hello", "world")
    // difference between := and =
    //    := is inside a function only
    //    := doesn't require var (implicit type declaration)
    fmt.Println(a, b)

    fmt.Println(split(100))

    //var i int
    //fmt.Println(i, c, python, java)


    fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
    fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
    fmt.Printf("Type: %T Value: %v\n", z, z)

    var i int = 42
    var f float64 = float64(i)
    var u uint = uint(f)
    fmt.Println(i, f, u)

    const T = "constant" // constant can't be declared using the := syntax
    fmt.Println(T)
}
