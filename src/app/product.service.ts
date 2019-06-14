import { Injectable } from '@angular/core';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'Shoe Nike', price: 190, photo: 'nike.png' },
            { id: 'p02', name: 'Shoe Asics', price: 180, photo: 'asics.png' },
            { id: 'p03', name: 'Shoe New Balance', price: 170, photo: 'nb.png' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}