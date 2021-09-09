//
//  ContentView.swift
//  memoryze
//
//  Created by Cuong Tran on 2021-09-06.
//

import SwiftUI

struct ContentView: View {
    var emojis = ["✈️", "🚗", "📸", "🛵", "🚙", "🏎", "🏍", "🚜", "🛩", "⛴", "🚊", "🚄", "🚁", "🛴"]
    @State var emojiCount = 4
    
    var body: some View {
        VStack{
            ScrollView {
                LazyVGrid(columns: [GridItem(.adaptive(minimum: 125))]) {
                    ForEach(emojis[0..<emojiCount], id: \.self) { emoji in
                        CardView(content: emoji, isFaceUp: true).aspectRatio(2/3, contentMode: .fit)
                    }
                }
                .foregroundColor(.blue)
            }
            Spacer()
            HStack {
                remove.foregroundColor(.red)
                Spacer()
                add.foregroundColor(.red)
            }
        }
        .padding(.horizontal)
    }
    
    var remove: some View {
        Button(action: {
            if (emojiCount > 1) {
                emojiCount -= 1
            }
        }, label: {
            Image(systemName: "minus.circle")
        })
    }
    
    var add: some View {
        Button(action: {
            if (emojiCount < emojis.count) {
                emojiCount += 1
            }
        }, label: {
            Image(systemName: "plus.circle")
        })
    }
}

struct CardView: View {
    var content: String
    @State var isFaceUp: Bool = false
    let shape = RoundedRectangle(cornerRadius: /*@START_MENU_TOKEN@*/25.0/*@END_MENU_TOKEN@*/)

    var body: some View{
        ZStack {
            if (isFaceUp) {
                shape.fill().foregroundColor(.white)
                shape.strokeBorder(lineWidth: 3.0)
                Text(content).font(.largeTitle)
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
