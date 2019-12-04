import { Injectable } from '@angular/core';
import { CartItemModel } from 'src/app/utils/models';
export const LOCALSTORAGE_KEY = 'NG_ADV_APP_CART';


@Injectable({
    providedIn: 'root'
})
export class CartService {


    constructor() { }


    getStorage(): CartItemModel[] {
        try {
            return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
        } catch (e) { console.warn('error', e) }
    }


    updateStorage(state): void {
        try {
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
        } catch (e) { console.warn('error', e) }
    }
}

