import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

   images: string[] = ['https://i.pinimg.com/564x/28/92/86/289286a0a3b3b1e9fc53b715ab1b9947.jpg',
    'https://i.pinimg.com/564x/e0/77/30/e07730cfc317d912011d1fa3c03016fe.jpg',
    'https://i.pinimg.com/564x/d8/f9/02/d8f90239ce45176e3cd4761dcb61e47a.jpg',
    'https://i.pinimg.com/564x/83/65/f1/8365f1cceefc0724ec607aa7ed216beb.jpg',
    'https://i.pinimg.com/564x/0c/c1/4b/0cc14b334bb08dadec4ebe92ba2e6f1e.jpg',
    'https://i.pinimg.com/564x/69/67/f9/6967f99fee8ad4a55d7064eb3c696dfb.jpg'
  ];
}
