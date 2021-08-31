package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

// struct literal
var (
    v1 = Vertex{1, 2} // has type Vertex
    v2 = Vertex{X: 1} // Y:0 is implicit --> zero value
    v3 = Vertex{} // X:0 and Y:0 --> zero value
    p1 = &Vertex{1, 2} // has type *Vertex
)

func main() {
    v := Vertex{1, 2}
    v.X = 4
    fmt.Println(v.X)

    // struct and pointer
    p := &v
    p.X = 1e9
    fmt.Println(v)

    fmt.Println("Struct Literals")
    fmt.Println(v1, p1, v2, v3)
}
