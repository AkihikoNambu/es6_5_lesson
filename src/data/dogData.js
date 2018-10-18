import readlineSync from 'readline-sync';
import Dog from '../class/dog';

export const dog1 = new Dog('ケン', 2, 'チワワ')

const name = readlineSync.question('名前を入力してください: ');
const age = readlineSync.questionInt('年齢を入力してください: ');
const breed = readlineSync.question('犬種を入力してください: ');

export const dog2 = new Dog(name, age, breed);
