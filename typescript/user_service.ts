import { UserData } from "./data_processor";

export class UserService {
  private users: Map<number, UserData> = new Map();

  public registerUser(user: UserData): boolean {
    if (this.users.has(user.id)) {
      return false;
    }
    this.users.set(user.id, user);
    return true;
  }

  public deactivateUser(id: number): boolean {
    const user = this.users.get(id);
    if (user) {
      user.isActive = false;
      return true;
    }
    return false;
  }

  public getAllUsers(): UserData[] {
    return Array.from(this.users.values());
  }
}
