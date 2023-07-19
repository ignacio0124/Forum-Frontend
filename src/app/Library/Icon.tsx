import { faPersonWalking, faCoins } from '@fortawesome/free-solid-svg-icons';

const data: {[key: string]: any} = {
  '體育': faPersonWalking,
  '區塊鏈': faCoins
}

export function IconMapping(title: string) {
  return data[title];
}