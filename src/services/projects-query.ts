import { useQuery } from 'vue-query';
import { client } from '../services/contentful';
import { TypeProjectFields } from '../types/TypeProjectFields';

export function useProjectsQuery() {
  return useQuery(['projectData'], () =>
    client
      .getEntries<TypeProjectFields>({
        content_type: 'project',
      })
      .then((entries) => entries)
  );
}

export function useFeaturedProjectQuery() {
  return useQuery(['featuredProjectData'], () =>
    client
      .getEntries<TypeProjectFields>({
        content_type: 'project',
        'fields.isFeatured': true
      })
      .then((entries) => entries.items[0])
  );
}
