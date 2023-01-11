import * as Contentful from "contentful";

export type Ecosystems = ("Ethereum" | "Binance Smart Chain" | "Polygon" | "Fantom" | "Avalanche" | "Cronos")[];


export interface TypeProjectFields {
    name: Contentful.EntryFields.Symbol;
    isFeatured?: Contentful.EntryFields.Boolean;
    jobStart: Contentful.EntryFields.Date;
    services: ("Consulting" | "Audit" | "Token Smart Contract" | "Staking Pools" | "Yield Farming" | "Network Bridging" | "KYC" | "Custom Smart Contract" | "dAPP Development" | "Treasury" | "Golem Bot" | "AMA")[];
    logo: Contentful.Asset;
    website?: Contentful.EntryFields.Symbol;
    ecosystem: Ecosystems; 
    category: ("Gaming" | "DeFi" | "Charity" | "NFT" | "Utility")[];
    projectStatus: ("Discovery" | "Development" | "Active" | "Inactive")[];
    auditPdf?: Contentful.Asset[];
    jobStatus?: ("Ongoing" | "Complete")[];
    doxxed: Contentful.EntryFields.Boolean;
    kyc: Contentful.EntryFields.Boolean;
    gitHubRepo?: Contentful.EntryFields.Symbol;
    projectTelegram?: Contentful.EntryFields.Symbol;
    projectTwitter?: Contentful.EntryFields.Symbol;
    contractAddress?: Contentful.EntryFields.Symbol;
    description?: Contentful.EntryFields.Text;
    featuredImage?: Contentful.Asset;
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;