import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5833e9DE7418C55c2C0f23eb7C0191f77F018F8a"
);

export default instance;
