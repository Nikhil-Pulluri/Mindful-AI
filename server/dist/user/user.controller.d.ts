import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    find_createUser(body: {
        name: string;
        email: string;
        image?: string;
    }): Promise<User>;
    findUserById(id: string): Promise<User>;
}
