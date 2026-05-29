export interface UserData {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  score: number;
}

export class DataProcessor {
  private data: UserData[];

  constructor(initialData: UserData[] = []) {
    this.data = initialData;
  }

  public getActiveUsers(): UserData[] {
    return this.data.filter(user => user.isActive);
  }

  public calculateAverageScore(): number {
    if (this.data.length === 0) {
      return 0;
    }
    const total = this.data.reduce((sum, user) => sum + user.score, 0);
    return total / this.data.length;
  }

  public findUserById(id: number): UserData | undefined {
    return this.data.find(user => user.id === id);
  }
}
