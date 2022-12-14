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

export interface CheckoutType { 
    firstName: string | undefined,
    lastName: string | undefined, 
    email: string | undefined, 
    city?: string | undefined, 
    country?: string | undefined,
    zipCode?: string | undefined,
    items: CartType[] | undefined
}