import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    find_createUser(data: {
        name: string;
        email: string;
        image?: string;
    }): Promise<User>;
    findUserById(id: string): Promise<User>;
}
