import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { SongLyricsAPIResponseModel, SongLyricsModel } from '#modules/songs/models/song-lyrics.model'
import type { z } from 'zod'

export interface GetSongLyricsArgs {
  songId: string
}

export class GetSongLyricsUseCase implements IUseCase<GetSongLyricsArgs, z.infer<typeof SongLyricsModel>> {
  async execute({ songId }: GetSongLyricsArgs) {
    const { data } = await useFetch<z.infer<typeof SongLyricsAPIResponseModel>>({
      endpoint: Endpoints.songs.lyrics,
      params: {
        lyrics_id: songId
      }
    })

    if (!data.lyrics || data.status === 'failure') {
      throw new HTTPException(404, { message: 'lyrics not found' })
    }

    return {
      lyrics: data.lyrics,
      snippet: data.snippet,
      copyright: data.lyrics_copyright
    }
  }
}
