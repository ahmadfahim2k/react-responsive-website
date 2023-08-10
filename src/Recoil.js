import { atom } from "recoil";

export const productsAtom = atom({
    key: 'products',
    default: []
});