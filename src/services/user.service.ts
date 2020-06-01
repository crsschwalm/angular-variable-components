import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUserPermissions() {
    return {
      buy: true,
    };
  }
}
