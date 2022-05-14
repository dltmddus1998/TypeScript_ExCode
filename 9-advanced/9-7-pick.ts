{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Pick<Video, 'id' | 'title'>;
    // 공식문서
    // type Pick<T, K extends keyof T> = {
    //     [P in K]: T[P];
    // };

    function getVideo2(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }

    function getVideoMetadata2(id: string): VideoMetadata{
        return {
            id,
            title: 'title',
        };
    }
}