import Dexie, {Table} from 'dexie';
import {Account} from './Entities/Accounts';
import {Address} from './Entities/Address';

export class DatabaseDexie extends Dexie {
	accounts!: Table<Account>;
	addresses!: Table<Address>;

	constructor() {
		super('testdb');
		this.version(1).stores({
			accounts: '++id,username,password,createdAt,updatedAt',
			addresses: '++id,name,createdAt,updatedAt',
		});
	}
}

export const db = new DatabaseDexie();
