export interface ItemType { 
    id: number,
    name: string,
    category: string, 
    description: string, 
    price: number,
    rating: number,
    images?: ImagesType[],
    carts?: CartType[]
}

export interface ImagesType { 
    id: number, 
    image_url: string,
    imageId: number
}

export interface CartType { 
    id: number, 
    userId: number, 
    itemId: number

}