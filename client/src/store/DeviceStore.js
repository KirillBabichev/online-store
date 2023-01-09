
import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
           {id: 1, name: 'Phones'},
           {id: 2, name: 'Computers'},
           {id: 3, name: 'Mouses'},
           {id: 4, name: 'Monitors'},
           {id: 5, name: 'Keyboards'},
        ];

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lg'},
            {id: 4, name: 'Sony'},
            {id: 5, name: 'Acer'},
            
        ];

        this._devices = [
            {id: 1, name: 'Iphone 12pro', price: 1300, rating: 5, img: `https://via.placeholder.com/300`},
            {id: 2, name: 'Gg', price: 1000, rating: 3, img: `https://via.placeholder.com/300`},
            {id: 3, name: 'Note 10pro', price: 1100, rating: 5, img: `https://via.placeholder.com/300`},
        ];

        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedTypes(types) {
        this._selectedType = types;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedTypes() { 
        return this._selectedType;
    }

    get selectedBrand() { 
        return this._selectedBrand;
    }
}