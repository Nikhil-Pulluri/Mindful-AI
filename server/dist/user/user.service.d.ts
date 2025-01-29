import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<User[]>;
    find_createUser(data: {
        name: string;
        email: string;
        image?: string;
    }): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
}
