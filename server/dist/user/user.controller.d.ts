import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<Object[]>;
    find_createUser(body: {
        name: string;
        email: string;
        image?: string;
    }): Promise<Object>;
    findUserByEmail(email: string): Promise<Object>;
}
