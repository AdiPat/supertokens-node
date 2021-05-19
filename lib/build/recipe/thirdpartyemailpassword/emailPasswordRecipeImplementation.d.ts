import { RecipeInterface, User } from "../emailpassword/types";
import Recipe from "./recipe";
export default class RecipeImplementation implements RecipeInterface {
    recipeInstance: Recipe;
    constructor(recipeInstance: Recipe);
    signUp: (email: string, password: string) => Promise<User>;
    signIn: (email: string, password: string) => Promise<User>;
    getUserById: (userId: string) => Promise<User | undefined>;
    getUserByEmail: (email: string) => Promise<User | undefined>;
    createResetPasswordToken: (userId: string) => Promise<string>;
    resetPasswordUsingToken: (token: string, newPassword: string) => Promise<void>;
    getUsersOldestFirst: (_?: number | undefined, __?: string | undefined) => Promise<never>;
    getUsersNewestFirst: (_?: number | undefined, __?: string | undefined) => Promise<never>;
    getUserCount: () => Promise<never>;
}
