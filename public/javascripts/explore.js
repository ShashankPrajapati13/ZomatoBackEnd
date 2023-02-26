


// var arr = [
//     { name: "Burger King" ,product:"Burger", img:"burgerking.png" ,tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3},
//     { name: "Pizza Hut" ,product:"Pizza",img:"pizzahut.png",tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3},
//     { name: "KFC" ,product:"Chicken Bucket",img:"kfc.png",tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3},
//     { name: "Mac Donalds" ,product:"fries", img:"macd.png",tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3},
//     { name: "Dominos" ,product:"Pizza",img:"domino.png",tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3},
//     { name: "Subway" ,product:"Sub's",img:"subway.png",tag:"Free Delivery", stars:0.8, customer:873,price:45,dist:0.3}
// ]
 
//     var clutter = ""
//     var clutter2 = ""
//     arr.forEach(function(elem,index){
//            if(index < 3){
//             clutter += ` <div class="fcards">
//             <div id="brandimg">
//                 <img src="./images/${elem.img}" alt="">
//             </div>
//             <div id="fcardsR">
//                 <div id="fcardstop">${elem.name}</h4></div>
//                 <div id="fcardsmid">
//                      <div id="l"><i class="ri-star-s-fill"></i> ${elem.stars} (${elem.customer})</div>
//                      <div id="m"><img src="foodb.png" alt=""><h5>${elem.product}</h5></div>
//                      <div id="r"><h5>Rs. ${elem.price}/-</h5></div>
//                 </div>
//                 <div id="fcardsbot">
//                     <h5 id="free">${elem.tag}</h5>
//                     <div id="floc">
//                         <i class="ri-map-pin-2-line"></i>
//                         <h5>${elem.dist}km</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//            }
//            else if(index > 2 && index < 7){
//             clutter2 += ` <div class="fcards">
//             <div id="brandimg">
//                 <img src="./images/${elem.img}" alt="">
//             </div>
//             <div id="fcardsR">
//                 <div id="fcardstop">${elem.name}</h4></div>
//                 <div id="fcardsmid">
//                      <div id="l"><i class="ri-star-s-fill"></i> ${elem.stars} (${elem.customer})</div>
//                      <div id="m"><img src="foodb.png" alt=""><h5>${elem.product}</h5></div>
//                      <div id="r"><h5>Rs. ${elem.price}/-</h5></div>
//                 </div>
//                 <div id="fcardsbot">
//                     <h5 id="free">${elem.tag}</h5>
//                     <div id="floc">
//                         <i class="ri-map-pin-2-line"></i>
//                         <h5>${elem.dist}km</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//            }
//     })
// document.querySelector("#featCards #ffirst").innerHTML=clutter;
// document.querySelector("#featCards #fsec").innerHTML=clutter2;

// var arr = [
//     { name: "Spicy Na Thai Pizza" , img:"food1.jpg" ,tag:"Free Delivery", },
//     { name: "Special Burger" ,img:"food2.jpg",tag:"Free Delivery"},
//     { name: "Tandoori" ,img:"food3.jpg",tag:"Free Delivery"},
//     { name: "Special Thali", img:"food4.jpg",tag:"Free Delivery"},
//     { name: "Diet Food" ,img:"food5.jpg",tag:"Free Delivery"},
//     { name: "Sandwich" ,img:"food6.jpg",tag:"Free Delivery"}
// ]

// var clutter = ""
// var clutter2 = ""
// arr.forEach(function(elem,index){
//        if(index < 3){
//         clutter += ` <div class="acards">
//         <div id="aCardtop">
//             <img src="./images/${elem.img}" alt="">
//         </div>
//         <div id="aCardbot">
//             <h4>${elem.name}</h4>
//             <h5 id="free">${elem.tag}</h5>
//         </div>
//     </div>`
//        }
//        else if(index > 2 && index < 7){
//         clutter2 += `<div class="acards">
//         <div id="aCardtop">
//             <img src="./images/${elem.img}" alt="">
//         </div>
//         <div id="aCardbot">
//             <h4>${elem.name}</h4>
//             <h5 id="free">${elem.tag}</h5>
//         </div>
//     </div> `
//        }
// })
// document.querySelector("#asianCards #afirst").innerHTML=clutter;
// document.querySelector("#asianCards #asec").innerHTML=clutter2;
