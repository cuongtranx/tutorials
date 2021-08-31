package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m map[string]Vertex

func main() {
    // map with make
    m = make(map[string]Vertex)

    m["Bell Labs"] = Vertex{
        40.68433, -74.39967,
    }

    fmt.Println(m["Bell Labs"])

    // map literal
    ml := map[string]Vertex {
        "Bell Labs": Vertex{
            40.68433, -74.39967,
        },
        "Google": Vertex{
            37.42202, -122.08408,
        },
    }
    fmt.Println(ml)

    // type of value could also be omitted when doing creating map
    // literals
    ml2 := map[string]Vertex {
        "Bell Labs":{
            40.68433, -74.39967,
        },
        "Google": {
            37.42202, -122.08408,
        },
    }
    fmt.Println(ml2)


    // updating/mutating maps
    fmt.Println("Udating/mutating maps")
    mx := make(map[string]int)

    mx["Answer"] = 42
    fmt.Println("The value: ", mx["Answer"])

    mx["Answer"] = 48
    fmt.Println("The value: ", mx["Answer"])

    delete(mx, "Answer")
    fmt.Println("The value: ", mx["Answer"])

    v, ok := mx["Answer"]
    fmt.Println("THe value: ", v, "Present", ok)
}
