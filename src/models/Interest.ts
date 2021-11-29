export class Interest {
  id: string = '';
  name: string = '';

  constructor(data?: Partial<Interest>) {
    Object.assign(this, data);
  }
}
