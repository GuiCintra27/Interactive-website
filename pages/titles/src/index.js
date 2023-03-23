import cardsFactory from "./factories/cardsFactory.js"
import handGestureFactory from "./factories/handsGestureFactory.js"

alert("This is a interactive website, show your hands to cam to execute actions. Close hands => scroll down / Open hands => scroll up / Pinch gesture => click")
alert("Esse é um site interativo, mostre suas mãos para câmera para executar ações. Mãos fechadas => Rola para baixo / Mãos abertas => Rola para cima / Gesto de pinça => click")

await cardsFactory.initalize()
await handGestureFactory.initalize()