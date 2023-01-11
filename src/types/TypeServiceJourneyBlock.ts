import * as Contentful from "contentful";

export interface TypeServiceJourneyBlockFields {
  title: Contentful.EntryFields.Symbol;
  icon: Contentful.EntryFields.Symbol;
  content: Contentful.EntryFields.Text;
}

export type TypeServiceJourneyBlock = Contentful.Entry<TypeServiceJourneyBlockFields>;