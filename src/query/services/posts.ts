import { ApiEndpoints } from '../constants/api.ts';
import { ApiGroupNames } from '../constants/api-group-names.ts';
import { EndpointNames } from '../constants/endpoint-names.ts';
import { Tags } from '../constants/tags.ts';
import { apiSlice } from './../create-api.ts';

export const postsApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.POSTS],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getPosts: builder.query<void, void>({
                query: () => ({
                    url: ApiEndpoints.POSTS,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.POSTS,
                    name: EndpointNames.GET_POSTS,
                }),
                providesTags: [Tags.POSTS],
            }),
        }),
    });

export const { useGetPostsQuery } = postsApiSlice;
