import { useQuery } from 'vue-query';
import { client } from '../services/contentful';
import { TypeServiceJourneyBlockFields } from '../types/TypeServiceJourneyBlock';

export function useServiceBlocksQuery() {
  return useQuery(['serviceJourneyData'], () =>
    client
      .getEntries<TypeServiceJourneyBlockFields>({
        content_type: 'serviceJourneyBlock',
      })
      .then((entries) => entries)
  );
}
