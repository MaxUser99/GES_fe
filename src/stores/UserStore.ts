import { makeAutoObservable } from 'mobx';
import { Interest } from '../models/Interest';
import { RootStore } from './RootStore';

export class UserStore {
  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  login = async (email: string, password: string) => {
    const { api } = this.rootStore;
    return api.post('/user/login', JSON.stringify({ email, password }))
      .then(() => true)
      .catch(() => false);
  }

  signUp = async (email: string, password: string) => {
    const { api } = this.rootStore;
    console.log('signup', email, password);

    const response = await api.post<{ userID: string, link: string }>(
      '/user/register', JSON.stringify({ email, password })
    ).then(({ data, status }) => {
      if (status === 201) {
        console.log('data: ', data.link, data.userID);
        return data;
      }

      throw new Error('no confirm link');
    }).catch(() => { console.error('signup error'); });

    if (!response) return;

    // return;
    // should confirm link
    // const isLinkConfirmed = await api.post(`/user/confirm/${response.link}`)
    //   .then(() => true)
    //   .catch(() => {
    //     console.error('link confirmation error');
    //     return false;
    //   });

    // if (!isLinkConfirmed) return;

    // // should post interest

    // const interests = await api.get<Interest[]>('/interests', {
    //   transformResponse: [data => {
    //     return data.map(({ ID, Name }: any) => new Interest({ id: ID, name: Name }));
    //   }]
    // }).then(({ data }) => data)
    //   .catch(() => {
    //     console.error('get interests error');
    //     return [];
    //   });

    // if (!interests.length) return;

    // const isInterestAsigned = await api.post(`/user/${response.userID}/interest/${interests[0].id}`)
    //   .then(() => true)
    //   .catch(() => false);

    // if (!isInterestAsigned) return;

    // return this.login(email, password);
  }
}