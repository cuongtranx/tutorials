package main

import (
    "fmt"
)

func main() {
    // array
    var a [2]string
    a[0] = "hello"
    a[1] = "world"
    fmt.Println(a[0], a[1])
    fmt.Println(a)

    primes := [6]int{2,3,5,7,11,13}
    fmt.Println(primes)

    // slices
    names := [4]string  {
        "John",
        "Paul",
        "George",
        "Ringo",
    }
    fmt.Println(names)
    b := names[0:2]
    b0 := names[1:3]
    fmt.Println(b, b0)

    b0[0] = "XXX" // change this one will change an element in `b` too
    fmt.Println(b, b0)


    // array literals --> array without lengths
    q := []int{2,3,5,7,11,13}
    fmt.Println(q)

    r := []bool{true, false, true, true, false, true}
    fmt.Println(r)

    s := []struct {
        i int
        b bool
    }{
        {2, true},
        {3, false},
        {5, true},
        {7, true},
        {11, false},
        {13, true},
    }

    fmt.Println(s)

    // slices have `length` and `capacity`
    // length is the total number of elements within that slice
    // capacity is the number of the underlining array, fr the
    //   start of the slice

    // creating slice with the `make` function
    c := make([]int, 5) //len(c) == 5
    d := make([]int, 0, 5) //len(d) == 0, cap(d) == 5
    fmt.Println("len(c): ", len(c))
    fmt.Println("len(d): ", len(d), ", cap(d): ", cap(d))

    // append function


    // loop
    pow := []int{1,2,4,8,16,32,64,128}
    for i, v:= range pow {
        fmt.Printf("2**%d = %d\n", i, v)
    }
}
