/* interface NFTWalletPacket {
    user: string;
    address: string;
  }
  
  interface NFTPacket {
    address: string;
    token: string;
    image: string;
    tokenadd: string;
  }
  
  const DEFAULT_NFTS: NFTPacket[] = [
    { address: "nft1", token: "", image: "", tokenadd: "" },
    { address: "nft2", token: "", image: "", tokenadd: "" },
    { address: "nft1", token: "", image: "", tokenadd: "" },
    { address: "nft3", token: "", image: "", tokenadd: "" },
    { address: "nft14", token: "", image: "", tokenadd: "" },
    { address: "nft5", token: "", image: "", tokenadd: "" },
  ]; */
  
  //@ts-ignore
  const loadNFTfromWallet = async (walletData: NFTWalletPacket): NFTPacket[] => {
    log("LOAD NFT FROM WALLET");
  
    //TODO: connect request url to wallet address
    let url =
      "https://deep-index.moralis.io/api/v2/0x5f18f9082476846b84d1e5198147d3b04a58a785/nft?chain=eth&format=decimal";
  
    let response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Api-Key":
          "dEtBtMdDEdVaL7UFcCkWTNWUEI9LXaM8tJKpC75aGZ9SrcXSy9rz0dQfTHStIXYu",
      },
    });
  
    let apiresponse = await response.json();
    let results = apiresponse.result;
  
    log("RESULTS", results);
    let nftdata = results.map((o) => {
      let metadata = JSON.parse(o.metadata);
      log(metadata);
      if (metadata) {
        return {
          address: metadata,
          token: o.token_id,
          image: JSON.parse(o.metadata).image,
          tokenadd: o.token_address,
        };
      }
    });
  
    log("mapped data (Id and image Metadata", nftdata);
    if (nftdata && nftdata.length > 0) return nftdata;
    return DEFAULT_NFTS;
  };
  
  export { NFTPacket, NFTWalletPacket, loadNFTfromWallet };