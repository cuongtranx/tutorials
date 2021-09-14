//
//  memoryzeApp.swift
//  memoryze
//
//  Created by Cuong Tran on 2021-09-06.
//

import SwiftUI

@main
struct memoryzeApp: App {
    let game = EmojiMemoryGame()
    
    var body: some Scene {
        WindowGroup {
            ContentView(game: game)
        }
    }
}
