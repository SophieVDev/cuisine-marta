import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// fooddetails 
  
foodDetails = [
  {
    id:1,
    foodName:"Pavé de saumon mariné",
    foodDetails:"Pavé de saumon d'Irlande mariné au miel et sésames et accompagné de légumes de saison",
    foodPrice:23,
    foodImg:"https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
  },
  {
    id:2,
    foodName:"Pâtes italienne",
    foodDetails:"pâtes faites maison avec sauce pesto et tomates cerises",
    foodPrice:12,
    foodImg:"https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg"
  },
  {
    id:3,
    foodName:"Club sandwichs",
    foodDetails:"pain toasté, tomates, salades, concombre, jambon accompagné de frites maison",
    foodPrice:10,
    foodImg:"https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_960_720.jpg"
  },
  {
    id:4,
    foodName:"Salade d'été",
    foodDetails:"mache, olives, tomates, parmesan, grenades, poulet",
    foodPrice:8,
    foodImg:"https://cdn.pixabay.com/photo/2015/05/31/13/02/salad-791643_960_720.jpg"
  },
  {
    id:5,
    foodName:"Gauffre au chocolat",
    foodDetails:"gauffre au chocolat avec fruits rouges et Chantilly",
    foodPrice:8,
    foodImg:"https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_960_720.jpg"
  },
  {
    id:6,
    foodName:"Assortiment de Macarons",
    foodDetails:"20 macarons Saveur Vanille, pistache, citron, chocolat, vanille",
    foodPrice:19,
    foodImg:"https://cdn.pixabay.com/photo/2017/03/27/14/53/macarons-2179198_960_720.jpg"
  }
]

}
