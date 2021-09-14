//
//  EmojiMemoryGame.swift
//  memoryze
//
//  Created by Cuong Tran on 2021-09-12.
//

import SwiftUI


class EmojiMemoryGame: ObservableObject {
    static let emojis = ["✈️", "🚗", "📸", "🛵", "🚙", "🏎", "🏍", "🚜", "🛩", "⛴", "🚊", "🚄", "🚁", "🛴"]
    
    static func createMemoryGame() -> MemoryGame<String> {
        MemoryGame<String>(numberOfPairsOfCard: 4) { index in EmojiMemoryGame.emojis[index] }
    }
   
    @Published private(set) var model: MemoryGame<String> = EmojiMemoryGame.createMemoryGame()
    
    var cards: Array<MemoryGame<String>.Card> {
        return model.cards
    }
    
    // MARK: - Intent(s)
     
    func choose(_ card: MemoryGame<String>.Card) {
        model.choose(card)
    }
}
