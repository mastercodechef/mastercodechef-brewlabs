import { useQuery } from 'vue-query';
import axios, { AxiosResponse } from 'axios';

const endpoint = 'https://api.botyard.tools/caFJ19f7Qi/price/AAGzBphKYBkzpGvqjkirHmb3XndvEqkd7fA2338';

type APIData = {
  data: {
    "total_supply": number,
    "fees_name": string,
    "contract": string,
    "burned_supply": number,
    "abi": any,
    "liquidity": number,
    "liquidity_bnb": number,
    "burn_address": string,
    "trade_24hrs_usd": number,
    "holders": number,
    "price": number,
    "trade_24hrs_count": number,
    "token_supply": number,
    "decimal": number,
    "bnb_exchange": number,
    "circulating_supply": number,
    "usd_price": number,
    "market_cap": number,
    "post_created_at": number,
    "total_liquidity": number,
    "burned_supply_value": number,
    "token_supply_value": number
  }
}

const getPriceData = async (): Promise<string> => {
  const { data } = await axios.get(endpoint) as AxiosResponse<APIData>;

  return data.data.usd_price.toFixed(4).toString();
};

export function usePrice() {
  return useQuery(['price'], getPriceData);
}

