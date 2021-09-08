//
//  ContentView.swift
//  memoryze
//
//  Created by Cuong Tran on 2021-09-06.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            CardView(isFaceUp: true)
            CardView(isFaceUp: false)
            CardView(isFaceUp: false)
            CardView(isFaceUp: true)
        }
        .padding()
        .foregroundColor(.red)
    }
}

struct CardView: View {
    @State var isFaceUp: Bool = false
    var shape = RoundedRectangle(cornerRadius: /*@START_MENU_TOKEN@*/25.0/*@END_MENU_TOKEN@*/)

    var body: some View{
        ZStack {
            if (isFaceUp) {
                shape.fill().foregroundColor(.white)
                shape.stroke(lineWidth: 3.0)
                Text("🚗").font(.largeTitle)
            } else {
                shape.fill()
            }
        }
        .onTapGesture {
            isFaceUp = !isFaceUp
        }
    }
}


























struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
                .preferredColorScheme(/*@START_MENU_TOKEN@*/.light/*@END_MENU_TOKEN@*/)
        }
    }
}
