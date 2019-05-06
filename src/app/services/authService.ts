import { Injectable } from '@angular/core';

export interface User {
    username: string,
    password: string,
    first_name: string,
    last_name: string
}

@Injectable()
export class AuthService {
    loggedIn: boolean;
    users: User[];
    errors: string[] = [];

    constructor() {
       this.fetchUsers();
    }
    
    fetchUsers() {
        let ls = localStorage.getItem('users');
        if(ls) {
            try{
                this.users = JSON.parse(ls) || [];
            } catch(e) {
                localStorage.removeItem("users");
                console.log("Cannot find users.", e);
            }
        } else {
            this.users = [];
        }
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    registerUser(user:User): boolean {
        if (this.isRegistered(user.username, user.password)) {
            this.errors.push("User already exists.")
            return false;
        } else {
            this.users.push(user);
            console.log('users', this.users);
            this.saveUsers();
            return true;
        }
    }

    signIn(username:string, password:string) {
        let user = this.isRegistered(username, password);
        console.log('Sign', username, password, user);


        if(user) {
            this.loggedIn = true;
            return true;
        } else {
            this.errors.push("User not found.");
            return false;
        }
        
    }
    signOut() {
        this.loggedIn = false;
    }

    isRegistered(username: string, password: string): (User | null) {
        return this.users.filter(function(user) {
            console.log('trying', user, username, password)
            return user.username === username && user.password === password;
        }).pop();
    }
}