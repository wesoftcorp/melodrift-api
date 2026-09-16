import { z } from 'zod'

export const SongLyricsAPIResponseModel = z.object({
  lyrics: z.string().optional(),
  script_tracking_url: z.string().optional(),
  lyrics_copyright: z.string().optional(),
  snippet: z.string().optional(),
  status: z.string().optional()
})

export const SongLyricsModel = z.object({
  lyrics: z.string(),
  snippet: z.string().optional(),
  copyright: z.string().optional()
})
