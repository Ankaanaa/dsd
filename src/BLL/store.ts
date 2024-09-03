
export type PostAndNewsBlockType = {
    text: string,
    id: number,
    img: string ,
    class?: string,
    Atl: string | boolean
    description?:string
    name: any
}

export type NewsColumnType = {
    id: number,
    text: string,
    img: string,
    description: string,
    Atl: string
    name?: string

}

export interface PageContentType {
    getState(): any;
    _state: {
        PageContent: {
            Post: PostAndNewsBlockType[];
            News: PostAndNewsBlockType[];
            NewsColumn: NewsColumnType[];
            AllPost:PostAndNewsBlockType[],
            Notes: "Рекомендуем";
            NotesNews: "Новости";
        },
    }
}


const data: PageContentType = {
    getState() {
        return this._state;
    },
    _state: {
        PageContent: {
            Post: [
                { id: 1, text: "Lorem ipsy lorem bady lorem byby bady lorem byby dassadsa sadsadsadsa sdsad", img: "https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg", Atl:"GAME", description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa" , name:"Red Dead Redempetion" },
                { id: 2, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu asdsadsa sdsadsadsa asdsadas", img: "https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270", Atl:"GAME" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa" , name:"Red Dead Redempetion"},
                { id: 3, text: "Lorem ipsy lorem bady lorem byby bady lorem byby sadsad sadsadas sdsdsdsds sd", img: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg", Atl:"GAME" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsadsa" , name:"Red Dead Redempetion"},
                { id: 4, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu sadsad sadsadsd", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/capsule_616x353.jpg?t=1709728210", Atl:"GAME" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa" , name:"Red Dead Redempetion"},
                { id: 5, img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et debitis blanditiis facere quia odit .", Atl:"GAME" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa" , name:"Red Dead Redempetion"},
            ],
            News: [
                { id: 1, img: "https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg?w=681&h=383&crop=1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", Atl:"Video" , name:"Red Dead Redempetion" },
                { id: 2, img: "https://store-images.s-microsoft.com/image/apps.54120.13752334779420762.d69df3df-407c-470e-9011-e6ad6e0b27dc.dbeb3a8c-4b9f-467c-bece-824e09048ccb?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit dsaaawe.", Atl:"GAME"  , name:"Red Dead Redempetion"},
                { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzbN1GG_ohPa2LDc0c4jAuyU3Le3C6KHZLA&s", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit ewwwee.", Atl:"Video" , name:"Red Dead Redempetion" },
                { id: 4, img: "https://konto.ittechblog.pl/uploads/2023/12/GTA-6.jpg", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. dsdad", Atl:"GAME" , name:"Red Dead Redempetion" },
            ],
            NewsColumn: [
                { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://lowcygier.pl/wp-content/uploads/2022/03/The-Witcher-4_facebook-scaled.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:"Red Dead Redempetion" },
                { id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3116/b1641ab1b5ec0c8f76c44e59e9d8a1639c913c98c09d057f.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS" , name:"Red Dead Redempetion" },
                { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3007/2fff756fa904befe46b838dd6f27fa49f6b53d9f3dbbb776.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS" , name:"Red Dead Redempetion" },
                { id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWO39RfmkvAmOPrcFtH3hevIF6ptc3oupHw&s', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS" , name:"Red Dead Redempetion" },
                { id: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS" , name:"Red Dead Redempetion" },
            ],
            AllPost:[
                { id: 1, text: "Red Dead Redemption 2 Dares You To Finish It Now That It's Back On PS Plus", img: "https://assets.xboxservices.com/assets/68/70/6870960a-ce3a-4728-8575-953de9cdc749.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_02.jpg", Atl:"GAME Witcher", description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa", name:"Red Dead Redempetion" },
                { id: 2, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu asdsadsa sdsadsadsa asdsadas", img: "https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270", Atl:"GAME Devil" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa", name:"Witcher 3"},
                { id: 3, text: "Lorem ipsy lorem bady lorem byby bady lorem byby sadsad sadsadas sdsdsdsds sd", img: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg", Atl:"GAME Wirt" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsadsa", name:"Resident Evil 4"},
                { id: 4, class: "post__last-block", text: "Lorem ipsy lorem bady fafu lulu sadsad sadsadsd", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/capsule_616x353.jpg?t=1709728210", Atl:"GAME Unterned" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa", name:"Alan Wake 2"},
                { id: 5, img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et debitis blanditiis facere quia odit .", Atl:"GAME Divinity" , description:"attribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa ttribute requires a valid value to be acc dsadsadsad asdsadasd sadsadsa", name:"Dragons Dogma 2"},
                { id: 6, img: "https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg?w=681&h=383&crop=1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", Atl:"Video Mafia", name:'Baldurs Gate 3' },
                { id: 7, img: "https://store-images.s-microsoft.com/image/apps.54120.13752334779420762.d69df3df-407c-470e-9011-e6ad6e0b27dc.dbeb3a8c-4b9f-467c-bece-824e09048ccb?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit dsaaawe.", Atl:"GAME Evil", name:"Elden Ring" },
                { id: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzbN1GG_ohPa2LDc0c4jAuyU3Le3C6KHZLA&s", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit ewwwee.", Atl:"Video", name:"Devil May Cry 5"},
                { id: 9, img: "https://konto.ittechblog.pl/uploads/2023/12/GTA-6.jpg", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. dsdad", Atl:"GAME Enderald", name:"God of War" },
                { id: 10, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://lowcygier.pl/wp-content/uploads/2022/03/The-Witcher-4_facebook-scaled.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS Ether", name:"The Last ou Us" },
                { id: 11, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3116/b1641ab1b5ec0c8f76c44e59e9d8a1639c913c98c09d057f.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS Evelence", name:"Divinity: Original Sin 2" },
                { id: 12, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3007/2fff756fa904befe46b838dd6f27fa49f6b53d9f3dbbb776.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:'Dying Light 2'},
                { id: 13, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWO39RfmkvAmOPrcFtH3hevIF6ptc3oupHw&s', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:"Forza Horizon 5" },
                { id: 14, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://i.ytimg.com/vi/GL4tQAN-bCY/maxresdefault.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit.", Atl: "NEWS", name:"Devil May Cry" }, 

                { id: 15, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/red-dead-redemption-2-1899-game-rant-1-1.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:'Red Dead Redempetion' },

                { id: 16, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/rdr2-john-arthur.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:'Red Dead Redempetion' },

                { id: 17, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://assets.xboxservices.com/assets/b1/95/b195db2f-098c-47bc-b01d-e7ccfbf902f2.jpg?n=Red-Dead-Redemption-II_Feature-Image-Priority-Full-Width-0_RoleBonuses_1248x702.jpg', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:'Red Dead Redempetion' },

                { id: 18, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste eius sunt hic nisi voluptatem.", img: 'https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/bltf44d76d5d08408d3/666709d799e2ce315c2c15d2/red_dead_redemption_2_bounty_hunter.png', description: "Lorem ipsum dolor sit amet consectetur asadasdasddipisicing sadsadelit. Nobis, saepe.", Atl: "NEWS", name:'Red Dead Redempetion' },
            ],
            Notes: "Рекомендуем",
            NotesNews: "Новости",
        },
    }
}

// type PageContentType = typeof data._state.PageContent

export default data;