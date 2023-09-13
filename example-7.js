"use strict";
// Use the enum type to define the suit for
// a playing card.
// Below define the ace. It should have a suit
// and a value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 0] = "Clubs";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (exports.Suit = Suit = {}));
var ace = {
    suit: Suit.Clubs,
    value: 1
};
