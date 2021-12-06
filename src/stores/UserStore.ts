import { makeAutoObservable } from 'mobx';
import { Interest } from '../models/Interest';
import { RootStore } from './RootStore';

interface IRegisterResponse {
  userID: string;
  link: string;
}

export class UserStore {
  isLoggedIn = false;

  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  login = async (email: string, password: string) => {
    const { api } = this.rootStore;
    this.isLoggedIn = await api.post('/user/login', JSON.stringify({ email, password }))
      .then(() => true)
      .catch(() => false);
  }

  register = (email: string, password: string) => {
    const { api } = this.rootStore;
    const payload = JSON.stringify({ email, password });
    return api.post<IRegisterResponse>('/user/register', payload)
      .then(({ data }) => {
        /* should remove this statement */
        if (typeof data === 'string') {
          return JSON.parse(data);
        }

        return data;
      });
  }

  confirmLink = (link: string) => {
    const { api } = this.rootStore;
    return api.post(`/user/confirm/${link}`)
      .then(() => true)
  }

  getInterests = () => {
    const { api } = this.rootStore;
    return api.get<Interest[]>('/interests')
      .then(({ data }) => data.map(({ ID, Name }: any) => new Interest({ id: ID, name: Name })));
  }

  asignInterest = (userId: number | string, interest: Interest) => {
    const { api } = this.rootStore;
    return api.post(`/user/${userId}/interest/${interest.name}`)
      .then(() => true);
  }

  signUp = async (email: string, password: string) => {
    try {
      const registerResponse = await this.register(email, password);
      await this.confirmLink(registerResponse.link);
      const interests = await this.getInterests();
      await this.asignInterest(registerResponse.userID, interests[0]);
      return this.login(email, password);
    } catch (e) {
      console.error('signup error: ', e);
      return false;
    }
  }
}